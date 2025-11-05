# Frontend Development Guide - AAIS 2025

## 🎯 Quick Start for Developers

### Adding a New Feature

1. **Create feature directory:**
```bash
mkdir -p src/features/my-feature/{components,hooks,api,types}
```

2. **Define types:**
```typescript
// src/features/my-feature/types/my-feature.types.ts
export interface MyFeature {
  id: string;
  name: string;
}
```

3. **Create API functions:**
```typescript
// src/features/my-feature/api/my-feature.api.ts
import { apiClient } from '@/lib/api/client';

export async function getMyFeatures() {
  const { data } = await apiClient.get('/api/my-features');
  return data;
}
```

4. **Create custom hook:**
```typescript
// src/features/my-feature/hooks/useMyFeature.ts
'use client';

import { useState, useEffect } from 'react';
import { getMyFeatures } from '../api/my-feature.api';

export function useMyFeature() {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    getMyFeatures()
      .then(setData)
      .finally(() => setLoading(false));
  }, []);

  return { data, loading };
}
```

5. **Create component:**
```typescript
// src/features/my-feature/components/MyFeatureList.tsx
'use client';

import { useMyFeature } from '../hooks/useMyFeature';

export function MyFeatureList() {
  const { data, loading } = useMyFeature();

  if (loading) return <div>Loading...</div>;

  return (
    <div>
      {data.map((item) => (
        <div key={item.id}>{item.name}</div>
      ))}
    </div>
  );
}
```

6. **Export public API:**
```typescript
// src/features/my-feature/index.ts
export { MyFeatureList } from './components/MyFeatureList';
export { useMyFeature } from './hooks/useMyFeature';
export type { MyFeature } from './types/my-feature.types';
```

---

## 📁 Where Should I Put My Code?

### Decision Tree:

```
Is it specific to ONE feature/domain?
├─ YES → Put in src/features/{feature-name}/
│
└─ NO → Is it a UI component?
    ├─ YES → Is it reusable across features?
    │   ├─ YES → Put in src/components/
    │   │   ├─ Simple element? → atoms/
    │   │   ├─ 2-3 atoms combined? → molecules/
    │   │   ├─ Complex business logic? → organisms/
    │   │   └─ Page layout? → templates/
    │   │
    │   └─ NO → Put in src/features/{feature}/components/
    │
    └─ NO → Is it a utility/helper?
        ├─ YES → Put in src/lib/utils/
        │
        └─ NO → Is it a configuration constant?
            ├─ YES → Put in src/constants/
            │
            └─ NO → Is it a type definition?
                ├─ YES → src/types/ or src/features/{feature}/types/
                └─ NO → Ask yourself: "What is this really?"
```

---

## 🧩 Component Categories Explained

### Atoms (Smallest Units)
**Purpose**: Basic building blocks, no dependencies

**Examples**:
- `<Button>` - A button
- `<Input>` - An input field
- `<Badge>` - A badge/tag
- `<Icon>` - An icon
- `<Spinner>` - A loading spinner

**Rules**:
- ❌ Don't import other components
- ❌ Don't have business logic
- ✅ Can have variants/styles
- ✅ Fully reusable

```typescript
// Good Atom Example
export function Button({ children, variant = 'primary', ...props }) {
  return (
    <button className={cn('btn', `btn-${variant}`)} {...props}>
      {children}
    </button>
  );
}
```

### Molecules (Simple Combinations)
**Purpose**: 2-3 atoms combined for a simple purpose

**Examples**:
- `<FormField>` = Label + Input + Error
- `<SearchBar>` = Input + Button
- `<Card>` = Container + Title + Content
- `<Alert>` = Icon + Message + Close Button

**Rules**:
- ✅ Composed of atoms
- ✅ Simple, single-purpose
- ❌ No complex business logic
- ✅ Reusable across features

```typescript
// Good Molecule Example
export function FormField({ label, error, children }) {
  return (
    <div className="form-field">
      <Label>{label}</Label>
      {children}
      {error && <ErrorText>{error}</ErrorText>}
    </div>
  );
}
```

### Organisms (Complex Components)
**Purpose**: Complex components with business logic

**Examples**:
- `<Header>` - Navigation, logo, user menu
- `<ContactForm>` - Multi-field form with validation
- `<SpeakerGrid>` - Data fetching + grid display
- `<Footer>` - Multiple sections, links, social

**Rules**:
- ✅ Can fetch data
- ✅ Can have state management
- ✅ Composed of molecules/atoms
- ✅ Connected to business logic

```typescript
// Good Organism Example
export function ContactForm() {
  const { handleSubmit, isSubmitting } = useContactForm();

  return (
    <form onSubmit={handleSubmit}>
      <FormField label="Name">
        <Input name="name" />
      </FormField>
      <FormField label="Email">
        <Input name="email" type="email" />
      </FormField>
      <Button type="submit" loading={isSubmitting}>
        Submit
      </Button>
    </form>
  );
}
```

### Templates (Page Layouts)
**Purpose**: Define page structure without business logic

**Examples**:
- `<MainLayout>` - Header + Content + Footer
- `<DashboardLayout>` - Sidebar + Main + Notifications
- `<AuthLayout>` - Centered card for login/signup

**Rules**:
- ✅ Define structure only
- ❌ No data fetching
- ❌ No business logic
- ✅ Accept {children} prop

```typescript
// Good Template Example
export function MainLayout({ children }) {
  return (
    <>
      <Header />
      <main className="main-content">{children}</main>
      <Footer />
    </>
  );
}
```

---

## 🔄 Data Flow Best Practices

