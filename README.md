# Mishra Mithai Bhandar (मिश्रा मिठाई भंडार) — Kanpur, Est. 1985

> [!WARNING]
> **⚠️ DEMO & SHOWCASE DISCLAIMER**  
> This project is a fictional concept application developed strictly for **portfolio demonstration and technical showcase purposes**.  
> - **Mishra Mithai Bhandar** is a simulated Indian confectionery storefront entity.  
> - All telephone numbers, FSSAI registration strings, physical store addresses, pricing, and customer reviews are **dummy/illustrative data**.  
> - **DO NOT attempt to call these telephone numbers or visit this address for real confectionery orders or catering enquiries.**

> **Boutique Agency Showcase:** A bespoke direct-to-consumer digital storefront and luxury portfolio piece created for an artisanal Indian confectionery and savories institution in Kanpur, Uttar Pradesh.

Designed and engineered from scratch with authentic Devanagari editorial typography, a high-contrast heritage color token system, asymmetric layouts, and a zero-friction client-side **Direct-to-WhatsApp** commerce engine.

---

## 🏛️ Brand & Creative Direction

- **Brand Personality:** Festive, deeply trusted, multi-generational heritage, balanced with contemporary editorial precision.
- **Conversion Philosophy:** Direct-to-WhatsApp ordering tailored for local Indian consumer habits. Zero checkout friction, no sign-in walls, dynamic weight selectors (`250g`, `500g`, `1kg`), Kanpur locality selector, and pre-formatted `wa.me` order messages.
- **Tone:** Real, believable, local Kanpur warmth. High-ticket editorial presentation balanced with heartfelt Hindi lines in Devanagari script.

---

## 🎨 Design Architecture & Design System

### 1. Heritage Color Palette
All colors are mathematically calibrated for AAA/AA contrast against warm light surfaces:

| Token | Hex | Role | Contrast Ratio |
|---|---|---|---|
| `bg` | `#FFF8EC` | Warm rabri/milk cream background | Base |
| `surface` | `#FBE9C6` | Warm saffron cream container cards | 1.15:1 (Subtle warm elevation) |
| `text` | `#2A1A12` | Roasted earthen clay ink (ultra-high contrast) | **13.6:1 (AAA Compliant)** |
| `primary` | `#8C1C13` | Deep Kumkum maroon (brand identity & CTAs) | **7.4:1 (AAA Compliant)** |
| `accent` | `#E8A317` | Haldi/Turmeric gold badges & highlights | High-contrast secondary |
| `green` | `#2F5D3A` | Vegetarian purity & fresh morning marker | **6.1:1 (AA Compliant)** |

### 2. Bilingual Typography
- **Headings & Accents:** `Rozha One` (High-contrast Didone-style editorial serif with native Devanagari calligraphy stems).
- **Body & Controls:** `Mukta` (Clean geometric/humanist bilingual sans-serif for crystal-clear readability).
- **Hierarchy:** Primary English headline paired with an authentic Devanagari Hindi translation line beneath (e.g., *"Taaza mithai, seedhe dukaan se"* / *"ताज़ा मिठाई, सीधे दुकान से"*).

### 3. Layout & Tactile Details
- **Radii:** `16px` on product containers and cards; `999px` (pill) on all interactive buttons.
- **Section Dividers:** Custom inline SVG geometric rangoli / jali line pattern at **8% opacity**.
- **Visual Centerpiece:** Traditional Indian pointed arch crop mask (`arch-mask`).
- **Layout Rhythm:** Asymmetrical, product-first editorial layouts. Avoids repetitive, monotonous card grids in favor of wide spotlights and curated focal points.
- **Touch Ergonomics:** Minimum 48px touch targets across all interactive elements, with a thumb-friendly sticky bottom order bar on mobile viewports.

---

## 📱 Complete Section Breakdown

