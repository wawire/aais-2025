# Contributing to AAIS 2025

Guidelines for developing features and maintaining code quality.

---

## 📁 Where Does Code Go?

### Quick Decision Tree

```
Feature-specific code (registration, speakers)?
├─ YES → src/features/{feature-name}/
│   ├── components/    Feature UI
│   ├── hooks/        Feature hooks
│   ├── api/         API calls
│   └── types/      TypeScript types
│
└─ NO → Reusable across app?
    ├─ UI Component → src/components/
    │   ├── atoms/      (Button, Input, Badge)
    │   ├── molecules/  (FormField, SearchBar)
    │   └── organisms/  (Header, Footer)
    │
    ├─ Hook → src/hooks/{category}/
    │   ├── common/    (useDebounce, useLocalStorage)
    │   └── ui/       (useScrollDetection)
    │
    ├─ Utility → src/lib/utils/
    ├─ Constant → src/constants/
    └─ Type → src/types/
```

---

## 🎯 Adding a New Feature

### Example: Adding "Exhibitors" Feature

```bash
# 1. Create structure
mkdir -p src/features/exhibitors/{components,hooks,api,types}

# 2. Define types (types/exhibitor.types.ts)
export interface Exhibitor {
  id: string;
  companyName: string;
  boothNumber: string;
}

# 3. Add API calls (api/exhibitors.api.ts)
import { apiClient } from '@/lib/api/client';

export async function getExhibitors() {
  const { data } = await apiClient.get('/api/exhibitors');
  return data;
}

# 4. Create hook (hooks/useExhibitors.ts)
'use client';
import { useState, useEffect } from 'react';
import { getExhibitors } from '../api/exhibitors.api';

export function useExhibitors() {
  const [exhibitors, setExhibitors] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    getExhibitors()
      .then(setExhibitors)
      .finally(() => setLoading(false));
  }, []);

  return { exhibitors, loading };
}

# 5. Create component (components/ExhibitorGrid.tsx)
'use client';
import { useExhibitors } from '../hooks/useExhibitors';

export function ExhibitorGrid() {
  const { exhibitors, loading } = useExhibitors();

  if (loading) return <div>Loading...</div>;

  return (
    <div className="grid grid-cols-3 gap-4">
      {exhibitors.map(ex => (
        <div key={ex.id}>{ex.companyName}</div>
      ))}
    </div>
  );
}

# 6. Export public API (index.ts)
export { ExhibitorGrid } from './components/ExhibitorGrid';
export { useExhibitors } from './hooks/useExhibitors';
export type { Exhibitor } from './types/exhibitor.types';
```

---

## 🧩 Component Guidelines

### Atoms (Basic Elements)
**Examples**: Button, Input, Badge, Icon

```typescript
// components/atoms/Button/Button.tsx
interface ButtonProps {
  children: React.ReactNode;
  variant?: 'primary' | 'secondary';
  onClick?: () => void;
}

export function Button({ children, variant = 'primary', ...props }: ButtonProps) {
  return (
    <button className={cn('btn', `btn-${variant}`)} {...props}>
      {children}
    </button>
  );
}
```

### Molecules (Simple Combos)
**Examples**: FormField (Label + Input + Error), SearchBar

```typescript
// components/molecules/FormField/FormField.tsx
interface FormFieldProps {
  label: string;
  error?: string;
  children: React.ReactNode;
}

export function FormField({ label, error, children }: FormFieldProps) {
  return (
    <div className="form-field">
      <label className="block mb-1">{label}</label>
      {children}
      {error && <span className="text-red-500 text-sm">{error}</span>}
    </div>
  );
}
```

### Organisms (Complex Components)
**Examples**: Header, Footer, ContactForm

```typescript
// components/organisms/Header/Header.tsx
'use client';
import { useState } from 'react';
import { Logo } from '@/components/atoms/Logo';
import { Navigation } from './Navigation';

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="fixed top-0 w-full">
      <Logo />
      <Navigation isOpen={isMenuOpen} />
      {/* ... */}
    </header>
  );
}
```

---

## 📡 API Patterns

### Using the API Client

```typescript
import { apiClient } from '@/lib/api/client';
import { ROUTES } from '@/constants/routes';

// GET request
const { data } = await apiClient.get(ROUTES.API.SPEAKERS);

// POST request
const { data } = await apiClient.post(ROUTES.API.REGISTRATION, formData);

// With retry and timeout
const { data } = await apiClient.get('/api/data', {
  timeout: 60000,    // 60 seconds
  retries: 5,        // Retry 5 times
});

// File upload
const { data } = await apiClient.upload(
  '/api/upload',
  files,
  { userId: '123' }
);
```

### Creating Feature API