### 1. Server Components by Default
```typescript
// app/speakers/page.tsx - Server Component (default)
export default async function SpeakersPage() {
  const speakers = await getSpeakers(); // Direct API call

  return <SpeakerGrid speakers={speakers} />;
}
```

### 2. Client Components When Needed
```typescript
// Only use 'use client' when you need:
// - useState, useEffect, etc.
// - Event handlers (onClick, onChange)
// - Browser APIs (localStorage, etc.)
// - Third-party interactive libraries

'use client';

export function InteractiveComponent() {
  const [count, setCount] = useState(0);

  return <button onClick={() => setCount(count + 1)}>{count}</button>;
}
```

### 3. Custom Hooks for Logic
```typescript
// Don't put logic directly in components
❌ Bad:
function MyComponent() {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch('/api/data')
      .then(res => res.json())
      .then(setData);
  }, []);

  return <div>{/* ... */}</div>;
}

✅ Good:
function MyComponent() {
  const { data } = useMyData(); // Logic in hook
  return <div>{/* ... */}</div>;
}
```

---

## 🎨 Styling Guidelines

### Use Tailwind Classes
```typescript
✅ Good:
<div className="flex items-center gap-4 p-6 bg-white rounded-lg">

❌ Avoid inline styles:
<div style={{ display: 'flex', padding: '24px' }}>
```

### Use cn() for Conditional Classes
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

### Extract Reusable Styles
```typescript
// src/lib/styles.ts
export const cardStyles = {
  base: 'p-6 bg-white rounded-lg shadow-md',
  hover: 'hover:shadow-lg transition-shadow',
  bordered: 'border border-gray-200',
};

// Usage:
<div className={cn(cardStyles.base, cardStyles.hover)}>
```

---

## 🧪 Testing Guidelines

### Test File Naming
```
Component.tsx → Component.test.tsx
hook.ts → hook.spec.ts
util.ts → util.test.ts
```

### What to Test

**Components:**
- ✅ Renders correctly
- ✅ User interactions work
- ✅ Props affect output
- ❌ Don't test implementation details

**Hooks:**
- ✅ Return values are correct
- ✅ State updates work
- ✅ Side effects trigger
- ❌ Don't test React internals

**Utils:**
- ✅ Input → Output correctness
- ✅ Edge cases
- ✅ Error handling

---

## 📦 Import/Export Best Practices

### Use Barrel Exports
```typescript
// features/speakers/index.ts
export { SpeakerCard } from './components/SpeakerCard';
export { useSpeakers } from './hooks/useSpeakers';
export type { Speaker } from './types/speaker.types';

// Usage in other files:
import { SpeakerCard, useSpeakers, type Speaker } from '@/features/speakers';
```

### Import Order
```typescript
// 1. React imports
import { useState, useEffect } from 'react';

// 2. Next.js imports
import Link from 'next/link';
import Image from 'next/image';

// 3. External libraries
import { cn } from 'clsx';
import { z } from 'zod';

// 4. Internal features
import { useRegistration } from '@/features/registration';

// 5. Internal components
import { Button } from '@/components/atoms/Button';

// 6. Internal utilities
import { formatDate } from '@/lib/utils';

// 7. Internal types
import type { Speaker } from '@/types';

// 8. Relative imports
import { SpeakerCard } from './SpeakerCard';

// 9. Styles
import styles from './Component.module.css';
```

---

## 🚀 Performance Tips

### 1. Use React.memo for Expensive Components
```typescript
export const ExpensiveComponent = React.memo(({ data }) => {
  // Heavy rendering logic
  return <div>{/* ... */}</div>;
});
```

### 2. Use useCallback for Event Handlers
```typescript
const handleClick = useCallback(() => {
  // Handler logic
}, [dependencies]);
```

### 3. Use useMemo for Expensive Calculations
```typescript
const filtered = useMemo(() => {
  return data.filter(item => item.active);
}, [data]);
```

### 4. Lazy Load Heavy Components
```typescript
const HeavyComponent = dynamic(() => import('./HeavyComponent'), {
  loading: () => <Spinner />,
});
```

---

## 🔐 Security Checklist

- [ ] Validate all user inputs with Zod
- [ ] Sanitize data before rendering
- [ ] Use environment variables for secrets
- [ ] Never commit `.env.local`
- [ ] Use HTTPS for all API calls
- [ ] Implement CSRF protection
- [ ] Add rate limiting to APIs

---

## 📝 Code Review Checklist

Before submitting PR:

- [ ] Code follows architecture guidelines
- [ ] Components are in correct directories
- [ ] No console.logs in production code
- [ ] Types are properly defined
- [ ] Error handling is implemented
- [ ] Tests are written
- [ ] Documentation is updated
- [ ] No TODO comments without tickets
- [ ] Imports are organized
- [ ] Build passes: `npm run build`
- [ ] Type check passes: `npm run type-check`
- [ ] Linting passes: `npm run lint`

---

## 🆘 Common Issues & Solutions

### Issue: "Module not found"
**Solution**: Check import paths use `@/` alias

### Issue: "Hooks can only be used in client components"
**Solution**: Add `'use client'` at top of file

### Issue: "Type errors"
**Solution**: Run `npm run type-check` and fix reported errors

### Issue: "Build fails"
**Solution**: Check for server/client component mixing

---

## 📚 Further Reading

- [ARCHITECTURE.md](./ARCHITECTURE.md) - Complete architecture guide
- [MIGRATION.md](./MIGRATION.md) - Migration from old structure
- [README.md](./README.md) - Project setup and overview

---

**Happy Coding! 🚀**
