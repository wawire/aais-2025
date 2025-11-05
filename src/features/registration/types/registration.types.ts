/**
 * Registration Feature Types
 */

export type PackageType = 'delegate' | 'exhibitor' | 'sponsor-silver' | 'sponsor-gold' | 'sponsor-platinum';

export type RegistrationStatus = 'draft' | 'pending' | 'confirmed' | 'cancelled';

export type PaymentStatus = 'unpaid' | 'pending' | 'paid' | 'failed' | 'refunded';

export type PaymentMethod = 'stripe' | 'mpesa' | 'bank-transfer' | 'cash';

export interface RegistrationFormData {
  // Personal Information
  personalInfo: {
    firstName: string;
    lastName: string;
    email: string;
    phone: string;
    countryCode: string;
  };

  // Company Information
  companyInfo: {
    companyName: string;
    jobTitle: string;
    industry: string;
    website?: string;
  };

  // Registration Details
  packageType: PackageType;
  numberOfAttendees: number;

  // Additional Information
  dietaryRequirements?: string;
  specialRequirements?: string;
  accessibilityNeeds?: string;

  // Payment
  paymentMethod: PaymentMethod;

  // Legal
  agreeToTerms: boolean;
  agreeToMarketing: boolean;
}

export interface Registration {
  id: string;
  userId: string;
  packageType: PackageType;
  status: RegistrationStatus;
  paymentStatus: PaymentStatus;
  paymentMethod?: PaymentMethod;
  totalAmount: number;
  currency: string;
  registrationData: RegistrationFormData;
  createdAt: string;
  updatedAt: string;
  confirmedAt?: string;
  cancelledAt?: string;
}

export interface PackageInfo {
  id: PackageType;
  name: string;
  price: number;
  earlyBirdPrice?: number;
  currency: string;
  features: string[];
  description?: string;
  maxAttendees?: number;
}

export interface RegistrationApiRequest {
  formData: RegistrationFormData;
  metadata?: Record<string, any>;
}

export interface RegistrationApiResponse {
  registration: Registration;
  paymentUrl?: string;
  message: string;
}

export interface RegistrationError {
  field?: keyof RegistrationFormData;
  message: string;
  code?: string;
}
