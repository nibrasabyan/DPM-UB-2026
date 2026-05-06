# DPM UB 2026 — Parlemen Pilar Karsa

## Original Problem Statement
Modern, aesthetic, animated, visual-driven multi-page institutional website for **Dewan Perwakilan Mahasiswa Universitas Brawijaya (DPM UB) 2026** with tagline "Parlemen Pilar Karsa". Must feel institutional, premium, layered (not flat). Custom 404 / Coming Soon for under-construction pages.

## Architecture
- **Backend**: FastAPI + Motor (async MongoDB) — endpoints under `/api`
- **Frontend**: React 19 + React Router 7 + Tailwind + Shadcn UI + Framer Motion
- **Theme**: Dark navy `#02040A` base + copper/gold accent (`#C68C48` → `#E5B869`)
- **Typography**: Cormorant Garamond (display) + Outfit (body)

## User Personas
- **Mahasiswa UB**: visit site to learn about DPM and submit aspirations
- **Pengurus DPM**: read incoming aspirations (via API for now)
- **Visitor / external**: institutional landing experience

## Core Requirements (static)
- Beautiful Home page (Hero with blended Rektorat, About, 5 Pilar, Feature preview, CTA, Footer)
- Functional Aspirasi form persisted in MongoDB
- Custom on-brand 404 / Under Development for /about, /legislasi, /aspirasi, and unknown routes
- Layered ambient background (gradients + blobs + noise + faint pillar SVG)
- Bahasa Indonesia copy throughout

## What's Implemented (2026-02)
- ✅ Layered animated background canvas (`Background.jsx`)
- ✅ Sticky glassmorphic header with logo, pill nav, CTA + mobile menu
- ✅ Hero with Gedung Rektorat blended via radial mask + duotone filter + glow + concentric rotating rings + light beam + floating badges
- ✅ About short (3 highlight cards)
- ✅ 5 Pilar grid (Legislasi, Pengawasan, Anggaran, Advokasi, Hubungan Masyarakat) with BAB 2 PASAL 4 references
- ✅ Feature preview: Pengawasan dashboard mock (stats + animated progress bars) + Aspirasi form preview card
- ✅ Final CTA section with gold blob background
- ✅ 3-column footer
- ✅ Premium glassmorphic Aspirasi modal form (Shadcn Dialog + Input + Textarea + Select)
- ✅ POST /api/aspirasi (Pydantic validation) — saves to MongoDB
- ✅ GET /api/aspirasi list (sorted desc, no _id leak) + /api/aspirasi/stats
- ✅ Custom on-brand 404 page (floating pillar SVGs, animated gold 404, dual CTA)
- ✅ Routes: `/`, `/about`→404, `/legislasi`→404, `/aspirasi`→404, `*`→404
- ✅ data-testid on all interactive elements
- ✅ 100% testing agent pass rate (backend + frontend)

## Backlog (P0/P1/P2)
- **P1**: Build dedicated `/about` page (struktur, kepengurusan, foto anggota)
- **P1**: Build `/legislasi` page (list of produk hukum / ketetapan, filterable)
- **P1**: Public-facing `/aspirasi` listing/tracking page (mahasiswa lihat status aspirasinya)
- **P2**: Admin login + dashboard untuk lihat & update status aspirasi
- **P2**: Email notification ke pelapor saat status berubah
- **P2**: Dedupe / rate limit aspirasi submissions
- **P2**: Pagination (skip param) on GET /api/aspirasi
- **P3**: Migrate FastAPI lifespan context (deprecation warning)
- **P3**: i18n English fallback (campus international visitors)

## Next Tasks
1. Gather real content (struktur pengurus, foto, ketetapan) from user
2. Build About page once content is ready
3. Build Legislasi document repository
4. Implement admin auth + aspirasi management dashboard
