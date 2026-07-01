import { useState, useEffect } from 'react';
import logoSmall from './assets/ghostwheel-logo.png';
import logoLarge from './assets/ghostwheel-logo-lg.png';
import {
  Github, 
  Download, 
  ArrowRight, 
  Lock, 
  Cpu, 
  Terminal, 
  WifiOff, 
  KeyRound, 
  ShieldCheck, 
  HardDrive, 
  Sparkle,
  Check,
  AlertTriangle
} from 'lucide-react';

const API_BASE = window.location.hostname === 'localhost' || window.location.hostname === '127.0.0.1'
  ? 'http://localhost:3000'
  : 'https://merlin-backend-719155976229.us-central1.run.app';

function Header() {
  const [user, setUser] = useState<string | null>(() => localStorage.getItem('ghostwheel_current_user'));

  useEffect(() => {
    const handleAuth = () => {
      setUser(localStorage.getItem('ghostwheel_current_user'));
    };
    window.addEventListener('auth-change', handleAuth);
    return () => window.removeEventListener('auth-change', handleAuth);
  }, []);


  return (
    <header className="sticky top-0 z-50 border-b border-border/60 bg-background/70 backdrop-blur-xl">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
        <div className="flex items-center gap-2.5">
          <a href="#top" className="flex items-center gap-2.5">
            <img src={logoSmall} alt="Ghostwheel" className="h-8 w-8" />
          </a>
          <div className="flex flex-col">
            <div className="flex items-center gap-2">
              <a href="#top" className="font-display text-lg font-semibold tracking-tight leading-none hover:text-foreground/80 transition-colors">
                Ghostwheel
              </a>
              <a 
                href="#patch-notes" 
                className="rounded-full border border-border bg-surface px-2 py-0.5 text-[10px] font-medium uppercase tracking-wider text-muted-foreground sm:inline-block leading-none hover:border-primary/50 hover:text-foreground transition-colors"
              >
                Pre-alpha
              </a>
            </div>
            <span className="text-[9px] pl-0.5 mt-1 leading-none font-normal tracking-wide" style={{ color: 'rgba(255, 255, 255, 0.33)' }}>Built in Merlin Laboratories</span>
          </div>
        </div>
        <nav className="hidden items-center gap-8 text-sm text-muted-foreground md:flex">
          <a href="#features" className="hover:text-foreground transition-colors">Features</a>
          <a href="#how" className="hover:text-foreground transition-colors">How it works</a>
          <a href="#pricing" className="hover:text-foreground transition-colors">Pricing</a>
          <a href="#faq" className="hover:text-foreground transition-colors">FAQ</a>
          <a href="#support" className="hover:text-foreground transition-colors">Support</a>
        </nav>
        <div className="flex items-center gap-2">
          <a 
            href="https://github.com/GhostwheeI/project-merlin" 
            target="_blank" 
            rel="noreferrer" 
            title="GitHub Repository"
            aria-label="Open the Ghostwheel GitHub repository"
            className="inline-flex h-9 w-9 items-center justify-center rounded-lg border border-border bg-surface text-muted-foreground transition-colors hover:text-foreground"
          >
            <Github className="h-4.5 w-4.5" />
          </a>
          {user ? (
            <a 
              href="#profile" 
              className="hover:text-foreground text-sm text-muted-foreground transition-colors px-3 py-2 font-medium"
            >
              Signed in
            </a>
          ) : (
            <a 
              href="#signin" 
              className="hover:text-foreground text-sm text-muted-foreground transition-colors px-3 py-2"
            >
              Sign in
            </a>
          )}
          <a href="#download" className="inline-flex items-center gap-1.5 rounded-lg bg-spectrum animate-spectrum px-4 py-2 text-sm font-semibold text-primary-foreground">
            Get early access
          </a>
        </div>
      </div>
    </header>
  );
}

function InteractiveDemo() {
  return (
    <div className="relative mx-auto mt-20 max-w-5xl">
      <div className="absolute -inset-4 rounded-3xl bg-spectrum opacity-20 blur-3xl"></div>
      <div className="surface-card relative overflow-hidden">
        {/* Terminal Header */}
        <div className="flex items-center justify-between border-b border-border bg-surface-elevated px-4 py-2.5">
          <div className="flex items-center gap-2">
            <span className="h-2.5 w-2.5 rounded-full bg-spectrum-1"></span>
            <span className="text-xs text-muted-foreground">Ghostwheel</span>
          </div>
          <div className="flex gap-3 text-muted-foreground/60">
            <span className="text-xs">—</span>
            <span className="text-xs">▢</span>
            <span className="text-xs">×</span>
          </div>
        </div>
        {/* App Titlebar */}
        <div className="flex items-center justify-between border-b border-border px-5 py-3">
          <div className="flex items-center gap-3">
            <img src={logoSmall} alt="" className="h-7 w-7" />
            <span className="font-display text-base font-semibold">Ghostwheel</span>
            <span className="ml-3 hidden items-center gap-1.5 text-xs text-muted-foreground sm:inline-flex">
              <span className="h-1.5 w-1.5 rounded-full bg-spectrum-5"></span> Online
            </span>
          </div>
          <div className="hidden items-center gap-4 text-xs text-muted-foreground sm:flex">
            <span>+ New chat</span>
            <span>History</span>
            <span>Settings</span>
          </div>
        </div>
        {/* App Main Area */}
        <div className="flex min-h-[360px] flex-col items-center justify-center px-6 py-14 text-center">
          <div className="relative h-20 w-20">
            <div className="absolute inset-0 animate-pulse-glow rounded-full bg-spectrum blur-2xl"></div>
            <img src={logoSmall} alt="" className="relative h-20 w-20 animate-float" />
          </div>
          <h3 className="mt-6 font-display text-2xl font-semibold sm:text-3xl">What can I do for you?</h3>
          <p className="mt-2 text-sm text-muted-foreground">Merlin engine is connected to your local agent.</p>
          <div className="mt-10 w-full max-w-2xl">
            <div className="surface-card flex items-center gap-3 px-4 py-3.5 text-left">
              <span className="text-sm text-muted-foreground">Message Ghostwheel…</span>
              <span className="ml-auto flex h-8 w-8 items-center justify-center rounded-lg bg-spectrum text-primary-foreground">
                <ArrowRight className="h-4 w-4" />
              </span>
            </div>
            <p className="mt-2 text-[11px] text-muted-foreground">Enter to send · Shift+Enter for a new line</p>
          </div>
        </div>
      </div>
    </div>
  );
}

function Hero() {
  return (
    <section id="top" className="relative overflow-hidden">
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute left-1/2 top-32 h-[480px] w-[480px] -translate-x-1/2 rounded-full bg-spectrum opacity-25 blur-[120px]"></div>
      </div>
      <div className="mx-auto max-w-6xl px-6 pt-20 pb-24 text-center">
        <div className="mx-auto mb-8 inline-flex items-center gap-2 rounded-full border border-border bg-surface/80 px-3 py-1 text-xs text-muted-foreground backdrop-blur">
          <span className="relative flex h-1.5 w-1.5">
            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-spectrum-4 opacity-75"></span>
            <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-spectrum-4"></span>
          </span>
          Building in private · Windows-only · v1 in development
        </div>
        <div className="relative mx-auto mb-10 h-40 w-40">
          <div className="absolute inset-0 animate-pulse-glow rounded-full bg-spectrum blur-3xl"></div>
          <img 
            src={logoLarge} 
            alt="Ghostwheel logo" 
            className="relative h-40 w-40 animate-float drop-shadow-[0_10px_40px_rgba(180,80,255,0.45)]" 
          />
        </div>
        <h1 className="mx-auto max-w-4xl font-display text-5xl font-semibold leading-[1.05] tracking-tight sm:text-6xl md:text-7xl">
          A local AI agent with<br />
          <span className="text-spectrum animate-spectrum">no usage limits.</span>
        </h1>
        <p className="mx-auto mt-6 max-w-2xl text-balance text-lg text-muted-foreground">
          Ghostwheel is a private, on-device AI for Windows. It runs a 9B-parameter coding model right on your machine - enabling unlimited local inference with zero usage caps, no rate limits, and total data privacy.
        </p>
        <div className="mt-10 flex flex-wrap items-center justify-center gap-3">
          <a 
            href="#download" 
            className="group inline-flex items-center gap-2 rounded-xl bg-spectrum animate-spectrum px-6 py-3 text-base font-semibold text-primary-foreground glow-spectrum"
          >
            <Download className="h-4 w-4" />
            Join the waitlist
            <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
          </a>
          <a 
            href="#how" 
            className="inline-flex items-center gap-2 rounded-xl border border-border bg-surface px-6 py-3 text-base font-medium text-foreground hover:bg-secondary"
          >
            See how it works
          </a>
        </div>
        <p className="mt-6 text-xs text-muted-foreground">Windows 10/11 · NVIDIA / Vulkan / CPU · deterministic model download</p>
        
        <InteractiveDemo />
      </div>
    </section>
  );
}

const FEATURES = [
  {
    icon: Lock,
    title: 'Truly local',
    body: 'Inference, memory, tool calls — all on your machine. The model never leaves the disk, and your prompts never leave your network.'
  },
  {
    icon: Cpu,
    title: 'Native llama.cpp',
    body: 'Bundled, pinned llama.cpp sidecar. CUDA on NVIDIA, Vulkan everywhere else, CPU fallback always. Vulkan and CUDA support ensures your context limit is bound only by your local VRAM and hardware capabilities, not a cloud subscription.'
  },
  {
    icon: Terminal,
    title: 'Tools that actually work',
    body: "File, shell, and code tools with a false-success guard: the agent can't claim a task is done without real command output to prove it."
  },
  {
    icon: WifiOff,
    title: 'Offline-first',
    body: 'Use Ghostwheel on a plane, in a SCIF, behind a firewall. 14-day offline grace on your subscription — verified once, then yours.'
  },
  {
    icon: KeyRound,
    title: 'Your keys, your data',
    body: 'Conversations live in a local SQLite database. One-click export to JSON. Uninstall and it\'s gone — no backend, no leftover footprint.'
  },
  {
    icon: ShieldCheck,
    title: 'Built for review',
    body: 'Open architecture, signed updates, documented model provenance, accessibility-checked UI. Designed to pass a security review, not duck one.'
  }
];

