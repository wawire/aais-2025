#!/bin/bash
# /aais-2025/init-repo.sh

# Script to set up folder structure, install dependencies, copy files, and perform initial Git commit for AAIS 2025 project.

# Exit on error
set -e

# Check for Node.js
if ! command -v node &> /dev/null; then
    echo "Error: Node.js is not installed. Please install Node.js (version 18 or higher) and try again."
    exit 1
fi

# Check for npm
if ! command -v npm &> /dev/null; then
    echo "Error: npm is not installed. Please install npm and try again."
    exit 1
fi

# Create folder structure
echo "Creating folder structure..."
mkdir -p .github/workflows
mkdir -p prisma/migrations
mkdir -p src/app/about src/app/register src/app/agenda src/app/speakers src/app/admin src/app/api
mkdir -p src/components/ui
mkdir -p src/styles
mkdir -p src/lib
mkdir -p public/images

# Create configuration files
echo "Creating configuration files..."

# .gitignore
cat > .gitignore << 'EOF'
node_modules/
.env
.env.*
.next/
out/
EOF

# README.md
cat > README.md << 'EOF'
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
EOF

# .env.example
cat > .env.example << 'EOF'
DATABASE_URL="postgresql://user:password@localhost:5432/aais2025?schema=public"
NEXT_PUBLIC_BASE_URL="http://localhost:3000"
EOF

# package.json
cat > package.json << 'EOF'
{
  "name": "aais-2025",
  "version": "1.0.0",
  "scripts": {
    "dev": "next dev",
    "build": "next build",
    "start": "next start",
    "lint": "next lint",
    "prisma:push": "prisma db push"
  },
  "dependencies": {
    "next": "14.2.3",
    "@prisma/client": "^5.10.2",
    "typescript": "^5.3.3",
    "tailwindcss": "^3.4.1",
    "@radix-ui/react-dialog": "^1.1.1",
    "clsx": "^2.1.0",
    "tailwind-merge": "^2.2.0",
    "lucide-react": "^0.323.0",
    "react": "18.3.1",
    "react-dom": "18.3.1"
  },
  "devDependencies": {
    "@types/node": "^20.11.16",
    "@types/react": "^18.2.55",
    "prisma": "^5.10.2",
    "eslint": "^8.56.0",
    "eslint-config-next": "14.2.3",
    "postcss": "^8.4.38",
    "autoprefixer": "^10.4.19"
  }
}
EOF

# tsconfig.json
cat > tsconfig.json << 'EOF'
{
  "compilerOptions": {
    "target": "es5",
    "lib": ["dom", "dom.iterable", "esnext"],
    "allowJs": true,
    "skipLibCheck": true,
    "strict": true,
    "noEmit": true,
    "esModuleInterop": true,
    "module": "esnext",
    "moduleResolution": "node",
    "resolveJsonModule": true,
    "isolatedModules": true,
    "jsx": "preserve",
    "baseUrl": ".",
    "paths": {
      "@/*": ["src/*"]
    }
  },
  "include": ["next-env.d.ts", "**/*.ts", "**/*.tsx"],
  "exclude": ["node_modules"]
}
EOF

# tailwind.config.js
cat > tailwind.config.js << 'EOF'
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/app/**/*.{js,ts,jsx,tsx}',
    './src/components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        aviationGold: '#C2A542',
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
      },
    },
  },
  plugins: [],
};
EOF

# next.config.js
cat > next.config.js << 'EOF'
/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
};

module.exports = nextConfig;
EOF

# prisma/schema.prisma
cat > prisma/schema.prisma << 'EOF'
generator client {
  provider = "prisma-client-js"
}

datasource db {
  provider = "postgresql"
  url      = env("DATABASE_URL")
}

model User {
  id        Int         @id @default(autoincrement())
  name      String
  email     String      @unique
  registrations Registration[]
  createdAt DateTime    @default(now())
}

model Registration {
  id            Int      @id @default(autoincrement())
  userId        Int
  package       String
  status        String   @default("pending")
  verificationCode String?
  createdAt     DateTime @default(now())
  user          User     @relation(fields: [userId], references: [id])
}

model Session {
  id        Int      @id @default(autoincrement())
  title     String
  time      DateTime
  type      String
  createdAt DateTime @default(now())
}
EOF

# .github/workflows/ci.yml
cat > .github/workflows/ci.yml << 'EOF'
name: CI Pipeline
on:
  push:
    branches: [main]
  pull_request:
    branches: [main]
