# Domain Registration Plan: `ghostwheel.sh`

This document records the planned domain registration for Ghostwheel once a decent v1.0 of the product is produced.

## Registrar
**Namecheap** (as identified by the "Beast Mode" and cart interface).

## Target Domain
- **Domain:** `ghostwheel.sh`
- **Pricing:** $34.98/yr (Retail $62.98/yr)

*Note: The `.sh` extension is highly relevant for developer, CLI, and hacker tools, making it a perfect fit for a local AI client.*

## Checkout Add-ons (Namecheap)

Based on the frequently bought together options presented at checkout, here is a breakdown of what you should get versus what you can skip:

### Recommended
- **Business Email (Free Trial):** 
  - **Verdict:** **GET THIS**. Setting up a professional email like `contact@ghostwheel.sh` or `hello@ghostwheel.sh` is essential for support and waitlist communication. Take the free trial, but you will eventually want a custom email inbox.

### Skip / Handle Elsewhere
- **Web Hosting (Free Trial) & WordPress Hosting (Free Trial):** 
  - **Verdict:** **SKIP**. We are building a modern React + Vite application (SPA). You do not need traditional cPanel or WordPress hosting. You can host this static site for completely free on modern platforms like **Vercel**, **Netlify**, or **GitHub Pages**.
- **SSL ($5.99/yr):**
  - **Verdict:** **SKIP**. If you host the site on Vercel, Netlify, or GitHub Pages, they provide automatic, auto-renewing SSL certificates for free. (Even on a VPS, you can use Let's Encrypt for free).
- **Premium DNS ($4.88):**
  - **Verdict:** **SKIP FOR NOW**. Standard DNS is fine to start. If you need enterprise DNS speeds and DDoS protection, you can hook the domain up to **Cloudflare** for free.
- **Boost Your Social Media (Free Trial):**
  - **Verdict:** **SKIP**. Unnecessary fluff.
- **Secure Your Browsing with VPN (Free Trial):**
  - **Verdict:** **SKIP**. Unrelated to hosting your product.
- **Rank Higher in Search (Free Trial):**
  - **Verdict:** **SKIP**. Automated SEO tools are generally low-value. You are better off writing good semantic HTML and organic content.

## Next Steps upon v1.0
1. Purchase `ghostwheel.sh`.
2. Grab the Business Email trial for a professional inbox.
3. Point the domain's nameservers to your chosen hosting provider (e.g., Vercel, Netlify, or GitHub Pages).
4. Update the website codebase to replace all mock emails (`you@yourdomain.com`) and verification links with the official `ghostwheel.sh` URL.