function Features() {
  return (
    <section id="features" className="border-t border-border/60 py-24">
      <div className="mx-auto max-w-6xl px-6">
        <div className="mx-auto max-w-2xl text-center">
          <p className="font-mono text-xs uppercase tracking-[0.2em] text-spectrum">// Features</p>
          <h2 className="mt-3 font-display text-4xl font-semibold tracking-tight sm:text-5xl">
            Power without the cloud tax.
          </h2>
          <p className="mt-4 text-muted-foreground">
            Everything a frontier-style agent does — chat, code, run tools, remember — without sending a single token to someone else's server.
          </p>
        </div>
        <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {FEATURES.map((item) => (
            <div 
              key={item.title} 
              className="surface-card group relative overflow-hidden p-6 transition-colors hover:border-primary/40"
            >
              <div className="absolute -right-12 -top-12 h-32 w-32 rounded-full bg-spectrum opacity-0 blur-3xl transition-opacity group-hover:opacity-30"></div>
              <div className="relative">
                <div className="flex h-10 w-10 items-center justify-center rounded-lg border border-border bg-surface-elevated">
                  <item.icon className="h-5 w-5 text-foreground" />
                </div>
                <h3 className="mt-5 font-display text-lg font-semibold">{item.title}</h3>
                <p className="mt-2 text-sm text-muted-foreground">{item.body}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

const STEPS = [
  {
    n: '01',
    title: 'Install on Windows',
    body: 'Download the signed MSI. The installer ensures WebView2 and drops a single ~70 MB shell. No Python, no service to start, no ports leaked to the world.',
    icon: Download
  },
  {
    n: '02',
    title: 'Zero-config model setup',
    body: "Ghostwheel automatically detects your GPU's dedicated VRAM on first boot, downloading the perfect model size and quantization tier for your hardware.",
    icon: HardDrive
  },
  {
    n: '03',
    title: 'Chat, code, and run tools',
    body: 'The Merlin agent spins up llama.cpp locally, streams responses to a native chat UI, and runs file/shell tools with verified output — not vibes.',
    icon: Sparkle
  }
];

const ARCH_ITEMS = [
  'Pinned llama.cpp release (SHA256 verified) — never compiled in CI',
  'CUDA 13.x / Vulkan / CPU sidecars per machine',
  'Local SQLite for memory · OS keyring for the license',
  'Tauri updater with Ed25519-signed releases'
];

function HowItWorks() {
  return (
    <section id="how" className="border-t border-border/60 py-24">
      <div className="mx-auto max-w-6xl px-6">
        <div className="mx-auto max-w-2xl text-center">
          <p className="font-mono text-xs uppercase tracking-[0.2em] text-spectrum">// How it works</p>
          <h2 className="mt-3 font-display text-4xl font-semibold tracking-tight sm:text-5xl">
            Three steps. Zero cloud.
          </h2>
        </div>
        <div className="mt-14 grid gap-6 md:grid-cols-3">
          {STEPS.map((step) => (
            <div key={step.n} className="surface-card relative p-7">
              <div className="flex items-start justify-between">
                <span className="font-mono text-sm text-muted-foreground">{step.n}</span>
                <step.icon className="h-5 w-5 text-spectrum-2" />
              </div>
              <h3 className="mt-6 font-display text-xl font-semibold">{step.title}</h3>
              <p className="mt-2 text-sm text-muted-foreground">{step.body}</p>
            </div>
          ))}
        </div>
        <div className="surface-card mt-10 overflow-hidden">
          <div className="grid gap-0 md:grid-cols-2">
            <div className="border-b border-border p-8 md:border-b-0 md:border-r">
              <p className="font-mono text-xs uppercase tracking-[0.2em] text-spectrum-4">// Architecture</p>
              <h3 className="mt-3 font-display text-2xl font-semibold">
                A thin Rust shell around a native inference engine.
              </h3>
              <p className="mt-3 text-sm text-muted-foreground">
                A small Tauri/Rust orchestration layer manages a pinned <code className="font-mono text-foreground">llama-server</code> sidecar, SQLite persistence, and the OS keyring. Agent logic talks to the model over a local OpenAI-compatible HTTP API — easy to inspect, easy to swap models.
              </p>
              <ul className="mt-5 space-y-2 text-sm text-muted-foreground">
                {ARCH_ITEMS.map((item) => (
                  <li key={item} className="flex items-start gap-2">
                    <Check className="mt-0.5 h-4 w-4 shrink-0 text-spectrum-5" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="bg-surface-elevated/40 p-8 font-mono text-xs">
              <div className="flex items-center gap-2 text-muted-foreground">
                <span className="h-2 w-2 rounded-full bg-spectrum-1"></span>
                <span className="h-2 w-2 rounded-full bg-spectrum-4"></span>
                <span className="h-2 w-2 rounded-full bg-spectrum-5"></span>
                <span className="ml-2">ghostwheel · agent.log</span>
              </div>
              <pre className="mt-4 whitespace-pre-wrap leading-relaxed text-muted-foreground">
{`> ghostwheel boot
[ok]   webview2 runtime: 121.0.x
[ok]   llama-server: b9851 (cuda-12.4-x64)
[ok]   model: Merlin-9B-Coder-Q5_K_M.gguf
       sha256: 7e3c…verified
[ok]   sqlite: %LOCALAPPDATA%\\ProjectMerlin\\merlin.db
[ok]   license: active · grace 14d
[ok]   network egress: 0 bytes
`}
                <span className="text-spectrum-5">$ ready_</span>
              </pre>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

const PRICING = [
  {
    name: '1 day trial',
    price: '$5',
    cadence: '/ 1 day',
    desc: 'The full agent, no credit card. Issued and managed by Lemon Squeezy.',
    cta: 'Start trial',
    highlight: false,
    features: ['Full local inference', 'All built-in tools', 'Local conversation history', 'Community support']
  },
  {
    name: 'Ghostwheel Pro',
    price: '$15',
    cadence: '/ month',
    desc: 'For developers and operators who want a real, supported local AI.',
    cta: 'Get early access',
    highlight: true,
    features: [
      'Everything in Trial',
      'Unlimited local inference (no token caps)',
      'VRAM-bound context size',
      'Signed auto-updates',
      '14-day offline grace',
      'Model manifest swaps',
      'Priority support'
    ]
  },
  {
    name: 'Free Tier',
    price: '$0',
    cadence: '/ 20 prompts',
    desc: 'A lightweight local sandbox to test the agent before getting a license key.',
    cta: 'Planned for later',
    highlight: false,
    planned: true,
    features: [
      '20 local prompts limit',
      'All built-in tools',
      'Local conversation history',
      'No license key required'
    ]
  }
];

function Pricing() {
  return (
    <section id="pricing" className="border-t border-border/60 py-24">
      <div className="mx-auto max-w-6xl px-6">
        <div className="mx-auto max-w-2xl text-center">
          <p className="font-mono text-xs uppercase tracking-[0.2em] text-spectrum">// Pricing</p>
          <h2 className="mt-3 font-display text-4xl font-semibold tracking-tight sm:text-5xl">
            One license. Your machine. Forever local.
          </h2>
          <p className="mt-4 text-muted-foreground">
            Final pricing locks at launch. Early-access users keep their introductory rate for life.
          </p>
        </div>
        <div className="mt-14 grid gap-5 lg:grid-cols-3">
          {PRICING.map((plan) => (
            <div 
              key={plan.name} 
              className={`relative flex flex-col rounded-2xl border p-7 ${
                plan.highlight 
                  ? 'border-primary/50 bg-surface-elevated glow-spectrum' 
                  : 'border-border bg-surface'
              }`}
            >
              {plan.highlight && (
                <span className="absolute -top-3 left-1/2 -translate-x-1/2 rounded-full bg-spectrum px-3 py-1 text-xs font-semibold text-primary-foreground">
                  Most popular
                </span>
              )}
              <h3 className="font-display text-xl font-semibold">{plan.name}</h3>
              <div className="mt-4 flex items-baseline gap-1">
                <span className="font-display text-4xl font-semibold">{plan.price}</span>
                {plan.cadence && <span className="text-sm text-muted-foreground">{plan.cadence}</span>}
              </div>
              <p className="mt-3 text-sm text-muted-foreground">{plan.desc}</p>
              <ul className="mt-6 space-y-2 text-sm">
                {plan.features.map((feature) => (
                  <li key={feature} className="flex items-start gap-2">
                    <Check className="mt-0.5 h-4 w-4 shrink-0 text-spectrum-5" />
                    <span className="text-foreground/90">{feature}</span>
                  </li>
                ))}
              </ul>
              
              {plan.planned ? (
                <div className="mt-auto pt-7 flex flex-col gap-2">
                  <a 
                    href="#backer" 
                    className="inline-flex items-center justify-center gap-2 rounded-xl border border-border/60 bg-surface hover:bg-secondary px-4 py-3.5 text-sm font-semibold text-muted-foreground hover:text-foreground transition-colors"
                  >
                    {plan.cta}
                  </a>
                  <span className="text-[10px] text-center text-muted-foreground/40 font-medium">Coming in a future update</span>
                </div>
              ) : (
                <div className="mt-auto pt-7 flex w-full">
                  <a 
                    href="#backer" 
                    className={`w-full inline-flex items-center justify-center gap-2 rounded-xl px-4 py-3.5 text-sm font-semibold transition-colors ${
                      plan.highlight 
                        ? 'bg-spectrum animate-spectrum text-primary-foreground' 
                        : 'border border-border bg-surface text-foreground hover:bg-secondary'
                    }`}
                  >
                    {plan.cta} <ArrowRight className="h-4 w-4" />
                  </a>
                </div>
              )}
            </div>
          ))}
        </div>
        <p className="mt-8 text-center text-xs text-muted-foreground">
          Billed through Lemon Squeezy (Merchant of Record) · tax & VAT included where applicable.
        </p>
      </div>
    </section>
  );
}

const FAQS = [
  {
    q: 'Does Ghostwheel send my prompts anywhere?',
    a: 'No. Inference runs in a local llama.cpp sidecar on your machine. The only network calls Ghostwheel makes are license activation/validation and signed update checks — both of which are documented and can be disabled in air-gapped deployments.'
  },
  {
    q: 'What models does it ship with?',
    a: 'The default is Qwopus 3.5 9B Coder (Apache-2.0). On first run, Ghostwheel automatically detects your GPU and dedicated VRAM to download the optimal quantization tier for your hardware, with clean-provenance alternatives (Qwen 3.5, IBM Granite, etc.) supported in the manifest.'
  },
  {
    q: 'What are the minimum hardware requirements?',
    a: 'Windows 10/11 x64. You will need at least an Intel Core i5 (or AMD equivalent), 16 GB of DDR3 or faster RAM, and a dedicated GPU with at least 4 GB of VRAM supporting CUDA or Vulkan execution. Read our full requirements and pre-flight check at #requirements.'
  },
  {
    q: 'Mac or Linux version?',
    a: 'No. Ghostwheel is Windows-only — permanently. That\'s a deliberate decision to keep the surface area small and the product reliable.'
  },
  {
    q: 'Can I use it offline?',
    a: 'Yes. Once your license has been validated at least once, Ghostwheel works for 14 days with no internet. Validate again to extend the window.'
  },
  {
    q: 'Are there any daily usage or token limits?',
    a: 'No. Unlike cloud-based assistants that cap your monthly tokens or throttle your speed when servers are busy, Ghostwheel runs completely locally on your hardware. You get unlimited prompts, file edits, and tool runs — restricted only by your system\'s VRAM capacity and speed.'
  }
];

function FAQ() {
  return (
    <section id="faq" className="border-t border-border/60 py-24">
      <div className="mx-auto max-w-4xl px-6">
        <div className="text-center">
          <p className="font-mono text-xs uppercase tracking-[0.2em] text-spectrum">// FAQ</p>
          <h2 className="mt-3 font-display text-4xl font-semibold tracking-tight sm:text-5xl">Honest answers.</h2>
        </div>
        <div className="mt-12 divide-y divide-border overflow-hidden rounded-2xl border border-border bg-surface">
          {FAQS.map((faq) => (
            <details key={faq.q} className="group p-6 open:bg-surface-elevated">
              <summary className="flex cursor-pointer list-none items-center justify-between gap-4">
                <span className="font-display text-base font-medium">{faq.q}</span>
                <span className="text-muted-foreground transition-transform group-open:rotate-45">+</span>
              </summary>
              <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{faq.a}</p>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}

function DownloadSection() {
  const [email, setEmail] = useState('');
  const [status, setStatus] = useState<'idle' | 'submitting' | 'success' | 'already_registered'>('idle');
  const [error, setError] = useState('');

  const handleWaitlistSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setError('');
    
    // Basic verification requirements
    const trimmedEmail = email.trim();
    if (trimmedEmail.length < 5) {
      setError('Email must be at least 5 characters long.');
      return;
    }
    if (!trimmedEmail.includes('@') || !trimmedEmail.includes('.')) {
      setError('Please enter a valid email address (must contain @ and .).');
      return;
    }
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(trimmedEmail)) {
      setError('Please enter a valid email address format.');
      return;
    }

    setStatus('submitting');

    try {
      const response = await fetch(`${API_BASE}/api/waitlist/join`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email: trimmedEmail })
      });
      
      if (!response.ok) {
        const data = await response.json();
        throw new Error(data.error || 'Server error');
      }

      const data = await response.json();
      if (data.status === 'already_registered') {
        setStatus('already_registered');
      } else {
        setStatus('success');
      }
    } catch (err: any) {
      setError(err.message || 'Something went wrong. Please try again.');
      setStatus('idle');
    }
  };

  return (
    <section id="download" className="relative overflow-hidden border-t border-border/60 py-24">
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute left-1/2 top-1/2 h-[500px] w-[500px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-spectrum opacity-20 blur-[140px]"></div>
      </div>
      <div className="mx-auto max-w-3xl px-6 text-center">
        <img src={logoSmall} alt="" className="mx-auto h-16 w-16 animate-float" />
        <h2 className="mt-6 font-display text-4xl font-semibold tracking-tight sm:text-5xl">Be there at first boot.</h2>
        <p className="mt-4 text-muted-foreground max-w-lg mx-auto">
          Ghostwheel is in pre-alpha. Join the waitlist for early builds, release notes, and a locked-in launch price.
        </p>

        <div className="mx-auto mt-8 max-w-md">
          {status === 'success' ? (
            <div className="surface-card p-6 border border-border bg-surface/50 text-center space-y-3">
              <span className="inline-flex h-8 w-8 items-center justify-center rounded-full bg-spectrum-4/20 text-spectrum-4 font-semibold text-sm">✓</span>
              <h3 className="font-display text-lg font-semibold">Verification link sent!</h3>
              <p className="text-sm text-muted-foreground">
                Please check your inbox at <strong className="text-foreground">{email}</strong> and click the link to confirm your spot.
              </p>
              <p className="text-[10px] text-muted-foreground/60 italic">
                (For testing, click the verification link printed in your browser's developer console.)
              </p>
            </div>
          ) : status === 'already_registered' ? (
            <div className="surface-card p-6 border border-border bg-surface/50 text-center space-y-3">
              <span className="inline-flex h-8 w-8 items-center justify-center rounded-full bg-spectrum-4/20 text-spectrum-4 font-semibold text-sm">✓</span>
              <h3 className="font-display text-lg font-semibold">Already Registered</h3>
              <p className="text-sm text-muted-foreground">
                This email is already registered and verified. You can <a href="#signin" className="text-foreground underline">sign in here</a>.
              </p>
            </div>
          ) : (
            <form className="flex flex-col gap-3 sm:flex-row" onSubmit={handleWaitlistSubmit}>
              <label htmlFor="waitlist-email" className="sr-only">Email address for the Ghostwheel waitlist</label>
              <input 
                id="waitlist-email"
                type="text" 
                required 
                disabled={status === 'submitting'}
                value={email}
                onChange={(e) => {
                  setEmail(e.target.value);
                  setError('');
                }}
                placeholder="ghostwheel@merlin-labs.io" 
                className="flex-1 rounded-xl border border-border bg-surface px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground/70 focus:border-primary/50 focus:outline-none focus:ring-2 focus:ring-ring disabled:opacity-60" 
              />
              <button 
                type="submit" 
                disabled={status === 'submitting'}
                className="inline-flex items-center justify-center gap-2 rounded-xl bg-spectrum animate-spectrum px-5 py-3 text-sm font-semibold text-primary-foreground disabled:opacity-60"
              >
                {status === 'submitting' ? 'Sending...' : 'Join waitlist'} <ArrowRight className="h-4 w-4" />
              </button>
            </form>
          )}

          {error && (
            <p className="mt-3 text-xs text-destructive text-left bg-destructive/10 p-3 rounded-lg border border-destructive/20">{error}</p>
          )}
        </div>

        <p className="mt-3 text-xs text-muted-foreground">No spam. One email when we ship. Your email stays private.</p>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="border-t border-border/60 py-10">
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-4 px-6 sm:flex-row">
        <div className="flex items-center gap-2.5 shrink-0">
          <img src={logoSmall} alt="Ghostwheel" className="h-6 w-6" />
          <span className="font-display text-sm font-semibold">Ghostwheel</span>
          <span className="text-xs text-muted-foreground whitespace-nowrap">© {new Date().getFullYear()}</span>
        </div>
        <div className="flex flex-wrap items-center justify-center gap-6 text-xs text-muted-foreground">
          <a href="#features" className="hover:text-foreground">Features</a>
          <a href="#pricing" className="hover:text-foreground">Pricing</a>
          <a href="#faq" className="hover:text-foreground">FAQ</a>
          <a href="#about" className="hover:text-foreground">About</a>
          <a href="#credits" className="hover:text-foreground">Credits</a>
          <a href="#contact" className="hover:text-foreground">Contact</a>
          <a href="#terms" className="hover:text-foreground">Terms of Use</a>
          <a href="#privacy" className="hover:text-foreground">Privacy Policy</a>
          <a href="#docs" className="hover:text-foreground">Docs</a>
          <a href="#accessibility" className="hover:text-foreground">Accessibility</a>
          <a href="#licenses" className="hover:text-foreground">Licenses</a>
          <a href="#security" className="hover:text-foreground">Security</a>
          <a href="#releases" className="hover:text-foreground">Releases</a>
          <a href="#requirements" className="hover:text-foreground">Requirements</a>
          <a href="#cookies" className="hover:text-foreground">Cookies</a>
          <a 
            href="https://github.com/GhostwheeI/project-merlin" 
            target="_blank" 
            rel="noreferrer" 
            className="hover:text-foreground"
          >
            GitHub
          </a>
        </div>
      </div>
    </footer>
  );
}

function PatchNotes() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Header />
      <main className="mx-auto max-w-3xl px-6 py-20">
        <a 
          href="#" 
          className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors mb-12"
        >
          ← Back to home
        </a>
        <div className="space-y-2">
          <p className="font-mono text-xs uppercase tracking-[0.2em] text-spectrum">// RELEASE NOTES</p>
          <h1 className="font-display text-4xl font-semibold tracking-tight sm:text-5xl">
            Pre-alpha Changelog
          </h1>
          <p className="text-muted-foreground">
            Follow the latest updates as we build the premier local-first AI coding agent.
          </p>
        </div>

        <div className="mt-16 space-y-16">
          <div className="border-l border-border pl-6 relative">
            <span className="absolute left-[-5px] top-1.5 h-2 w-2 rounded-full bg-spectrum-4"></span>
            <div className="flex flex-wrap items-baseline justify-between gap-2">
              <h2 className="font-display text-2xl font-semibold">v0.1.0-pre</h2>
              <span className="font-mono text-xs text-muted-foreground">June 30, 2026</span>
            </div>
            <p className="mt-2 text-sm text-spectrum font-medium">Initial Pre-Alpha Baseline</p>
            
            <div className="mt-6 space-y-6 text-sm text-muted-foreground leading-relaxed">
              <div>
                <h3 className="font-display text-base font-semibold text-foreground mb-2">🚀 Core Architecture</h3>
                <ul className="list-disc list-inside space-y-1.5 pl-2">
                  <li>Wrapped the application in a native Windows shell using Tauri v2.</li>
                  <li>Pinned prebuilt llama-server release b9851 with CPU, Vulkan, and CUDA 12.4 backends.</li>
                  <li>Designed local SQLite persistence for conversation memory.</li>
                  <li>Configured Windows Credential Manager (keyring) for secure license storage.</li>
                </ul>
              </div>

              <div>
                <h3 className="font-display text-base font-semibold text-foreground mb-2">⚡ Billing & Licensing</h3>
                <ul className="list-disc list-inside space-y-1.5 pl-2">
                  <li>Integrated Lemon Squeezy as Merchant of Record to handle global VAT and sales tax.</li>
                  <li>Designed a thin, stateless license verification proxy to protect API keys.</li>
                  <li>Implemented a 14-day client-side offline grace period for subscription validation.</li>
                </ul>
              </div>

              <div>
                <h3 className="font-display text-base font-semibold text-foreground mb-2">🎨 Copy & Branding</h3>
                <ul className="list-disc list-inside space-y-1.5 pl-2">
                  <li>Aligned page copy to emphasize unlimited usage over privacy.</li>
                  <li>Refined step 02 (Zero-config model setup) to explain auto-detection of GPU VRAM.</li>
                  <li>Added a subtle "Built on the Merlin Framework" sub-label under the header logo.</li>
                  <li>Set up the public repository link target to point to project-merlin.</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}

function About() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Header />
      <main className="mx-auto max-w-3xl px-6 py-20 text-center">
        <a 
          href="#" 
          className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors mb-12"
        >
          ← Back to home
        </a>
        
        <div className="relative mx-auto h-32 w-32 mb-8">
          <div className="absolute inset-0 animate-pulse-glow rounded-full bg-spectrum blur-2xl opacity-40"></div>
          <img
            src={logoLarge}
            alt="Ghostwheel logo"
            className="relative h-32 w-32 object-contain drop-shadow-[0_10px_30px_rgba(180,80,255,0.2)]"
          />
        </div>

        <p className="font-mono text-xs uppercase tracking-[0.2em] text-spectrum">// THE PROJECT</p>
        <h1 className="mt-3 font-display text-4xl font-semibold tracking-tight sm:text-5xl">
          Ghostwheel
        </h1>
        <p className="text-sm font-medium text-spectrum-4 mt-1">Framework built in Merlin Laboratories</p>

        <p className="mx-auto mt-8 max-w-xl text-balance text-base text-muted-foreground leading-relaxed">
          Ghostwheel is being built to bring local AI agent power directly to Windows hardware —{' '}
          <a
            href="#download"
            className="text-spectrum hover:underline font-medium"
          >
            join the waitlist to follow the release
          </a>.
        </p>
      </main>
      <Footer />
    </div>
  );
}

function Credits() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Header />
      <main className="mx-auto max-w-3xl px-6 py-20">
        <a 
          href="#" 
          className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors mb-12"
        >
          ← Back to home
        </a>
        <div className="space-y-2">
          <p className="font-mono text-xs uppercase tracking-[0.2em] text-spectrum">// ACKNOWLEDGEMENTS</p>
          <h1 className="font-display text-4xl font-semibold tracking-tight sm:text-5xl">
            Credits
          </h1>
          <p className="text-muted-foreground">
            The libraries, engines, and builders behind Ghostwheel and this website.
          </p>
        </div>

        {/* Rydell Profile Card */}
        <div className="mt-12 surface-card p-8 border border-border bg-surface relative overflow-hidden flex flex-col sm:flex-row items-center gap-6">
          <div className="absolute -right-12 -top-12 h-32 w-32 rounded-full bg-spectrum opacity-20 blur-2xl"></div>
          <div className="h-28 w-28 rounded-full border border-border/80 bg-surface overflow-hidden shrink-0 relative">
            <div className="absolute inset-0 animate-pulse-glow rounded-full bg-spectrum blur-lg opacity-30"></div>
            <img 
              src="/me_upscaled.png" 
              alt="Rydell" 
              className="relative h-full w-full object-cover"
            />
          </div>
          <div className="space-y-3 text-center sm:text-left">
            <div>
              <h2 className="font-display text-2xl font-bold tracking-tight">Rydell</h2>
              <p className="font-mono text-xs uppercase tracking-wider text-spectrum">// Founder</p>
            </div>
            <p className="text-sm text-muted-foreground leading-relaxed">
              Building next-generation client-first intelligence at Merlin Laboratories to return compute power and agency to where they belong—on your local machine. Bridging the gap between heavy enterprise hardware and lightweight local sandboxes, one compilation at a time.
            </p>
            <p className="text-xs text-muted-foreground/80 italic">
              Fuel the late-night compilations and coffee runs by <a href="#backer" className="text-foreground underline hover:text-primary transition-colors font-medium">backing the project</a>.
            </p>
          </div>
        </div>

        <div className="mt-16 grid gap-8 sm:grid-cols-2">
          {/* Technologies Used */}
          <div className="surface-card p-8 border border-border bg-surface">
            <h2 className="font-display text-xl font-semibold mb-6 text-spectrum-4 flex items-center gap-2">
              <Cpu className="h-5 w-5" /> Technologies Used
            </h2>
            <ul className="space-y-5 text-sm text-muted-foreground">
              <li>
                <strong className="text-foreground block">Tauri v2</strong>
                Desktop shell integration using lightweight system WebViews and Rust orchestration.
              </li>
              <li>
                <strong className="text-foreground block">llama.cpp</strong>
                Pinned native inference engine running local GGUF models via llama-server loopback.
              </li>
              <li>
                <strong className="text-foreground block">React & TypeScript</strong>
                UI rendering, state management, and fluid animations.
              </li>
              <li>
                <strong className="text-foreground block">SQLite (WAL Mode)</strong>
                Local database for conversation history and persistent memory storage.
              </li>
              <li>
                <strong className="text-foreground block">OS Keyring (Rust Crate)</strong>
                Windows Credential Manager integration for secure local license key storage.
              </li>
              <li>
                <strong className="text-foreground block">Lemon Squeezy</strong>
                Merchant of Record integration for VAT handling and subscription licensing checkout.
              </li>
            </ul>
          </div>

          {/* Website Credits */}
          <div className="surface-card p-8 border border-border bg-surface">
            <h2 className="font-display text-xl font-semibold mb-6 text-spectrum-5 flex items-center gap-2">
              <Sparkle className="h-5 w-5" /> Website Credits
            </h2>
            <ul className="space-y-6 text-sm text-muted-foreground">
              <li>
                <strong className="text-foreground block">Lucide Icons</strong>
                Open-source vector iconography selected for sleek UI alignment.
              </li>
              <li>
                <strong className="text-foreground block">Google Fonts</strong>
                Inter and Outfit typography supporting our fluid, display-oriented interface.
              </li>
            </ul>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}

function Contact() {
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);
    setError('');

    const formData = new FormData(e.currentTarget);
    
    try {
      const payload = {
        name: formData.get('name') as string,
        email: formData.get('email') as string,
        category: 'other',
        message: formData.get('message') as string
      };

      const response = await fetch(`${API_BASE}/api/support`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload)
      });
      
      if (response.ok) {
        setSubmitted(true);
      } else {
        const data = await response.json();
        setError(data.error || 'Something went wrong. Please try again.');
      }
    } catch {
      setError('Network error. Please check your connection and try again.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-background text-foreground">
      <Header />
      <main className="mx-auto max-w-xl px-6 py-20">
        <a 
          href="#" 
          className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors mb-12"
        >
          ← Back to home
        </a>
        <div className="space-y-2 mb-10 text-center">
          <p className="font-mono text-xs uppercase tracking-[0.2em] text-spectrum">// GET IN TOUCH</p>
          <h1 className="font-display text-4xl font-semibold tracking-tight sm:text-5xl">
            Contact
          </h1>
          <p className="text-sm text-muted-foreground mt-2">
            Send a direct message to the Ghostwheel team. Your email address remains fully hidden.
          </p>
        </div>

        <div className="surface-card p-8 border border-border bg-surface relative overflow-hidden">
          {submitted ? (
            <div className="text-center py-10 space-y-4">
              <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-spectrum-5/20 text-spectrum-5">
                <Check className="h-6 w-6" />
              </div>
              <h3 className="font-display text-2xl font-semibold">Message sent!</h3>
              <p className="text-sm text-muted-foreground max-w-sm mx-auto">
                Thank you for reaching out. Ghostwheel support will get back to you shortly.
              </p>
              <button 
                onClick={() => setSubmitted(false)}
                className="mt-6 text-xs text-muted-foreground hover:text-foreground underline transition-colors"
              >
                Send another message
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-5">
              <div>
                <label htmlFor="name" className="block text-xs font-mono uppercase tracking-wider text-muted-foreground mb-2">Name</label>
                <input 
                  type="text" 
                  name="name" 
                  id="name" 
                  required 
                  placeholder="Your name"
                  className="w-full rounded-xl border border-border bg-surface-elevated/50 px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground/50 focus:border-primary/50 focus:outline-none focus:ring-2 focus:ring-ring"
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-xs font-mono uppercase tracking-wider text-muted-foreground mb-2">Email Address</label>
                <input 
                  type="email" 
                  name="email" 
                  id="email" 
                  required 
                  placeholder="ghostwheel@merlin-labs.io"
                  className="w-full rounded-xl border border-border bg-surface-elevated/50 px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground/50 focus:border-primary/50 focus:outline-none focus:ring-2 focus:ring-ring"
                />
              </div>
              <div>
                <label htmlFor="message" className="block text-xs font-mono uppercase tracking-wider text-muted-foreground mb-2">Message</label>
                <textarea 
                  name="message" 
                  id="message" 
                  required 
                  rows={5}
                  placeholder="How can we help?"
                  className="w-full rounded-xl border border-border bg-surface-elevated/50 px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground/50 focus:border-primary/50 focus:outline-none focus:ring-2 focus:ring-ring resize-none"
                />
              </div>

              {error && (
                <p className="text-xs text-destructive bg-destructive/10 p-3 rounded-lg border border-destructive/20">{error}</p>
              )}

              <button 
                type="submit" 
                disabled={loading}
                className="w-full inline-flex items-center justify-center gap-2 rounded-xl bg-spectrum animate-spectrum px-5 py-3.5 text-sm font-semibold text-primary-foreground disabled:opacity-50 transition-opacity"
              >
                {loading ? 'Sending...' : 'Send Message'} <ArrowRight className="h-4 w-4" />
              </button>
            </form>
          )}
        </div>
      </main>
      <Footer />
    </div>
  );
}

function Support() {
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);
    setError('');

    const formData = new FormData(e.currentTarget);
    
    try {
      const payload = {
        name: formData.get('name') as string,
        email: formData.get('email') as string,
        license_key: formData.get('license_key') as string,
        category: formData.get('category') as string,
        os_version: formData.get('os_version') as string,
        gpu_backend: formData.get('gpu_backend') as string,
        system_memory: formData.get('system_ram') as string,
        message: formData.get('description') as string,
        logs: formData.get('logs') as string
      };

      const response = await fetch(`${API_BASE}/api/support`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload)
      });
      
      if (response.ok) {
        setSubmitted(true);
      } else {
        const data = await response.json();
        setError(data.error || 'Something went wrong. Please try again.');
      }
    } catch {
      setError('Network error. Please check your connection and try again.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-background text-foreground">
      <Header />
      <main className="mx-auto max-w-2xl px-6 py-20">
        <a 
          href="#" 
          className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors mb-12"
        >
          ← Back to home
        </a>
        <div className="space-y-2 mb-10 text-center">
          <p className="font-mono text-xs uppercase tracking-[0.2em] text-spectrum">// RESOLVE ISSUES</p>
          <h1 className="font-display text-4xl font-semibold tracking-tight sm:text-5xl">
            Request Support
          </h1>
          <p className="text-sm text-muted-foreground mt-2 max-w-lg mx-auto">
            Get help with installation, model downloads, license activation, or GPU configuration. Pro and Team licenses receive priority queue response.
          </p>
        </div>

        <div className="surface-card p-8 border border-border bg-surface relative overflow-hidden">
          {submitted ? (
            <div className="text-center py-10 space-y-4">
              <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-spectrum-4/20 text-spectrum-4">
                <Check className="h-6 w-6" />
              </div>
              <h3 className="font-display text-2xl font-semibold">Ticket Submitted!</h3>
              <p className="text-sm text-muted-foreground max-w-sm mx-auto">
                Your support request has been recorded. Ghostwheel support will review your system diagnostics and respond via email.
              </p>
              <button 
                onClick={() => setSubmitted(false)}
                className="mt-6 text-xs text-muted-foreground hover:text-foreground underline transition-colors"
              >
                Submit another request
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Contact Info Group */}
              <div className="grid gap-4 sm:grid-cols-2">
                <div>
                  <label htmlFor="support-name" className="block text-xs font-mono uppercase tracking-wider text-muted-foreground mb-2">Name</label>
                  <input 
                    type="text" 
                    name="name" 
                    id="support-name" 
                    required 
                    placeholder="Your name"
                    className="w-full rounded-xl border border-border bg-surface-elevated/50 px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground/50 focus:border-primary/50 focus:outline-none focus:ring-2 focus:ring-ring"
                  />
                </div>
                <div>
                  <label htmlFor="support-email" className="block text-xs font-mono uppercase tracking-wider text-muted-foreground mb-2">Email Address</label>
                  <input 
                    type="email" 
                    name="email" 
                    id="support-email" 
                    required 
                    placeholder="ghostwheel@merlin-labs.io"
                    className="w-full rounded-xl border border-border bg-surface-elevated/50 px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground/50 focus:border-primary/50 focus:outline-none focus:ring-2 focus:ring-ring"
                  />
                </div>
              </div>

              {/* License Info */}
              <div>
                <label htmlFor="support-license" className="block text-xs font-mono uppercase tracking-wider text-muted-foreground mb-2 flex items-center justify-between">
                  <span>License Key</span>
                  <span className="text-[10px] text-muted-foreground/60 lowercase tracking-normal font-sans">Optional · Pro/Team gets priority</span>
                </label>
                <input 
                  type="text" 
                  name="license_key" 
                  id="support-license" 
                  placeholder="xxxx-xxxx-xxxx-xxxx"
                  className="w-full rounded-xl border border-border bg-surface-elevated/50 px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground/50 focus:border-primary/50 focus:outline-none focus:ring-2 focus:ring-ring font-mono"
                />
              </div>

              {/* Category selector */}
              <div>
                <label htmlFor="support-category" className="block text-xs font-mono uppercase tracking-wider text-muted-foreground mb-2">Issue Category</label>
                <select 
                  name="category" 
                  id="support-category"
                  required
                  className="w-full rounded-xl border border-border bg-surface-elevated px-4 py-3 text-sm text-foreground focus:border-primary/50 focus:outline-none focus:ring-2 focus:ring-ring"
                >
                  <option value="">Select a category</option>
                  <option value="model-download">Model download or quantization issue</option>
                  <option value="gpu-setup">GPU setup (CUDA / Vulkan / VRAM)</option>
                  <option value="license-activation">License verification / Offline grace issue</option>
                  <option value="sidecar-crash">App crash / llama-server unresponsive</option>
                  <option value="other">General technical inquiry</option>
                </select>
              </div>

              {/* Hardware / Environment info */}
              <div className="border-t border-border/60 pt-5">
                <h3 className="text-xs font-mono uppercase tracking-wider text-spectrum-4 mb-4">// System Specs</h3>
                <div className="grid gap-4 sm:grid-cols-3">
                  <div>
                    <label htmlFor="support-os" className="block text-[10px] font-mono uppercase tracking-wider text-muted-foreground mb-2">Windows Version</label>
                    <select 
                      name="os_version" 
                      id="support-os"
                      className="w-full rounded-xl border border-border bg-surface-elevated px-3 py-2 text-xs text-foreground focus:border-primary/50 focus:outline-none"
                    >
                      <option value="win11">Windows 11</option>
                      <option value="win10">Windows 10</option>
                      <option value="other">Other / Inside VM</option>
                    </select>
                  </div>
                  <div>
                    <label htmlFor="support-gpu" className="block text-[10px] font-mono uppercase tracking-wider text-muted-foreground mb-2">GPU Backend</label>
                    <select 
                      name="gpu_backend" 
                      id="support-gpu"
                      className="w-full rounded-xl border border-border bg-surface-elevated px-3 py-2 text-xs text-foreground focus:border-primary/50 focus:outline-none"
                    >
                      <option value="cuda">NVIDIA CUDA</option>
                      <option value="vulkan">Vulkan GPU</option>
                      <option value="cpu">CPU Only</option>
                    </select>
                  </div>
                  <div>
                    <label htmlFor="support-ram" className="block text-[10px] font-mono uppercase tracking-wider text-muted-foreground mb-2">System Memory</label>
                    <select 
                      name="system_ram" 
                      id="support-ram"
                      className="w-full rounded-xl border border-border bg-surface-elevated px-3 py-2 text-xs text-foreground focus:border-primary/50 focus:outline-none"
                    >
                      <option value="16gb">16 GB RAM or less</option>
                      <option value="32gb">32 GB RAM</option>
                      <option value="64gb+">64 GB RAM or more</option>
                    </select>
                  </div>
                </div>
              </div>

              {/* Message Details */}
              <div>
                <label htmlFor="support-message" className="block text-xs font-mono uppercase tracking-wider text-muted-foreground mb-2">Issue Description</label>
                <textarea 
                  name="description" 
                  id="support-message" 
                  required 
                  rows={4}
                  placeholder="Describe what went wrong and how to reproduce it..."
                  className="w-full rounded-xl border border-border bg-surface-elevated/50 px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground/50 focus:border-primary/50 focus:outline-none focus:ring-2 focus:ring-ring resize-none"
                />
              </div>

              {/* Logs / Diagnostic info */}
              <div>
                <label htmlFor="support-logs" className="block text-xs font-mono uppercase tracking-wider text-muted-foreground mb-2 flex items-center justify-between">
                  <span>Diagnostic Logs / Error Message</span>
                  <span className="text-[10px] text-muted-foreground/60 lowercase tracking-normal font-sans">Copy from agent.log</span>
                </label>
                <textarea 
                  name="logs" 
                  id="support-logs" 
                  rows={4}
                  placeholder="Paste error codes, trace logs, or terminal output here..."
                  className="w-full rounded-xl border border-border bg-surface-elevated/50 px-4 py-3 text-xs text-foreground placeholder:text-muted-foreground/50 focus:border-primary/50 focus:outline-none focus:ring-2 focus:ring-ring font-mono resize-none"
                />
              </div>

              {error && (
                <p className="text-xs text-destructive bg-destructive/10 p-3 rounded-lg border border-destructive/20">{error}</p>
              )}

              <button 
                type="submit" 
                disabled={loading}
                className="w-full inline-flex items-center justify-center gap-2 rounded-xl bg-spectrum animate-spectrum px-5 py-3.5 text-sm font-semibold text-primary-foreground disabled:opacity-50 transition-opacity"
              >
                {loading ? 'Submitting...' : 'Submit Support Ticket'} <ArrowRight className="h-4 w-4" />
              </button>
            </form>
          )}
        </div>
      </main>
      <Footer />
    </div>
  );
}



function Verify() {
  const [email, setEmail] = useState('');
  const [token, setToken] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [status, setStatus] = useState<'form' | 'submitting' | 'completed'>('form');
  const [error, setError] = useState('');

  useEffect(() => {
    // Parse email and token parameters from hash: #verify?email=ghostwheel%40merlin-labs.io&token=...
    const hash = window.location.hash;
    const emailMatch = hash.match(/[?&]email=([^&]*)/);
    if (emailMatch) {
      setEmail(decodeURIComponent(emailMatch[1]));
    }
    const tokenMatch = hash.match(/[?&]token=([^&]*)/);
    if (tokenMatch) {
      setToken(decodeURIComponent(tokenMatch[1]));
    }
  }, []);

  const handlePasswordSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setError('');

    if (password.length < 8) {
      setError('Password must be at least 8 characters long.');
      return;
    }
    if (password !== confirmPassword) {
      setError('Passwords do not match. Please try again.');
      return;
    }

    setStatus('submitting');

    try {
      const response = await fetch(`${API_BASE}/api/waitlist/verify`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email, token, password })
      });

      if (!response.ok) {
        const data = await response.json();
        throw new Error(data.error || 'Verification failed');
      }

      setStatus('completed');
    } catch (err: any) {
      setError(err.message || 'Something went wrong. Please try again.');
      setStatus('form');
    }
  };

  return (
    <div className="min-h-screen bg-background text-foreground">
      <Header />
      <main className="mx-auto max-w-xl px-6 py-20 text-center">
        <div className="surface-card p-8 border border-border bg-surface relative overflow-hidden text-left">
          <div className="absolute -right-12 -top-12 h-32 w-32 rounded-full bg-spectrum opacity-20 blur-2xl"></div>
          
          {status === 'completed' ? (
            <div className="text-center py-8 space-y-4">
              <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-spectrum-5/20 text-spectrum-5 mb-4">
                <Check className="h-8 w-8 animate-bounce" />
              </div>
              <h1 className="font-display text-3xl font-semibold tracking-tight text-foreground">
                Account Created!
              </h1>
              <p className="text-sm text-muted-foreground leading-relaxed">
                Thank you for verifying your email address{email ? ` (${email})` : ''} and setting up your password. Your pre-alpha waitlist account is now secure.
              </p>
              <p className="text-xs text-muted-foreground/80 leading-relaxed max-w-sm mx-auto">
                We'll notify you as soon as early access builds are ready to run on your local hardware.
              </p>
              <a 
                href="#" 
                className="mt-8 inline-flex items-center justify-center gap-2 rounded-xl bg-spectrum animate-spectrum px-6 py-3 text-sm font-semibold text-primary-foreground"
              >
                ← Back to home
              </a>
            </div>
          ) : (
            <div>
              <div className="text-center mb-8">
                <p className="font-mono text-xs uppercase tracking-[0.2em] text-spectrum">// SECURE ACCOUNT</p>
                <h1 className="mt-3 font-display text-3xl font-semibold tracking-tight">Set your password</h1>
                <p className="text-sm text-muted-foreground mt-2">
                  Complete waitlist account verification for <strong className="text-foreground">{email || 'your email'}</strong>
                </p>
              </div>

              <form onSubmit={handlePasswordSubmit} className="space-y-5">
                <div>
                  <label htmlFor="verify-pass" className="block text-xs font-mono uppercase tracking-wider text-muted-foreground mb-2">Password</label>
                  <input 
                    type="password" 
                    name="password" 
                    id="verify-pass" 
                    required 
                    disabled={status === 'submitting'}
                    value={password}
                    onChange={(e) => {
                      setPassword(e.target.value);
                      setError('');
                    }}
                    placeholder="••••••••"
                    className="w-full rounded-xl border border-border bg-surface-elevated/50 px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground/50 focus:border-primary/50 focus:outline-none focus:ring-2 focus:ring-ring disabled:opacity-60"
                  />
                </div>
                
                <div>
                  <label htmlFor="verify-confirm" className="block text-xs font-mono uppercase tracking-wider text-muted-foreground mb-2">Confirm Password</label>
                  <input 
                    type="password" 
                    name="confirm_password" 
                    id="verify-confirm" 
                    required 
                    disabled={status === 'submitting'}
                    value={confirmPassword}
                    onChange={(e) => {
                      setConfirmPassword(e.target.value);
                      setError('');
                    }}
                    placeholder="••••••••"
                    className="w-full rounded-xl border border-border bg-surface-elevated/50 px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground/50 focus:border-primary/50 focus:outline-none focus:ring-2 focus:ring-ring disabled:opacity-60"
                  />
                </div>

                {error && (
                  <p className="text-xs text-destructive bg-destructive/10 p-3 rounded-lg border border-destructive/20">{error}</p>
                )}

                <button 
                  type="submit" 
                  disabled={status === 'submitting'}
                  className="w-full inline-flex items-center justify-center gap-2 rounded-xl bg-spectrum animate-spectrum px-5 py-3.5 text-sm font-semibold text-primary-foreground disabled:opacity-60"
                >
                  {status === 'submitting' ? 'Verifying...' : 'Verify & Set Password'} <ArrowRight className="h-4 w-4" />
                </button>
              </form>
            </div>
          )}
        </div>
      </main>
      <Footer />
    </div>
  );
}