jobs:
  build:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v4
      - name: Set up Node.js
        uses: actions/setup-node@v3
        with:
          node-version: '18'
      - name: Install dependencies
        run: npm ci
      - name: Run lint
        run: npm run lint
      - name: Build
        run: npm run build
EOF

# Install dependencies
echo "Installing dependencies..."
npm install

# Create source files
echo "Creating source files..."

# src/app/layout.tsx
cat > src/app/layout.tsx << 'EOF'
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import '../styles/globals.css';
import { cn } from '@/lib/utils';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';

// Initialize Inter font with subsets
const inter = Inter({ subsets: ['latin'], weight: ['400', '700'] });

/**
 * Root layout for AAIS 2025 application.
 * Includes header and footer for consistent navigation and branding.
 * @param {Object} props - Component props
 * @param {React.ReactNode} props.children - Page content
 * @returns {JSX.Element} Root layout
 */
export const metadata: Metadata = {
  title: 'AAIS 2025',
  description: 'Africa Aviation Innovation Summit 2025',
  icons: { icon: '/favicon.ico' },
};

export default function RootLayout({ children }: { children: React.ReactNode }): JSX.Element {
  return (
    <html lang="en">
      <body className={cn(inter.className, 'min-h-screen bg-white')}>
        <Header />
        <main className="container mx-auto px-4 py-8">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
EOF

# src/components/Header.tsx
cat > src/components/Header.tsx << 'EOF'
'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { cn } from '@/lib/utils';
import { Menu, X } from 'lucide-react';
import { useState } from 'react';

/**
 * Header with navigation for AAIS 2025.
 * Includes mobile toggle and accessibility.
 * @returns {JSX.Element} Header component
 */
export function Header(): JSX.Element {
  const pathname = usePathname();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const links = [
    { href: '/', label: 'Home', aria: 'Home' },
    { href: '/about', label: 'About', aria: 'About AAIS' },
    { href: '/agenda', label: 'Agenda', aria: 'Agenda' },
    { href: '/register', label: 'Register', aria: 'Register' },
  ];

  return (
    <header className="bg-aviationGold text-white py-4 sticky top-0 z-50">
      <nav className="container mx-auto px-4 flex justify-between items-center">
        <Link href="/" className="text-xl font-bold" aria-label="AAIS 2025 Home">
          AAIS 2025
        </Link>
        <ul className="hidden md:flex space-x-4">
          {links.map((link) => (
            <li key={link.href}>
              <Link
                href={link.href}
                className={cn('hover:underline', pathname === link.href ? 'font-bold' : '')}
                aria-label={link.aria}
              >
                {link.label}
              </Link>
            </li>
          ))}
        </ul>
        <button
          className="md:hidden"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          aria-label={isMenuOpen ? 'Close menu' : 'Open menu'}
        >
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </nav>
      {isMenuOpen && (
        <ul className="md:hidden bg-aviationGold px-4 py-2 space-y-2">
          {links.map((link) => (
            <li key={link.href}>
              <Link
                href={link.href}
                className={cn('block hover:underline', pathname === link.href ? 'font-bold' : '')}
                aria-label={link.aria}
                onClick={() => setIsMenuOpen(false)}
              >
                {link.label}
              </Link>
            </li>
          ))}
        </ul>
      )}
    </header>
  );
}
EOF

# src/components/Footer.tsx
cat > src/components/Footer.tsx << 'EOF'
import Link from 'next/link';

/**
 * Footer with contact and social links for AAIS 2025.
 * @returns {JSX.Element} Footer component
 */
export function Footer(): JSX.Element {
  return (
    <footer className="bg-gray-800 text-white py-4">
      <div className="container mx-auto px-4 text-center">
        <p>Email: <a href="mailto:aais@kenya-airways.com" aria-label="Email AAIS">aais@kenya-airways.com</a></p>
        <p>Phone: <a href="tel:+254716851914" aria-label="Call AAIS">+254 716 851 914</a></p>
        <div className="flex justify-center space-x-4 mt-2">
          <a href="https://twitter.com/AAIS2025" aria-label="Twitter" target="_blank" rel="noopener noreferrer">Twitter</a>
          <a href="https://linkedin.com/company/AAIS2025" aria-label="LinkedIn" target="_blank" rel="noopener noreferrer">LinkedIn</a>
        </div>
        <p className="mt-2">© 2025 Kenya Airways PLC</p>
      </div>
    </footer>
  );
}
EOF

# src/styles/globals.css
cat > src/styles/globals.css << 'EOF'
@tailwind base;
@tailwind components;
@tailwind utilities;

:root {
  --aviation-gold: #C2A542;
}

body {
  @apply text-gray-900 bg-white;
}

/* Ensure Tailwind typography classes work */
h1, h2, h3, h4, h5, h6 {
  @apply font-bold;
}

a {
  @apply text-aviationGold hover:underline;
}
EOF

# src/lib/utils.ts
cat > src/lib/utils.ts << 'EOF'
import { clsx, type ClassValue } from 'clsx';
import { twMerge } from 'tailwind-merge';

/**
 * Merges Tailwind classes safely.
 * @param inputs - Class values
 * @returns Merged class string
 */
export function cn(...inputs: ClassValue[]): string {
  return twMerge(clsx(inputs));
}
EOF

# src/app/page.tsx
cat > src/app/page.tsx << 'EOF'
/**
 * Home page for AAIS 2025.
 * @returns {JSX.Element} Home page content
 */
export default function HomePage(): JSX.Element {
  return (
    <div>
      <h1 className="text-3xl font-bold text-aviationGold">Welcome to AAIS 2025</h1>
      <p>Home page placeholder.</p>
    </div>
  );
}
EOF

# src/app/about/page.tsx
cat > src/app/about/page.tsx << 'EOF'
/**
 * About page for AAIS 2025.
 * @returns {JSX.Element} About page content
 */
export default function AboutPage(): JSX.Element {
  return (
    <div>
      <h1 className="text-3xl font-bold text-aviationGold">About AAIS 2025</h1>
      <p>Details about the Africa Aviation Innovation Summit.</p>
    </div>
  );
}
EOF

# src/app/register/page.tsx
cat > src/app/register/page.tsx << 'EOF'
/**
 * Registration page for AAIS 2025.
 * @returns {JSX.Element} Registration page content
 */
export default function RegisterPage(): JSX.Element {
  return (
    <div>
      <h1 className="text-3xl font-bold text-aviationGold">Register</h1>
      <p>Registration form placeholder.</p>
    </div>
  );
}
EOF

# src/app/agenda/page.tsx
cat > src/app/agenda/page.tsx << 'EOF'
/**
 * Agenda page for AAIS 2025.
 * @returns {JSX.Element} Agenda page content
 */
export default function AgendaPage(): JSX.Element {
  return (
    <div>
      <h1 className="text-3xl font-bold text-aviationGold">Agenda</h1>
      <p>Event schedule placeholder.</p>
    </div>
  );
}
EOF

# src/app/speakers/page.tsx
cat > src/app/speakers/page.tsx << 'EOF'
/**
 * Speakers page for AAIS 2025.
 * @returns {JSX.Element} Speakers page content
 */
export default function SpeakersPage(): JSX.Element {
  return (
    <div>
      <h1 className="text-3xl font-bold text-aviationGold">Speakers</h1>
      <p>Speaker list placeholder.</p>
    </div>
  );
}
EOF

# src/app/admin/dashboard.tsx
cat > src/app/admin/dashboard.tsx << 'EOF'
/**
 * Admin dashboard for AAIS 2025.
 * @returns {JSX.Element} Dashboard content
 */
export default function AdminDashboard(): JSX.Element {
  return (
    <div>
      <h1 className="text-3xl font-bold text-aviationGold">Admin Dashboard</h1>
      <p>Admin controls placeholder.</p>
    </div>
  );
}
EOF

# src/app/api/register.ts
cat > src/app/api/register.ts << 'EOF'
import { NextRequest, NextResponse } from 'next/server';

/**
 * API route for user registration.
 * @param {NextRequest} req - Request object
 * @returns {Promise<NextResponse>} Response
 */
export async function POST(req: NextRequest): Promise<NextResponse> {
  return NextResponse.json({ message: 'Registration endpoint placeholder' }, { status: 200 });
}
EOF

# src/app/api/verify-code.ts
cat > src/app/api/verify-code.ts << 'EOF'
import { NextRequest, NextResponse } from 'next/server';

/**
 * API route for verifying registration code.
 * @param {NextRequest} req - Request object
 * @returns {Promise<NextResponse>} Response
 */
export async function POST(req: NextRequest): Promise<NextResponse> {
  return NextResponse.json({ message: 'Verification endpoint placeholder' }, { status: 200 });
}
EOF

# Create empty favicon and images directory
touch public/favicon.ico

# Initialize Git repository
echo "Initializing Git repository..."
git init
git checkout -b main
git add .
git commit -m "feat: initial project setup for AAIS 2025"
git branch develop

echo "Setup complete. Run 'chmod +x init-repo.sh' and './init-repo.sh' to execute."
