# NASSIJ AI MOROCCO (نسيج) — Moroccan Haute Couture & AI Heritage Platform

## 📖 Project Overview

**NASSIJ AI Morocco (نسيج)** is a luxury bilingual (**English / Arabic RTL**) web platform and digital heritage museum that bridges **ten centuries of Moroccan Haute Couture craftsmanship** with **generative AI co-creation** and **cryptographic provenance**.

Designed to empower master artisans (*Maâlems*) and women-led embroidery cooperatives across **Tangier, Fez, Rabat, and Casablanca**, the platform eliminates traditional luxury middlemen by connecting global clients directly with certified workshops—guaranteeing a **90% direct revenue payout** to the artisans while preserving ancestral textile techniques through a verifiable **Digital Garment Passport**.

---

## 🎯 Core Pillars & Value Proposition

| Pillar | Description |
| :--- | :--- |
| **🎨 AI Bespoke Co-Creation** | Interactive 5-step studio allowing clients to customize silhouette, noble fabrics (*Mobra*, *Bencherif Brocade*, *Duchesse Satin*, *Mlifa*), regional embroidery (*Tarz Fassi*, *Tarz Rbati*, *Majboud*), *Mdamma* belts, and *Sfifa* braiding before matching with a specialized master atelier. |
| **🏛️ Digital Heritage Museum** | Immersive archival experience documenting four imperial dynasties (*Almoravid*, *Merinid*, *Saadian*, *Alaouite*), four master craft pillars, and synthesized Medina workshop soundscapes via the Web Audio API. |
| **🔐 Cryptographic Provenance** | Live Digital Passport verification system (`MAR-FEZ-2026-0001`) authenticating artisan attribution, material origin, and hand-crafting hours for every bespoke piece. |
| **⚖️ Fair-Trade Economic Model** | Transparent 90/10 revenue split—90% paid directly to the artisan cooperative and 10% reinvested into platform R&D, heritage archiving, and youth apprenticeships. |

---

## ✨ Key Technical Features

- **3D Cylindrical Hero Carousel (`ReelmarkHeroCarousel`)**: Physics-driven arched 3D showcase engineered with custom SVG dynamic clip-paths, 1:1 pointer drag tracking, momentum decay, and reduced-motion accessibility fallbacks.
- **Interactive AI Caftan Studio (`index.html`)**: Real-time multi-step garment configurator with visual swatch selection, custom prompt presets, and dynamic price/timeline estimation.
- **Curated Haute Couture Catalog (`collection.html`)**: 14-piece filterable showcase featuring live search, regional/occasion filtering, multi-criteria sorting, detailed inspection modals, and `localStorage`-persisted wishlist favorites.
- **Interactive Digital Museum (`museum.html`)**:
  - **Imperial Dynasties Timeline**: Interactive historical exhibits from 1040 CE to the present day.
  - **Master Craft Deep-Dives**: Modal archives exploring *24k Gold Majboud*, *Bencherif Drawlooms*, *Sabra Silk Aqaad*, and *Sfifa Braiding*.
  - **Medina Atelier Soundscapes**: Real-time procedural acoustic synthesis of loom shuttles, *Sfifa* braiding spindles, and metallic thread tensioning using the native **Web Audio API**.
- **Seamless Bilingual Localization (EN / AR)**: Instant client-side switching between English (`dir="ltr"`) and Arabic (`dir="rtl"`) across **246 translation keys**, with full typographic and layout mirroring.
- **ScrollCraft Motion Engine**: Custom viewport intersection observers, cursor-tracked radial spotlights, 3D perspective card tilt, and scroll progress indicators.

---

## 📂 Project Structure

```text
caftan/
├── index.html                 # Main landing page, 3D Hero Carousel & AI Caftan Studio
├── collection.html            # 14-piece Haute Couture filterable catalog & detail modals
├── museum.html                # Interactive Digital Heritage Museum & Provenance Simulator
├── styles.css                 # Core luxury design system, responsive grid & RTL rules
├── scrollcraft.css            # Scroll-driven reveal, spotlight & 3D tilt styles
├── script.js                  # Application state, 246-key i18n engine & interactive modals
└── scrollcraft.js             # ScrollCraft motion, spotlight & 3D card tilt engine
```

---

## 🛠️ Tech Stack

- **Markup & Semantics**: HTML5, WAI-ARIA landmarks, semantic dialog modals
- **Styling & Layout**: Vanilla CSS3 (Custom Properties, CSS Grid/Flexbox, Logical Properties for RTL, Glassmorphism)
- **Interactivity & Motion**: Vanilla JavaScript (ES2022+), SVG Dynamic Path Clipping, `IntersectionObserver`, Web Audio API, `localStorage` state persistence
- **Typography**: *Cormorant Garamond* (Editorial Serif), *Plus Jakarta Sans* (UI Sans), *Amiri* (Classical Arabic Serif)

---

## 🚀 Quick Start

No build step or external dependencies required—runs natively in any modern browser.

1. **Clone the repository:**
   ```bash
   git clone https://github.com/marouan-sell/NASSIJ-AI.git
   cd NASSIJ-AI
   ```
2. **Start a local static server** (or open `index.html` directly):
   ```bash
   npx serve .
   # or
   python -m http.server 8000
   ```
3. **Open in browser:**
   Navigate to `http://localhost:8000`.

---

## 📜 Attribution

Developed under the **INNOVERT / CIDEAL Tangier Pilot** initiative to empower Moroccan master artisans (*Maâlems*) and women's embroidery cooperatives across Tangier and Fez.