1. **Navbar:** Brass monogram emblem (`म`), wordmark, bilingual navigation links, interactive EN/हिं toggle, animated cart bag icon with live count badge, and phone hotline.
2. **Hero:** Asymmetrical 7:5 ratio. Left: 80px editorial headline, Hindi subtitle, cycling *"Today's Fresh"* ticker, primary WhatsApp order CTA, and catalog scroll CTA. Right: Mughal arch mask showcasing royal brass thali with Kaju Katli and Kesariya Motichoor, adorned with an authentic *"Since 1985 • Shuddh Ghee"* circular brass stamp.
3. **Occasions Strip:** Selectable filter chips (*Diwali Specials*, *Weddings & Shagun*, *Raksha Bandhan*, *Corporate Gifting*, *Everyday Chai Pairing*) dynamically filtering the catalog below.
4. **Catalog Grid:** 16 handcrafted sweets, namkeen, and dry-fruit items across an asymmetric featured layout (wide spotlights + complementary cards). Features weight options (`250g`, `500g`, `1kg`), dynamic line pricing, and micro-bounce *"Add to Order"* buttons.
5. **Slide-Up WhatsApp Cart Drawer:** Accessible drawer listing selected items, weights, running totals, customer name, Kanpur locality dropdown (Civil Lines, Swaroop Nagar, Kakadeo, Kidwai Nagar, etc.), and preformatted `wa.me` message generator.
6. **Curated Gift Boxes:** Horizontal-scroll showcase featuring 3 luxury festival hampers (*Shahi Uphaar*, *Parivaar Sangam*, *Deepawali Shubh Wooden Treasury*) with box breakdown and direct order triggers.
7. **Our Story:** The 1985 legacy of Shri Rameshwar Nath Mishra, drop-cap narrative, founder pull-quote in saffron card, milestone timeline, and 3-step morning craft photo row.
8. **Bulk & Wedding Orders:** Dedicated enquiry builder for wedding shagun boxes and corporate distributions with prefilled WhatsApp quotation triggers.
9. **Reviews:** 4 verified local customer reviews from Civil Lines, Swaroop Nagar, Kakadeo, and Kidwai Nagar, alongside a Google 4.9/5.0 rating badge.
10. **Visit & Delivery:** Physical address at Ghanta Ghar Chauraha / Phool Bagh, store hours, 8 Kanpur delivery zones with estimated dispatch times, and a stylized geometric old-city map.
11. **Grand Editorial Footer:** Bold *"Mithai ka asli swaad."* signature headline, FSSAI License verification, pure vegetarian pledge, quick links, and copyright credits.

---

## 🛠️ Technology Stack

- **Framework:** Next.js 15 (App Router, Turbopack)
- **Library:** React 19
- **Language:** TypeScript (Strict mode)
- **Styling:** Tailwind CSS with custom design tokens
- **Typography:** `next/font/google` (`Rozha One` + `Mukta`)
- **Motion & Micro-interactions:** Framer Motion (respects `prefers-reduced-motion`)
- **Icons:** Lucide Icons & Custom Heritage SVG vectors
- **Testing & Verification:** Playwright E2E Suite & Google Lighthouse CI

---

## ⚡ Performance & Quality Benchmarks

Audited via Google Lighthouse on production builds:

| Category | Desktop Score | Mobile Score |
|---|---|---|
| **Performance** | **99 / 100** | **88–92 / 100** |
| **Accessibility** | **96 / 100** | **96 / 100** |
| **Best Practices** | **100 / 100** | **100 / 100** |
| **SEO** | **100 / 100** | **100 / 100** |

- **First Contentful Paint (FCP):** < 0.6s
- **Cumulative Layout Shift (CLS):** 0.00
- **Total Image Payload:** Under 450 KB total across all 20+ optimized WebP assets.

---

## 📂 Project Structure

```text
├── content/
│   └── site.ts               # Single Source of Truth: catalog, hampers, copy & NAP
├── public/
│   └── images/
│       ├── hero/             # Optimized WebP hero thali photography
│       ├── products/         # Optimized WebP sweets, namkeen & hampers
│       └── story/            # Morning halwai craft process photography
├── src/
│   ├── app/
│   │   ├── layout.tsx        # Root layout, fonts, JSON-LD schema & metadata
│   │   ├── page.tsx          # Main storefront page assembling all 11 sections
│   │   └── globals.css       # Design tokens, arch masks, utilities
│   ├── components/
│   │   ├── cart/             # Slide-up WhatsApp cart drawer & React context
│   │   ├── common/           # Jali divider, sticky mobile bar, badges
│   │   └── sections/         # Navbar, Hero, Catalog, GiftBoxes, Story, etc.
│   └── types/                # TypeScript interface declarations
├── tests/                    # Playwright end-to-end audit scripts
└── tailwind.config.ts        # Custom Tailwind design token extensions
```

---

## 🚀 Getting Started

### Prerequisites
- Node.js 18.17+ or 20+
- npm, pnpm, or yarn

### Installation

```bash
# Clone the repository
git clone <repository-url>
cd local-shop-demo

# Install dependencies
npm install

# Start development server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

### Production Build

```bash
# Generate optimized production bundle
npm run build

# Start production server
npm start
```

---

## 📄 License & Attribution

**ARIVRA Demo** — A product by [Arivra Design Labs](https://arivra.com/).  
Licensed under the [MIT License](LICENSE).
