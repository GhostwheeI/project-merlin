# Ghostwheel

> **Local-first, privacy-preserving AI developer agent running on your hardware.**

Ghostwheel is a Windows desktop application that integrates a developer agent with on-device LLM inference. Built on the **Merlin Framework**, it runs completely inside your local boundary to eliminate API token billing, network lag, and prompt telemetry.

*Note: This repository is the public release tracker, documentation home, and community hub for Ghostwheel. The core runtime engine is proprietary and closed-source.*

---

## Key Features

* **Zero-Telemetry Local Inference**: Powered by a pinned `llama-server` sidecar. Your prompts, code, and chat history stay on your local disk.
* **Hardware Acceleration**: Automatic GPU detection and acceleration using **NVIDIA CUDA** and **Vulkan**, with seamless fallback to CPU execution.
* **Safe-by-Design Tooling**: Execution sandboxing with user confirmation gates for destructive terminal commands, alongside SSRF-restricted network tools.
* **Offline Capability**: Features a local licensing cache that allows you to operate completely offline for up to 14 days before needing a re-verification check.

---

## Installation & Getting Started

Ghostwheel is distributed as a signed MSI installer for Windows 10 and 11. 

1. **Download**: Grab the latest signed installer for your hardware profile from our [Download Center](https://ghostwheel.ai/#releases) (CUDA, Vulkan, or CPU-only).
2. **Verify Checksum**: Always verify the installer's integrity by comparing the SHA-256 hash:
   ```powershell
   Get-FileHash .\Ghostwheel-Installer-CUDA.msi -Algorithm SHA256
   ```
3. **Run**: Run the installer and input your waitlist license key on first boot.

For advanced configuration (VRAM allocation, context scaling, custom model manifests), visit our [Documentation Portal](https://ghostwheel.ai/#docs).

---

## Project Status: Pre-Alpha

Ghostwheel is currently in a private pre-alpha phase, with active builds compiling on our local loop. 

* To lock in your spot and receive early-access release keys, join the waitlist at [Ghostwheel.ai](https://ghostwheel.ai/#download).
* If you want to speed up the compiler and back Rydell's late-night build sessions, you can [Buy Rydell a Coffee](https://buymeacoffee.com/rydell).

---

## Why Closed Source?

While Ghostwheel is built on top of incredible open-source libraries (such as `llama.cpp` and `Tauri`), the core orchestration layers, safety guards, and commercial integrations are proprietary. 

This model allows us to:
1. Guarantee rigorous verification bounds on local command-execution safety before wide release.
2. Fund full-time development and active compiler maintenance.
3. Ensure absolute compliance with licensing and distribution policies.

We are fully committed to open-source compliance; all third-party notices and licenses are documented in our [Third-Party Disclosures](https://ghostwheel.ai/#licenses).

---

## Community & Feedback

* **Bug Reports & Feature Requests**: Please use our [Issue Tracker](https://github.com/GhostwheeI/project-merlin/issues) to report bugs or suggest enhancements.
* **Security Disclosures**: Found a vulnerability? Please refer to our [Security Policy](SECURITY.md) for secure reporting channels.
* **General Support**: File a support ticket at our [Help Desk](https://ghostwheel.ai/#support).