function App() {
  const [view, setView] = useState('home');

  useEffect(() => {
    const handleHash = () => {
      const currentHash = window.location.hash;
      const baseHash = currentHash.split('?')[0];

      const recognizedHashes = [
        '', '#top', '#features', '#how', '#pricing', '#faq', '#download',
        '#patch-notes', '#about', '#credits', '#contact', '#support',
        '#signin', '#signup', '#profile', '#terms', '#privacy', '#docs', '#backer',
        '#accessibility', '#licenses', '#security', '#releases', '#cookies',
        '#requirements', '#error', '#forgot-password', '#reset-password'
      ];

      if (baseHash.startsWith('#verify')) {
        setView('verify');
        window.scrollTo(0, 0);
      } else if (recognizedHashes.includes(baseHash)) {
        if (baseHash === '#patch-notes') {
          setView('patch-notes');
          window.scrollTo(0, 0);
        } else if (baseHash === '#about') {
          setView('about');
          window.scrollTo(0, 0);
        } else if (baseHash === '#credits') {
          setView('credits');
          window.scrollTo(0, 0);
        } else if (baseHash === '#contact') {
          setView('contact');
          window.scrollTo(0, 0);
        } else if (baseHash === '#support') {
          setView('support');
          window.scrollTo(0, 0);
        } else if (baseHash === '#signin') {
          setView('signin');
          window.scrollTo(0, 0);
        } else if (baseHash === '#signup') {
          setView('signup');
          window.scrollTo(0, 0);
        } else if (baseHash === '#forgot-password') {
          setView('forgot-password');
          window.scrollTo(0, 0);
        } else if (baseHash === '#reset-password') {
          setView('reset-password');
          window.scrollTo(0, 0);
        } else if (baseHash === '#profile') {
          setView('profile');
          window.scrollTo(0, 0);
        } else if (baseHash === '#terms') {
          setView('terms');
          window.scrollTo(0, 0);
        } else if (baseHash === '#privacy') {
          setView('privacy');
          window.scrollTo(0, 0);
        } else if (baseHash === '#docs') {
          setView('docs');
          window.scrollTo(0, 0);
        } else if (baseHash === '#backer') {
          setView('backer');
          window.scrollTo(0, 0);
        } else if (baseHash === '#accessibility') {
          setView('accessibility');
          window.scrollTo(0, 0);
        } else if (baseHash === '#licenses') {
          setView('licenses');
          window.scrollTo(0, 0);
        } else if (baseHash === '#security') {
          setView('security');
          window.scrollTo(0, 0);
        } else if (baseHash === '#releases') {
          setView('releases');
          window.scrollTo(0, 0);
        } else if (baseHash === '#requirements') {
          setView('requirements');
          window.scrollTo(0, 0);
        } else if (baseHash === '#cookies') {
          setView('cookies');
          window.scrollTo(0, 0);
        } else if (baseHash === '#error') {
          setView('error');
          window.scrollTo(0, 0);
        } else {
          setView('home');
          if (currentHash) {
            setTimeout(() => {
              const el = document.getElementById(currentHash.slice(1));
              if (el) el.scrollIntoView({ behavior: 'smooth' });
            }, 50);
          }
        }
      } else {
        // Redirection to 404 error page for unrecognized hash routes
        window.location.hash = '#error?code=404';
      }
    };

    window.addEventListener('hashchange', handleHash);
    handleHash();

    return () => window.removeEventListener('hashchange', handleHash);
  }, []);

  if (view === 'patch-notes') {
    return <PatchNotes />;
  }

  if (view === 'about') {
    return <About />;
  }

  if (view === 'credits') {
    return <Credits />;
  }

  if (view === 'contact') {
    return <Contact />;
  }

  if (view === 'support') {
    return <Support />;
  }

  if (view === 'signin') {
    return <SignIn />;
  }

  if (view === 'signup') {
    return <SignUp />;
  }

  if (view === 'forgot-password') {
    return <ForgotPassword />;
  }

  if (view === 'reset-password') {
    return <ResetPassword />;
  }

  if (view === 'profile') {
    return <Profile />;
  }

  if (view === 'terms') {
    return <Terms />;
  }

  if (view === 'privacy') {
    return <Privacy />;
  }

  if (view === 'docs') {
    return <Docs />;
  }

  if (view === 'backer') {
    return <Backer />;
  }

  if (view === 'accessibility') {
    return <Accessibility />;
  }

  if (view === 'licenses') {
    return <Licenses />;
  }

  if (view === 'security') {
    return <Security />;
  }

  if (view === 'releases') {
    return <Releases />;
  }

  if (view === 'requirements') {
    return <Requirements />;
  }

  if (view === 'cookies') {
    return <Cookies />;
  }

  if (view === 'error') {
    return <ErrorPage />;
  }

  if (view === 'verify') {
    return <Verify />;
  }

  return (
    <div className="min-h-screen bg-background text-foreground">
      <Header />
      <main>
        <Hero />
        <Features />
        <HowItWorks />
        <Pricing />
        <FAQ />
        <DownloadSection />
      </main>
      <Footer />
    </div>
  );
}

