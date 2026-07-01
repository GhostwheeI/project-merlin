import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import sqlite3 from 'sqlite3';
import { open } from 'sqlite';
import nodemailer from 'nodemailer';
import { ImapFlow } from 'imapflow';
import { simpleParser } from 'mailparser';
import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

// Load environment variables
dotenv.config();

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();
const port = process.env.PORT || 3000;

// Enable CORS for the frontend origins
app.use(cors({
  origin: ['https://merlin-labs.io', 'http://localhost:5173', 'http://localhost:3000', 'http://127.0.0.1:5173'],
  credentials: true
}));
app.use(express.json());

let db;

// Initialize Database
async function initDb() {
  const dbFile = path.resolve(__dirname, process.env.DB_FILE || 'merlin-web.db');
  console.log(`[DB] Initializing SQLite database at: ${dbFile}`);
  
  db = await open({
    filename: dbFile,
    driver: sqlite3.Database
  });

  // Create waitlist table
  await db.exec(`
    CREATE TABLE IF NOT EXISTS waitlist (
      email TEXT PRIMARY KEY,
      token TEXT NOT NULL,
      verified INTEGER DEFAULT 0,
      password TEXT,
      created_at DATETIME DEFAULT CURRENT_TIMESTAMP
    )
  `);

  // Create support_tickets table
  await db.exec(`
    CREATE TABLE IF NOT EXISTS support_tickets (
      id TEXT PRIMARY KEY,
      name TEXT NOT NULL,
      email TEXT NOT NULL,
      license_key TEXT,
      category TEXT NOT NULL,
      os_version TEXT,
      gpu_backend TEXT,
      system_memory TEXT,
      message TEXT NOT NULL,
      logs TEXT,
      status TEXT DEFAULT 'open',
      created_at DATETIME DEFAULT CURRENT_TIMESTAMP
    )
  `);

  // Create support_ticket_replies table
  await db.exec(`
    CREATE TABLE IF NOT EXISTS support_ticket_replies (
      id INTEGER PRIMARY KEY AUTOINCREMENT,
      ticket_id TEXT NOT NULL,
      sender TEXT NOT NULL,
      subject TEXT,
      body TEXT,
      received_at DATETIME DEFAULT CURRENT_TIMESTAMP,
      FOREIGN KEY(ticket_id) REFERENCES support_tickets(id)
    )
  `);

  console.log('[DB] Database tables initialized successfully.');
}

// SMTP Mailer Setup
const transporter = nodemailer.createTransport({
  host: process.env.SMTP_HOST || 'mail.spacemail.com',
  port: parseInt(process.env.SMTP_PORT || '465'),
  secure: true, // port 465 uses SSL
  auth: {
    user: process.env.SMTP_USER,
    pass: process.env.SMTP_PASS
  }
});

// Helper to send verification email
async function sendVerificationEmail(toEmail, token) {
  const verificationLink = `https://${process.env.DOMAIN || 'merlin-labs.io'}/#verify?email=${encodeURIComponent(toEmail)}&token=${token}`;
  
  // Try to read template from webpage public dir, or fall back to inline HTML
  let htmlContent = '';
  const templatePath = path.resolve(__dirname, '../webpage/public/templates/waitlist-verification-email.html');
  try {
    if (fs.existsSync(templatePath)) {
      const template = fs.readFileSync(templatePath, 'utf8');
      htmlContent = template.replaceAll('{{verification_link}}', verificationLink);
      console.log(`[Email] Loaded waitlist verification email template from: ${templatePath}`);
    }
  } catch (err) {
    console.warn(`[Email] Could not read template: ${err.message}. Using fallback layout.`);
  }

  if (!htmlContent) {
    htmlContent = `
      <div style="font-family: sans-serif; padding: 20px; color: #333;">
        <h2>Verify your waitlist spot</h2>
        <p>Thanks for signing up for the Ghostwheel waitlist. Please click the link below to verify your email address:</p>
        <p><a href="${verificationLink}" style="padding: 10px 20px; background: #a855f7; color: white; text-decoration: none; border-radius: 5px; display: inline-block;">Verify Email Address</a></p>
        <p>Or paste this link into your browser: <br>${verificationLink}</p>
      </div>
    `;
  }

  await transporter.sendMail({
    from: `"Ghostwheel" <${process.env.SMTP_USER}>`,
    to: toEmail,
    subject: 'Verify your Ghostwheel waitlist spot',
    html: htmlContent
  });
  console.log(`[Email] Sent verification email to: ${toEmail}`);
}

