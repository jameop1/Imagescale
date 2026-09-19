# ExactSize — Precision In-Browser Image Compressor to Exact File Limit

> **Shrink screenshots and photos strictly under target limits (e.g. 100 KB, 50 KB, 20 KB, 8 MB) directly in the browser. Zero server uploads, 100% privacy, and instant visual feedback.**

[![License: MIT](https://img.shields.io/badge/License-MIT-black.svg)](LICENSE)
[![Pure Vanilla JS](https://img.shields.io/badge/Tech-Vanilla%20HTML5%20%2F%20CSS3%20%2F%20JS-black)](index.html)
[![Zero Uploads](https://img.shields.io/badge/Privacy-100%25%20Client--Side-brightgreen)](#client-side-security--privacy)

---

## ⚡ Overview

When government visa portals, university submission systems, job boards, Discord (without Nitro), or banking sites reject uploads with strict limits like *"must be under 100 KB"*, standard cloud compressors require endless trial-and-error.

**ExactSize** solves this with an autonomous **Dual-Axis Binary Search Algorithm** executed entirely within local device memory via HTML5 Canvas. It automatically tunes compression quality and dimensions until the output strictly satisfies the target ceiling without sacrificing visual clarity.

---

## ✨ Features

- **🎯 Exact File Limit Convergence**:
  - One-click presets: `20 KB`, `50 KB`, `100 KB`, `200 KB`, `500 KB`, `1 MB`, `5 MB`, `8 MB (Discord)`.
  - Precision custom size input with dynamic `KB` / `MB` unit switching.
  - Strict 2.5% safety buffer toggle to guarantee submission portals never reject your file.
- **🛡️ 100% In-Browser Privacy**:
  - Zero server endpoints. No data, pixels, or metadata are ever transmitted over the network.
  - Safe for sensitive identification artifacts: passports, national IDs, licenses, and confidential contracts.
- **🔍 Optical Inspection Split-Screen Lens**:
  - Hardware-accelerated CSS `clip-path` split viewer comparing original vs compressed artifacts in real-time.
  - Interactive drag handle and multi-level zoom inspection (`1X FIT`, `2X ZOOM`, `3X PIXEL`).
  - Pixel-perfect spatial alignment with zero displacement across compression levels.
- **📊 Real-Time Calibration Telemetry**:
  - Boundary proximity visualizer and compliance delta gauge.
  - Live readout of dimensions, calibrated quality percentage, convergence passes, and latency in milliseconds.
- **💾 Universal Export & File System Access**:
  - Direct disk writing via Chromium File System Access API (`showSaveFilePicker`), falling back gracefully to standard blob downloads.
  - Native clipboard copying (`navigator.clipboard.write`) for instant pasting into Discord, Slack, or email.
- **🎨 Modern Aesthetic**:
  - Architectural monochrome grid design.
  - Instant toggle between **Bone White** (Light) and **Charcoal** (Dark) themes.
  - Reserved, clean ad containers (`#ad-slot-top`, `#ad-slot-bottom`) for responsive display network integration.
- **🚀 SEO & GEO Optimized**:
  - Semantic HTML5 content layering with schema.org structured JSON-LD (`WebApplication`, `FAQPage`).

---

## 🚀 Quick Start

ExactSize is completely self-contained in a single static HTML file with no build steps, Node.js runtime, or external dependencies required.

### Run Locally
Simply open `index.html` in any modern web browser, or serve with any local HTTP daemon:

```bash
# Python 3
python -m http.server 8080

# Node / npx
npx serve .
```

Then navigate to `http://localhost:8080`.

---

## 📁 Repository Structure

```
├── index.html       # Self-contained single-page web application (HTML, CSS, JS)
├── netlify.toml     # Production security headers and hosting configuration
├── .gitignore       # Git ignore rules
└── README.md        # Documentation and architectural overview
```

---

## 🔒 Security Headers

The repository includes a ready-to-deploy [`netlify.toml`](netlify.toml) configured with strict HTTP response headers:
- `X-Frame-Options: DENY`
- `X-Content-Type-Options: nosniff`
- `Referrer-Policy: strict-origin-when-cross-origin`
- `Permissions-Policy: camera=(), microphone=(), geolocation=()`

---

## 📄 License

Distributed under the [MIT License](LICENSE).