function SignIn() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [status, setStatus] = useState<'form' | 'submitting' | 'completed'>('form');
  const [error, setError] = useState('');

  const handleSignInSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setError('');

    const trimmedEmail = email.trim();
    if (!trimmedEmail || !password) {
      setError('Please fill in all fields.');
      return;
    }

    setStatus('submitting');

    try {
      const response = await fetch(`${API_BASE}/api/waitlist/signin`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email: trimmedEmail, password })
      });

      const data = await response.json();
      if (!response.ok) {
        throw new Error(data.error || 'Sign in failed');
      }

      // Save user session and dispatch state update event
      localStorage.setItem('ghostwheel_current_user', trimmedEmail);
      if (data.user && data.user.sessionToken) {
        localStorage.setItem('ghostwheel_admin_token', data.user.sessionToken);
      }
      window.dispatchEvent(new Event('auth-change'));

      setStatus('completed');
    } catch (err: any) {
      setError(err.message || 'Something went wrong. Please try again.');
      setStatus('form');
    }
  };

  return (
    <div className="min-h-screen bg-background text-foreground">
      <Header />
      <main className="mx-auto max-w-xl px-6 py-20 text-center">
        <div className="surface-card p-8 border border-border bg-surface relative overflow-hidden text-left">
          <div className="absolute -right-12 -top-12 h-32 w-32 rounded-full bg-spectrum opacity-20 blur-2xl"></div>
          
          {status === 'completed' ? (
            <div className="text-center py-8 space-y-4">
              <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-spectrum-5/20 text-spectrum-5 mb-4">
                <Check className="h-8 w-8" />
              </div>
              <h1 className="font-display text-3xl font-semibold tracking-tight text-foreground">
                Welcome back!
              </h1>
              <p className="text-sm text-muted-foreground leading-relaxed">
                You have successfully signed in as <strong className="text-foreground">{email}</strong>.
              </p>
              <p className="text-xs text-muted-foreground/80 leading-relaxed max-w-sm mx-auto">
                Early access builds are not yet released. We will notify you by email as soon as the first download is ready.
              </p>
              <a 
                href="#" 
                className="mt-8 inline-flex items-center justify-center gap-2 rounded-xl bg-spectrum animate-spectrum px-6 py-3 text-sm font-semibold text-primary-foreground"
              >
                ← Back to home
              </a>
            </div>
          ) : (
            <div>
              <div className="text-center mb-8">
                <p className="font-mono text-xs uppercase tracking-[0.2em] text-spectrum">// ACCOUNT ACCESS</p>
                <h1 className="mt-3 font-display text-3xl font-semibold tracking-tight">Sign in to Ghostwheel</h1>
                <p className="text-sm text-muted-foreground mt-2">
                  Access your early waitlist account status
                </p>
              </div>

              <form onSubmit={handleSignInSubmit} className="space-y-5">
                <div>
                  <label htmlFor="signin-email" className="block text-xs font-mono uppercase tracking-wider text-muted-foreground mb-2">Email Address</label>
                  <input 
                    type="email" 
                    name="email" 
                    id="signin-email" 
                    required 
                    disabled={status === 'submitting'}
                    value={email}
                    onChange={(e) => {
                      setEmail(e.target.value);
                      setError('');
                    }}
                    placeholder="ghostwheel@merlin-labs.io"
                    className="w-full rounded-xl border border-border bg-surface-elevated/50 px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground/50 focus:border-primary/50 focus:outline-none focus:ring-2 focus:ring-ring disabled:opacity-60"
                  />
                </div>
                
                <div>
                  <div className="flex items-center justify-between mb-2">
                    <label htmlFor="signin-pass" className="block text-xs font-mono uppercase tracking-wider text-muted-foreground">Password</label>
                    <a href="#forgot-password" className="text-xs font-mono uppercase tracking-wider text-muted-foreground/80 hover:text-foreground transition-colors underline underline-offset-2">Forgot?</a>
                  </div>
                  <input 
                    type="password" 
                    name="password" 
                    id="signin-pass" 
                    required 
                    disabled={status === 'submitting'}
                    value={password}
                    onChange={(e) => {
                      setPassword(e.target.value);
                      setError('');
                    }}
                    placeholder="••••••••"
                    className="w-full rounded-xl border border-border bg-surface-elevated/50 px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground/50 focus:border-primary/50 focus:outline-none focus:ring-2 focus:ring-ring disabled:opacity-60"
                  />
                </div>

                {error && (
                  <p className="text-xs text-destructive bg-destructive/10 p-3 rounded-lg border border-destructive/20">{error}</p>
                )}

                <button 
                  type="submit" 
                  disabled={status === 'submitting'}
                  className="w-full inline-flex items-center justify-center gap-2 rounded-xl bg-spectrum animate-spectrum px-5 py-3.5 text-sm font-semibold text-primary-foreground disabled:opacity-60"
                >
                  {status === 'submitting' ? 'Signing in...' : 'Sign In'} <ArrowRight className="h-4 w-4" />
                </button>
              </form>
              <p className="mt-6 text-center text-sm text-muted-foreground">
                Don't have an account? <a href="#signup" className="text-foreground underline underline-offset-4 hover:text-primary transition-colors">Sign up here</a>.
              </p>
            </div>
          )}
        </div>
      </main>
      <Footer />
    </div>
  );
}

function SignUp() {
  const [email, setEmail] = useState('');
  const [status, setStatus] = useState<'form' | 'submitting' | 'success' | 'already_registered'>('form');
  const [error, setError] = useState('');

  const handleSignUpSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setError('');
    
    const trimmedEmail = email.trim();
    if (trimmedEmail.length < 5) {
      setError('Email must be at least 5 characters long.');
      return;
    }
    if (!trimmedEmail.includes('@') || !trimmedEmail.includes('.')) {
      setError('Please enter a valid email address (must contain @ and .).');
      return;
    }
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(trimmedEmail)) {
      setError('Please enter a valid email address format.');
      return;
    }

    try {
      const response = await fetch(`${API_BASE}/api/waitlist/join`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email: trimmedEmail })
      });

      if (!response.ok) {
        const data = await response.json();
        throw new Error(data.error || 'Server error');
      }

      const data = await response.json();
      if (data.status === 'already_registered') {
        setStatus('already_registered');
      } else {
        setStatus('success');
      }
    } catch (err: any) {
      setError(err.message || 'Something went wrong. Please try again.');
      setStatus('form');
    }
  };

  return (
    <div className="min-h-screen bg-background text-foreground">
      <Header />
      <main className="mx-auto max-w-xl px-6 py-20 text-center">
        <div className="surface-card p-8 border border-border bg-surface relative overflow-hidden text-left">
          <div className="absolute -right-12 -top-12 h-32 w-32 rounded-full bg-spectrum opacity-20 blur-2xl"></div>
          
          {status === 'success' ? (
            <div className="text-center py-8 space-y-4">
              <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-spectrum-4/20 text-spectrum-4 mb-4">
                <Check className="h-8 w-8" />
              </div>
              <h1 className="font-display text-3xl font-semibold tracking-tight text-foreground">
                Verification link sent!
              </h1>
              <p className="text-sm text-muted-foreground leading-relaxed">
                Please check your inbox at <strong className="text-foreground">{email}</strong> and click the link to verify your email and set a password.
              </p>
              <p className="text-[10px] text-muted-foreground/60 italic max-w-sm mx-auto mt-4">
                (For testing, click the verification link printed in your browser's developer console.)
              </p>
            </div>
          ) : status === 'already_registered' ? (
            <div className="text-center py-8 space-y-4">
              <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-spectrum-4/20 text-spectrum-4 mb-4">
                <Check className="h-8 w-8" />
              </div>
              <h1 className="font-display text-3xl font-semibold tracking-tight text-foreground">
                Already Registered
              </h1>
              <p className="text-sm text-muted-foreground leading-relaxed">
                This email is already registered and verified.
              </p>
              <p className="mt-6 text-sm text-muted-foreground">
                <a href="#signin" className="inline-flex items-center justify-center gap-2 rounded-xl bg-spectrum animate-spectrum px-5 py-3 text-sm font-semibold text-primary-foreground">
                  Sign In <ArrowRight className="h-4 w-4" />
                </a>
              </p>
            </div>
          ) : (
            <div>
              <div className="text-center mb-8">
                <p className="font-mono text-xs uppercase tracking-[0.2em] text-spectrum">// JOIN THE WAITLIST</p>
                <h1 className="mt-3 font-display text-3xl font-semibold tracking-tight">Create an Account</h1>
                <p className="text-sm text-muted-foreground mt-2">
                  Enter your email to join the Ghostwheel waitlist.
                </p>
              </div>

              <form onSubmit={handleSignUpSubmit} className="space-y-5">
                <div>
                  <label htmlFor="signup-email" className="block text-xs font-mono uppercase tracking-wider text-muted-foreground mb-2">Email Address</label>
                  <input 
                    type="email" 
                    name="email" 
                    id="signup-email" 
                    required 
                    disabled={status === 'submitting'}
                    value={email}
                    onChange={(e) => {
                      setEmail(e.target.value);
                      setError('');
                    }}
                    placeholder="ghostwheel@merlin-labs.io"
                    className="w-full rounded-xl border border-border bg-surface-elevated/50 px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground/50 focus:border-primary/50 focus:outline-none focus:ring-2 focus:ring-ring disabled:opacity-60"
                  />
                </div>

                {error && (
                  <p className="text-xs text-destructive bg-destructive/10 p-3 rounded-lg border border-destructive/20">{error}</p>
                )}

                <button 
                  type="submit" 
                  disabled={status === 'submitting'}
                  className="w-full inline-flex items-center justify-center gap-2 rounded-xl bg-spectrum animate-spectrum px-5 py-3.5 text-sm font-semibold text-primary-foreground disabled:opacity-60"
                >
                  {status === 'submitting' ? 'Sending...' : 'Sign Up'} <ArrowRight className="h-4 w-4" />
                </button>
              </form>
              <p className="mt-6 text-center text-sm text-muted-foreground">
                Already have an account? <a href="#signin" className="text-foreground underline underline-offset-4 hover:text-primary transition-colors">Sign in here</a>.
              </p>
            </div>
          )}
        </div>
      </main>
      <Footer />
    </div>
  );
}

