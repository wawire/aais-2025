# Migration Guide: Old Structure → New Architecture

This guide helps you migrate from the current component-centric structure to the new feature-driven architecture.

## 📋 Overview

**Goal**: Reorganize codebase from technical grouping to feature-based organization for better scalability.

**Timeline**: Can be done incrementally, feature by feature.

---

## Phase 1: Setup New Structure

### Step 1: Create New Directories

```bash
# Run this from project root
mkdir -p src/features/{registration,speakers,agenda,sponsors,venue}
mkdir -p src/components/{atoms,molecules,organisms,templates,providers}
mkdir -p src/hooks/{common,ui,data,form}
mkdir -p src/constants
mkdir -p src/lib/api
```

### Step 2: Install Dependencies (if needed)

```bash
# Form validation
npm install zod react-hook-form @hookform/resolvers

# State management (optional - if you need it later)
npm install zustand
```

---

## Phase 2: Migrate Common Components

### Step 1: Move UI Components to Atomic Structure

**Before:**
```
src/components/
├── ui/
│   ├── Button.tsx
│   ├── card.tsx
│   └── badge.tsx
```

**After:**
```
src/components/
├── atoms/
│   ├── Button/
│   │   ├── Button.tsx
│   │   ├── Button.test.tsx
│   │   └── index.ts
│   ├── Badge/
│   └── Card/
```

**Action:**
```bash
# For each UI component
mkdir -p src/components/atoms/Button
mv src/components/ui/Button.tsx src/components/atoms/Button/Button.tsx

# Create index.ts
cat > src/components/atoms/Button/index.ts << 'EOF'
export { Button } from './Button';
export type { ButtonProps } from './Button';
EOF
```

### Step 2: Move Layout Components to Organisms

**Before:**
```
src/components/layout/
├── TransparentHeader.tsx
├── Footer.tsx
└── MobileNavigation.tsx
```

**After:**
```
src/components/organisms/
├── Header/
│   ├── Header.tsx
│   ├── HeaderNav.tsx
│   ├── MobileMenu.tsx
│   └── index.ts
└── Footer/
    ├── Footer.tsx
    └── index.ts
```

**Action:**
```bash
mkdir -p src/components/organisms/Header
mv src/components/layout/TransparentHeader.tsx src/components/organisms/Header/Header.tsx
mv src/components/layout/MobileNavigation.tsx src/components/organisms/Header/MobileMenu.tsx

# Update imports in moved files
# Change: import { LogoTransition } from './LogoTransition'
# To: import { LogoTransition } from '../../molecules/LogoTransition'
```

---

## Phase 3: Create Feature Modules

### Example: Migrate Speakers Feature

**Before:**
```
src/components/
├── SpeakerGrid.tsx
├── PanelistGrid.tsx
├── ModeratorGrid.tsx
└── sections/
    └── SpeakersHero.tsx
```

**After:**
```
src/features/speakers/
├── components/
│   ├── SpeakerCard.tsx
│   ├── SpeakerGrid.tsx
│   ├── PanelistGrid.tsx
│   └── ModeratorGrid.tsx
├── hooks/
│   ├── useSpeakers.ts
│   └── useSpeakerFilter.ts
├── types/
│   └── speaker.types.ts
├── api/
│   └── speakers.api.ts
└── index.ts
```

**Step-by-Step:**

1. **Create feature structure:**
```bash
mkdir -p src/features/speakers/{components,hooks,types,api}
```

2. **Move components:**
```bash
mv src/components/SpeakerGrid.tsx src/features/speakers/components/
mv src/components/PanelistGrid.tsx src/features/speakers/components/
mv src/components/ModeratorGrid.tsx src/features/speakers/components/
```

3. **Create types file:**
```typescript
// src/features/speakers/types/speaker.types.ts
export interface Speaker {
  id: string;
  name: string;
  title: string;
  company: string;
  bio?: string;
  image?: string;
  linkedIn?: string;
  twitter?: string;
}
```

4. **Create API file:**
```typescript
// src/features/speakers/api/speakers.api.ts
import { apiClient } from '@/lib/api/client';
import type { Speaker } from '../types/speaker.types';

export async function getSpeakers(): Promise<Speaker[]> {
  const response = await apiClient.get<Speaker[]>('/api/speakers');
  return response.data;
}
```

5. **Create custom hook:**
```typescript
// src/features/speakers/hooks/useSpeakers.ts
'use client';

import { useState, useEffect } from 'react';
import { getSpeakers } from '../api/speakers.api';
import type { Speaker } from '../types/speaker.types';

export function useSpeakers() {
  const [speakers, setSpeakers] = useState<Speaker[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<Error | null>(null);

  useEffect(() => {
    getSpeakers()
      .then(setSpeakers)
      .catch(setError)
      .finally(() => setLoading(false));
  }, []);

  return { speakers, loading, error };
}
```

6. **Create public API (index.ts):**
```typescript
// src/features/speakers/index.ts
export { SpeakerGrid } from './components/SpeakerGrid';
export { PanelistGrid } from './components/PanelistGrid';
export { useSpeakers } from './hooks/useSpeakers';
export type { Speaker } from './types/speaker.types';
```

---

## Phase 4: Update Imports

