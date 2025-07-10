# AAIS 2025 Event Management System

Minimal setup for AAIS 2025 using Next.js 14, PostgreSQL, Prisma, TypeScript, Tailwind CSS, and Shadcn/ui.

## Setup
1. Clone: `git clone <repo-url> && cd aais-2025`
2. Install: `npm install`
3. Configure: Copy `.env.example` to `.env.local`, update `DATABASE_URL`
4. Database: `npx prisma db push`
5. Run: `npm run dev`

## Git Workflow
- Branches: `main`, `feature/*`
- Commits: `[type]: description` (e.g., `feat: add layout`)