function ForgotPassword() {
  const [email, setEmail] = useState('');
  const [status, setStatus] = useState<'form' | 'submitting' | 'completed'>('form');
  const [error, setError] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError('');
    const trimmedEmail = email.trim();
    if (!trimmedEmail) return;

    setStatus('submitting');
    try {
      const response = await fetch(`${API_BASE}/api/waitlist/forgot-password`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email: trimmedEmail })
      });
      const data = await response.json();
      if (!response.ok) {
        throw new Error(data.error || 'Request failed');
      }
      setMessage(data.message || 'If the email exists, a reset link has been sent.');
      setStatus('completed');
    } catch (err: any) {
      setError(err.message || 'Failed to submit request. Please try again.');
      setStatus('form');
    }
  };

  return (
    <div className="min-h-screen bg-background text-foreground">
      <Header />
      <main className="mx-auto max-w-xl px-6 py-20">
        <div className="surface-card p-8 border border-border bg-surface relative overflow-hidden">
          <div className="absolute -right-12 -top-12 h-32 w-32 rounded-full bg-spectrum opacity-20 blur-2xl"></div>
          
          {status === 'completed' ? (
            <div className="text-center py-8 space-y-4">
              <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-spectrum-5/20 text-spectrum-5 mb-4">
                <Check className="h-8 w-8" />
              </div>
              <h1 className="font-display text-2xl font-semibold tracking-tight">Request Received</h1>
              <p className="text-sm text-muted-foreground leading-relaxed">
                {message}
              </p>
              <a 
                href="#signin" 
                className="mt-8 inline-flex items-center justify-center gap-2 rounded-xl border border-border bg-surface px-6 py-3 text-sm font-semibold text-foreground hover:bg-secondary transition-colors"
              >
                Back to Sign In
              </a>
            </div>
          ) : (
            <div>
              <div className="text-center mb-8">
                <p className="font-mono text-xs uppercase tracking-[0.2em] text-spectrum">// PASSWORD RECOVERY</p>
                <h1 className="mt-3 font-display text-3xl font-semibold tracking-tight">Forgot Password?</h1>
                <p className="text-sm text-muted-foreground mt-2">
                  Enter your email address to receive a secure recovery link
                </p>
              </div>

              <form onSubmit={handleSubmit} className="space-y-5">
                <div>
                  <label htmlFor="forgot-email" className="block text-xs font-mono uppercase tracking-wider text-muted-foreground mb-2">Email Address</label>
                  <input 
                    type="email" 
                    id="forgot-email" 
                    required 
                    disabled={status === 'submitting'}
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="ghostwheel@merlin-labs.io"
                    className="w-full rounded-xl border border-border bg-surface-elevated/50 px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground/50 focus:border-primary/50 focus:outline-none focus:ring-2 focus:ring-ring disabled:opacity-60"
                  />
                </div>

                {error && (
                  <p className="text-xs text-destructive bg-destructive/10 p-3 rounded-lg border border-destructive/20">{error}</p>
                )}

                <button 
                  type="submit" 
                  disabled={status === 'submitting'}
                  className="w-full inline-flex items-center justify-center gap-2 rounded-xl bg-spectrum animate-spectrum px-5 py-3.5 text-sm font-semibold text-primary-foreground disabled:opacity-60"
                >
                  {status === 'submitting' ? 'Sending Request...' : 'Send Recovery Email'} <ArrowRight className="h-4 w-4" />
                </button>
              </form>
              <p className="mt-6 text-center text-sm text-muted-foreground">
                Remember your password? <a href="#signin" className="text-foreground underline underline-offset-4 hover:text-primary transition-colors">Sign in here</a>.
              </p>
            </div>
          )}
        </div>
      </main>
      <Footer />
    </div>
  );
}

function ResetPassword() {
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [status, setStatus] = useState<'form' | 'submitting' | 'completed'>('form');
  const [error, setError] = useState('');

  const searchParams = new URLSearchParams(window.location.hash.split('?')[1] || '');
  const email = searchParams.get('email') || '';
  const token = searchParams.get('token') || '';

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError('');

    if (!email || !token) {
      setError('Invalid or expired password reset link.');
      return;
    }

    if (password !== confirmPassword) {
      setError('Passwords do not match.');
      return;
    }

    if (password.length < 8) {
      setError('Password must be at least 8 characters long.');
      return;
    }

    setStatus('submitting');
    try {
      const response = await fetch(`${API_BASE}/api/waitlist/reset-password`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email, token, password })
      });
      const data = await response.json();
      if (!response.ok) {
        throw new Error(data.error || 'Password reset failed');
      }
      setStatus('completed');
    } catch (err: any) {
      setError(err.message || 'Failed to reset password. Please try again.');
      setStatus('form');
    }
  };

  return (
    <div className="min-h-screen bg-background text-foreground">
      <Header />
      <main className="mx-auto max-w-xl px-6 py-20">
        <div className="surface-card p-8 border border-border bg-surface relative overflow-hidden">
          <div className="absolute -right-12 -top-12 h-32 w-32 rounded-full bg-spectrum opacity-20 blur-2xl"></div>
          
          {status === 'completed' ? (
            <div className="text-center py-8 space-y-4">
              <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-spectrum-5/20 text-spectrum-5 mb-4">
                <Check className="h-8 w-8" />
              </div>
              <h1 className="font-display text-2xl font-semibold tracking-tight">Password Reset Complete</h1>
              <p className="text-sm text-muted-foreground leading-relaxed">
                Your password has been successfully updated. You can now sign in with your new credentials.
              </p>
              <a 
                href="#signin" 
                className="mt-8 inline-flex items-center justify-center gap-2 rounded-xl bg-spectrum animate-spectrum px-6 py-3 text-sm font-semibold text-primary-foreground"
              >
                Sign In Now
              </a>
            </div>
          ) : (
            <div>
              <div className="text-center mb-8">
                <p className="font-mono text-xs uppercase tracking-[0.2em] text-spectrum">// PASSWORD UPDATE</p>
                <h1 className="mt-3 font-display text-3xl font-semibold tracking-tight">Set New Password</h1>
                <p className="text-sm text-muted-foreground mt-2">
                  Create a new secure password for <strong className="text-foreground">{email}</strong>
                </p>
              </div>

              {!email || !token ? (
                <div className="text-center py-4">
                  <p className="text-xs text-destructive bg-destructive/10 p-4 rounded-lg border border-destructive/20">
                    This password reset link is invalid or incomplete. Please request a new recovery link.
                  </p>
                  <a 
                    href="#forgot-password" 
                    className="mt-6 inline-flex items-center justify-center gap-2 rounded-xl border border-border bg-surface px-6 py-3 text-sm font-semibold text-foreground hover:bg-secondary transition-colors"
                  >
                    Request New Link
                  </a>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-5">
                  <div>
                    <label htmlFor="new-pass" className="block text-xs font-mono uppercase tracking-wider text-muted-foreground mb-2">New Password</label>
                    <input 
                      type="password" 
                      id="new-pass" 
                      required 
                      disabled={status === 'submitting'}
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                      placeholder="••••••••"
                      className="w-full rounded-xl border border-border bg-surface-elevated/50 px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground/50 focus:border-primary/50 focus:outline-none focus:ring-2 focus:ring-ring disabled:opacity-60"
                    />
                  </div>

                  <div>
                    <label htmlFor="confirm-pass" className="block text-xs font-mono uppercase tracking-wider text-muted-foreground mb-2">Confirm New Password</label>
                    <input 
                      type="password" 
                      id="confirm-pass" 
                      required 
                      disabled={status === 'submitting'}
                      value={confirmPassword}
                      onChange={(e) => setConfirmPassword(e.target.value)}
                      placeholder="••••••••"
                      className="w-full rounded-xl border border-border bg-surface-elevated/50 px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground/50 focus:border-primary/50 focus:outline-none focus:ring-2 focus:ring-ring disabled:opacity-60"
                    />
                  </div>

                  {error && (
                    <p className="text-xs text-destructive bg-destructive/10 p-3 rounded-lg border border-destructive/20">{error}</p>
                  )}

                  <button 
                    type="submit" 
                    disabled={status === 'submitting'}
                    className="w-full inline-flex items-center justify-center gap-2 rounded-xl bg-spectrum animate-spectrum px-5 py-3.5 text-sm font-semibold text-primary-foreground disabled:opacity-60"
                  >
                    {status === 'submitting' ? 'Resetting Password...' : 'Reset Password'} <ArrowRight className="h-4 w-4" />
                  </button>
                </form>
              )}
            </div>
          )}
        </div>
      </main>
      <Footer />
    </div>
  );
}

