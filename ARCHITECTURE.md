# Frontend Architecture Guide - AAIS 2025

## Philosophy

This project follows **Feature-Driven Development** combined with **Atomic Design** principles, organized for maximum scalability and maintainability.

### Core Principles

1. **Feature-First Organization** - Group by business domain, not technical type
2. **Separation of Concerns** - Clear boundaries between layers
3. **Component Hierarchy** - Atomic Design (atoms → molecules → organisms → templates → pages)
4. **Type Safety** - Comprehensive TypeScript coverage
5. **Testability** - Easy to test, mock, and maintain
6. **Reusability** - DRY principles throughout
7. **Performance** - Optimized for Next.js 15 + React 19

---

## 📁 Directory Structure

```
src/
├── app/                          # Next.js 15 App Router (Pages only)
│   ├── (marketing)/             # Route group for marketing pages
│   │   ├── about/
│   │   ├── speakers/
│   │   └── venue/
│   ├── (registration)/          # Route group for registration flow
│   │   └── register/
│   ├── api/                     # API Route Handlers
│   │   ├── registration/
│   │   ├── contact/
│   │   └── webhooks/
│   ├── layout.tsx              # Root layout
│   ├── page.tsx                # Homepage
│   ├── error.tsx               # Error boundary
│   ├── loading.tsx             # Loading state
│   ├── not-found.tsx           # 404 page
│   └── sitemap.ts              # Dynamic sitemap
│
├── features/                    # 🎯 Feature-based modules (NEW!)
│   ├── registration/           # Registration domain
│   │   ├── api/               # API calls for registration
│   │   ├── components/        # Registration-specific components
│   │   ├── hooks/             # Registration hooks
│   │   ├── types/             # Registration types
│   │   ├── utils/             # Registration utilities
│   │   └── index.ts           # Public exports
│   │
│   ├── speakers/              # Speakers domain
│   │   ├── components/
│   │   │   ├── SpeakerCard.tsx
│   │   │   ├── SpeakerGrid.tsx
│   │   │   └── SpeakerProfile.tsx
│   │   ├── hooks/
│   │   │   ├── useSpeakers.ts
│   │   │   └── useSpeakerFilter.ts
│   │   ├── types/
│   │   │   └── speaker.types.ts
│   │   └── index.ts
│   │
│   ├── agenda/                # Agenda domain
│   │   ├── components/
│   │   ├── hooks/
│   │   ├── types/
│   │   └── index.ts
│   │
│   ├── sponsors/              # Sponsors domain
│   └── venue/                 # Venue domain
│
├── components/                 # 🧩 Shared components (Atomic Design)
│   ├── atoms/                 # Smallest building blocks
│   │   ├── Button/
│   │   │   ├── Button.tsx
│   │   │   ├── Button.test.tsx
│   │   │   ├── Button.stories.tsx
│   │   │   └── index.ts
│   │   ├── Input/
│   │   ├── Badge/
│   │   ├── Spinner/
│   │   └── Icon/
│   │
│   ├── molecules/             # Simple component combinations
│   │   ├── FormField/        # Label + Input + Error
│   │   ├── SearchBar/        # Input + Button
│   │   ├── Card/
│   │   └── Alert/
│   │
│   ├── organisms/             # Complex components
│   │   ├── Header/
│   │   │   ├── Header.tsx
│   │   │   ├── HeaderNav.tsx
│   │   │   ├── MobileMenu.tsx
│   │   │   └── index.ts
│   │   ├── Footer/
│   │   ├── Hero/
│   │   └── ContactForm/
│   │
│   ├── templates/             # Page layouts
│   │   ├── MainLayout/
│   │   ├── DashboardLayout/
│   │   └── AuthLayout/
│   │
│   └── providers/             # Context providers
│       ├── ThemeProvider.tsx
│       ├── AnalyticsProvider.tsx
│       └── index.ts
│
├── lib/                        # 🛠️ Core utilities & configurations
│   ├── api/                   # API client layer
│   │   ├── client.ts         # Axios/Fetch wrapper
│   │   ├── endpoints.ts      # API endpoint constants
│   │   ├── interceptors.ts   # Request/response interceptors
│   │   └── types.ts          # API types
│   │
│   ├── analytics/             # Analytics utilities
│   │   ├── analytics.ts
│   │   ├── events.ts
│   │   └── types.ts
│   │
│   ├── validation/            # Form validation
│   │   ├── schemas/          # Zod schemas
│   │   │   ├── registration.schema.ts
│   │   │   └── contact.schema.ts
│   │   └── validators.ts
│   │
│   ├── utils/                 # General utilities
│   │   ├── date.utils.ts
│   │   ├── string.utils.ts
│   │   ├── format.utils.ts
│   │   └── index.ts
│   │
│   ├── metadata.ts            # SEO metadata
│   └── config.ts              # App configuration
│
├── hooks/                      # 🎣 Shared custom hooks
│   ├── common/                # Generic hooks
│   │   ├── useDebounce.ts
│   │   ├── useLocalStorage.ts
│   │   ├── useMediaQuery.ts
│   │   └── usePrevious.ts
│   │
│   ├── ui/                    # UI-related hooks
│   │   ├── useScrollDetection.ts
│   │   ├── useKeyboardNavigation.ts
│   │   ├── useClickOutside.ts
│   │   └── useIntersectionObserver.ts
│   │
│   ├── data/                  # Data fetching hooks
│   │   ├── useQuery.ts       # Custom React Query wrapper
│   │   ├── useMutation.ts
│   │   └── useInfiniteScroll.ts
│   │
│   └── form/                  # Form hooks
│       ├── useForm.ts
│       └── useFieldValidation.ts
│
├── types/                      # 🏷️ Global TypeScript types
│   ├── models/                # Data models
│   │   ├── user.types.ts
│   │   ├── event.types.ts
│   │   ├── registration.types.ts
│   │   └── index.ts
│   │
│   ├── api/                   # API types
│   │   ├── requests.types.ts
│   │   ├── responses.types.ts
│   │   └── index.ts
│   │
│   ├── global.d.ts           # Global type declarations
│   └── index.ts              # Central type exports
│
├── constants/                  # 📋 Application constants
│   ├── routes.ts             # Route paths
│   ├── config.ts             # App config constants
│   ├── endpoints.ts          # API endpoints
│   ├── messages.ts           # User messages
│   └── index.ts
│
├── styles/                     # 🎨 Global styles
│   ├── globals.css
│   ├── fonts.css
│   └── animations.css
│
└── __tests__/                  # 🧪 Test utilities
    ├── setup.ts
    ├── mocks/
    │   ├── handlers.ts       # MSW handlers
    │   └── data.ts           # Mock data
    └── utils/
        └── test-utils.tsx    # Custom render, etc.

```

