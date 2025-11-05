/**
 * Global Type Definitions for AAIS 2025
 * Centralized type definitions for the application
 */

// Navigation Types
export interface NavigationItem {
  id: string;
  label: string;
  href: string;
  external?: boolean;
  ariaLabel?: string;
}

// Event Types
export interface Event {
  id: string;
  name: string;
  description: string;
  startDate: string;
  endDate: string;
  location: EventLocation;
  status: EventStatus;
}

export interface EventLocation {
  name: string;
  address: string;
  city: string;
  country: string;
  coordinates?: {
    latitude: number;
    longitude: number;
  };
}

export type EventStatus = 'upcoming' | 'ongoing' | 'completed' | 'cancelled';

// Speaker Types
export interface Speaker {
  id: string;
  name: string;
  title: string;
  company: string;
  bio?: string;
  image?: string;
  linkedIn?: string;
  twitter?: string;
  expertise?: string[];
}

export interface Panelist extends Speaker {
  panel?: string;
}

export interface Moderator extends Speaker {
  sessions?: string[];
}

// Registration Types
export type RegistrationPackageType = 'delegate' | 'exhibitor' | 'sponsor';

export interface RegistrationPackage {
  id: string;
  type: RegistrationPackageType;
  name: string;
  price: number;
  currency: string;
  features: string[];
  earlyBirdPrice?: number;
  earlyBirdDeadline?: string;
}

export interface Registration {
  id: string;
  userId: string;
  packageId: string;
  status: RegistrationStatus;
  paymentStatus: PaymentStatus;
  createdAt: string;
  updatedAt: string;
}

export type RegistrationStatus = 'pending' | 'confirmed' | 'cancelled';
export type PaymentStatus = 'pending' | 'completed' | 'failed' | 'refunded';

// User Types
export interface User {
  id: string;
  name: string;
  email: string;
  phone?: string;
  company?: string;
  role?: string;
  registrations?: Registration[];
  createdAt: string;
}

// Agenda/Session Types
export interface Session {
  id: string;
  title: string;
  description?: string;
  startTime: string;
  endTime: string;
  day: number;
  type: SessionType;
  speakers?: Speaker[];
  location?: string;
  track?: string;
}

export type SessionType =
  | 'keynote'
  | 'panel'
  | 'workshop'
  | 'networking'
  | 'break'
  | 'presentation';

// Sponsor Types
export interface Sponsor {
  id: string;
  name: string;
  logo: string;
  tier: SponsorTier;
  website?: string;
  description?: string;
}

export type SponsorTier = 'platinum' | 'gold' | 'silver' | 'bronze' | 'partner';

// API Response Types
export interface ApiResponse<T> {
  success: boolean;
  data?: T;
  error?: ApiError;
  message?: string;
}

export interface ApiError {
  code: string;
  message: string;
  details?: Record<string, any>;
}

// Form Types
export interface ContactFormData {
  name: string;
  email: string;
  phone?: string;
  company?: string;
  message: string;
  subject?: string;
}

export interface RegistrationFormData {
  personalInfo: {
    firstName: string;
    lastName: string;
    email: string;
    phone: string;
  };
  companyInfo: {
    companyName: string;
    jobTitle: string;
    industry?: string;
  };
  packageType: RegistrationPackageType;
  specialRequirements?: string;
  agreeToTerms: boolean;
}

// Component Props Types
export interface BaseComponentProps {
  className?: string;
  children?: React.ReactNode;
}

export interface HeroAction {
  id: string;
  label: string;
  href: string;
  variant: 'primary' | 'secondary' | 'outline';
  ariaLabel?: string;
  external?: boolean;
}

// Analytics Types
export type AnalyticsEvent =
  | 'registration_started'
  | 'registration_completed'
  | 'sponsor_inquiry'
  | 'speaker_view'
  | 'agenda_download'
  | 'social_share'
  | 'video_play'
  | 'form_submit'
  | 'link_click'
  | 'file_download';

export interface AnalyticsEventParams {
  category?: string;
  label?: string;
  value?: number;
  [key: string]: any;
}

// Utility Types
export type Nullable<T> = T | null;
export type Optional<T> = T | undefined;
export type AsyncData<T> = {
  data: Nullable<T>;
  loading: boolean;
  error: Nullable<Error>;
};