function AdminDashboard({ email, token, onSignOut }: { email: string; token: string | null; onSignOut: (e: any) => void }) {
  const [activeTab, setActiveTab] = useState<'rosters' | 'tickets' | 'stats' | 'tools'>('rosters');
  const [users, setUsers] = useState<any[]>([]);
  const [tickets, setTickets] = useState<any[]>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const [successMsg, setSuccessMsg] = useState('');
  const [expandedTicket, setExpandedTicket] = useState<string | null>(null);
  
  // Simulated logs
  const [simulatedLogs, setSimulatedLogs] = useState<string[]>([
    '[System] Server started successfully on port 8080.',
    '[DB] Persistent SQLite database connected via GCS FUSE.',
    '[IMAP] Connection established with mail.spacemail.com.',
    '[IMAP] Poller active. Idle listening mode enabled.'
  ]);

  const fetchUsers = async () => {
    try {
      const res = await fetch(`${API_BASE}/api/admin/users`, {
        headers: {
          'X-Admin-Email': email,
          'X-Admin-Token': token || ''
        }
      });
      if (!res.ok) throw new Error('Failed to fetch users');
      const data = await res.json();
      setUsers(data);
    } catch (err: any) {
      setError(err.message);
    }
  };

  const fetchTickets = async () => {
    try {
      const res = await fetch(`${API_BASE}/api/admin/tickets`, {
        headers: {
          'X-Admin-Email': email,
          'X-Admin-Token': token || ''
        }
      });
      if (!res.ok) throw new Error('Failed to fetch support tickets');
      const data = await res.json();
      setTickets(data);
    } catch (err: any) {
      setError(err.message);
    }
  };

  const loadData = async () => {
    setLoading(true);
    setError('');
    await Promise.all([fetchUsers(), fetchTickets()]);
    setLoading(false);
  };

  useEffect(() => {
    loadData();
  }, []);

  const handleVerifyUser = async (userEmail: string) => {
    try {
      setError('');
      const res = await fetch(`${API_BASE}/api/admin/users/verify`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'X-Admin-Email': email,
          'X-Admin-Token': token || ''
        },
        body: JSON.stringify({ email: userEmail })
      });
      if (!res.ok) throw new Error('Failed to verify user');
      setSuccessMsg(`Successfully verified ${userEmail}`);
      setTimeout(() => setSuccessMsg(''), 3000);
      fetchUsers();
    } catch (err: any) {
      setError(err.message);
    }
  };

  const handleDeleteUser = async (userEmail: string) => {
    if (!window.confirm(`Are you sure you want to delete ${userEmail}?`)) return;
    try {
      setError('');
      const res = await fetch(`${API_BASE}/api/admin/users/delete`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'X-Admin-Email': email,
          'X-Admin-Token': token || ''
        },
        body: JSON.stringify({ email: userEmail })
      });
      if (!res.ok) throw new Error('Failed to delete user');
      setSuccessMsg(`Successfully deleted ${userEmail}`);
      setTimeout(() => setSuccessMsg(''), 3000);
      fetchUsers();
    } catch (err: any) {
      setError(err.message);
    }
  };

  const handleTriggerImap = async () => {
    try {
      setError('');
      setSuccessMsg('Triggering IMAP poll...');
      const res = await fetch(`${API_BASE}/api/admin/trigger-imap`, {
        method: 'POST',
        headers: {
          'X-Admin-Email': email,
          'X-Admin-Token': token || ''
        }
      });
      const data = await res.json();
      if (!res.ok) throw new Error(data.error || 'Failed to trigger IMAP');
      setSuccessMsg(data.message || 'IMAP poll triggered.');
      setTimeout(() => setSuccessMsg(''), 3000);
      
      setSimulatedLogs(prev => [
        `[Admin] Manually triggered IMAP poll at ${new Date().toLocaleTimeString()}`,
        ...prev
      ]);
      fetchTickets();
    } catch (err: any) {
      setError(err.message);
    }
  };

  const handleExportCsv = () => {
    if (users.length === 0) return;
    const headers = ['Email', 'Verified', 'Created At'];
    const rows = users.map(u => [u.email, u.verified ? 'Yes' : 'No', u.created_at]);
    const csvContent = [headers.join(','), ...rows.map(r => r.join(','))].join('\n');
    
    const blob = new Blob([csvContent], { type: 'text/csv;charset=utf-8;' });
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.setAttribute('href', url);
    link.setAttribute('download', `ghostwheel_waitlist_${new Date().toISOString().split('T')[0]}.csv`);
    link.style.visibility = 'hidden';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  // Helper stats
  const totalSignups = users.length;
  const verifiedCount = users.filter(u => u.verified).length;
  const verificationRate = totalSignups > 0 ? Math.round((verifiedCount / totalSignups) * 100) : 0;
  const totalTickets = tickets.length;
  const openTickets = tickets.filter(t => t.status === 'open').length;

  return (
    <div className="min-h-screen bg-background text-foreground">
      <Header />
      <main className="mx-auto max-w-6xl px-6 py-12">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-10">
          <div>
            <p className="font-mono text-xs uppercase tracking-[0.2em] text-spectrum">// Merlin Laboratories</p>
            <h1 className="font-display text-4xl font-semibold tracking-tight">Admin Console</h1>
            <p className="text-sm text-muted-foreground mt-1">Logged in as {email}</p>
          </div>
          <div className="flex items-center gap-3">
            <button 
              onClick={loadData}
              disabled={loading}
              className="inline-flex items-center gap-2 rounded-xl border border-border bg-surface px-4 py-2.5 text-xs font-semibold text-foreground hover:bg-secondary transition-colors"
            >
              {loading ? 'Refreshing...' : 'Refresh Data'}
            </button>
            <button 
              onClick={onSignOut}
              className="inline-flex items-center gap-2 rounded-xl border border-destructive/20 bg-destructive/10 px-4 py-2.5 text-xs font-semibold text-destructive hover:bg-destructive/20 transition-colors"
            >
              Sign Out
            </button>
          </div>
        </div>

        {error && (
          <div className="mb-6 p-4 rounded-xl border border-destructive/20 bg-destructive/10 text-sm text-destructive">{error}</div>
        )}
        {successMsg && (
          <div className="mb-6 p-4 rounded-xl border border-spectrum-5/20 bg-spectrum-5/10 text-sm text-spectrum-5">{successMsg}</div>
        )}

        {/* Tab Navigation */}
        <div className="flex border-b border-border/60 mb-8 overflow-x-auto gap-6 text-sm font-medium">
          <button 
            onClick={() => setActiveTab('rosters')}
            className={`pb-4 border-b-2 transition-all ${activeTab === 'rosters' ? 'border-primary text-foreground' : 'border-transparent text-muted-foreground hover:text-foreground'}`}
          >
            Rosters
          </button>
          <button 
            onClick={() => setActiveTab('tickets')}
            className={`pb-4 border-b-2 transition-all ${activeTab === 'tickets' ? 'border-primary text-foreground' : 'border-transparent text-muted-foreground hover:text-foreground'}`}
          >
            Support Tickets
          </button>
          <button 
            onClick={() => setActiveTab('stats')}
            className={`pb-4 border-b-2 transition-all ${activeTab === 'stats' ? 'border-primary text-foreground' : 'border-transparent text-muted-foreground hover:text-foreground'}`}
          >
            Stats & Analytics
          </button>
          <button 
            onClick={() => setActiveTab('tools')}
            className={`pb-4 border-b-2 transition-all ${activeTab === 'tools' ? 'border-primary text-foreground' : 'border-transparent text-muted-foreground hover:text-foreground'}`}
          >
            Developer Tools
          </button>
        </div>

        {/* Rosters Tab */}
        {activeTab === 'rosters' && (
          <div className="surface-card p-6 border border-border bg-surface overflow-x-auto">
            <div className="flex items-center justify-between mb-4">
              <h3 className="font-display text-xl font-semibold">Registered Accounts</h3>
              <button 
                onClick={handleExportCsv}
                className="text-xs rounded-lg border border-border bg-surface px-3 py-1.5 font-semibold text-foreground hover:bg-secondary transition-colors"
              >
                Export CSV
              </button>
            </div>
            <table className="w-full text-left text-sm divide-y divide-border/60">
              <thead>
                <tr className="text-xs font-mono text-muted-foreground uppercase tracking-wider">
                  <th className="pb-3">Email</th>
                  <th className="pb-3">Status</th>
                  <th className="pb-3">Signed Up</th>
                  <th className="pb-3 text-right">Actions</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-border/40">
                {users.length === 0 ? (
                  <tr>
                    <td colSpan={4} className="py-8 text-center text-muted-foreground">No accounts found.</td>
                  </tr>
                ) : (
                  users.map((u, i) => (
                    <tr key={i} className="hover:bg-secondary/20 transition-all">
                      <td className="py-3 font-medium">{u.email}</td>
                      <td className="py-3 flex items-center gap-2 flex-wrap">
                        <span className={`inline-flex items-center gap-1.5 px-2 py-0.5 rounded-full text-xs font-medium ${u.verified ? 'bg-spectrum-5/10 text-spectrum-5' : 'bg-yellow-500/10 text-yellow-500'}`}>
                          {u.verified ? 'Verified' : 'Pending'}
                        </span>
                        <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded-full text-[10px] font-mono uppercase bg-surface-elevated text-muted-foreground border border-border/40">
                          Waiting List
                        </span>
                      </td>
                      <td className="py-3 text-muted-foreground font-mono text-xs">{new Date(u.created_at).toLocaleDateString()}</td>
                      <td className="py-3 text-right space-x-2">
                        {!u.verified && (
                          <button 
                            onClick={() => handleVerifyUser(u.email)}
                            className="text-xs px-2.5 py-1 rounded bg-spectrum-5/10 text-spectrum-5 hover:bg-spectrum-5/20 transition-all font-semibold"
                          >
                            Verify
                          </button>
                        )}
                        <button 
                          onClick={() => handleDeleteUser(u.email)}
                          className="text-xs px-2.5 py-1 rounded bg-destructive/10 text-destructive hover:bg-destructive/20 transition-all font-semibold"
                        >
                          Delete
                        </button>
                      </td>
                    </tr>
                  ))
                )}
              </tbody>
            </table>
          </div>
        )}

        {/* Tickets Tab */}
        {activeTab === 'tickets' && (
          <div className="space-y-4">
            <h3 className="font-display text-xl font-semibold mb-4">Support Tickets & Replies</h3>
            {tickets.length === 0 ? (
              <div className="surface-card p-8 text-center text-muted-foreground border border-border bg-surface">No tickets found.</div>
            ) : (
              tickets.map((t, idx) => (
                <div key={idx} className="surface-card border border-border bg-surface overflow-hidden">
                  <div 
                    onClick={() => setExpandedTicket(expandedTicket === t.id ? null : t.id)}
                    className="p-5 flex items-center justify-between cursor-pointer hover:bg-secondary/10 transition-all"
                  >
                    <div className="space-y-1">
                      <div className="flex items-center gap-3">
                        <span className="font-mono text-xs font-semibold text-spectrum">#{t.id}</span>
                        <h4 className="font-display font-semibold">{t.name} ({t.email})</h4>
                      </div>
                      <p className="text-xs text-muted-foreground">Category: <strong className="text-foreground">{t.category}</strong> | Created: {new Date(t.created_at).toLocaleString()}</p>
                    </div>
                    <div className="flex items-center gap-3">
                      <span className={`inline-flex items-center px-2 py-0.5 rounded-full text-xs font-medium ${t.status === 'replied' ? 'bg-spectrum-5/10 text-spectrum-5' : 'bg-primary/10 text-primary'}`}>
                        {t.status}
                      </span>
                      <span className="text-xs text-muted-foreground">{expandedTicket === t.id ? '▲' : '▼'}</span>
                    </div>
                  </div>
                  
                  {expandedTicket === t.id && (
                    <div className="border-t border-border/60 p-5 bg-background/40 space-y-4">
                      {/* Ticket Details */}
                      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-xs font-mono text-muted-foreground">
                        <div>OS: <span className="text-foreground">{t.os_version || 'None'}</span></div>
                        <div>GPU: <span className="text-foreground">{t.gpu_backend || 'None'}</span></div>
                        <div>RAM: <span className="text-foreground">{t.system_memory || 'None'}</span></div>
                        <div>License Key: <span className="text-foreground">{t.license_key || 'None'}</span></div>
                      </div>

                      {/* Ticket Message */}
                      <div className="p-4 rounded-xl border border-border bg-surface text-sm space-y-2">
                        <p className="text-xs font-mono text-muted-foreground">// USER MESSAGE</p>
                        <p className="whitespace-pre-line leading-relaxed text-foreground/90">{t.message}</p>
                      </div>

                      {t.logs && (
                        <div className="space-y-1">
                          <p className="text-xs font-mono text-muted-foreground">// ATTACHED DIAGNOSTIC LOGS</p>
                          <pre className="p-4 rounded-xl border border-border bg-surface text-[10px] text-spectrum overflow-x-auto max-h-40">{t.logs}</pre>
                        </div>
                      )}

                      {/* Replies Section */}
                      <div className="space-y-3 mt-6">
                        <h5 className="font-mono text-xs font-semibold text-spectrum uppercase tracking-wider">// Conversation History (IMAP synced)</h5>
                        {t.replies && t.replies.length === 0 ? (
                          <p className="text-xs text-muted-foreground italic">No reply history found. Email conversations from contact@merlin-labs.io will show up here automatically when customers reply.</p>
                        ) : (
                          t.replies.map((r: any, rIdx: number) => (
                            <div key={rIdx} className="p-4 rounded-xl border border-border/40 bg-surface/50 space-y-2">
                              <div className="flex items-center justify-between text-xs text-muted-foreground">
                                <strong>From: {r.sender}</strong>
                                <span className="font-mono">{new Date(r.received_at).toLocaleString()}</span>
                              </div>
                              <p className="text-xs whitespace-pre-line text-foreground/80">{r.body}</p>
                            </div>
                          ))
                        )}
                      </div>
                    </div>
                  )}
                </div>
              ))
            )}
          </div>
        )}

        {/* Stats Tab */}
        {activeTab === 'stats' && (
          <div className="space-y-6">
            <h3 className="font-display text-xl font-semibold">Statistics & Analytics</h3>
            <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
              <div className="surface-card p-6 border border-border bg-surface text-center">
                <p className="text-xs font-mono uppercase tracking-wider text-muted-foreground">Total Signups</p>
                <p className="font-display text-4xl font-bold mt-2 text-foreground">{totalSignups}</p>
              </div>
              <div className="surface-card p-6 border border-border bg-surface text-center">
                <p className="text-xs font-mono uppercase tracking-wider text-muted-foreground">Verification Rate</p>
                <p className="font-display text-4xl font-bold mt-2 text-spectrum-5">{verificationRate}%</p>
              </div>
              <div className="surface-card p-6 border border-border bg-surface text-center">
                <p className="text-xs font-mono uppercase tracking-wider text-muted-foreground">Total Tickets</p>
                <p className="font-display text-4xl font-bold mt-2 text-foreground">{totalTickets}</p>
              </div>
              <div className="surface-card p-6 border border-border bg-surface text-center">
                <p className="text-xs font-mono uppercase tracking-wider text-muted-foreground">Open Tickets</p>
                <p className="font-display text-4xl font-bold mt-2 text-primary">{openTickets}</p>
              </div>
            </div>

            {/* Custom SVG Chart */}
            <div className="surface-card p-6 border border-border bg-surface">
              <h4 className="font-display font-semibold mb-4">Registration Flow Overview</h4>
              <div className="h-64 flex items-end justify-between px-6 pt-10 border-b border-l border-border/60 relative">
                <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                  <span className="text-xs text-muted-foreground/60 italic font-mono">[Visual flow simulation: active]</span>
                </div>
                <div className="w-12 bg-spectrum-5/20 hover:bg-spectrum-5/40 transition-all rounded-t-lg h-[40%] flex items-center justify-center text-xs font-mono font-bold text-spectrum-5">Pending</div>
                <div className="w-12 bg-spectrum-5/60 hover:bg-spectrum-5/80 transition-all rounded-t-lg h-[60%] flex items-center justify-center text-xs font-mono font-bold text-primary-foreground">Verified</div>
                <div className="w-12 bg-spectrum/20 hover:bg-spectrum/40 transition-all rounded-t-lg h-[15%] flex items-center justify-center text-xs font-mono font-bold text-spectrum">Tickets</div>
                <div className="w-12 bg-spectrum/40 hover:bg-spectrum/60 transition-all rounded-t-lg h-[80%] flex items-center justify-center text-xs font-mono font-bold text-primary-foreground">Total</div>
              </div>
              <div className="flex justify-between px-6 mt-2 text-xs font-mono text-muted-foreground">
                <span>Unverified</span>
                <span>Verified</span>
                <span>Support</span>
                <span>Active Roster</span>
              </div>
            </div>
          </div>
        )}

        {/* Tools Tab */}
        {activeTab === 'tools' && (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* System Actions */}
            <div className="surface-card p-6 border border-border bg-surface space-y-4">
              <h4 className="font-display text-lg font-semibold border-b border-border/60 pb-2">Administrative Commands</h4>
              <p className="text-xs text-muted-foreground leading-relaxed">Trigger automated routines on the backend without accessing SSH terminals.</p>
              
              <div className="space-y-3 pt-2">
                <button 
                  onClick={handleTriggerImap}
                  className="w-full inline-flex items-center justify-center gap-2 rounded-xl bg-spectrum animate-spectrum px-4 py-3 text-xs font-semibold text-primary-foreground"
                >
                  Force Sync Support Inbox (IMAP)
                </button>
                <button 
                  disabled
                  className="w-full inline-flex items-center justify-center gap-2 rounded-xl border border-border bg-surface px-4 py-3 text-xs font-semibold text-muted-foreground cursor-not-allowed"
                >
                  Force Spaceship DNS Sync (Placeholder)
                </button>
              </div>
            </div>

            {/* GCP Deployment Controller */}
            <div className="surface-card p-6 border border-border bg-surface space-y-4">
              <h4 className="font-display text-lg font-semibold border-b border-border/60 pb-2">GCP Deployment Controller (Demo)</h4>
              <div className="p-4 rounded-xl border border-border/60 bg-background/50 font-mono text-xs space-y-2">
                <div className="flex items-center justify-between">
                  <span>Service Name:</span>
                  <span className="text-spectrum">merlin-backend</span>
                </div>
                <div className="flex items-center justify-between">
                  <span>Region:</span>
                  <span className="text-spectrum">us-central1</span>
                </div>
                <div className="flex items-center justify-between">
                  <span>Instance status:</span>
                  <span className="text-spectrum-5">Active</span>
                </div>
              </div>
              <button 
                onClick={() => {
                  alert('Initiating build trigger... Container build logs: [Success] Image pushed to Artifact Registry.');
                  setSimulatedLogs(prev => [
                    `[GCP Controller] Triggered rebuild revision at ${new Date().toLocaleTimeString()}`,
                    ...prev
                  ]);
                }}
                className="w-full inline-flex items-center justify-center gap-2 rounded-xl border border-border bg-surface hover:bg-secondary px-4 py-3 text-xs font-semibold text-foreground transition-colors"
              >
                Trigger Revision Rebuild
              </button>
            </div>

            {/* System Log Console */}
            <div className="surface-card p-6 border border-border bg-surface space-y-3 md:col-span-2">
              <h4 className="font-display text-lg font-semibold border-b border-border/60 pb-2">Live Console Logs</h4>
              <div className="p-4 rounded-xl border border-border bg-background/80 font-mono text-[10px] text-spectrum-5/80 h-40 overflow-y-auto space-y-1">
                {simulatedLogs.map((log, lIdx) => (
                  <div key={lIdx}>{log}</div>
                ))}
              </div>
            </div>
          </div>
        )}
      </main>
      <Footer />
    </div>
  );
}

function Profile() {
  const [email, setEmail] = useState('');
  const [adminToken, setAdminToken] = useState<string | null>(null);
  
  useEffect(() => {
    setEmail(localStorage.getItem('ghostwheel_current_user') || '');
    setAdminToken(localStorage.getItem('ghostwheel_admin_token'));
  }, []);

  const handleSignOut = (e: React.MouseEvent) => {
    e.preventDefault();
    localStorage.removeItem('ghostwheel_current_user');
    localStorage.removeItem('ghostwheel_admin_token');
    window.dispatchEvent(new Event('auth-change'));
    window.location.hash = ''; // redirect to home
  };

  const isAdmin = email === 'rydell.hall@gmail.com' || email === 'admin@merlin-labs.io' || email === 'contact@merlin-labs.io';

  if (isAdmin) {
    return <AdminDashboard email={email} token={adminToken} onSignOut={handleSignOut} />;
  }

  return (
    <div className="min-h-screen bg-background text-foreground">
      <Header />
      <main className="mx-auto max-w-xl px-6 py-20">
        <a 
          href="#" 
          className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors mb-12"
        >
          ← Back to home
        </a>
        
        <div className="space-y-2 mb-10 text-center">
          <p className="font-mono text-xs uppercase tracking-[0.2em] text-spectrum">// ACCOUNT STATUS</p>
          <h1 className="font-display text-4xl font-semibold tracking-tight sm:text-5xl">
            Account Profile
          </h1>
          <p className="text-sm text-muted-foreground mt-2">
            Manage your waitlist registration and hardware queue credentials.
          </p>
        </div>

        <div className="surface-card p-8 border border-border bg-surface relative overflow-hidden space-y-6">
          <div className="absolute -right-12 -top-12 h-32 w-32 rounded-full bg-spectrum opacity-20 blur-2xl"></div>

          <div className="space-y-4 divide-y divide-border/60">
            {/* Email Address */}
            <div className="flex items-center justify-between py-3">
              <span className="text-xs font-mono uppercase tracking-wider text-muted-foreground">Email Address</span>
              <span className="text-sm font-medium text-foreground">{email}</span>
            </div>

            {/* Status */}
            <div className="flex items-center justify-between pt-4 pb-3">
              <span className="text-xs font-mono uppercase tracking-wider text-muted-foreground">Status</span>
              <span className="flex items-center gap-2 text-sm font-medium text-spectrum-5">
                <span className="relative flex h-2 w-2">
                  <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-spectrum-5 opacity-75"></span>
                  <span className="relative inline-flex h-2 w-2 rounded-full bg-spectrum-5"></span>
                </span>
                Waitlist Confirmed
              </span>
            </div>

            {/* Queue Position */}
            <div className="flex items-center justify-between pt-4 pb-3">
              <span className="text-xs font-mono uppercase tracking-wider text-muted-foreground">Queue Position</span>
              <span className="text-sm font-mono font-semibold text-foreground">#142</span>
            </div>

            {/* License Key */}
            <div className="flex items-center justify-between pt-4 pb-3">
              <span className="text-xs font-mono uppercase tracking-wider text-muted-foreground">License Key</span>
              <span className="text-sm text-muted-foreground italic">Pending pre-alpha release</span>
            </div>

            {/* Hardware Profile */}
            <div className="flex items-center justify-between pt-4 pb-3">
              <span className="text-xs font-mono uppercase tracking-wider text-muted-foreground">Hardware Diagnostics</span>
              <span className="text-sm text-muted-foreground">Pending first boot</span>
            </div>
          </div>

          <div className="border-t border-border/60 pt-6">
            <button 
              onClick={handleSignOut}
              className="w-full inline-flex items-center justify-center gap-2 rounded-xl border border-border bg-surface px-5 py-3 text-sm font-semibold text-foreground hover:bg-secondary transition-colors"
            >
              Sign Out Account
            </button>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}

function Terms() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Header />
      <main className="mx-auto max-w-3xl px-6 py-20">
        <a 
          href="#" 
          className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors mb-12"
        >
          ← Back to home
        </a>
        <div className="space-y-2 mb-10">
          <p className="font-mono text-xs uppercase tracking-[0.2em] text-spectrum">// LEGAL AGREEMENTS</p>
          <h1 className="font-display text-4xl font-semibold tracking-tight sm:text-5xl">
            Terms of Use
          </h1>
          <p className="text-sm text-muted-foreground mt-2">
            Last Updated: June 30, 2026
          </p>
        </div>

        <div className="prose prose-invert max-w-none text-sm text-muted-foreground space-y-6 leading-relaxed">
          <p>
            Welcome to Ghostwheel. These Terms of Use ("Terms") govern your use of the Ghostwheel desktop application and website. By accessing or using our services, you agree to be bound by these Terms.
          </p>

          <h3 className="text-base font-semibold text-foreground mt-8">1. License Grant and Desktop Software</h3>
          <p>
            Ghostwheel is a desktop application running local inference on Windows. Subject to these Terms and your active subscription or trial, we grant you a limited, non-exclusive, non-transferable, and revocable license to run Ghostwheel on authorized hardware.
          </p>

          <h3 className="text-base font-semibold text-foreground mt-8">2. Local-First Operation and Offline Grace</h3>
          <p>
            Inference, model weights, and conversation databases are hosted locally on your device. Subscription licenses require a network check at least once every 14 days to renew your offline execution token. Air-gapped deployments require specialized enterprise licenses.
          </p>

          <h3 className="text-base font-semibold text-foreground mt-8">3. Payments, Trial, and Cancellation</h3>
          <p>
            Billed services are processed through our Merchant of Record, Lemon Squeezy. The 1-day trial is priced at $5, and the Pro plan is billed monthly. Cancel anytime to prevent next-cycle renewal. All local data remains yours upon cancellation.
          </p>

          <h3 className="text-base font-semibold text-foreground mt-8">4. Limitations of Liability</h3>
          <p>
            GHOSTWHEEL IS PROVIDED "AS IS" WITHOUT WARRANTY OF ANY KIND. We are not liable for any issues arising from running shell commands, editing files, or compiling code via the local agent. You assume full responsibility for actions executed by the agent on your machine.
          </p>
        </div>
      </main>
      <Footer />
    </div>
  );
}

