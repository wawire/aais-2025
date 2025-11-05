# AAIS 2025 Event Management System

Modern, production-ready event management system for the Africa Aviation Innovation Summit 2025. Built with Next.js 15, React 19, TypeScript, Tailwind CSS, and PostgreSQL.

## 🚀 Features

- **Next.js 15** with App Router and React 19
- **TypeScript** for type safety
- **Tailwind CSS** with custom aviation theme
- **PostgreSQL + Prisma ORM** for database
- **SEO Optimized** with Open Graph, Twitter Cards, and structured data
- **Performance Monitoring** with Google Analytics 4
- **Error Boundaries** for production resilience
- **Accessibility** with WCAG 2.1 AA compliance
- **PWA Support** with manifest.json
- **Static Export** for optimal performance

## 📋 Prerequisites

- Node.js 18+ and npm/yarn
- PostgreSQL 14+ database
- Git

## 🛠️ Setup

### 1. Clone the Repository
```bash
git clone https://github.com/wawire/aais-2025.git
cd aais-2025
```

### 2. Install Dependencies
```bash
npm install
```

### 3. Environment Configuration
Copy `.env.example` to `.env.local` and update the values:
```bash
cp .env.example .env.local
```

Required environment variables:
- `DATABASE_URL`: PostgreSQL connection string
- `NEXT_PUBLIC_APP_URL`: Your application URL
- `NEXT_PUBLIC_GA_MEASUREMENT_ID`: Google Analytics ID (optional)

### 4. Database Setup
```bash
# Push schema to database
npm run prisma:push

# Generate Prisma Client
npm run prisma:generate

# (Optional) Open Prisma Studio
npm run prisma:studio
```

### 5. Custom Fonts (Optional)
Add Lucida Sans Demibold and Interstate font files to `/public/fonts/` and update `/src/styles/globals.css` with `@font-face` declarations.

### 6. Run Development Server
```bash
npm run dev
```

Visit [http://localhost:3000](http://localhost:3000)

## 📦 Available Scripts

| Script | Description |
|--------|-------------|
| `npm run dev` | Start development server |
| `npm run build` | Build for production (static export) |
| `npm run start` | Start production server |
| `npm run lint` | Run ESLint |
| `npm run type-check` | Run TypeScript type checking |
| `npm run format` | Format code with Prettier |
| `npm run prisma:push` | Push Prisma schema to database |
| `npm run prisma:generate` | Generate Prisma Client |
| `npm run prisma:studio` | Open Prisma Studio |

## 🏗️ Project Structure

```
src/
├── app/                      # Next.js pages & API routes
├── features/                # Feature modules (NEW!)
│   └── registration/
│       ├── components/      # Feature UI
│       ├── hooks/          # Feature hooks
│       ├── api/           # API calls
│       └── types/        # Types
├── components/             # Shared components
│   ├── atoms/            # Basic UI (Button, Input)
│   ├── molecules/       # Combos (FormField)
│   └── organisms/      # Complex (Header, Footer)
├── lib/
│   ├── api/client.ts    # HTTP client
│   ├── analytics.ts     # Analytics
│   └── utils.ts        # Helpers
├── constants/          # Routes, config
├── hooks/             # Shared hooks
└── types/            # Global types
```

### Architecture Principles

- **Feature-first**: Code organized by business domain
- **Component hierarchy**: Atoms → Molecules → Organisms
- **Type-safe**: Comprehensive TypeScript coverage
- **Centralized**: API client, constants, utilities

See [CONTRIBUTING.md](./CONTRIBUTING.md) for detailed patterns.

## 🎨 Design System

### Colors
- **Aviation Gold**: `#C2A542` (primary brand color)
- **Charcoal**: Grayscale palette for text
- **Sage**: Accent colors for highlights

### Typography
- **Primary Font**: Roboto Flex (Google Fonts)
- **Heading Font**: Interstate (custom)
- **Accent Font**: Lucida Sans Demibold (custom)

### Responsive Breakpoints
- `xs`: 475px
- `sm`: 640px
- `md`: 768px
- `lg`: 1024px
- `xl`: 1280px

## 📊 SEO & Analytics

### SEO Features
- ✅ Open Graph meta tags
- ✅ Twitter Card meta tags
- ✅ Structured data (JSON-LD)
- ✅ Dynamic sitemap.xml
- ✅ robots.txt
- ✅ PWA manifest.json

### Analytics
- Google Analytics 4 integration
- Web Vitals tracking
- Custom event tracking
- Performance monitoring

## 🔒 Security

- Content Security Policy (CSP) headers
- HSTS (HTTP Strict Transport Security)
- X-Frame-Options (clickjacking protection)
- XSS protection headers
- No hardcoded secrets

## ♿ Accessibility

- WCAG 2.1 AA compliance
- Semantic HTML
- ARIA labels and roles
- Keyboard navigation support
- Skip-to-content link
- Focus management

## 🚢 Deployment

### Static Export (Recommended)
```bash
npm run build
```

Output: `/out` directory with static HTML/CSS/JS files

Deploy to any static host:
- IIS (web.config included)
- Nginx
- Apache
- Vercel
- Netlify
- AWS S3 + CloudFront

### Server Deployment
For dynamic features, deploy to:
- Vercel
- AWS Amplify
- DigitalOcean App Platform

## 🐛 Error Handling

- **Error Boundaries**: Catch React errors
- **error.tsx**: Route-level error handling
- **global-error.tsx**: Root layout errors
- **not-found.tsx**: Custom 404 page

## 🧪 Testing (Coming Soon)

- Jest + React Testing Library
- Playwright for E2E testing
- Accessibility testing with axe-core

## 📝 Git Workflow

### Branches
- `main`: Production-ready code
- `feature/*`: New features
- `bugfix/*`: Bug fixes
- `hotfix/*`: Urgent fixes

### Commit Messages
Follow conventional commits:
```
feat: add new registration form
fix: resolve mobile menu issue
docs: update README
style: format code with prettier
refactor: improve performance
test: add unit tests
```

## 📄 License

Copyright © 2025 Africa Aviation Innovation Summit. All rights reserved.

## 🤝 Contributing

1. Fork the repository
2. Create feature branch (`git checkout -b feature/amazing-feature`)
3. Commit changes (`git commit -m 'feat: add amazing feature'`)
4. Push to branch (`git push origin feature/amazing-feature`)
5. Open Pull Request

## 📞 Support

For questions or support:
- Email: aais@kenya-airways.com
- Website: [https://aais2025.com](https://aais2025.com)

## 🙏 Acknowledgments

- Kenya Airways
- Diani Reef Beach Resort
- All sponsors and partners

---

**Built with ❤️ for African Aviation Innovation**