// Helper to send support ticket notification
async function sendSupportTicketNotification(ticket) {
  const adminEmail = 'support@merlin-labs.io';
  const mailSubject = `[Ticket #${ticket.id}] ${ticket.category} request`;
  const htmlContent = `
    <div style="font-family: sans-serif; padding: 20px; color: #333;">
      <h3>New Support Ticket: #${ticket.id}</h3>
      <p><strong>Name:</strong> ${ticket.name}</p>
      <p><strong>Email:</strong> ${ticket.email}</p>
      <p><strong>License Key:</strong> ${ticket.license_key || 'N/A'}</p>
      <p><strong>Category:</strong> ${ticket.category}</p>
      <p><strong>OS Version:</strong> ${ticket.os_version || 'N/A'}</p>
      <p><strong>GPU Backend:</strong> ${ticket.gpu_backend || 'N/A'}</p>
      <p><strong>System Memory:</strong> ${ticket.system_memory || 'N/A'}</p>
      <p><strong>Message:</strong></p>
      <blockquote style="background: #f4f4f5; padding: 15px; border-left: 4px solid #a855f7; margin: 15px 0;">
        ${ticket.message.replace(/\n/g, '<br>')}
      </blockquote>
      ${ticket.logs ? `<p><strong>Logs:</strong></p><pre style="background: #f4f4f5; padding: 15px; overflow-x: auto; max-height: 200px;">${ticket.logs}</pre>` : ''}
    </div>
  `;

  await transporter.sendMail({
    from: `"Merlin System" <${process.env.SMTP_USER}>`,
    to: adminEmail,
    replyTo: ticket.email,
    subject: mailSubject,
    html: htmlContent
  });
  console.log(`[Email] Sent support ticket notification to support team.`);
}

// Spaceship DNS Updater
async function updateDnsRecord() {
  const apiKey = process.env.SPACESHIP_API_KEY;
  const apiSecret = process.env.SPACESHIP_API_SECRET;
  const domain = process.env.DOMAIN || 'merlin-labs.io';
  const subdomain = 'api';

  if (!apiKey || !apiSecret) {
    console.warn('[DNS] Spaceship API credentials not set. Skipping DNS update.');
    return;
  }

  try {
    // 1. Get current public IP
    const ipRes = await fetch('https://api.ipify.org?format=json');
    if (!ipRes.ok) throw new Error('Failed to get public IP');
    const { ip: publicIp } = await ipRes.json();
    console.log(`[DNS] Current server public IP discovered: ${publicIp}`);

    // 2. Fetch existing DNS records
    const dnsRes = await fetch(`https://spaceship.dev/api/v1/dns/records/${domain}?take=100&skip=0`, {
      headers: {
        'X-API-Key': apiKey,
        'X-API-Secret': apiSecret,
        'Accept': 'application/json'
      }
    });
    if (!dnsRes.ok) throw new Error(`Failed to fetch DNS records: ${dnsRes.status}`);
    const data = await dnsRes.json();

    // 3. Map current records for PUT compatibility
    const existingItems = data.items.map(item => {
      if (item.type === 'A') {
        return { type: 'A', name: item.name, address: item.address, ttl: item.ttl };
      } else if (item.type === 'CNAME') {
        return { type: 'CNAME', name: item.name, cname: item.cname, ttl: item.ttl };
      } else if (item.type === 'TXT') {
        return { type: 'TXT', name: item.name, value: item.value, ttl: item.ttl };
      } else if (item.type === 'MX') {
        return { type: 'MX', name: item.name, exchange: item.exchange, preference: item.preference, ttl: item.ttl };
      } else if (item.type === 'SRV') {
        return { 
          type: 'SRV', 
          name: item.name, 
          service: item.service, 
          protocol: item.protocol, 
          priority: item.priority, 
          weight: item.weight, 
          port: item.port, 
          target: item.target, 
          ttl: item.ttl 
        };
      }
      return null;
    }).filter(Boolean);

    // 4. Find if record exists and matches public IP
    const apiRecord = existingItems.find(item => item.name === subdomain && item.type === 'A');
    if (apiRecord && apiRecord.address === publicIp) {
      console.log(`[DNS] api.merlin-labs.io A record already points to ${publicIp}. No update needed.`);
      return;
    }

    console.log(`[DNS] Updating DNS: Pointing api.merlin-labs.io to ${publicIp}...`);

    // 5. Update record list (filtering old A record for subdomain if it existed)
    const updatedItems = existingItems.filter(item => !(item.name === subdomain && item.type === 'A'));
    updatedItems.push({
      type: 'A',
      name: subdomain,
      address: publicIp,
      ttl: 300
    });

    // 6. Save back to Spaceship
    const saveRes = await fetch(`https://spaceship.dev/api/v1/dns/records/${domain}`, {
      method: 'PUT',
      headers: {
        'X-API-Key': apiKey,
        'X-API-Secret': apiSecret,
        'Content-Type': 'application/json',
        'Accept': 'application/json'
      },
      body: JSON.stringify({
        force: true,
        items: updatedItems
      })
    });

    if (!saveRes.ok) {
      const errorText = await saveRes.text();
      throw new Error(`Failed to save DNS records: ${saveRes.status} - ${errorText}`);
    }

    console.log(`[DNS] DNS A record for api.merlin-labs.io updated to ${publicIp} successfully.`);
  } catch (err) {
    console.error('[DNS] DNS Update Error:', err.message);
  }
}