function Privacy() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Header />
      <main className="mx-auto max-w-3xl px-6 py-20">
        <a 
          href="#" 
          className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors mb-12"
        >
          ← Back to home
        </a>
        <div className="space-y-2 mb-10">
          <p className="font-mono text-xs uppercase tracking-[0.2em] text-spectrum">// DATA PRIVACY</p>
          <h1 className="font-display text-4xl font-semibold tracking-tight sm:text-5xl">
            Privacy Policy
          </h1>
          <p className="text-sm text-muted-foreground mt-2">
            Last Updated: June 30, 2026
          </p>
        </div>

        <div className="prose prose-invert max-w-none text-sm text-muted-foreground space-y-6 leading-relaxed">
          <p>
            Ghostwheel is built on a local-first philosophy. We believe your prompts, code, and developer context belong to you, not a third-party server.
          </p>

          <h3 className="text-base font-semibold text-foreground mt-8">1. No Telemetry and No Cloud Inference</h3>
          <p>
            We do not collect, intercept, or upload your prompts, code snippets, or conversational history. All inference streams directly from a local sidecar (`llama-server`) loopback bound to your machine.
          </p>

          <h3 className="text-base font-semibold text-foreground mt-8">2. Local Storage and Databases</h3>
          <p>
            All chats, model settings, and agent memories are written directly to your system's app data directory (e.g. SQLite database at `%LOCALAPPDATA%\ProjectMerlin\merlin.db`). You can back up, purge, or inspect this data at any time.
          </p>

          <h3 className="text-base font-semibold text-foreground mt-8">3. Network Connections</h3>
          <p>
            The software connects to our licensing servers via HTTPS solely to activate subscription keys and query for signed update releases. These checks do not contain context data or prompts.
          </p>
        </div>
      </main>
      <Footer />
    </div>
  );
}

function Docs() {
  const [activeSection, setActiveSection] = useState('getting-started');

  return (
    <div className="min-h-screen bg-background text-foreground">
      <Header />
      <div className="mx-auto max-w-6xl px-6 py-20">
        <a 
          href="#" 
          className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors mb-8"
        >
          ← Back to home
        </a>
        
        <div className="flex flex-col gap-10 md:flex-row mt-4">
          {/* Sidebar */}
          <aside className="w-full shrink-0 md:w-56 space-y-6">
            <div>
              <h4 className="text-xs font-mono uppercase tracking-wider text-muted-foreground/60 mb-3">Getting Started</h4>
              <ul className="space-y-2 text-sm">
                <li>
                  <button 
                    onClick={() => setActiveSection('getting-started')}
                    className={`hover:text-foreground transition-colors w-full text-left ${activeSection === 'getting-started' ? 'text-spectrum font-semibold' : 'text-muted-foreground'}`}
                  >
                    Introduction
                  </button>
                </li>
                <li>
                  <button 
                    onClick={() => setActiveSection('installation')}
                    className={`hover:text-foreground transition-colors w-full text-left ${activeSection === 'installation' ? 'text-spectrum font-semibold' : 'text-muted-foreground'}`}
                  >
                    Installation
                  </button>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="text-xs font-mono uppercase tracking-wider text-muted-foreground/60 mb-3">Configuration</h4>
              <ul className="space-y-2 text-sm">
                <li>
                  <button 
                    onClick={() => setActiveSection('gpu-setup')}
                    className={`hover:text-foreground transition-colors w-full text-left ${activeSection === 'gpu-setup' ? 'text-spectrum font-semibold' : 'text-muted-foreground'}`}
                  >
                    GPU & VRAM Settings
                  </button>
                </li>
                <li>
                  <button 
                    onClick={() => setActiveSection('model-manifests')}
                    className={`hover:text-foreground transition-colors w-full text-left ${activeSection === 'model-manifests' ? 'text-spectrum font-semibold' : 'text-muted-foreground'}`}
                  >
                    Model Manifests
                  </button>
                </li>
              </ul>
            </div>
          </aside>

          {/* Main Content Area */}
          <main className="flex-1 max-w-3xl prose prose-invert text-sm text-muted-foreground leading-relaxed">
            {activeSection === 'getting-started' && (
              <div className="space-y-6">
                <h1 className="font-display text-3xl font-semibold text-foreground tracking-tight">Introduction to Ghostwheel</h1>
                <p>
                  Ghostwheel is a Windows desktop application that integrates a local developer agent with on-device LLM inference. Built on the <strong>Merlin Framework</strong>, it packages a thin Tauri runtime controlling a pinned native <code>llama-server</code> sidecar.
                </p>
                <p>
                  By processing prompts local-first, Ghostwheel eliminates API token billing, network lag, and prompt telemetry.
                </p>
                <div className="bg-surface-elevated/40 border border-border p-5 rounded-xl space-y-2 mt-8">
                  <h4 className="font-display text-sm font-semibold text-foreground flex items-center gap-2">
                    <ShieldCheck className="h-4 w-4 text-spectrum-5" /> Local-first Guarantee
                  </h4>
                  <p className="text-xs">
                    Your prompt contexts, filesystem edits, and terminal operations occur completely inside your local hardware boundary.
                  </p>
                </div>
              </div>
            )}

            {activeSection === 'installation' && (
              <div className="space-y-6">
                <h1 className="font-display text-3xl font-semibold text-foreground tracking-tight">Installation Guide</h1>
                <p>
                  Ghostwheel is distributed as a signed MSI installer for Windows 10 and 11. Follow these steps to set up:
                </p>
                <ol className="list-decimal pl-5 space-y-3 mt-4">
                  <li>Download the installer from the release channel.</li>
                  <li>Double-click the <code>Ghostwheel-Installer.msi</code>.</li>
                  <li>The installer will auto-verify the presence of the Microsoft WebView2 Runtime, and install the shell.</li>
                  <li>Activate the app by inputting your license key when prompted on first boot.</li>
                </ol>
                <div className="bg-surface-elevated border border-border p-4 rounded-xl font-mono text-xs mt-6 text-foreground">
                  <span className="text-muted-foreground"># Log output on successful install boot:</span>
                  <pre className="mt-2 text-muted-foreground/80 font-mono">
{`ghostwheel --version
Ghostwheel client: v1.0.0-alpha
Model backend: llama-server b9851 (CUDA 12.4)`}
                  </pre>
                </div>
              </div>
            )}

            {activeSection === 'gpu-setup' && (
              <div className="space-y-6">
                <h1 className="font-display text-3xl font-semibold text-foreground tracking-tight">GPU & VRAM Configuration</h1>
                <p>
                  To maximize inference speed, Ghostwheel leverages hardware acceleration using NVIDIA CUDA or Vulkan. It auto-detects system specifications on startup.
                </p>
                <h3 className="text-base font-semibold text-foreground mt-8">Execution Backends</h3>
                <ul className="list-disc pl-5 space-y-2">
                  <li><strong>NVIDIA CUDA</strong>: Auto-selected on NVIDIA cards. Requires modern GeForce/RTX drivers.</li>
                  <li><strong>Vulkan</strong>: Fallback for AMD/Intel GPUs.</li>
                  <li><strong>CPU Fallback</strong>: Utilized if GPU VRAM is completely saturated.</li>
                </ul>
              </div>
            )}

            {activeSection === 'model-manifests' && (
              <div className="space-y-6">
                <h1 className="font-display text-3xl font-semibold text-foreground tracking-tight">Model Manifest Configuration</h1>
                <p>
                  Ghostwheel uses a JSON manifest to locate local GGUF models. Advanced users can modify the manifest at <code>%APPDATA%\Ghostwheel\manifest.json</code> to swap models or add custom presets.
                </p>
                <h3 className="text-base font-semibold text-foreground mt-8">Example Manifest Preset</h3>
                <pre className="bg-surface-elevated border border-border p-4 rounded-xl font-mono text-xs mt-4 text-foreground/80 font-mono">
{`{
  "default_model": "Ghostwheel-9B-Coder",
  "models": [
    {
      "name": "Ghostwheel-9B-Coder",
      "path": "models/Ghostwheel-9B-Coder-Q5_K_M.gguf",
      "context_window": 8192
    }
  ]
}`}
                </pre>
              </div>
            )}
          </main>
        </div>
      </div>
      <Footer />
    </div>
  );
}

function Backer() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Header />
      <main className="mx-auto max-w-xl px-6 py-20 text-center">
        <a 
          href="#" 
          className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors mb-12"
        >
          ← Back to home
        </a>
        
        <div className="space-y-2 mb-10">
          <p className="font-mono text-xs uppercase tracking-[0.2em] text-spectrum">// ACCELERATE THE RELEASE</p>
          <h1 className="font-display text-4xl font-semibold tracking-tight sm:text-5xl">
            Support the Build Loop
          </h1>
          <p className="text-sm text-muted-foreground mt-2">
            Ghostwheel is compiling in private. Here is how you can help speed up the launch.
          </p>
        </div>

        <div className="surface-card p-8 border border-border bg-surface relative overflow-hidden space-y-6 text-left">
          <div className="absolute -right-12 -top-12 h-32 w-32 rounded-full bg-spectrum opacity-20 blur-2xl"></div>

          <p className="text-sm text-muted-foreground leading-relaxed">
            We are not accepting trial fees or monthly subscriptions until early-access builds are fully verified and stable.
          </p>
          
          <p className="text-sm text-muted-foreground leading-relaxed">
            If you want to accelerate the compiler, follow release progress, and lock in your place at the front of the queue, join the waitlist:
          </p>

          <div className="pt-4 space-y-4">
            <a 
              href="#download"
              className="w-full inline-flex flex-col items-center justify-center gap-1 rounded-xl bg-spectrum animate-spectrum px-6 py-5 text-center text-primary-foreground font-semibold shadow-lg hover:opacity-95 transition-opacity"
            >
              <span className="text-base">Join the Ghostwheel Waitlist</span>
              <span className="text-xs font-normal opacity-80">Follow development and secure priority queue access</span>
            </a>

            <div className="flex items-center justify-center gap-3 py-2">
              <span className="h-px flex-1 bg-border/40"></span>
              <span className="text-xs text-muted-foreground font-mono">OR</span>
              <span className="h-px flex-1 bg-border/40"></span>
            </div>

            <a 
              href="#download" 
              className="w-full inline-flex items-center justify-center gap-2 rounded-xl border border-border bg-surface px-5 py-4 text-sm font-semibold text-foreground hover:bg-secondary transition-colors"
            >
              Sign up for early access if you haven't already <ArrowRight className="h-4 w-4" />
            </a>
          </div>

          <p className="text-xs text-muted-foreground/80 leading-relaxed text-center">
            All Coffee backers will be flagged in our local database for first-wave access keys as soon as the Windows MSI is released.
          </p>
        </div>
      </main>
      <Footer />
    </div>
  );
}

function Accessibility() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Header />
      <main className="mx-auto max-w-3xl px-6 py-20">
        <a href="#" className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors mb-12">
          ← Back to home
        </a>
        <div className="space-y-2 mb-10">
          <p className="font-mono text-xs uppercase tracking-[0.2em] text-spectrum">// INCLUSIVE DESIGN</p>
          <h1 className="font-display text-4xl font-semibold tracking-tight sm:text-5xl">Accessibility Statement</h1>
          <p className="text-sm text-muted-foreground mt-2">Commitment to WCAG 2.1 AA conformance guidelines.</p>
        </div>
        <div className="prose prose-invert max-w-none text-sm text-muted-foreground space-y-6 leading-relaxed">
          <p>
            We believe the power of local AI tools should be accessible to everyone. Ghostwheel is designed and developed with accessibility as a core consideration, targeting Web Content Accessibility Guidelines (WCAG) 2.1 Level AA criteria.
          </p>
          <h3 className="text-base font-semibold text-foreground mt-8">Keyboard Navigation & Focus</h3>
          <p>
            All chat inputs, control panels, and page links are fully navigable using a standard keyboard. Focus indicators are styled with high-contrast outlines to aid navigation for non-mouse users.
          </p>
          <h3 className="text-base font-semibold text-foreground mt-8">Screen Reader Support</h3>
          <p>
            Interactive components use semantic HTML5 elements and appropriate ARIA attributes. Chat message streams are marked up to ensure that dynamically added messages are read correctly by screen readers.
          </p>
          <h3 className="text-base font-semibold text-foreground mt-8">Visual Contrast & Font Scaling</h3>
          <p>
            Our dark-theme color tokens are checked for high-contrast visibility. Ghostwheel supports browser scaling and respects user system preferences for reduced motion.
          </p>
          <h3 className="text-base font-semibold text-foreground mt-8">Feedback Contact</h3>
          <p>
            If you encounter any accessibility issues while using our software or website, please submit a report at `#support` or email us.
          </p>
        </div>
      </main>
      <Footer />
    </div>
  );
}

function Licenses() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Header />
      <main className="mx-auto max-w-3xl px-6 py-20">
        <a href="#" className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors mb-12">
          ← Back to home
        </a>
        <div className="space-y-2 mb-10">
          <p className="font-mono text-xs uppercase tracking-[0.2em] text-spectrum">// OPEN SOURCE DISCLOSURES</p>
          <h1 className="font-display text-4xl font-semibold tracking-tight sm:text-5xl">Third-Party Notices</h1>
          <p className="text-sm text-muted-foreground mt-2">Licensing attributions and notices for open-source components.</p>
        </div>
        <div className="prose prose-invert max-w-none text-sm text-muted-foreground space-y-6 leading-relaxed">
          <p>
            Ghostwheel incorporates open-source software. Below are the required attributions and notices.
          </p>
          
          <div className="border border-border bg-surface p-6 rounded-xl space-y-4">
            <h4 className="text-sm font-bold text-foreground font-mono">1. llama.cpp (MIT License)</h4>
            <pre className="text-xs text-muted-foreground/80 font-mono bg-surface-elevated/40 p-4 rounded-lg overflow-x-auto">
{`Copyright (c) 2023 Georgi Gerganov

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal...`}
            </pre>
          </div>

          <div className="border border-border bg-surface p-6 rounded-xl space-y-4 mt-6">
            <h4 className="text-sm font-bold text-foreground font-mono">2. Tauri Shell (MIT/Apache-2.0 Dual License)</h4>
            <pre className="text-xs text-muted-foreground/80 font-mono bg-surface-elevated/40 p-4 rounded-lg overflow-x-auto">
{`Copyright (c) 2019-2026 Tauri Programme Contributors

Licensed under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License.`}
            </pre>
          </div>

          <div className="border border-border bg-surface p-6 rounded-xl space-y-4 mt-6">
            <h4 className="text-sm font-bold text-foreground font-mono">3. Qwopus Model weights (Apache License 2.0)</h4>
            <p className="text-xs text-muted-foreground/80">
              The model weights are community fine-tunes licensed under the Apache License 2.0. Users are subject to the base model usage policies issued by Alibaba.
            </p>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}

function Security() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Header />
      <main className="mx-auto max-w-3xl px-6 py-20">
        <a href="#" className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors mb-12">
          ← Back to home
        </a>
        <div className="space-y-2 mb-10">
          <p className="font-mono text-xs uppercase tracking-[0.2em] text-spectrum">// SECURE BY DESIGN</p>
          <h1 className="font-display text-4xl font-semibold tracking-tight sm:text-5xl">Security & Safety</h1>
          <p className="text-sm text-muted-foreground mt-2">Overview of trust boundaries, agent controls, and sandbox defaults.</p>
        </div>
        <div className="prose prose-invert max-w-none text-sm text-muted-foreground space-y-6 leading-relaxed">
          <p>
            Because Ghostwheel runs local code-generation and terminal command-execution, maintaining a secure runtime is our highest priority.
          </p>

          <h3 className="text-base font-semibold text-foreground mt-8">1. Execution Sandboxing</h3>
          <p>
            The Rust orchestration layer validates all command sequences. Destructive commands or modifications outside defined workspace boundaries trigger a mandatory confirmation prompt in the user interface.
          </p>

          <h3 className="text-base font-semibold text-foreground mt-8">2. SSRF & Network Protections</h3>
          <p>
            The built-in URL fetch tools explicitly block requests targeting loopback addresses (`127.0.0.1`, `localhost`) and private subnets (e.g. `10.x.x.x`, `192.168.x.x`) to prevent Server-Side Request Forgery (SSRF) and private network data leaks.
          </p>

          <h3 className="text-base font-semibold text-foreground mt-8">3. Local Licensing Verification</h3>
          <p>
            License validation is brokered by a stateless licensing proxy. No prompts, code, or context logs are ever sent over the network. The license check payload contains only the hash of your license key and a hardware fingerprint hash.
          </p>
        </div>
      </main>
      <Footer />
    </div>
  );
}