---

## 🎯 Feature Module Structure (Detailed)

Each feature follows this pattern:

```
features/registration/
├── components/               # Feature-specific components
│   ├── RegistrationForm.tsx
│   ├── PackageSelector.tsx
│   ├── PaymentMethod.tsx
│   └── ConfirmationStep.tsx
│
├── hooks/                   # Feature-specific hooks
│   ├── useRegistration.ts
│   ├── usePackageSelection.ts
│   └── usePaymentValidation.ts
│
├── api/                     # Feature API calls
│   ├── registration.api.ts
│   └── payment.api.ts
│
├── types/                   # Feature types
│   ├── registration.types.ts
│   └── payment.types.ts
│
├── utils/                   # Feature utilities
│   ├── validation.ts
│   └── formatters.ts
│
├── constants/              # Feature constants
│   └── packages.ts
│
└── index.ts                # Public API (exports)
```

---

## 📐 Component Hierarchy (Atomic Design)

### Atoms (Smallest units)
- `Button`, `Input`, `Label`, `Badge`, `Icon`, `Spinner`
- **Rule**: No dependencies on other components
- **Example**: `<Button>`, `<Input />`

### Molecules (Simple combinations)
- `FormField`, `SearchBar`, `Card`, `Alert`
- **Rule**: Composed of 2-3 atoms
- **Example**: `<FormField>` = Label + Input + Error

### Organisms (Complex components)
- `Header`, `Footer`, `ContactForm`, `SpeakerGrid`
- **Rule**: Business logic, composed of molecules/atoms
- **Example**: `<Header>` = Logo + Nav + SearchBar + UserMenu

### Templates (Page layouts)
- `MainLayout`, `DashboardLayout`, `AuthLayout`
- **Rule**: Define page structure, no business logic
- **Example**: `<MainLayout>` = Header + {children} + Footer

