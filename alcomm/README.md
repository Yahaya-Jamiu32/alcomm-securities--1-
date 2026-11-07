# Alcomm Securities & Smart Home Automation: Website

Next.js (App Router) · TypeScript · Tailwind CSS v4 · Lucide icons · Vercel-ready.

## Install and run

```bash
npm install
cp .env.example .env.local     # then fill in real company details
npm run dev                    # http://localhost:3000
npm run build && npm start     # production build
npm run typecheck
```

Requires Node 20+.

## Company details (nothing is invented)

All contact details come from environment variables (`.env.example`). Anything left empty shows a
"to be added" placeholder (or is hidden in the header). Set at minimum:
`NEXT_PUBLIC_WHATSAPP_NUMBER` (digits with country code, no `+`), `NEXT_PUBLIC_PHONE`, `NEXT_PUBLIC_EMAIL`,
`NEXT_PUBLIC_ADDRESS`, `NEXT_PUBLIC_MAP_QUERY`, `NEXT_PUBLIC_SITE_URL`.

## Quote form (Formspree)

1. Create a free form at https://formspree.io and copy its endpoint (`https://formspree.io/f/xxxx`).
2. Set `NEXT_PUBLIC_FORM_ENDPOINT` to it (locally in `.env.local`, on Vercel in Environment Variables) and redeploy.

Until it is set, the form validates but shows "Online quote requests are not available yet" with a WhatsApp
fallback. It never shows a fake success message. Any service that accepts a JSON POST works.

## Adding projects

Edit `src/data/projects.ts` (the comments at the top explain every step). Put photos in
`public/images/projects/<project-id>/`. The Projects page, project detail pages, category filters, gallery and
sitemap update automatically. While the list is empty a professional empty state is shown.

## Replacing images

Stock images live in `public/images/{hero,services,about}`. Replace a file keeping the same name, or change the
path/alt text in `src/data/services.ts`, `HeroSection.tsx` or `AboutSection.tsx`. Most supplied stock images are
about 700px wide, so replace the hero with a 1920px+ photo for a sharper result. The logo is an inline SVG in
`src/components/Logo.tsx`; swap in the official logo when available. Stock photos with visible brand names
(e.g. Hikvision, Amcrest, Howell) should be replaced with licensed or own images before launch.

## Deploy to Vercel

1. Push this folder to GitHub.
2. In Vercel: **Add New → Project**, import the repo (Next.js is auto-detected; no extra settings).
3. Add the environment variables from `.env.example`.
4. Deploy, then add the custom domain and set `NEXT_PUBLIC_SITE_URL` to it.

## Structure

```
src/app          routes (home, about, services/[slug], projects/[id], contact, privacy, terms, sitemap, robots)
src/components   Header, MobileNavigation, Footer, HeroSection, ServiceCard, ServicesGrid, AboutSection, WhyChooseUs,
                 ProjectCard, ProjectGallery, ProjectEmptyState, QuoteForm, ContactSection, WhatsAppButton ...
src/data         services.ts, projects.ts (empty, add real projects here)
src/config       site.ts (env-driven company details, navigation)
```

## Services without a photo

A service in `src/data/services.ts` can omit `image`; a designed icon panel is shown instead (used by Telephone
Intercom Systems). To add a photo later, add `image: { src: "/images/services/your-file.jpg", alt: "...", fit: "cover" }`.
The Solar & Inverter Systems page has an optional `includes` list (panels, inverter, batteries, wiring).