function Releases() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Header />
      <main className="mx-auto max-w-4xl px-6 py-20">
        <a href="#" className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors mb-12">
          ← Back to home
        </a>
        <div className="space-y-2 mb-10 text-center">
          <p className="font-mono text-xs uppercase tracking-[0.2em] text-spectrum">// BUILD STABLE</p>
          <h1 className="font-display text-4xl font-semibold tracking-tight sm:text-5xl">Download Center</h1>
          <p className="text-sm text-muted-foreground mt-2">Get the latest signed installer for Ghostwheel desktop.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-12">
          {/* CUDA card */}
          <div className="surface-card p-6 border border-border bg-surface relative overflow-hidden flex flex-col justify-between">
            <div>
              <div className="flex justify-between items-start mb-4">
                <span className="text-xs font-mono uppercase bg-spectrum-5/10 text-spectrum-5 px-2 py-1 rounded">NVIDIA GPU</span>
                <span className="text-xs text-muted-foreground">v1.0.0-alpha</span>
              </div>
              <h3 className="text-lg font-semibold text-foreground mb-2">CUDA Build</h3>
              <p className="text-xs text-muted-foreground mb-4">Recommended for RTX / GTX systems. Requires CUDA 12.x or 13.x drivers.</p>
            </div>
            <div className="space-y-3 mt-6">
              <button disabled className="w-full inline-flex items-center justify-center gap-2 rounded-lg bg-spectrum animate-spectrum px-4 py-2 text-xs font-semibold text-primary-foreground opacity-60 cursor-not-allowed">
                Download MSI
              </button>
              <div className="text-[10px] text-muted-foreground font-mono truncate">
                Checksum pending signed release
              </div>
            </div>
          </div>

          {/* Vulkan card */}
          <div className="surface-card p-6 border border-border bg-surface relative overflow-hidden flex flex-col justify-between">
            <div>
              <div className="flex justify-between items-start mb-4">
                <span className="text-xs font-mono uppercase bg-spectrum-4/10 text-spectrum-4 px-2 py-1 rounded">AMD / Intel</span>
                <span className="text-xs text-muted-foreground">v1.0.0-alpha</span>
              </div>
              <h3 className="text-lg font-semibold text-foreground mb-2">Vulkan Build</h3>
              <p className="text-xs text-muted-foreground mb-4">Broad GPU hardware fallback. Optimized for AMD Radeon and Intel Arc.</p>
            </div>
            <div className="space-y-3 mt-6">
              <button disabled className="w-full inline-flex items-center justify-center gap-2 rounded-lg bg-spectrum animate-spectrum px-4 py-2 text-xs font-semibold text-primary-foreground opacity-60 cursor-not-allowed">
                Download MSI
              </button>
              <div className="text-[10px] text-muted-foreground font-mono truncate">
                Checksum pending signed release
              </div>
            </div>
          </div>

          {/* CPU card */}
          <div className="surface-card p-6 border border-border bg-surface relative overflow-hidden flex flex-col justify-between">
            <div>
              <div className="flex justify-between items-start mb-4">
                <span className="text-xs font-mono uppercase bg-muted/20 text-muted-foreground px-2 py-1 rounded">Universal</span>
                <span className="text-xs text-muted-foreground">v1.0.0-alpha</span>
              </div>
              <h3 className="text-lg font-semibold text-foreground mb-2">CPU Fallback Build</h3>
              <p className="text-xs text-muted-foreground mb-4">Fallback build without hardware acceleration requirements.</p>
            </div>
            <div className="space-y-3 mt-6">
              <button disabled className="w-full inline-flex items-center justify-center gap-2 rounded-lg bg-spectrum animate-spectrum px-4 py-2 text-xs font-semibold text-primary-foreground opacity-60 cursor-not-allowed">
                Download MSI
              </button>
              <div className="text-[10px] text-muted-foreground font-mono truncate">
                Checksum pending signed release
              </div>
            </div>
          </div>
        </div>

        <div className="surface-card p-6 border border-border bg-surface mt-10 space-y-4">
          <h4 className="font-display text-sm font-semibold text-foreground">How to Verify Installer Checksums</h4>
          <p className="text-xs text-muted-foreground leading-relaxed">
            After downloading, open PowerShell and run the following command to verify the SHA-256 hash matches the value above:
          </p>
          <pre className="bg-surface-elevated/40 border border-border p-4 rounded-lg font-mono text-xs text-foreground">
            Get-FileHash .\Ghostwheel-Installer.msi -Algorithm SHA256
          </pre>
        </div>
      </main>
      <Footer />
    </div>
  );
}

function Cookies() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Header />
      <main className="mx-auto max-w-3xl px-6 py-20">
        <a href="#" className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors mb-12">
          ← Back to home
        </a>
        <div className="space-y-2 mb-10">
          <p className="font-mono text-xs uppercase tracking-[0.2em] text-spectrum">// LOCAL STORAGE & SESSIONS</p>
          <h1 className="font-display text-4xl font-semibold tracking-tight sm:text-5xl">Cookie Policy</h1>
          <p className="text-sm text-muted-foreground mt-2">Last Updated: June 30, 2026</p>
        </div>
        <div className="prose prose-invert max-w-none text-sm text-muted-foreground space-y-6 leading-relaxed">
          <p>
            Our website utilizes minimal client-side identifiers. By browsing the site, you agree to our use of strictly necessary storage items.
          </p>

          <h3 className="text-base font-semibold text-foreground mt-8">1. No Third-Party Tracking Cookies</h3>
          <p>
            We do not use advertising tracking cookies, Facebook Pixels, or Google Analytics. We do not load scripts that track your browsing habits across the web.
          </p>

          <h3 className="text-base font-semibold text-foreground mt-8">2. Strictly Necessary Storage</h3>
          <p>
            We utilize browser `localStorage` to hold your session details when you sign in or join the waitlist. This enables the website to display your "Signed in" profile page and authenticate support tickets.
          </p>
        </div>
      </main>
      <Footer />
    </div>
  );
}

function ErrorPage() {
  const [errorType, setErrorType] = useState('404');
  const [errorMsg, setErrorMsg] = useState('The page you are looking for does not exist.');

  useEffect(() => {
    const params = new URLSearchParams(window.location.hash.split('?')[1] || '');
    const code = params.get('code') || '404';
    setErrorType(code);

    if (code === 'connection_failed') {
      setErrorMsg('Could not establish secure communication with the Merlin licensing proxy. Please verify your local network connection.');
    } else if (code === 'token_expired') {
      setErrorMsg('Your waitlist activation link is malformed, expired, or has already been utilized. Please register again to trigger a new link.');
    } else if (code === 'revoked') {
      setErrorMsg('Your waitlist slot or license key has been deactivated. Please file a support ticket to reactivate your slot.');
    } else {
      setErrorMsg('The requested subpage or route was not found in our pre-alpha build registry.');
    }
  }, []);

  return (
    <div className="min-h-screen bg-background text-foreground">
      <Header />
      <main className="mx-auto max-w-xl px-6 py-20 text-center">
        <div className="surface-card p-10 border border-border bg-surface relative overflow-hidden text-center space-y-6">
          <div className="absolute -right-12 -top-12 h-32 w-32 rounded-full bg-destructive opacity-10 blur-2xl"></div>

          <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-destructive/10 text-destructive mb-4">
            <AlertTriangle className="h-8 w-8" />
          </div>

          <p className="font-mono text-xs uppercase tracking-[0.2em] text-destructive">// ERROR: {errorType.toUpperCase()}</p>
          
          <h1 className="font-display text-3xl font-semibold tracking-tight text-foreground">
            {errorType === '404' ? 'Page Not Found' : 
             errorType === 'connection_failed' ? 'Connection Outage' :
             errorType === 'token_expired' ? 'Link Expired' : 
             'Access Denied'}
          </h1>
          
          <p className="text-sm text-muted-foreground leading-relaxed">
            {errorMsg}
          </p>

          <div className="pt-6 flex flex-col sm:flex-row gap-3 justify-center">
            <a 
              href="#" 
              className="inline-flex items-center justify-center gap-2 rounded-xl bg-surface border border-border px-5 py-3 text-xs font-semibold text-foreground hover:bg-secondary transition-colors"
            >
              ← Back to Home
            </a>
            <a 
              href="#support" 
              className="inline-flex items-center justify-center gap-2 rounded-xl bg-spectrum animate-spectrum px-5 py-3 text-xs font-semibold text-primary-foreground"
            >
              File Support Ticket <ArrowRight className="h-3 w-3" />
            </a>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}

function Requirements() {
  const [cpu, setCpu] = useState('i5');
  const [ram, setRam] = useState('16');
  const [vram, setVram] = useState('4');
  const [checkResult, setCheckResult] = useState<null | 'pass' | 'warning' | 'fail'>(null);

  const handleCheck = (e: React.FormEvent) => {
    e.preventDefault();
    const ramNum = parseInt(ram);
    const vramNum = parseInt(vram);

    if (cpu === 'i3' || ramNum < 16 || vramNum < 4) {
      if (vramNum < 4 && ramNum >= 16 && cpu !== 'i3') {
        // Only missing GPU memory, will fallback to CPU (slower)
        setCheckResult('warning');
      } else {
        setCheckResult('fail');
      }
    } else {
      setCheckResult('pass');
    }
  };

  return (
    <div className="min-h-screen bg-background text-foreground">
      <Header />
      <main className="mx-auto max-w-4xl px-6 py-20">
        <a href="#" className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors mb-12">
          ← Back to home
        </a>
        
        <div className="space-y-2 mb-12 text-center">
          <p className="font-mono text-xs uppercase tracking-[0.2em] text-spectrum">// HARDWARE VALIDATION</p>
          <h1 className="font-display text-4xl font-semibold tracking-tight sm:text-5xl">System Requirements</h1>
          <p className="text-sm text-muted-foreground mt-2">
            Ghostwheel runs completely locally on your hardware. Verify your specs before downloading.
          </p>
        </div>

        {/* Requirements Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
          <div className="surface-card p-6 border border-border bg-surface relative overflow-hidden">
            <Cpu className="h-8 w-8 text-spectrum-5 mb-4" />
            <h3 className="text-base font-semibold text-foreground mb-1">Processor (CPU)</h3>
            <p className="text-xs font-mono text-muted-foreground mb-4">Core Orchestrator</p>
            <ul className="space-y-2 text-xs text-muted-foreground">
              <li><strong>Minimum</strong>: Intel Core i5 / AMD Ryzen 5</li>
              <li><strong>Recommended</strong>: Intel Core i7 / AMD Ryzen 7</li>
              <li><strong>Architecture</strong>: x64 Required</li>
            </ul>
          </div>

          <div className="surface-card p-6 border border-border bg-surface relative overflow-hidden">
            <HardDrive className="h-8 w-8 text-spectrum-4 mb-4" />
            <h3 className="text-base font-semibold text-foreground mb-1">System RAM</h3>
            <p className="text-xs font-mono text-muted-foreground mb-4">Context Retention</p>
            <ul className="space-y-2 text-xs text-muted-foreground">
              <li><strong>Minimum</strong>: 16 GB System Memory</li>
              <li><strong>Recommended</strong>: 32 GB DDR4 / DDR5</li>
              <li><strong>Speed</strong>: DDR3 or faster</li>
            </ul>
          </div>

          <div className="surface-card p-6 border border-border bg-surface relative overflow-hidden">
            <Sparkle className="h-8 w-8 text-spectrum-3 mb-4" />
            <h3 className="text-base font-semibold text-foreground mb-1">Graphics (GPU)</h3>
            <p className="text-xs font-mono text-muted-foreground mb-4">Model Acceleration</p>
            <ul className="space-y-2 text-xs text-muted-foreground">
              <li><strong>Minimum</strong>: 4 GB Dedicated VRAM</li>
              <li><strong>Recommended</strong>: 8 GB+ Dedicated (RTX)</li>
              <li><strong>APIs</strong>: CUDA 12.x+ / Vulkan 1.3+</li>
            </ul>
          </div>
        </div>

        {/* Interactive Pre-flight Checker */}
        <div className="surface-card p-8 border border-border bg-surface relative overflow-hidden max-w-2xl mx-auto">
          <div className="absolute -right-12 -top-12 h-32 w-32 rounded-full bg-spectrum opacity-10 blur-2xl"></div>
          
          <h2 className="font-display text-xl font-semibold mb-6">Pre-flight Hardware Checker</h2>
          
          <form onSubmit={handleCheck} className="space-y-6">
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
              <div>
                <label htmlFor="hardware-cpu" className="block text-xs font-mono uppercase tracking-wider text-muted-foreground mb-2">CPU Model</label>
                <select 
                  id="hardware-cpu"
                  value={cpu} 
                  onChange={(e) => { setCpu(e.target.value); setCheckResult(null); }}
                  className="w-full rounded-xl border border-border bg-surface-elevated/50 px-4 py-3 text-xs text-foreground focus:outline-none focus:ring-2 focus:ring-ring"
                >
                  <option value="i3">i3 or lower / AMD equiv.</option>
                  <option value="i5">i5 / Ryzen 5 (Minimum)</option>
                  <option value="i7">i7 / Ryzen 7 or higher</option>
                </select>
              </div>

              <div>
                <label htmlFor="hardware-ram" className="block text-xs font-mono uppercase tracking-wider text-muted-foreground mb-2">System RAM</label>
                <select 
                  id="hardware-ram"
                  value={ram} 
                  onChange={(e) => { setRam(e.target.value); setCheckResult(null); }}
                  className="w-full rounded-xl border border-border bg-surface-elevated/50 px-4 py-3 text-xs text-foreground focus:outline-none focus:ring-2 focus:ring-ring"
                >
                  <option value="8">8 GB or lower</option>
                  <option value="16">16 GB (Minimum)</option>
                  <option value="32">32 GB or higher</option>
                </select>
              </div>

              <div>
                <label htmlFor="hardware-vram" className="block text-xs font-mono uppercase tracking-wider text-muted-foreground mb-2">GPU VRAM</label>
                <select 
                  id="hardware-vram"
                  value={vram} 
                  onChange={(e) => { setVram(e.target.value); setCheckResult(null); }}
                  className="w-full rounded-xl border border-border bg-surface-elevated/50 px-4 py-3 text-xs text-foreground focus:outline-none focus:ring-2 focus:ring-ring"
                >
                  <option value="2">2 GB Dedicated or lower</option>
                  <option value="4">4 GB Dedicated (Minimum)</option>
                  <option value="8">8 GB+ Dedicated VRAM</option>
                </select>
              </div>
            </div>

            <button 
              type="submit"
              className="w-full inline-flex items-center justify-center gap-2 rounded-xl bg-spectrum animate-spectrum px-5 py-3.5 text-xs font-semibold text-primary-foreground shadow-md hover:opacity-95 transition-opacity"
            >
              Verify Hardware Compatibility
            </button>
          </form>

          {checkResult && (
            <div className="mt-8 border-t border-border/60 pt-6">
              {checkResult === 'pass' && (
                <div className="bg-spectrum-5/10 border border-spectrum-5/20 p-5 rounded-xl space-y-2">
                  <div className="flex items-center gap-2">
                    <span className="relative flex h-2.5 w-2.5">
                      <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-spectrum-5 opacity-75"></span>
                      <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-spectrum-5"></span>
                    </span>
                    <h4 className="font-display text-sm font-semibold text-foreground">Hardware Compatible</h4>
                  </div>
                  <p className="text-xs text-muted-foreground leading-relaxed">
                    Your machine fully meets the local-first execution requirements. You can run Ghostwheel models with full hardware acceleration (CUDA/Vulkan) enabled.
                  </p>
                </div>
              )}

              {checkResult === 'warning' && (
                <div className="bg-yellow-500/10 border border-yellow-500/20 p-5 rounded-xl space-y-2">
                  <div className="flex items-center gap-2 text-yellow-500">
                    <AlertTriangle className="h-4 w-4" />
                    <h4 className="font-display text-sm font-semibold">VRAM Warning (CPU Fallback Mode)</h4>
                  </div>
                  <p className="text-xs text-muted-foreground leading-relaxed">
                    Your graphics memory is below the 4 GB limit. The agent will run in CPU fallback execution mode. Inference speeds will be slower, but core agent capabilities remain fully active.
                  </p>
                </div>
              )}

              {checkResult === 'fail' && (
                <div className="bg-destructive/10 border border-destructive/20 p-5 rounded-xl space-y-2">
                  <div className="flex items-center gap-2 text-destructive">
                    <AlertTriangle className="h-4 w-4" />
                    <h4 className="font-display text-sm font-semibold">Hardware Unsupported</h4>
                  </div>
                  <p className="text-xs text-muted-foreground leading-relaxed">
                    Your system specifications are below the minimum threshold. To run local agent loops and prevent memory allocation crashes, you must upgrade your RAM or GPU VRAM.
                  </p>
                </div>
              )}
            </div>
          )}
        </div>
      </main>
      <Footer />
    </div>
  );
}

export default App;
