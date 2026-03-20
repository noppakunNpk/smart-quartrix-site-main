# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

**Smart Quartrix Business Consulting** — A single-page marketing/portfolio website for a technology-focused business consulting firm. The site showcases consulting services across Hardware and Software divisions, with a project gallery for each. Built as a TanStack Start SPA with React 19.

## Brand Identity

### Logo & Colors
- **Primary Blue:** `#0077FF` (electric blue from logo)
- **Accent Blue:** `#00AAFF` (lighter cyan-blue highlight)
- **Accent Purple:** `#7B5EA7` (violet accent from logo "Q")
- **Gold/Champagne:** `#C9A96E` (text accent from logo subtitle)
- **Dark Navy:** `#0A1628` (deep background for contrast sections)
- **Light Background:** `#F7F9FC` (main page background — keep it LIGHT, not dark)
- **Surface White:** `#FFFFFF`
- **Text Primary:** `#1A2332`
- **Text Secondary:** `#5A6A7A`

### Design Direction
- **Tone:** Premium-tech, clean, professional — NOT a dark-mode site
- **Feel:** Light and airy with strategic dark accent sections
- **Typography:** Modern geometric sans-serif (e.g., Outfit, General Sans, or Satoshi for headings; DM Sans or Plus Jakarta Sans for body)
- **Logo:** Use the uploaded SQ logo image (`/public/images/logo.png`). The logo has a dark/transparent background so it works best on dark sections or with proper treatment on light backgrounds. Consider a light variant or use it in the navbar with a dark strip.
- **Visual Style:** Subtle gradients inspired by the logo's blue-to-purple spectrum, glass morphism accents, circuit/tech patterns used sparingly

## Commands

- **Dev server:** `pnpm dev` (port 5173)
- **Build (dev):** `pnpm build:dev`
- **Build (prod):** `pnpm build:prod`
- **Preview:** `pnpm preview`
- **Tests:** `pnpm test` (Vitest)
- **Add shadcn component:** `pnpm dlx shadcn@latest add <component>`

## Architecture

- **Framework:** TanStack Start (SPA mode) + Vite 7 + React 19
- **Routing:** TanStack Router with file-based routing. Routes live in `src/routes/`. The route tree is auto-generated in `src/routeTree.gen.ts` — do not edit manually.
- **Styling:** Tailwind CSS v4 (via `@tailwindcss/vite` plugin). Global styles in `src/styles.css`.
- **UI components:** shadcn/ui (new-york style, Zinc base color, CSS variables, Lucide icons). Components in `src/components/ui/`. Config in `components.json`.
- **Forms:** TanStack Form + Zod validation
- **Path aliases:** `@/*` maps to `./src/*` (configured in tsconfig.json, resolved by `vite-tsconfig-paths`)

## Site Structure (Single Page — Sections)

This is a **single-page static website**. All content lives on one route (`/`) composed of scrollable sections:

### Section Order:
1. **Hero** — Full-width hero with tagline, brief intro, CTA button
2. **About** — Company overview, mission, what Smart Quartrix does
3. **Services** — Two main divisions: Hardware & Software consulting
4. **Hardware Projects** — Gallery/grid of hardware consulting projects (image + title + short description, NOT clickable/no detail pages)
5. **Software Projects** — Gallery/grid of software consulting projects (image + title + short description, NOT clickable/no detail pages)
6. **Partners** — Logo strip or grid of partner companies
7. **Contact** — Contact form or contact info section
8. **Footer** — Company info, social links, copyright

### Key Constraints:
- **Static content only** — no backend, no API calls needed
- **Project cards are display-only** — show image, project name, short description. No click-through, no detail pages
- **English language** throughout
- **Hardware & Software sections** must be visually distinct but cohesive
- **Responsive** — mobile-first, works on all screen sizes

## Key File Structure (Target)

```
src/
├── routes/
│   ├── __root.tsx          # Root layout (navbar + footer)
│   └── index.tsx           # Landing page — composes all sections
├── components/
│   ├── layouts/
│   │   ├── AppNavbar.tsx   # Sticky navbar with logo + section links
│   │   └── AppFooter.tsx   # Footer
│   ├── sections/
│   │   ├── HeroSection.tsx
│   │   ├── AboutSection.tsx
│   │   ├── ServicesSection.tsx
│   │   ├── HardwareProjectsSection.tsx
│   │   ├── SoftwareProjectsSection.tsx
│   │   ├── PartnersSection.tsx
│   │   └── ContactSection.tsx
│   └── ui/                 # shadcn components
├── data/
│   ├── hardware-projects.ts  # { title, description, image } []
│   ├── software-projects.ts  # { title, description, image } []
│   ├── partners.ts           # Partner logos/names
│   └── services.ts           # Service descriptions
├── styles.css              # Global Tailwind styles + CSS variables
└── config/
    └── site.ts             # Site metadata, social links, contact info
```

## Environment Variables

Configured via `.env` (see `.env.example`):
- `VITE_CONTACT_EMAIL` — contact email address (optional)

## Deployment

Dockerized with nginx. Production runs on port 8888, dev on 8080.

## Design Gotchas

- The SQ logo has a DARK/BLACK background — on light sections, either: use a cropped/transparent version, place it in a dark navbar, or apply a dark pill/badge behind it
- Keep overall page feel LIGHT (white/light gray backgrounds) with strategic dark accent bands (hero, CTA sections)
- The blue-purple gradient from the logo should appear as accent elements (buttons, hover states, divider lines, section highlights) — not as full-page backgrounds
- Hardware section could use a slightly warmer or more industrial accent; Software section could lean cooler/more digital
- Project cards: use consistent aspect ratios for images, subtle hover elevation, rounded corners
- Smooth scroll navigation between sections
