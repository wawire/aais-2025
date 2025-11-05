/**
 * Registration Feature
 * Public API exports
 */

// Components
// export { RegistrationForm } from './components/RegistrationForm';
// export { PackageSelector } from './components/PackageSelector';

// Hooks
export { useRegistration } from './hooks/useRegistration';

// API
export * from './api/registration.api';

// Types
export type {
  Registration,
  RegistrationFormData,
  PackageInfo,
  PackageType,
  RegistrationStatus,
  PaymentStatus,
  PaymentMethod,
  RegistrationError,
} from './types/registration.types';
