'use client';

import { cn } from '@/lib/utils';
import { ChevronDownIcon, ChevronRightIcon } from 'lucide-react';
import Link from 'next/link';
import React, { useCallback, useState } from 'react';

/**
 * Interface for individual FAQ item data structure
 */
interface FAQItem {
  /** Unique identifier for the FAQ item */
  id: string;
  /** The question text displayed in the accordion header */
  question: string;
  /** The answer content displayed when expanded */
  answer: string;
  /** Category classification for grouping and filtering */
  category: 'registration' | 'sponsorship' | 'venue' | 'general' | 'payments' | 'logistics' | 'technology';
  /** Numbered position within category */
  number: number;
}

/**
 * Props interface for the FAQ component
 */
interface FAQProps {
  /** Array of FAQ items to display */
  faqItems?: FAQItem[];
  /** Optional CSS class names for container styling */
  className?: string;
  /** Optional contact page URL for CTA link */
  contactUrl?: string;
}

/**
 * Enhanced FAQ data with numbering for AAIS 2025
 */
const defaultFAQItems: FAQItem[] = [
  // Registration Category
  {
    id: 'reg-1',
    category: 'registration',
    number: 1,
    question: 'How do I register for AAIS 2025?',
    answer: 'Register via the official summit website. Complete the registration form with your personal details, select your preferred package, and proceed with payment to secure your spot. You will receive a confirmation email with a QR code upon successful registration.'
  },
  {
    id: 'reg-2',
    category: 'registration',
    number: 2,
    question: 'What are the registration fees and packages?',
    answer: 'Early Bird: $300 (until Oct 1, 2025), Standard: $350, Student: $150 (requires valid student ID), Corporate: $1,500 for 5 people. Group discounts available for 5+ attendees. All packages include full access, meals, networking, and summit materials.'
  },
  {
    id: 'reg-3',
    category: 'registration',
    number: 3,
    question: 'Can I transfer my ticket to someone else?',
    answer: 'Yes, tickets are transferable to colleagues within the same organization, subject to approval by Kenya Airways. Submit a written request at least 7 days prior to the event via aais@kenya-airways.com.'
  },
  {
    id: 'reg-4',
    category: 'registration',
    number: 4,
    question: 'Is there a group discount available?',
    answer: 'Yes! Group registration for 5 people costs $1,500, with additional attendees paying the standard delegate fee of $350 per person. This represents significant savings compared to individual registrations.'
  },

  // Payments Category
  {
    id: 'pay-1',
    category: 'payments',
    number: 1,
    question: 'What payment methods are accepted?',
    answer: 'We accept credit/debit cards (Visa, Mastercard), bank transfers, and mobile money (M-Pesa). Payment instructions will be displayed after registration with copy-to-clipboard functionality for your convenience.'
  },
  {
    id: 'pay-2',
    category: 'payments',
    number: 2,
    question: 'What is the refund policy?',
    answer: 'Refunds are only available if cancelled at least 30 days before the event. Cancellations made less than 30 days before the event are non-refundable. Please refer to our Terms & Conditions for complete details.'
  },
  {
    id: 'pay-3',
    category: 'payments',
    number: 3,
    question: 'What happens if Kenya Airways cancels the event?',
    answer: 'In the unlikely event that Kenya Airways cancels AAIS 2025, all registered attendees will receive a full refund or credit for a future event, according to Kenya Airways terms and conditions.'
  },

  // Venue Category
  {
    id: 'venue-1',
    category: 'venue',
    number: 1,
    question: 'Where is AAIS 2025 being held?',
    answer: 'The summit takes place at Diani Reef Beach Resort, Kwale, Kenya, from November 6-7, 2025. Setup begins on November 5th. Diani is accessible via Ukunda Airstrip and offers world-class beach resort facilities.'
  },
  {
    id: 'venue-2',
    category: 'venue',
    number: 2,
    question: 'What are the accommodation options?',
    answer: 'While accommodation is not included in registration, discounted hotel rates may be available for attendees. Visit our Travel & Stay section for partner recommendations and special rates at nearby resorts.'
  },
  {
    id: 'venue-3',
    category: 'venue',
    number: 3,
    question: 'How do I get to the venue?',
    answer: 'Diani is accessible via Ukunda Airstrip with Kenya Airways coastal operations. Detailed directions, transport options including shuttles, and parking information are available on our Venue Info page.'
  },

  // Logistics Category
  {
    id: 'logistics-1',
    category: 'logistics',
    number: 1,
    question: 'What\'s the weather like in November?',
    answer: 'Kwale in November is mostly warm, humid, and breezy with scattered rains. We recommend light, breathable clothing and bringing a light jacket for air-conditioned spaces and evening events.'
  },
  {
    id: 'logistics-2',
    category: 'logistics',
    number: 2,
    question: 'Will visas be provided for international attendees?',
    answer: 'Kenya Airways does not sponsor visas. International attendees must check Kenyan immigration requirements and apply for appropriate visas well in advance of the event.'
  },

  // General Category
  {
    id: 'general-1',
    category: 'general',
    number: 1,
    question: 'Who should attend AAIS 2025?',
    answer: 'Aviation professionals, innovators, policymakers, startups, investors, airline executives, airport operators, government representatives, tourism leaders, logistics professionals, technology providers, and anyone interested in Africa\'s aviation future.'
  },
  {
    id: 'general-2',
    category: 'general',
    number: 2,
    question: 'What is the dress code?',
    answer: 'Business-casual attire is recommended for general sessions. For the Gala Night dinner on November 6th, the dress code is white with a touch of gold to match our aviation theme.'
  },
  {
    id: 'general-3',
    category: 'general',
    number: 3,
    question: 'Will there be networking opportunities?',
    answer: 'Absolutely! AAIS 2025 features dedicated networking sessions, breakout rooms, exhibition areas, the CEO\'s breakfast (invite only), and exclusive evening events designed to facilitate high-value B2B connections.'
  },

  // Technology Category
  {
    id: 'tech-1',
    category: 'technology',
    number: 1,
    question: 'Will sessions be virtual or recorded?',
    answer: 'AAIS 2025 is an in-person event, but select sessions may be livestreamed or recorded. Check the detailed agenda for specific session availability and access information.'
  },
  {
    id: 'tech-2',
    category: 'technology',
    number: 2,
    question: 'Is the venue wheelchair accessible?',
    answer: 'Yes, Diani Reef Beach Resort is wheelchair accessible. Please contact aais@kenya-airways.com ahead of time to arrange any special accessibility requirements or assistance.'
  },

  // Sponsorship Category
  {
    id: 'sponsor-1',
    category: 'sponsorship',
    number: 1,
    question: 'How can I sponsor or exhibit at AAIS 2025?',
    answer: 'We offer multiple sponsorship tiers from Bronze ($10,000) to Diamond ($60,000), plus exhibitor packages from Basic Booth ($1,000) to Premium Booth ($3,000). Explore partnership opportunities on our website or email aais@kenya-airways.com.'
  },
  {
    id: 'sponsor-2',
    category: 'sponsorship',
    number: 2,
    question: 'What are the benefits of sponsoring?',
    answer: 'Sponsorship benefits include brand visibility, speaking opportunities, VIP passes, booth space, logo placement, and access to exclusive networking events. Benefits scale with sponsorship tier from Bronze to Diamond level.'
  }
];