### Pages (App Router)
- Assembled in `app/` directory
- **Rule**: Minimal logic, compose templates + organisms
- **Example**: `app/speakers/page.tsx` uses `<SpeakerGrid>`

---

## 🔄 Data Flow Architecture

```
┌─────────────────────────────────────────────────────┐
│                    User Interaction                  │
└─────────────────────┬───────────────────────────────┘
                      │
                      ▼
┌─────────────────────────────────────────────────────┐
│              Component (UI Layer)                    │
│  • Presentational logic only                         │
│  • Calls custom hooks                                │
└─────────────────────┬───────────────────────────────┘
                      │
                      ▼
┌─────────────────────────────────────────────────────┐
│            Custom Hook (Business Logic)              │
│  • useRegistration, useSpeakers, etc.                │
│  • Orchestrates API calls                            │
│  • Manages local state                               │
└─────────────────────┬───────────────────────────────┘
                      │
                      ▼
┌─────────────────────────────────────────────────────┐
│              API Client (Data Layer)                 │
│  • features/*/api/*.api.ts                           │
│  • Makes HTTP requests                               │
│  • Transforms data                                   │
└─────────────────────┬───────────────────────────────┘
                      │
                      ▼
┌─────────────────────────────────────────────────────┐
│               Backend API (Next.js)                  │
│  • app/api/* route handlers                          │
└─────────────────────────────────────────────────────┘
```

---

## 🎨 Naming Conventions

### Components
- PascalCase: `SpeakerCard.tsx`
- Folder per component: `Button/Button.tsx`
- Index exports: `Button/index.ts`

### Hooks
- camelCase with 'use' prefix: `useRegistration.ts`
- Custom hooks: `useSpeakerFilter.ts`

### Types
- PascalCase with suffix: `Speaker`, `SpeakerProps`
- File suffix: `.types.ts` or `.d.ts`

### API Files
- camelCase with suffix: `registration.api.ts`
- Service pattern: `speakers.service.ts`

### Constants
- UPPER_SNAKE_CASE: `API_BASE_URL`
- File: `routes.ts`, `config.ts`

---

## 🧪 Testing Strategy

### File Naming
- Test files: `Component.test.tsx`
- Spec files: `hook.spec.ts`
- E2E tests: `registration.e2e.ts`

### Test Organization
```
__tests__/
├── unit/              # Unit tests
├── integration/       # Integration tests
├── e2e/              # End-to-end tests (Playwright)
└── utils/            # Test utilities
```

---

## 📦 Import/Export Patterns

### ✅ Good: Barrel Exports
```typescript
// features/speakers/index.ts
export { SpeakerCard } from './components/SpeakerCard';
export { SpeakerGrid } from './components/SpeakerGrid';
export { useSpeakers } from './hooks/useSpeakers';
export type { Speaker, SpeakerFilters } from './types';
```

### ✅ Good: Aliased Imports
```typescript
import { Button } from '@/components/atoms/Button';
import { useSpeakers } from '@/features/speakers';
import { API_ROUTES } from '@/constants/routes';
```

### ❌ Bad: Relative Hell
```typescript
import { Button } from '../../../components/atoms/Button';
```

---

## 🚀 Performance Best Practices

1. **Code Splitting**: Use dynamic imports for heavy features
2. **Lazy Loading**: React.lazy() for non-critical components
3. **Memoization**: React.memo, useMemo, useCallback
4. **Server Components**: Use RSC by default, 'use client' only when needed
5. **Image Optimization**: Use Next.js Image component

---

## 🔐 Security Best Practices

1. **Environment Variables**: Use `.env.local`, never commit secrets
2. **Input Validation**: Zod schemas for all forms
3. **XSS Prevention**: Sanitize user input
4. **CSRF Protection**: Use Next.js built-in protection
5. **Type Safety**: Strict TypeScript configuration

---

## 📚 Documentation

Each feature should have:
- `README.md` - Feature overview
- JSDoc comments on public APIs
- Storybook stories for components
- Type documentation

---

## Migration Guide

See `MIGRATION.md` for step-by-step migration from old to new structure.

---

**Last Updated**: 2025-01-05
**Architecture Version**: 2.0
