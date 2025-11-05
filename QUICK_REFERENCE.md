# Quick Reference - Frontend Architecture

## 📁 Where Does It Go?

| What You're Building | Where It Goes | Example |
|---------------------|---------------|---------|
| **Feature-specific component** | `src/features/{feature}/components/` | RegistrationForm.tsx |
| **Reusable button/input** | `src/components/atoms/` | Button.tsx |
| **Form field combo** | `src/components/molecules/` | FormField.tsx |
| **Header/Footer** | `src/components/organisms/` | Header.tsx |
| **Page layout** | `src/components/templates/` | MainLayout.tsx |
| **Feature hook** | `src/features/{feature}/hooks/` | useRegistration.ts |
| **Reusable hook** | `src/hooks/{category}/` | useDebounce.ts |
| **API call** | `src/features/{feature}/api/` | speakers.api.ts |
| **Type definition** | `src/features/{feature}/types/` | speaker.types.ts |
| **Route constant** | `src/constants/routes.ts` | ROUTES.SPEAKERS |
| **Config constant** | `src/constants/config.ts` | EVENT_CONFIG |
| **Utility function** | `src/lib/utils/` | formatDate.ts |

---

## 🚀 Common Commands

```bash
# Development
npm run dev              # Start dev server
npm run build            # Build for production
npm run start            # Start production server

# Code Quality
npm run lint             # Run ESLint
npm run type-check       # Check TypeScript types
npm run format           # Format with Prettier

# Database
npm run prisma:generate  # Generate Prisma client
npm run prisma:push      # Push schema to DB
npm run prisma:studio    # Open Prisma Studio

# Testing (when added)
npm test                 # Run tests
npm run test:watch       # Watch mode
npm run test:coverage    # Coverage report
```

---

## 🎯 Creating New Feature (5 Steps)

```bash
# 1. Create directories
mkdir -p src/features/my-feature/{components,hooks,api,types}

# 2. Add types (my-feature.types.ts)
export interface MyFeature {
  id: string;
  name: string;
}

# 3. Add API (my-feature.api.ts)
export async function getMyFeatures() {
  return apiClient.get('/api/my-features');
}

# 4. Add hook (useMyFeature.ts)
export function useMyFeature() {
  // Logic here
}

# 5. Add component (MyFeatureList.tsx)
export function MyFeatureList() {
  const { data } = useMyFeature();
  return <div>{/* UI */}</div>;
}

# 6. Export public API (index.ts)
export * from './components/MyFeatureList';
export * from './hooks/useMyFeature';
```

---

## 💡 Import Shortcuts

```typescript
// Features
import { useRegistration } from '@/features/registration';
import { SpeakerGrid } from '@/features/speakers';

// Components
import { Button } from '@/components/atoms/Button';
import { FormField } from '@/components/molecules/FormField';
import { Header } from '@/components/organisms/Header';

// Hooks
import { useDebounce } from '@/hooks/common/useDebounce';
import { useScrollDetection } from '@/hooks/ui/useScrollDetection';

// Utils & Config
import { apiClient } from '@/lib/api/client';
import { ROUTES, EVENT_CONFIG } from '@/constants';
import { formatDate } from '@/lib/utils';

// Types
import type { Speaker } from '@/features/speakers';
import type { Registration } from '@/features/registration';
```

---

## 🧩 Component Decision Matrix

```
Need to build:              → Use:                   → Location:
────────────────────────────────────────────────────────────────────
Simple button/input         → Atom                   → components/atoms/
Label + Input + Error       → Molecule               → components/molecules/
Navigation with menu        → Organism               → components/organisms/
Page layout structure       → Template               → components/templates/
Registration form           → Feature Component      → features/registration/components/
Speaker card                → Feature Component      → features/speakers/components/
```

---

## 🔧 Common Patterns

### API Call Pattern
```typescript
// 1. Define in feature/api/
export async function getSpeakers() {
  return apiClient.get('/api/speakers');
}

// 2. Use in hook
export function useSpeakers() {
  const [data, setData] = useState([]);
  useEffect(() => {
    getSpeakers().then(setData);
  }, []);
  return { data };
}

// 3. Use in component
export function SpeakerList() {
  const { data } = useSpeakers();
  return <div>{data.map(...)}</div>;
}
```

### Form Pattern
```typescript
// 1. Define schema (Zod)
const schema = z.object({
  name: z.string().min(2),
  email: z.string().email(),
});

// 2. Create hook
export function useMyForm() {
  const { register, handleSubmit } = useForm({ resolver: zodResolver(schema) });
  return { register, handleSubmit };
}

// 3. Use in component
export function MyForm() {
  const { register, handleSubmit } = useMyForm();
  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <input {...register('name')} />
    </form>
  );
}
```

### Error Handling Pattern
```typescript
try {
  const data = await apiCall();
  // Success
} catch (error) {
  if (error.status === 404) {
    // Not found
  } else if (error.status === 500) {
    // Server error
  } else {
    // Generic error
  }
}
```

---

## 📊 File Naming Conventions

```
Component:        PascalCase.tsx       SpeakerCard.tsx
Hook:             camelCase.ts         useSpeakers.ts
API:              kebab-case.api.ts    speakers.api.ts
Type:             kebab-case.types.ts  speaker.types.ts
Util:             kebab-case.ts        format-date.ts
Constant:         kebab-case.ts        routes.ts
Test:             Component.test.tsx   Button.test.tsx
```

---

## 🎨 Styling Quick Reference

```typescript
// Basic styling
className="flex items-center gap-4 p-6"

// Conditional styling
className={cn(
  'base-classes',
  condition && 'conditional-classes',
  {
    'active-classes': isActive,
    'disabled-classes': isDisabled,
  }
)}

// Responsive
className="text-sm md:text-base lg:text-lg"

// Colors (theme)
className="text-aviationGold bg-charcoal-900"

// Hover/Focus
className="hover:bg-blue-500 focus:ring-2 focus:ring-blue-500"
```

---

## 🐛 Debugging Checklist

Issue:                              Try:
─────────────────────────────────────────────────────────────
Module not found                    → Check @/ imports
Type errors                         → npm run type-check
Hooks not working                   → Add 'use client'
Build fails                         → Check server/client mix
Slow performance                    → Add React.memo/useMemo
State not updating                  → Check dependencies array
API not working                     → Check CORS, endpoints
Styles not applying                 → Check Tailwind config

---

## ⚡ Performance Checklist

- [ ] Use React.memo for heavy components
- [ ] Use useCallback for event handlers
- [ ] Use useMemo for expensive calculations
- [ ] Lazy load with dynamic()
- [ ] Use Next.js Image component
- [ ] Minimize bundle with code splitting
- [ ] Use server components when possible

---

## ✅ Pre-Commit Checklist

- [ ] No console.logs
- [ ] No TODOs without tickets
- [ ] Types defined
- [ ] Error handling added
- [ ] Tests written
- [ ] Build passes
- [ ] Types check passes
- [ ] Lint passes

---

## 🔗 Useful Links

- [Architecture Docs](./ARCHITECTURE.md)
- [Migration Guide](./MIGRATION.md)
- [Frontend Guide](./FRONTEND_GUIDE.md)
- [Next.js Docs](https://nextjs.org/docs)
- [React Docs](https://react.dev)
- [Tailwind Docs](https://tailwindcss.com/docs)
- [TypeScript Docs](https://www.typescriptlang.org/docs)

---

**Print this and keep it handy! 📄**