```typescript
// features/speakers/api/speakers.api.ts
import { apiClient } from '@/lib/api/client';
import { ROUTES } from '@/constants/routes';
import type { Speaker } from '../types/speaker.types';

export async function getSpeakers(): Promise<Speaker[]> {
  const { data } = await apiClient.get<Speaker[]>(ROUTES.API.SPEAKERS);
  return data;
}

export async function getSpeaker(id: string): Promise<Speaker> {
  const { data } = await apiClient.get<Speaker>(`${ROUTES.API.SPEAKERS}/${id}`);
  return data;
}
```

---

## 🎨 Styling Guidelines

### Use Tailwind Classes

```typescript
// ✅ Good
<div className="flex items-center gap-4 p-6 bg-white rounded-lg">

// ❌ Avoid inline styles
<div style={{ display: 'flex', padding: '24px' }}>
```

### Conditional Styling with cn()

```typescript
import { cn } from '@/lib/utils';

<button
  className={cn(
    'px-4 py-2 rounded-lg',
    isActive && 'bg-blue-500 text-white',
    isDisabled && 'opacity-50 cursor-not-allowed'
  )}
>
```

### Use Theme Colors

```typescript
// From tailwind.config.js
className="text-aviationGold bg-charcoal-900"
```

---

## 🔧 TypeScript Patterns

### Component Props

```typescript
interface MyComponentProps {
  title: string;
  count: number;
  items?: string[];        // Optional
  onSave: (data: Data) => void;  // Callback
  children?: React.ReactNode;    // Children
}

export function MyComponent({ title, count, items = [], ...props }: MyComponentProps) {
  // ...
}
```

### API Response Types

```typescript
interface ApiResponse<T> {
  data: T;
  status: number;
  message?: string;
}

interface Speaker {
  id: string;
  name: string;
  title: string;
}

// Usage
const response: ApiResponse<Speaker[]> = await getSpeakers();
```

---

## ⚡ Performance Best Practices

### Memoization

```typescript
import { memo, useMemo, useCallback } from 'react';

// Component memoization
export const ExpensiveComponent = memo(({ data }) => {
  return <div>{/* heavy rendering */}</div>;
});

// Value memoization
const filtered = useMemo(() => {
  return data.filter(item => item.active);
}, [data]);

// Function memoization
const handleClick = useCallback(() => {
  // handler logic
}, [dependencies]);
```

### Lazy Loading

```typescript
import dynamic from 'next/dynamic';

const HeavyComponent = dynamic(() => import('./HeavyComponent'), {
  loading: () => <Spinner />,
  ssr: false, // Disable server-side rendering if needed
});
```

---

## 📝 Naming Conventions

```
Components:       PascalCase       SpeakerCard.tsx
Hooks:            camelCase        useSpeakers.ts
API files:        kebab-case       speakers.api.ts
Types:            kebab-case       speaker.types.ts
Utils:            camelCase        formatDate.ts
Constants:        UPPER_SNAKE      API_BASE_URL
Folders:          kebab-case       my-feature/
```

---

## 🧪 Testing (Coming Soon)

```typescript
// Component.test.tsx
import { render, screen } from '@testing-library/react';
import { MyComponent } from './MyComponent';

describe('MyComponent', () => {
  it('renders correctly', () => {
    render(<MyComponent title="Test" />);
    expect(screen.getByText('Test')).toBeInTheDocument();
  });
});
```

---

## ✅ Pre-Commit Checklist

- [ ] Code follows folder structure
- [ ] Types are properly defined
- [ ] No console.logs in production code
- [ ] Error handling implemented
- [ ] Imports use `@/` alias
- [ ] Styling uses Tailwind
- [ ] Build passes: `npm run build`
- [ ] Types check: `npm run type-check`
- [ ] Linting passes: `npm run lint`

---

## 🐛 Common Issues

### "Module not found"
Check that imports use `@/` alias:
```typescript
import { Button } from '@/components/atoms/Button';
```

### "Hooks can only be called inside function components"
Add `'use client'` at the top of the file:
```typescript
'use client';
import { useState } from 'react';
```

### "Type error"
Run `npm run type-check` to see all errors and fix them.

---

## 📚 Resources

- [Next.js Docs](https://nextjs.org/docs)
- [React Docs](https://react.dev)
- [TypeScript Handbook](https://www.typescriptlang.org/docs)
- [Tailwind CSS](https://tailwindcss.com/docs)

---

## 🤝 Pull Request Process

1. Create feature branch: `git checkout -b feature/my-feature`
2. Make changes following these guidelines
3. Test thoroughly
4. Commit with conventional commits: `feat: add my feature`
5. Push and create PR
6. Ensure CI passes
7. Request review

---

**Questions?** Open an issue or ask in #frontend channel.