### Before:
```typescript
import { SpeakerGrid } from '@/components/SpeakerGrid';
import { TransparentHeader } from '@/components/layout/TransparentHeader';
import { Button } from '@/components/ui/Button';
```

### After:
```typescript
import { SpeakerGrid, useSpeakers } from '@/features/speakers';
import { Header } from '@/components/organisms/Header';
import { Button } from '@/components/atoms/Button';
```

### Find and Replace Strategy:

```bash
# Find all imports to update
grep -r "from '@/components" src/app

# Use VS Code's Find and Replace (Ctrl+Shift+H)
# Find: from '@/components/SpeakerGrid'
# Replace: from '@/features/speakers'
```

---

## Phase 5: Migrate Sections to Features

**Principle**: Section components belong to their feature domain.

### Example: Registration Sections

**Before:**
```
src/components/sections/
├── Registration.tsx
├── RegisterHero.tsx
└── RegistrationCTA.tsx
```

**After:**
```
src/features/registration/
└── components/
    ├── RegistrationForm.tsx
    ├── RegistrationHero.tsx
    └── RegistrationCTA.tsx
```

**Action:**
```bash
mv src/components/sections/Registration.tsx src/features/registration/components/RegistrationForm.tsx
mv src/components/sections/RegisterHero.tsx src/features/registration/components/RegistrationHero.tsx
```

---

## Phase 6: Organize Hooks

### Current:
```
src/hooks/
├── useScrollDetection.ts
└── useKeyboardNavigation.ts
```

### New:
```
src/hooks/
├── ui/
│   ├── useScrollDetection.ts
│   ├── useKeyboardNavigation.ts
│   └── useClickOutside.ts
├── common/
│   ├── useDebounce.ts
│   ├── useLocalStorage.ts
│   └── usePrevious.ts
└── data/
    └── useQuery.ts
```

**Action:**
```bash
mkdir -p src/hooks/{ui,common,data,form}
mv src/hooks/useScrollDetection.ts src/hooks/ui/
mv src/hooks/useKeyboardNavigation.ts src/hooks/ui/
```

---

## Phase 7: Constants Extraction

### Extract Magic Strings:

**Before:**
```typescript
// Scattered throughout components
const url = '/api/registration';
const price = 300;
```

**After:**
```typescript
// src/constants/config.ts
export const REGISTRATION_CONFIG = {
  DELEGATE_PRICE: 300,
  EARLY_BIRD_PRICE: 250,
};

// Usage
import { REGISTRATION_CONFIG } from '@/constants/config';
const price = REGISTRATION_CONFIG.DELEGATE_PRICE;
```

---

## Phase 8: Testing Strategy

### Add Tests for Migrated Features:

```typescript
// src/features/speakers/__tests__/useSpeakers.test.ts
import { renderHook, waitFor } from '@testing-library/react';
import { useSpeakers } from '../hooks/useSpeakers';

describe('useSpeakers', () => {
  it('should fetch speakers', async () => {
    const { result } = renderHook(() => useSpeakers());

    await waitFor(() => {
      expect(result.current.loading).toBe(false);
    });

    expect(result.current.speakers).toHaveLength(10);
  });
});
```

---

## Migration Checklist

### Per Feature:

- [ ] Create feature directory structure
- [ ] Move components to feature/components
- [ ] Extract types to feature/types
- [ ] Create API functions in feature/api
- [ ] Create custom hooks in feature/hooks
- [ ] Create feature index.ts with public exports
- [ ] Update all imports
- [ ] Add tests
- [ ] Update documentation

### Overall:

- [ ] Reorganize shared components into atomic structure
- [ ] Move layout components to organisms
- [ ] Organize hooks by category
- [ ] Extract constants
- [ ] Create API client layer
- [ ] Add form validation setup
- [ ] Update tsconfig paths if needed
- [ ] Run type checking: `npm run type-check`
- [ ] Run tests: `npm test`
- [ ] Update README with new structure

---

## Rollback Strategy

If something breaks during migration:

1. **Keep old structure temporarily:**
   ```bash
   mv src/components src/components.old
   # If new structure doesn't work:
   mv src/components.old src/components
   ```

2. **Migrate incrementally:**
   - Migrate one feature at a time
   - Test thoroughly before next migration
   - Keep both old and new imports working simultaneously

3. **Use Git branches:**
   ```bash
   git checkout -b migrate-speakers-feature
   # Make changes
   git commit -m "feat: migrate speakers to new structure"
   # If issues:
   git checkout main
   ```

---

## Benefits After Migration

✅ **Better Organization**: Features grouped by domain
✅ **Easier Refactoring**: Changes isolated to feature modules
✅ **Improved Testing**: Clear boundaries for unit tests
✅ **Faster Onboarding**: New developers find code easily
✅ **Better Code Splitting**: Bundle size per feature
✅ **Scalability**: Add features without touching others

---

## Common Pitfalls

### ❌ Don't:
- Move everything at once
- Break existing functionality
- Forget to update imports
- Skip testing after migration

### ✅ Do:
- Migrate one feature at a time
- Keep old imports working during transition
- Test each migration thoroughly
- Document as you go

---

## Need Help?

Refer to `ARCHITECTURE.md` for complete structure documentation.

---

**Last Updated**: 2025-01-05
