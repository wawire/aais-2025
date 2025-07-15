// components/Footer/Footer.tsx
'use client';

import Image from 'next/image';
import Link from 'next/link';
import { memo } from 'react';

// --- Start: Added types directly here ---
interface FooterLink {
  id: string;
  label: string;
  href: string;
  external?: boolean; // Optional property for external links
  ariaLabel?: string; // Optional accessibility label
}

interface FooterSection {
  id: string;
  title: string;
  links: FooterLink[];
}

interface SocialLink {
  id: string;
  platform: string;
  href: string;
  icon: 'linkedin' | 'twitter' | 'youtube' | 'instagram'; // Union type for specific icons
  ariaLabel?: string;
}

interface ContactAddress {
  street: string;
  city: string;
  country: string;
}

interface ContactInfo {
  email: string;
  phone: string;
  address: ContactAddress;
}

interface FooterProps {
  className?: string;
  sections?: readonly FooterSection[];
  socialLinks?: readonly SocialLink[];
  contactInfo?: ContactInfo;
  copyrightYear?: number;
}
// --- End: Added types directly here ---


// Default footer configuration
const DEFAULT_FOOTER_SECTIONS: readonly FooterSection[] = [
  {
    id: 'event',
    title: 'Event',
    links: [
      { id: 'agenda', label: 'Agenda', href: '/agenda' },
      { id: 'speakers', label: 'Speakers', href: '/speakers' },
      { id: 'venue', label: 'Venue & Travel', href: '/venue' },
      { id: 'sponsors', label: 'Sponsors', href: '/sponsors' },
      { id: 'media', label: 'Media Kit', href: '/media' },
    ],
  },
  {
    id: 'participation',
    title: 'Participation',
    links: [
      { id: 'register', label: 'Register Now', href: '/register' },
      { id: 'pricing', label: 'Pricing', href: '/register' },
      { id: 'group-discounts', label: 'Group Discounts', href: '/register' },
      { id: 'student-rates', label: 'Student Rates', href: '/register' },
      { id: 'cancellation', label: 'Cancellation Policy', href: '/cancellation' },
    ],
  },
  {
    id: 'resources',
    title: 'Resources',
    links: [
      { id: 'downloads', label: 'Downloads', href: '/downloads' },
      { id: 'past-events', label: 'Past Events', href: '/past-events' },
      // { id: 'news', label: 'News & Updates', href: '/news' },
      // { id: 'blog', label: 'Industry Blog', href: '/blog' },
      // { id: 'white-papers', label: 'White Papers', href: '/white-papers' },
    ],
  },
  {
    id: 'support',
    title: 'Support',
    links: [
      { id: 'contact', label: 'Contact Us', href: '/contact' },
      { id: 'faq', label: 'FAQ', href: '/faq' },
      { id: 'help', label: 'Help Center', href: '/faq' },
      // { id: 'accessibility', label: 'Accessibility', href: '/accessibility' },
      { id: 'feedback', label: 'Feedback', href: '/feedback' },
    ],
  },
] as const;

const DEFAULT_SOCIAL_LINKS: readonly SocialLink[] = [
  {
    id: 'linkedin',
    platform: 'LinkedIn',
    href: 'https://linkedin.com/company/aais2025',
    icon: 'linkedin',
    ariaLabel: 'Follow AAIS 2025 on LinkedIn',
  },
  {
    id: 'twitter',
    platform: 'Twitter',
    href: 'https://twitter.com/aais2025',
    icon: 'twitter',
    ariaLabel: 'Follow AAIS 2025 on Twitter',
  },
  {
    id: 'youtube',
    platform: 'YouTube',
    href: 'https://youtube.com/@aais2025', // This URL seems like a placeholder, consider updating it.
    icon: 'youtube',
    ariaLabel: 'Subscribe to AAIS 2025 on YouTube',
  },
  {
    id: 'instagram',
    platform: 'Instagram',
    href: 'https://instagram.com/aais2025',
    icon: 'instagram',
    ariaLabel: 'Follow AAIS 2025 on Instagram',
  },
] as const;

const DEFAULT_CONTACT_INFO: ContactInfo = {
  email: 'aais@kenya-airways.com',
  phone: '+254 716 851 914',
  address: {
    street: 'Diani Reef Resort & Spa',
    city: 'Diani',
    country: 'Kenya',
  },
};