// IMAP Email Poller for support ticket replies
async function startImapListener() {
  const imapConfig = {
    host: process.env.IMAP_HOST || 'mail.spacemail.com',
    port: parseInt(process.env.IMAP_PORT || '993'),
    secure: true,
    auth: {
      user: process.env.IMAP_USER,
      pass: process.env.IMAP_PASS
    },
    logger: false
  };

  if (!imapConfig.auth.user || !imapConfig.auth.pass) {
    console.warn('[IMAP] IMAP credentials not set. Skipping IMAP listener.');
    return;
  }

  // Poll function to pull unread emails
  async function pollEmails() {
    console.log('[IMAP] Polling for support replies...');
    let client;
    try {
      client = new ImapFlow(imapConfig);
      await client.connect();

      const messages = [];

      // Open Inbox and fetch unseen messages
      const lock = await client.getMailboxLock('INBOX');
      try {
        for await (const message of client.fetch({ seen: false }, { source: true, uid: true })) {
          messages.push({
            uid: message.uid,
            source: message.source
          });
        }
      } finally {
        lock.release();
      }

      // Process messages outside the fetch loop to avoid deadlock
      if (messages.length > 0) {
        console.log(`[IMAP] Found ${messages.length} unseen emails to process.`);
        const processLock = await client.getMailboxLock('INBOX');
        try {
          for (const msg of messages) {
            const parsed = await simpleParser(msg.source);
            const subject = parsed.subject || '';
            
            // Check if subject matches [Ticket #ID]
            const match = subject.match(/\[Ticket #([a-zA-Z0-9_-]+)\]/);
            if (match) {
              const ticketId = match[1];
              const sender = parsed.from?.text || parsed.from?.value?.[0]?.address || 'unknown';
              const body = parsed.text || parsed.html || '';

              console.log(`[IMAP] Found reply for Ticket #${ticketId} from ${sender}`);

              // Insert reply into DB
              await db.run(
                `INSERT INTO support_ticket_replies (ticket_id, sender, subject, body) 
                 VALUES (?, ?, ?, ?)`,
                [ticketId, sender, subject, body]
              );

              // Update ticket status to open/replied
              await db.run(
                `UPDATE support_tickets SET status = 'replied' WHERE id = ?`,
                [ticketId]
              );

              // Mark message as SEEN
              await client.messageFlagsAdd({ uid: msg.uid }, ['\\Seen']);
              console.log(`[IMAP] Parsed reply and marked message UID ${msg.uid} as SEEN.`);
            }
          }
        } finally {
          processLock.release();
        }
      }

      await client.logout();
    } catch (err) {
      console.error('[IMAP] Error polling emails:', err.message);
      if (client) {
        try { await client.logout(); } catch {}
      }
    }
  }

  // Poll immediately and then every 60 seconds
  pollEmails();
  setInterval(pollEmails, 60 * 1000);
}

// API Routes

// Waitlist Join Route
app.post('/api/waitlist/join', async (req, res) => {
  const { email } = req.body;
  if (!email || typeof email !== 'string') {
    return res.status(400).json({ error: 'Email is required.' });
  }

  const trimmedEmail = email.trim().toLowerCase();
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(trimmedEmail)) {
    return res.status(400).json({ error: 'Invalid email address format.' });
  }

  try {
    // Check if email already exists
    const existing = await db.get('SELECT * FROM waitlist WHERE email = ?', [trimmedEmail]);
    if (existing) {
      if (existing.verified) {
        return res.status(200).json({ status: 'already_registered' });
      } else {
        // Re-send verification email
        await sendVerificationEmail(trimmedEmail, existing.token);
        return res.status(200).json({ status: 'success', message: 'Verification email resent.' });
      }
    }

    // Generate verification token
    const token = crypto.randomUUID ? crypto.randomUUID() : Math.random().toString(36).substring(2, 15) + Math.random().toString(36).substring(2, 15);
    
    // Insert into DB
    await db.run(
      'INSERT INTO waitlist (email, token, verified) VALUES (?, ?, ?)',
      [trimmedEmail, token, 0]
    );

    // Send verification email
    await sendVerificationEmail(trimmedEmail, token);

    res.status(200).json({ status: 'success' });
  } catch (err) {
    console.error('[API] Waitlist Join error:', err);
    res.status(500).json({ error: 'Internal server error.' });
  }
});

// Waitlist Verify Route
app.post('/api/waitlist/verify', async (req, res) => {
  const { email, token, password } = req.body;
  
  if (!email || !token || !password) {
    return res.status(400).json({ error: 'Email, token, and password are required.' });
  }

  const trimmedEmail = email.trim().toLowerCase();

  try {
    const record = await db.get('SELECT * FROM waitlist WHERE email = ? AND token = ?', [trimmedEmail, token]);
    if (!record) {
      return res.status(400).json({ error: 'Invalid email address or verification token.' });
    }

    // Update waitlist record to verified and set password
    await db.run(
      'UPDATE waitlist SET verified = 1, password = ? WHERE email = ?',
      [password, trimmedEmail]
    );

    console.log(`[API] Email verified and account activated for: ${trimmedEmail}`);
    res.status(200).json({ status: 'success' });
  } catch (err) {
    console.error('[API] Waitlist Verify error:', err);
    res.status(500).json({ error: 'Internal server error.' });
  }
});

// Sign In Route
app.post('/api/waitlist/signin', async (req, res) => {
  const { email, password } = req.body;

  if (!email || !password) {
    return res.status(400).json({ error: 'Email and password are required.' });
  }

  const trimmedEmail = email.trim().toLowerCase();

  try {
    const record = await db.get('SELECT * FROM waitlist WHERE email = ? AND password = ?', [trimmedEmail, password]);
    if (!record) {
      return res.status(401).json({ error: 'Invalid email address or password.' });
    }

    if (!record.verified) {
      return res.status(403).json({ error: 'Please verify your email address first.' });
    }

    console.log(`[API] User successfully signed in: ${trimmedEmail}`);
    res.status(200).json({
      status: 'success',
      user: {
        email: record.email,
        verified: record.verified === 1
      }
    });
  } catch (err) {
    console.error('[API] Sign In error:', err);
    res.status(500).json({ error: 'Internal server error.' });
  }
});

// Support Ticket Route
app.post('/api/support', async (req, res) => {
  const { name, email, license_key, category, os_version, gpu_backend, system_memory, message, logs } = req.body;

  if (!name || !email || !category || !message) {
    return res.status(400).json({ error: 'Name, email, category, and message are required.' });
  }

  const ticketId = 'TICKET-' + Math.floor(100000 + Math.random() * 900000);

  const ticket = {
    id: ticketId,
    name: name.trim(),
    email: email.trim().toLowerCase(),
    license_key: license_key ? license_key.trim() : null,
    category: category.trim(),
    os_version: os_version ? os_version.trim() : null,
    gpu_backend: gpu_backend ? gpu_backend.trim() : null,
    system_memory: system_memory ? system_memory.trim() : null,
    message: message.trim(),
    logs: logs ? logs.trim() : null
  };

  try {
    // Save ticket to DB
    await db.run(
      `INSERT INTO support_tickets 
       (id, name, email, license_key, category, os_version, gpu_backend, system_memory, message, logs) 
       VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?)`,
      [ticket.id, ticket.name, ticket.email, ticket.license_key, ticket.category, ticket.os_version, ticket.gpu_backend, ticket.system_memory, ticket.message, ticket.logs]
    );

    // Send support email
    await sendSupportTicketNotification(ticket);

    console.log(`[API] New support ticket created: ${ticket.id}`);
    res.status(200).json({ status: 'success', ticket_id: ticket.id });
  } catch (err) {
    console.error('[API] Support Ticket error:', err);
    res.status(500).json({ error: 'Internal server error.' });
  }
});

// Start Server
async function start() {
  await initDb();
  
  app.listen(port, () => {
    console.log(`[Server] Backend service listening at http://localhost:${port}`);
  });

  // Run DNS update and start IMAP polling
  updateDnsRecord();
  startImapListener();
}

start();
