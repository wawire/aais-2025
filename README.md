# AAIS 2025 Event Management System

Minimal setup for AAIS 2025 using Next.js 14, PostgreSQL, Prisma, TypeScript, Tailwind CSS, and Shadcn/ui.

## Setup
1. Clone: `git clone https://github.com/wawire/aais-2025.git && cd aais-2025`
2. Install: `npm install`
3. Configure: Copy `.env.example` to `.env.local`, update `DATABASE_URL`
4. Fonts: Add Lucida Sans Demibold/Interstate WOFF/WOFF2 files to `/public/fonts/` and update `globals.css`
5. Database: `npx prisma db push`
6. Run: `npm run dev`

## Git Workflow
- Branches: `main`, `feature/*`
- Commits: `[type]: description` (e.g., `feat: add layout`)

## Fonts
- Primary: Roboto Flex (via Google Fonts, weights 400, 600, 700)
- Fallbacks: Lucida Sans Demibold (system or custom font, weight 600), Interstate (custom font or Helvetica/Arial)
- Custom Fonts: Place WOFF/WOFF2 files in `/public/fonts/` and update `globals.css` with `@font-face`

## CSS
- Custom color: `aviationGold` (#C2A542)
- Tailwind CSS: Configured with `font-sans` for typography