/**
 * Modern FAQ Component with Flat Design - AAIS 2025
 */
export const FAQ: React.FC<FAQProps> = ({
  faqItems = defaultFAQItems,
  className,
  contactUrl = '/contact'
}) => {
  const [activeCategory, setActiveCategory] = useState<string>('registration');
  const [openPanelId, setOpenPanelId] = useState<string | null>(null);

  /**
   * Toggle accordion panel open/closed state
   */
  const togglePanel = useCallback((panelId: string) => {
    setOpenPanelId(prevId => prevId === panelId ? null : panelId);
  }, []);

  /**
   * Handle category change and reset accordion
   */
  const handleCategoryChange = useCallback((category: string) => {
    setActiveCategory(category);
    setOpenPanelId(null);
  }, []);

  /**
   * Group FAQ items by category
   */
  const groupedFAQs = faqItems.reduce((acc, item) => {
    if (!acc[item.category]) {
      acc[item.category] = [];
    }
    acc[item.category].push(item);
    return acc;
  }, {} as Record<string, FAQItem[]>);

  /**
   * Category configuration - clean flat design
   */
  const categories = [
    { key: 'registration', label: 'Registration & Tickets' },
    { key: 'payments', label: 'Payments & Refunds' },
    { key: 'venue', label: 'Venue & Accommodation' },
    { key: 'logistics', label: 'Travel & Logistics' },
    { key: 'general', label: 'General Information' },
    { key: 'technology', label: 'Technology & Access' },
    { key: 'sponsorship', label: 'Sponsorship & Exhibition' }
  ].filter(cat => groupedFAQs[cat.key]?.length > 0);

  const activeItems = groupedFAQs[activeCategory] || [];

  return (
    <div className={cn('min-h-screen bg-relaxed', className)}>


      {/* Main Content Layout */}
      <div className="max-w-7xl mx-auto px-6 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">

          {/* Sidebar Navigation - Light Gray Background */}
          <div className="lg:col-span-1">
            <div className="bg-gray-100 p-6 sticky top-8">
              <h2 className="text-lg font-heading font-semibold text-charcoal-800 mb-6">
                Browse Categories
              </h2>
              <nav className="space-y-2">
                {categories.map((category) => (
                  <button
                    key={category.key}
                    onClick={() => handleCategoryChange(category.key)}
                    className={cn(
                      'w-full text-left px-4 py-3 font-medium text-sm transition-colors duration-300',
                      'nav-link-hover',
                      activeCategory === category.key
                        ? 'text-aviationGold'
                        : 'text-charcoal-700 hover:text-aviationGold'
                    )}
                  >
                    {category.label}
                  </button>
                ))}
              </nav>
            </div>
          </div>

          {/* FAQ Content - White Background */}
          <div className="lg:col-span-3">
            <div className="bg-white overflow-hidden">

              {/* Category Header - Aviation Gold Background */}
              <div className="bg-aviationGold px-8 py-6">
                <h2 className="text-2xl font-heading font-bold text-white">
                  {categories.find(cat => cat.key === activeCategory)?.label}
                </h2>
              </div>

              {/* FAQ Items */}
              <div className="divide-y divide-gray-100">
                {activeItems.map((item) => {
                  const isOpen = openPanelId === item.id;

                  return (
                    <div key={item.id} className="group">
                      {/* Question Button - White Background */}
                      <button
                        type="button"
                        onClick={() => togglePanel(item.id)}
                        className="w-full text-left px-8 py-6 hover:bg-gray-50 transition-colors duration-300 nav-link-hover"
                        aria-expanded={isOpen}
                        aria-controls={`answer-${item.id}`}
                      >
                        <div className="flex items-start justify-between gap-4">
                          <div className="flex items-start gap-4 flex-1">
                            {/* Number Badge */}
                            <div className="flex-shrink-0 w-8 h-8 bg-gray-100 flex items-center justify-center group-hover:bg-aviationGold-100 transition-colors duration-300">
                              <span className="text-sm font-bold text-charcoal-700 group-hover:text-aviationGold">
                                {item.number.toString().padStart(2, '0')}
                              </span>
                            </div>

                            {/* Question Text */}
                            <div className="flex-1">
                              <h3 className="text-lg font-heading font-semibold text-charcoal-800 leading-relaxed italic">
                                {item.question}
                              </h3>
                            </div>
                          </div>

                          {/* Chevron Icon */}
                          <div className="flex-shrink-0 mt-1">
                            {isOpen ? (
                              <ChevronDownIcon className="w-5 h-5 text-aviationGold" />
                            ) : (
                              <ChevronRightIcon className="w-5 h-5 text-gray-400 group-hover:text-aviationGold transition-colors duration-300" />
                            )}
                          </div>
                        </div>
                      </button>

                      {/* Answer - Light Gray Background */}
                      <div
                        id={`answer-${item.id}`}
                        className={cn(
                          'overflow-hidden transition-all duration-300 ease-in-out',
                          isOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
                        )}
                        aria-hidden={!isOpen}
                      >
                        <div className="px-8 pb-6 ml-12 bg-gray-50">
                          <div className="prose prose-sm max-w-none text-charcoal-700 leading-relaxed font-body">
                            {item.answer}
                          </div>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Contact Section - Charcoal Background */}
      <div className="bg-charcoal-800 mt-16">
        <div className="max-w-7xl mx-auto px-6 py-12">
          <div className="text-center">
            <h3 className="text-2xl font-heading font-bold text-white mb-3">
              Still need assistance?
            </h3>
            <p className="text-gray-300 mb-8 font-body text-lg max-w-2xl mx-auto">
              Our dedicated support team is ready to help with any additional questions about AAIS 2025.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-8">

              <a
                href="mailto:aais@kenya-airways.com"
                className="text-aviationGold hover:text-aviationGold-300 transition-colors font-heading font-semibold text-lg nav-link-hover"
              >
                aais@kenya-airways.com
              </a>

              <div className="hidden sm:block w-1 h-1 bg-gray-500 rounded-full"></div>

              <a
                href="tel:+254716851914"
                className="text-aviationGold hover:text-aviationGold-300 transition-colors font-heading font-semibold text-lg nav-link-hover"
              >
                +254 716 851 914
              </a>

              <div className="hidden sm:block w-1 h-1 bg-gray-500 rounded-full"></div>

              <Link
                href={contactUrl}
                className="btn-primary"
              >
                Contact Support
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FAQ;
