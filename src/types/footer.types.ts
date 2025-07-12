/**
 * Footer type definitions for AAIS 2025
 * Updated: Removed newsletter-related types
 */

export interface FooterLink {
  readonly id: string;
  readonly label: string;
  readonly href: string;
  readonly external?: boolean;
  readonly ariaLabel?: string;
}

export interface FooterSection {
  readonly id: string;
  readonly title: string;
  readonly links: readonly FooterLink[];
}

export interface SocialLink {
  readonly id: string;
  readonly platform: string;
  readonly href: string;
  readonly icon: string;
  readonly ariaLabel: string;
}

export interface ContactInfo {
  readonly email: string;
  readonly phone: string;
  readonly address: {
    readonly street: string;
    readonly city: string;
    readonly country: string;
  };
}

export interface FooterProps {
  readonly className?: string;
  readonly sections?: readonly FooterSection[];
  readonly socialLinks?: readonly SocialLink[];
  readonly contactInfo?: ContactInfo;
  readonly copyrightYear?: number;
}