/**
 * Professional enterprise footer component with optimal UX design
 * Balanced typography, spacing, and visual hierarchy
 */
const Footer = memo<FooterProps>(({
  className = '',
  sections = DEFAULT_FOOTER_SECTIONS,
  socialLinks = DEFAULT_SOCIAL_LINKS,
  contactInfo = DEFAULT_CONTACT_INFO,
  copyrightYear = new Date().getFullYear(),
}) => {
  const renderSocialIcon = (iconName: SocialLink['icon']) => { // Use the type from SocialLink
    const iconClasses = "w-5 h-5 fill-current";

    switch (iconName) {
      case 'linkedin':
        return (
          <svg className={iconClasses} viewBox="0 0 24 24" aria-hidden="true">
            <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
          </svg>
        );
      case 'twitter':
        return (
          <svg className={iconClasses} viewBox="0 0 24 24" aria-hidden="true">
            <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z"/>
          </svg>
        );
      case 'youtube':
        return (
          <svg className={iconClasses} viewBox="0 0 24 24" aria-hidden="true">
            <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
          </svg>
        );
      case 'instagram':
        return (
          <svg className={iconClasses} viewBox="0 0 24 24" aria-hidden="true">
            <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zM12 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
          </svg>
        );
      default:
        // Provide a default or handle unknown icons, or throw an error if icon is mandatory
        return null;
    }
  };

  return (
    <footer
      className={`
        bg-charcoal-900 text-softGray-100 border-t-4 border-aviationGold
        ${className}
      `}
      role="contentinfo"
      aria-label="Site footer"
    >
      {/* Main Footer Content */}
      <div className="w-[90%] mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-8 lg:gap-10">

          {/* Brand Section - Enhanced with better spacing */}
          <div className="lg:col-span-2 pr-0 lg:pr-8">
            <Link href="/" className="inline-block mb-6">
              <Image
                src="/images/aais2025-logo-primary.svg"
                alt="AAIS 2025 - Africa Aviation Innovation Summit"
                width={200}
                height={90}
                className="h-12 w-auto hover:opacity-90 transition-opacity duration-200"
              />
            </Link>

            {/* Description with proper typography */}
            <div
              className="text-softGray-300 leading-relaxed mb-8"
              style={{
                fontSize: '0.95rem',
                lineHeight: '1.6',
                fontWeight: '400',
                marginBottom: '0'
              }}
            >
              Africa's premier aviation innovation summit bringing together industry leaders,
              innovators, and stakeholders to shape the future of aviation across the continent.
            </div>

            {/* Contact Information - Well spaced */}
            <div className="space-y-4 mt-8">
              <div className="flex items-center group">
                <div className="flex-shrink-0 w-8 h-8 bg-charcoal-800 rounded-lg flex items-center justify-center mr-3 group-hover:bg-aviationGold transition-colors duration-200">
                  <svg className="w-4 h-4 text-softGray-400 group-hover:text-white" fill="currentColor" viewBox="0 0 20 20" aria-hidden="true">
                    <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z"/>
                    <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z"/>
                  </svg>
                </div>
                <Link
                  href={`mailto:${contactInfo.email}`}
                  className="text-softGray-300 hover:text-aviationGold transition-colors duration-200 text-sm font-medium"
                >
                  {contactInfo.email}
                </Link>
              </div>

              <div className="flex items-center group">
                <div className="flex-shrink-0 w-8 h-8 bg-charcoal-800 rounded-lg flex items-center justify-center mr-3 group-hover:bg-aviationGold transition-colors duration-200">
                  <svg className="w-4 h-4 text-softGray-400 group-hover:text-white" fill="currentColor" viewBox="0 0 20 20" aria-hidden="true">
                    <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z"/>
                  </svg>
                </div>
                <Link
                  href={`tel:${contactInfo.phone}`}
                  className="text-softGray-300 hover:text-aviationGold transition-colors duration-200 text-sm font-medium"
                >
                  {contactInfo.phone}
                </Link>
              </div>

              <div className="flex items-start group">
                <div className="flex-shrink-0 w-8 h-8 bg-charcoal-800 rounded-lg flex items-center justify-center mr-3 mt-1 group-hover:bg-aviationGold transition-colors duration-200">
                  <svg className="w-4 h-4 text-softGray-400 group-hover:text-white" fill="currentColor" viewBox="0 0 20 20" aria-hidden="true">
                    <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd"/>
                  </svg>
                </div>
                <div className="text-softGray-300 text-sm font-medium">
                  <div className="mb-1">{contactInfo.address.street}</div>
                  <div className="text-softGray-400">{contactInfo.address.city}, {contactInfo.address.country}</div>
                </div>
              </div>
            </div>
          </div>

          {/* Navigation Sections - Improved spacing and typography */}
          {sections.map((section) => (
            <div key={section.id} className="lg:col-span-1">
              <h3
                className="text-white font-semibold mb-6"
                style={{
                  fontSize: '1rem',
                  fontWeight: '600',
                  marginBottom: '1.5rem', // Override global h3 margin
                  lineHeight: '1.2'
                }}
              >
                {section.title}
              </h3>
              <nav className="space-y-3">
                {section.links.map((link) => ( // Removed explicit type annotation here as it's now inferred
                  <div key={link.id}>
                    <Link
                      href={link.href}
                      className="block text-softGray-300 hover:text-aviationGold hover:translate-x-1 transition-all duration-200 text-sm group"
                      target={link.external ? '_blank' : undefined}
                      rel={link.external ? 'noopener noreferrer' : undefined}
                      aria-label={link.ariaLabel || link.label}
                    >
                      <span className="flex items-center">
                        {link.label}
                        {link.external && (
                          <svg className="inline w-3 h-3 ml-2 opacity-0 group-hover:opacity-100 transition-opacity duration-200" fill="currentColor" viewBox="0 0 20 20" aria-hidden="true">
                            <path d="M11 3a1 1 0 100 2h2.586l-6.293 6.293a1 1 0 101.414 1.414L15 6.414V9a1 1 0 102 0V4a1 1 0 00-1-1h-5z"/>
                            <path d="M5 5a2 2 0 00-2 2v8a2 2 0 002 2h8a2 2 0 002-2v-3a1 1 0 10-2 0v3H5V7h3a1 1 0 000-2H5z"/>
                          </svg>
                        )}
                      </span>
                    </Link>
                  </div>
                ))}
              </nav>
            </div>
          ))}
        </div>
      </div>

      {/* Bottom Bar - Enhanced with better visual hierarchy */}
      <div className="border-t border-charcoal-800 bg-charcoal-950">
        <div className="w-[90%] mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between space-y-6 lg:space-y-0">

            {/* Copyright - Enhanced typography */}
            <div className="text-softGray-400 text-sm font-medium">
              © {copyrightYear} Africa Aviation Innovation Summit. All rights reserved.
            </div>

            {/* Social Media Links - Enhanced with better spacing and hover effects */}
            <div className="flex items-center space-x-6">
              <span className="text-softGray-400 text-sm font-semibold">
                Follow Us:
              </span>
              <div className="flex space-x-4">
                {socialLinks.map((social) => (
                  <Link
                    key={social.id}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="
                      group relative p-3 rounded-xl border border-charcoal-800
                      text-softGray-400 hover:text-aviationGold hover:border-aviationGold
                      transition-all duration-300 transform hover:scale-110 hover:-translate-y-1
                      shadow-lg hover:shadow-aviationGold/20
                    "
                    aria-label={social.ariaLabel}
                  >
                    {renderSocialIcon(social.icon)}
                  </Link>
                ))}
              </div>
            </div>

            {/* Legal Links - Improved spacing and hierarchy */}
            <div className="flex flex-wrap items-center gap-6 text-sm">
              {[
                { href: '/privacy', label: 'Privacy Policy' },
                { href: '/terms', label: 'Terms of Service' },
                { href: '/cookies', label: 'Cookie Policy' },
                { href: '/accessibility', label: 'Accessibility' }
              ].map((legalLink, index) => (
                <div key={legalLink.href} className="flex items-center">
                  <Link
                    href={legalLink.href}
                    className="text-softGray-400 hover:text-aviationGold transition-colors duration-200 font-medium"
                  >
                    {legalLink.label}
                  </Link>
                  {index < 3 && ( // Only add separator if not the last item
                    <span className="text-charcoal-700 mx-3">|</span>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
});

Footer.displayName = 'Footer';

export { Footer };
export type { FooterProps }; // Still export FooterProps if other components might use it