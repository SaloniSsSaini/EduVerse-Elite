# EduVerse Elite — Complete Project Documentation (v2.0)

> **Premium University Platform** — Production-ready, portfolio-grade **full-stack** project.  
> Started as a landing page, upgraded into a **multi-page scalable platform** with APIs, admin architecture, GSAP animations, and CMS-ready data layer.

## Live Demo

**[https://edu-verse-elite.vercel.app](https://edu-verse-elite.vercel.app/)**

| | |
|---|---|
| **Status** | Live on Vercel |
| **Home** | [edu-verse-elite.vercel.app](https://edu-verse-elite.vercel.app/) |
| **Programs** | [/programs](https://edu-verse-elite.vercel.app/programs) |
| **Admissions** | [/admissions](https://edu-verse-elite.vercel.app/admissions) |
| **Faculty** | [/faculty](https://edu-verse-elite.vercel.app/faculty) |
| **Blog** | [/blog](https://edu-verse-elite.vercel.app/blog) |
| **Contact** | [/contact](https://edu-verse-elite.vercel.app/contact) |

**Project status:** Live · 32 routes · Build passes

---

## Table of Contents

1. [Project Overview](#1-project-overview)
2. [What Is Complete (Full Checklist)](#2-what-is-complete-full-checklist)
3. [All Pages & Routes](#3-all-pages--routes)
4. [Tech Stack](#4-tech-stack)
5. [Folder Structure](#5-folder-structure)
6. [Architecture](#6-architecture)
7. [Premium UI/UX Features](#7-premium-uiux-features)
8. [Full-Stack & API](#8-full-stack--api)
9. [Database (Prisma)](#9-database-prisma)
10. [SEO & Performance](#10-seo--performance)
11. [Environment Variables](#11-environment-variables)
12. [How to Run](#12-how-to-run)
13. [Deploy to Vercel](#13-deploy-to-vercel)
14. [Interview / Portfolio Tips](#14-interview--portfolio-tips)

---

## 1. Project Overview

| Item | Detail |
|------|--------|
| **Project Name** | EduVerse Elite |
| **Type** | Multi-page university web platform |
| **Version** | v2.0 (upgraded from landing page) |
| **Framework** | Next.js 15 (App Router) |
| **Language** | TypeScript |
| **Styling** | Tailwind CSS v4 |
| **Brand** | Original fictional university (not a copy of any real site) |
| **Live URL** | [https://edu-verse-elite.vercel.app](https://edu-verse-elite.vercel.app/) |

### What This Project Does

- **Marketing site** — Premium landing page with 11 sections on home
- **Programme hub** — Listing + 6 dynamic detail pages (`/programs/[slug]`)
- **Lead generation** — Forms with Zod validation + API + optional email
- **Content pages** — Faculty, events, blog, campus, contact
- **Admin architecture** — Dashboard to view leads (production-ready structure)
- **SEO** — Sitemap, robots, JSON-LD schema for courses & articles

---

## 2. What Is Complete (Full Checklist)

### ✅ Home Page (11 Sections)

| # | Section | File |
|---|---------|------|
| 1 | Navbar (sticky glass, mobile menu, theme toggle) | `src/components/layout/navbar.tsx` |
| 2 | Hero (GSAP text reveal, parallax, magnetic CTAs) | `src/components/sections/hero.tsx` |
| 3 | Prestige / Authority | `src/components/sections/prestige.tsx` |
| 4 | About (counters, split layout) | `src/components/sections/about.tsx` |
| 5 | Programs (featured cards → `/programs`) | `src/components/sections/programs.tsx` |
| 6 | Why Choose Us | `src/components/sections/why-choose.tsx` |
| 7 | Campus Life | `src/components/sections/campus.tsx` |
| 8 | Testimonials (carousel) | `src/components/sections/testimonials.tsx` |
| 9 | Admissions CTA + Lead Form | `src/components/sections/admissions.tsx` |
| 10 | FAQ (accordion) | `src/components/sections/faq.tsx` |
| 11 | Footer | `src/components/layout/footer.tsx` |

### ✅ Multi-Page Routes

| Route | Status |
|-------|--------|
| `/programs` | ✅ Listing + compare table + brochure download |
| `/programs/[slug]` | ✅ 6 dynamic programme pages (SSG) |
| `/admissions` | ✅ Full page + form + FAQ |
| `/campus-life` | ✅ Campus gallery |
| `/faculty` | ✅ Filterable directory (by department) |
| `/events` | ✅ Event calendar list |
| `/blog` | ✅ News listing |
| `/blog/[slug]` | ✅ 6 blog posts (SSG) |
| `/contact` | ✅ Contact form |
| `/admin` | ✅ Dashboard overview |
| `/admin/leads` | ✅ Leads viewer |

### ✅ Premium UI/UX

| Feature | File / Tech |
|---------|-------------|
| GSAP ScrollTrigger (scroll reveal, text reveal) | `src/components/gsap/` |
| Parallax hero layers | `parallax-layer.tsx` |
| Magnetic buttons | `src/components/effects/magnetic-button.tsx` |
| Custom cursor (desktop) | `src/components/effects/custom-cursor.tsx` |
| Page transitions | `src/components/effects/page-transition.tsx` |
| Framer Motion (loader, carousel, mobile menu) | `src/components/animations/` |
| Lenis smooth scroll | `src/components/layout/smooth-scroll.tsx` |
| Dark / light mode | `next-themes` |
| Glassmorphism, gradients, bento grids | `src/styles/globals.css` |

### ✅ Full-Stack

| Feature | Status |
|---------|--------|
| `POST /api/leads` | ✅ Admission inquiries |
| `POST /api/contact` | ✅ Contact messages |
| `POST /api/brochure` | ✅ Brochure download tracking |
| `GET /api/admin/leads` | ✅ Admin lead fetch (token auth) |
| Prisma + PostgreSQL schema | ✅ `prisma/schema.prisma` |
| File fallback (no DB) | ✅ `data/leads.json` |
| Resend email (optional) | ✅ `src/lib/email.ts` |
| React Hook Form + Zod | ✅ All forms |

### ✅ SEO & Engineering

| Feature | Status |
|---------|--------|
| `sitemap.xml` | ✅ Auto-generated |
| `robots.txt` | ✅ |
| OpenGraph + Twitter cards | ✅ Per-page metadata |
| JSON-LD (University, Course, Article, Breadcrumb) | ✅ |
| Error boundary | ✅ `src/app/error.tsx` |
| 404 page | ✅ `src/app/not-found.tsx` |
| Loading skeleton | ✅ `src/app/loading.tsx` |
| CMS-ready data layer | ✅ `src/lib/cms.ts` + `src/data/` |

---

## 3. All Pages & Routes

```
/                          → Home (landing)
/programs                  → All programmes + compare + brochure
/programs/bba-imba         → Programme detail (6 slugs total)
/programs/btech-bca
/programs/bcom-bsc
/programs/mba-mcom
/programs/mca-msc-it
/programs/llm-specialized-msc
/admissions                → Admissions page
/campus-life               → Campus gallery
/faculty                   → Faculty directory (filter)
/events                    → Events list
/blog                      → Blog listing
/blog/[slug]               → Blog post (6 posts)
/contact                   → Contact page
/admin                     → Admin dashboard
/admin/leads               → View leads

/api/leads                 → Lead submission
/api/contact               → Contact form
/api/brochure              → Brochure download
/api/admin/leads           → Admin API (Bearer token)
```

**Build output:** 32 static/SSG routes · First Load JS ~102–255 kB per page

---

## 4. Tech Stack

| Technology | Purpose |
|------------|---------|
| **Next.js 15** | App Router, SSG, API routes, Image optimization |
| **TypeScript** | Type safety across app |
| **Tailwind CSS v4** | Styling + design system |
| **Framer Motion** | UI animations, transitions, carousel |
| **GSAP + ScrollTrigger** | Premium scroll animations, text reveal |
| **Lenis** | Smooth scrolling |
| **Radix UI** | Accessible accordion, labels |
| **React Hook Form** | Form state |
| **Zod** | Validation schemas |
| **Prisma** | PostgreSQL ORM |
| **next-themes** | Dark/light mode |
| **Lucide React** | Icons |
| **date-fns** | Event date formatting |

---

## 5. Folder Structure

```
EduVerse Elite/
├── prisma/
│   └── schema.prisma          # Lead + BrochureDownload models
├── public/
│   └── og-image.svg
├── src/
│   ├── app/
│   │   ├── layout.tsx         # Root layout + providers
│   │   ├── page.tsx           # Home
│   │   ├── programs/          # Listing + [slug]
│   │   ├── admissions/
│   │   ├── campus-life/
│   │   ├── faculty/
│   │   ├── events/
│   │   ├── blog/              # Listing + [slug]
│   │   ├── contact/
│   │   ├── admin/             # Dashboard + leads
│   │   ├── api/               # REST API routes
│   │   ├── sitemap.ts
│   │   ├── robots.ts
│   │   ├── error.tsx
│   │   ├── loading.tsx
│   │   └── not-found.tsx
│   ├── components/
│   │   ├── ui/                # Button, Input, Accordion, Skeleton
│   │   ├── layout/            # Navbar, Footer, Theme, SmoothScroll
│   │   ├── sections/          # Home page sections
│   │   ├── gsap/              # GSAP animations
│   │   ├── effects/           # Cursor, magnetic, page transition
│   │   ├── shared/            # LeadForm, ProgramCard, PageHero, etc.
│   │   ├── pages/             # FacultyDirectory, ContactForm
│   │   ├── animations/        # Loader, scroll progress, counters
│   │   └── providers/         # AppProviders
│   ├── data/                  # All content (CMS-ready)
│   │   ├── site.ts
│   │   ├── programs.ts
│   │   ├── faculty.ts
│   │   ├── events.ts
│   │   ├── blog.ts
│   │   └── content.ts
│   ├── hooks/
│   ├── lib/
│   │   ├── db.ts              # Prisma client
│   │   ├── email.ts           # Resend integration
│   │   ├── validations.ts     # Zod schemas
│   │   ├── schema.ts          # JSON-LD helpers
│   │   ├── metadata.ts        # Page metadata helper
│   │   ├── cms.ts             # CMS adapter layer
│   │   └── leads-store.ts     # File fallback for leads
│   ├── types/
│   └── styles/
│       └── globals.css
├── .env.example
├── README.md
└── INTERVIEW_GUIDE.md
```

---

## 6. Architecture

```
                    ┌─────────────────────┐
                    │   layout.tsx        │
                    │ AppProviders        │
                    │ LayoutChrome        │
                    └──────────┬──────────┘
                               │
         ┌─────────────────────┼─────────────────────┐
         ▼                     ▼                     ▼
    Home (/)            Content Pages           API Routes
    11 sections         /programs, /blog...     /api/leads...
         │                     │                     │
         └─────────────────────┼─────────────────────┘
                               ▼
                    ┌─────────────────────┐
                    │   src/data/*.ts     │
                    │  (single source)    │
                    └─────────────────────┘
                               │
              Optional: PostgreSQL via Prisma
              Fallback: data/leads.json
```

**Design patterns:**
- **Separation of data & UI** — Content in `src/data/`, components only render
- **CMS adapter** — `src/lib/cms.ts` can swap to Sanity/Contentful later
- **Client components only where needed** — Animations, forms, filters
- **SSG for dynamic routes** — `generateStaticParams` for programs & blog

---

## 7. Premium UI/UX Features

### GSAP (`src/components/gsap/`)
- `TextReveal` — Word-by-word headline animation on scroll
- `ScrollReveal` — Fade/slide sections into view
- `ParallaxLayer` — Hero background parallax
- `GsapProvider` — Registers ScrollTrigger, refreshes on route change

### Effects (`src/components/effects/`)
- `MagneticButton` — Cursor-attracting CTA buttons
- `CustomCursor` — Desktop-only custom pointer
- `PageTransition` — Smooth fade between pages

### Shared Components (`src/components/shared/`)
- `PageHero` — Reusable page header with breadcrumbs
- `LeadForm` — Reusable admission form (posts to `/api/leads`)
- `ProgramCard` — Programme card with hover effects
- `ComparePrograms` — Interactive comparison table
- `BrochureDownload` — Email capture for brochure

---

## 8. Full-Stack & API

### Lead Form Flow
```
User fills form → Zod validates → POST /api/leads
    → Save to PostgreSQL (if DATABASE_URL set)
    → OR save to data/leads.json (demo mode)
    → Send confirmation email via Resend (if API key set)
    → Return success JSON
```

### API Endpoints

| Method | Endpoint | Body | Auth |
|--------|----------|------|------|
| POST | `/api/leads` | `{ fullName, email, phone, program?, source }` | None |
| POST | `/api/contact` | `{ fullName, email, phone, subject, message }` | None |
| POST | `/api/brochure` | `{ email, program? }` | None |
| GET | `/api/admin/leads` | — | `Authorization: Bearer ADMIN_SECRET` |

---

## 9. Database (Prisma)

**Schema:** `prisma/schema.prisma`

```prisma
model Lead {
  id, fullName, email, phone, program, message, source, status, createdAt
}

model BrochureDownload {
  id, email, program, createdAt
}
```

**Setup (optional — demo works without DB):**
```bash
# 1. Set DATABASE_URL in .env
# 2. Push schema
npm run db:push

# 3. Open Prisma Studio
npm run db:studio
```

---

## 10. SEO & Performance

- **Per-page metadata** via `createPageMetadata()` in `src/lib/metadata.ts`
- **Sitemap** — All static + dynamic routes in `src/app/sitemap.ts`
- **robots.txt** — Blocks `/admin/` and `/api/`
- **JSON-LD** — Organization, Course, Article, Breadcrumb schemas
- **next/image** — Optimized Unsplash images with lazy loading
- **Static generation** — Home, programs, blog pre-rendered at build time

---

## 11. Environment Variables

Copy `.env.example` to `.env`:

```env
NEXT_PUBLIC_SITE_URL=http://localhost:3000

# Optional — PostgreSQL
DATABASE_URL="postgresql://user:password@localhost:5432/eduverse"

# Optional — Email (Resend)
RESEND_API_KEY=re_xxxxxxxxxxxx
EMAIL_FROM=admissions@eduverseelite.edu
EMAIL_TO=admissions@eduverseelite.edu

# Optional — Admin API
ADMIN_SECRET=your-secure-admin-token
```

**Demo mode:** Works without any env vars — leads save to `data/leads.json`, emails log to console.

---

## 12. How to Run

```bash
# Install dependencies
npm install

# Development server
npm run dev
# → http://localhost:3000

# Production build
npm run build

# Production server
npm start

# Lint
npm run lint
```

---

## 13. Deploy to Vercel

**This project is already live at:** [https://edu-verse-elite.vercel.app](https://edu-verse-elite.vercel.app/)

Repository: [SaloniSsSaini/EduVerse-Elite](https://github.com/SaloniSsSaini/EduVerse-Elite) (GitHub)

### Redeploy / update steps

1. Push changes to GitHub `main` branch
2. Vercel auto-deploys from [vercel.com](https://vercel.com)
3. Set environment variables (optional):

| Variable | Example |
|----------|---------|
| `NEXT_PUBLIC_SITE_URL` | `https://edu-verse-elite.vercel.app` |
| `DATABASE_URL` | PostgreSQL connection string |
| `RESEND_API_KEY` | For email notifications |
| `ADMIN_SECRET` | For `/admin/leads` API |

```bash
npx vercel --prod
```

---

## 14. Interview / Portfolio Tips

**Elevator pitch:**
> "I built EduVerse Elite — a full-stack university platform with Next.js 15, TypeScript, GSAP animations, Prisma-ready APIs, multi-page architecture, admin lead management, and production SEO. **Live demo:** https://edu-verse-elite.vercel.app"

**Demo flow for recruiters:**
1. Home → scroll animations, dark mode, stats
2. `/programs` → compare table, click a programme
3. `/programs/bba-imba` → detail page + sidebar form
4. Submit form → show API works
5. `/admin/leads` → show lead management
6. `/faculty` → filter by department
7. Show code: `src/data/programs.ts` + `src/app/api/leads/route.ts`

**Read also:** `INTERVIEW_GUIDE.md` — Hindi/Hinglish Q&A for interviews

---

## Programme Slugs (for reference)

| Slug | Programme |
|------|-----------|
| `bba-imba` | BBA & Integrated MBA |
| `btech-bca` | B.Tech & BCA |
| `bcom-bsc` | B.Com & B.Sc |
| `mba-mcom` | MBA & M.Com |
| `mca-msc-it` | MCA & MSc (IT) |
| `llm-specialized-msc` | LL.M & Specialized MSc |

---

## License

MIT — Free for portfolio and educational use.

---

**Built with:** Next.js 15 · TypeScript · Tailwind CSS · GSAP · Framer Motion · Prisma · Zod · Lenis

**Project status:** Live at [edu-verse-elite.vercel.app](https://edu-verse-elite.vercel.app/) — Portfolio & internship ready
