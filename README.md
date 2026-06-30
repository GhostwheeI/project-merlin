# Ghostwheel

<p align="center">
  <img src="media/ghostwheel_banner.png" alt="Ghostwheel Banner" width="100%" />
</p>

<p align="center">
  <img src="media/ghostwheel-logo-lg.png" alt="Ghostwheel Logo" width="100" />
</p>

<p align="center">
  <strong>Raw AI agent power, running locally on your hardware.</strong>
</p>

<p align="center">
  <a href="#download"><img src="https://img.shields.io/badge/Release-Pre--Alpha-purple?style=for-the-badge" alt="Pre-Alpha Release" /></a>
  <a href="LICENSE.md"><img src="https://img.shields.io/badge/License-Proprietary-red?style=for-the-badge" alt="Proprietary License" /></a>
  <img src="https://img.shields.io/badge/Platform-Windows-0078d4?style=for-the-badge" alt="Platform: Windows" />
</p>

---

Ghostwheel is a Windows desktop application that integrates a local developer agent with on-device LLM inference. Built on the **Merlin Framework**, it packages a thin Tauri runtime controlling a pinned native `llama-server` sidecar. By running prompt context, file edits, and terminal executions entirely inside your local hardware boundary, Ghostwheel eliminates API token billing, network lag, and prompt telemetry.

*Note: This repository is the public release tracker, documentation home, and community hub for Ghostwheel. The core runtime engine is proprietary and closed-source.*

---

## Application Preview

Below is a mockup of the local developer agent interface executing code-generation and diagnostics logging locally:

<p align="center">
  <img src="media/hero.png" alt="Ghostwheel Desktop Application Interface" width="100%" />
</p>

---

## Why Ghostwheel?

Cloud-based developer agents are powerful, but they expose your proprietary code to third-party servers, require complex API token subscriptions, and fail completely when offline. Ghostwheel provides a local-first alternative without sacrificing capability.

### Comparison Matrix

| Feature | **Ghostwheel (Local)** | **Cloud Agents (SaaS)** | **Raw CLI Wrappers** |
| :--- | :--- | :--- | :--- |
| **Data Privacy** | 🔒 **100% Local** (No telemetry) | ⚠️ Cloud uploads / telemetry | 🔒 Local |
| **Inference Cost** | 💰 **Free / Unlimited** (Your hardware) | 💸 Per-token billing | 💸 API subscription keys |
| **Offline Capability** | ✈️ **Yes** (14-day grace token) | ❌ Requires internet | ❌ Requires internet |
| **Hardware Acceleration** | ⚡ **CUDA & Vulkan** auto-selection | ❌ Runs in cloud VM | ⚠️ Manual setup required |
| **Sandboxed Tooling** | 🛡️ **SSRF & Command Confirmations** | ⚠️ Full container access | ❌ Runs naked on host |

---

## Technical Architecture

Ghostwheel is designed from the ground up to keep the runtime boundary highly secure, resource-efficient, and easy to swap.

```mermaid
graph TD
    User([Developer User]) <-->|Local WebView UI| Tauri[Tauri Desktop Shell]
    Tauri <-->|Local OpenAI HTTP API| Sidecar[llama-server Sidecar]
    Tauri -->|Read/Write serialized queue| SQLite[(Local SQLite Database)]
    Tauri -->|Store key/token| Keyring[Windows Keyring]
    Sidecar <-->|Inference / GGUF loading| HW[Local Hardware CUDA/Vulkan/CPU]
    Tauri -->|Activate/Validate instance label| Proxy[Licensing Proxy Server]
    Proxy <-->|Merchant of Record API| LS[Lemon Squeezy Store]
    
    style User fill:#a855f7,stroke:#fff,stroke-width:2px,color:#fff
    style Tauri fill:#3b82f6,stroke:#fff,stroke-width:2px,color:#fff
    style Sidecar fill:#10b981,stroke:#fff,stroke-width:2px,color:#fff
    style SQLite fill:#1f2937,stroke:#fff,stroke-width:2px,color:#fff
    style Keyring fill:#1f2937,stroke:#fff,stroke-width:2px,color:#fff
    style Proxy fill:#ef4444,stroke:#fff,stroke-width:2px,color:#fff
```

* **Orchestration**: A lightweight Tauri/Rust shell manages the sidecar process lifecycle, SQLite database persistence (`merlin.db`), and local OS credential storage (Keyring).
* **Inference**: Pinned prebuilt `llama-server` instances load the quantized model weights (`Merlin-9B-Coder-Q5_K_M.gguf`). The UI communicates with the model over a standard, loopback-bound OpenAI-compatible HTTP API.
* **Licensing**: Brokered through a stateless license proxy server connected to **Lemon Squeezy** (Merchant of Record). All subscription checks occur without transmitting code or conversation telemetry.

---

## Boot Diagnostics Log

On startup, Ghostwheel executes a full diagnostic checks sequence to verify dependencies and hardware allocation:

```bash
$ ghostwheel boot
[ok]   webview2 runtime: 121.0.x
[ok]   llama-server: b9729 (cuda-13.3-x64)
[ok]   model: Merlin-9B-Coder-Q5_K_M.gguf
       sha256: 7e3c…verified
[ok]   sqlite: %LOCALAPPDATA%\ProjectMerlin\merlin.db
[ok]   license: active · grace 14d
[ok]   network egress: 0 bytes

$ ready_
```

---

## Installation & Getting Started

Ghostwheel is distributed as a signed MSI installer for Windows 10 and 11.

1. **Download**: Fetch the installer matching your hardware profile from our website's **Download Center** (routed at `#releases`).
2. **Verify Checksum**: Always verify the installer's integrity by comparing the SHA-256 hash in PowerShell:
   ```powershell
   Get-FileHash .\Ghostwheel-Installer-CUDA.msi -Algorithm SHA256
   ```
3. **Run**: Run the installer and input your waitlist license key on first boot.

For advanced configuration (VRAM allocation, context scaling, custom model manifests), visit our website's **Docs** section (routed at `#docs`).

---

## Project Status: Pre-Alpha

Ghostwheel is currently in a private pre-alpha phase, with active builds compiling on our local loop.

* To lock in your spot and receive early-access release keys, join the waitlist at our website's **Waitlist Form** (routed at `#download`).
* If you want to speed up the compiler and back Rydell's development, you can **Buy Rydell a Coffee** via the link on our homepage or backer page (routed at `#backer`).

---

## Why Closed Source?

While Ghostwheel is built on top of open-source libraries (such as `llama.cpp` and `Tauri`), the core orchestration layers, safety guards, and commercial integrations are proprietary.

This model allows us to:
1. Guarantee rigorous verification bounds on local command-execution safety before wide release.
2. Fund full-time development and active compiler maintenance.
3. Ensure absolute compliance with licensing and distribution policies.

We are fully committed to open-source compliance; all third-party notices and licenses are documented on the website's **Third-Party Notices** page (routed at `#licenses`).

---

## Community & Feedback

* **Bug Reports & Feature Requests**: Please use our [Issue Tracker](https://github.com/GhostwheeI/project-merlin/issues) to report bugs or suggest enhancements.
* **Security Disclosures**: Found a vulnerability? Please refer to our [Security Policy](SECURITY.md) for secure reporting channels.
* **General Support**: File a support ticket at our website's **Support Ticket Form** (routed at `#support`).