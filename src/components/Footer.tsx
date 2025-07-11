'use client';

import { cn } from '@/lib/utils';
import { Instagram, Linkedin, Mail, Send, Twitter, Youtube } from 'lucide-react';
import Link from 'next/link';
import { useCallback, useState, type FormEvent } from 'react';

interface NewsletterFormData {
  email: string;
}

interface NewsletterSubmissionResult {
  success: boolean;
  message?: string;
}

type FooterLocale = 'en' | 'sw';

interface FooterProps {
  year?: number;
  locale?: FooterLocale;
  onNewsletterSubmit?: (data: NewsletterFormData) => Promise<NewsletterSubmissionResult>;
  showNewsletter?: boolean;
}

const FOOTER_TRANSLATIONS = {
  en: {
    tagline: 'Driving innovation and collaboration in African aviation. Join us in shaping the future of flight.',
    navigation: 'Navigation',
    contact: 'Contact',
    legal: 'Legal',
    newsletter: 'Stay Updated',
    newsletterDesc: 'Get the latest updates about AAIS 2025',
    newsletterPlaceholder: 'Enter your email',
    newsletterButton: 'Subscribe',
    newsletterSuccess: 'Thank you for subscribing!',
    newsletterError: 'Please enter a valid email address.',
    email: 'Email',
    phone: 'Phone',
    home: 'Home',
    about: 'About',
    speakers: 'Speakers',
    sponsors: 'Sponsors',
    agenda: 'Agenda',
    privacy: 'Privacy Policy',
    terms: 'Terms of Use',
    copyright: 'Africa Aviation Innovation Summit. All rights reserved.',
  },
  sw: {
    tagline: 'Kuongoza uvumbuzi na ushirikiano katika anga ya Afrika. Jiunge nasi katika kuunda mustakabali wa kuruka.',
    navigation: 'Urambazaji',
    contact: 'Wasiliana',
    legal: 'Kisheria',
    newsletter: 'Baki Umejulishwa',
    newsletterDesc: 'Pata habari za hivi karibuni kuhusu AAIS 2025',
    newsletterPlaceholder: 'Ingiza barua pepe yako',
    newsletterButton: 'Jiandikishe',
    newsletterSuccess: 'Asante kwa kujiandikisha!',
    newsletterError: 'Tafadhali ingiza anwani sahihi ya barua pepe.',
    email: 'Barua Pepe',
    phone: 'Simu',
    home: 'Nyumbani',
    about: 'Kuhusu',
    speakers: 'Wasemaji',
    sponsors: 'Wadhamini',
    agenda: 'Ajenda',
    privacy: 'Sera ya Faragha',
    terms: 'Masharti ya Matumizi',
    copyright: 'Mkutano wa Uvumbuzi wa Anga Afrika. Haki zote zimehifadhiwa.',
  },
};

function getFooterTranslations(locale: FooterLocale = 'en') {
  return FOOTER_TRANSLATIONS[locale] || FOOTER_TRANSLATIONS.en;
}

const navLinks = [
  { name: 'home', href: '/' },
  { name: 'about', href: '/about' },
  { name: 'speakers', href: '/speakers' },
  { name: 'sponsors', href: '/sponsors' },
  { name: 'agenda', href: '/agenda' },
];

export function Footer({
  year = new Date().getFullYear(),
  locale = 'en',
  onNewsletterSubmit,
  showNewsletter = true,
}: FooterProps) {
  const [email, setEmail] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitMessage, setSubmitMessage] = useState('');
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');
  const t = getFooterTranslations(locale);

  const defaultNewsletterSubmit = useCallback(async (data: NewsletterFormData): Promise<NewsletterSubmissionResult> => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(data.email)) {
      return { success: false, message: t.newsletterError };
    }

    try {
      await new Promise((resolve) => setTimeout(resolve, 1000));
      return { success: true, message: t.newsletterSuccess };
    } catch (error) {
      console.error('Newsletter subscription error:', error);
      return { success: false, message: t.newsletterError };
    }
  }, [t]);

  const handleNewsletterSubmit = useCallback(async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (isSubmitting) return;

    setIsSubmitting(true);
    setSubmitMessage('');
    setSubmitStatus('idle');

    try {
      const submitHandler = onNewsletterSubmit || defaultNewsletterSubmit;
      const result = await submitHandler({ email });

      if (result.success) {
        setSubmitStatus('success');
        setSubmitMessage(result.message || t.newsletterSuccess);
        setEmail('');
      } else {
        setSubmitStatus('error');
        setSubmitMessage(result.message || t.newsletterError);
      }
    } catch (error) {
      console.error('Newsletter submission failed:', error);
      setSubmitStatus('error');
      setSubmitMessage(t.newsletterError);
    } finally {
      setIsSubmitting(false);
    }
  }, [email, isSubmitting, onNewsletterSubmit, defaultNewsletterSubmit, t]);

  return (
    <footer className="bg-gradient-to-b from-gray-950 to-gray-900 text-gray-300 pt-12 pb-8 px-4 mt-16 border-t border-gray-800 relative" role="contentinfo" aria-label="Site footer">
      <div className="absolute inset-0 opacity-5 pointer-events-none" style={{
        backgroundImage: `radial-gradient(circle at 1px 1px, rgba(194, 165, 66, 0.2) 1px, transparent 0)`,
        backgroundSize: '20px 20px',
      }} aria-hidden="true" />

      <div className="w-[90%] max-w-7xl mx-auto relative z-10">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-x-12 gap-y-10">
          <div className="space-y-4">
            <Link href="/" className="flex items-center gap-3 h-14 group">
              <div className="h-16 px-4 bg-aviationGold/10 border-2 border-aviationGold/30 rounded-lg flex items-center justify-center transition-all duration-300 group-hover:bg-aviationGold/20">
                <span className="text-aviationGold font-bold text-lg">AAIS 2025</span>
              </div>
            </Link>
            <p className="mt-4 text-sm text-gray-400 leading-relaxed max-w-sm">{t.tagline}</p>
            <div className="flex gap-5 mt-4">
              <a href="https://linkedin.com/company/aais2025" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn" className="group">
                <Linkedin className="h-5 w-5 text-gray-400 group-hover:text-aviationGold transition-all duration-300 group-hover:scale-110" />
              </a>
              <a href="https://twitter.com/aais2025" target="_blank" rel="noopener noreferrer" aria-label="Twitter" className="group">
                <Twitter className="h-5 w-5 text-gray-400 group-hover:text-aviationGold transition-all duration-300 group-hover:scale-110" />
              </a>
              <a href="https://youtube.com/@aais2025" target="_blank" rel="noopener noreferrer" aria-label="YouTube" className="group">
                <Youtube className="h-5 w-5 text-gray-400 group-hover:text-aviationGold transition-all duration-300 group-hover:scale-110" />
              </a>
              <a href="https://instagram.com/aais2025" target="_blank" rel="noopener noreferrer" aria-label="Instagram" className="group">
                <Instagram className="h-5 w-5 text-gray-400 group-hover:text-aviationGold transition-all duration-300 group-hover:scale-110" />
              </a>
            </div>
          </div>

          <div>
            <h4 className="text-white font-semibold mb-4 text-lg">{t.navigation}</h4>
            <nav aria-label="Footer navigation">
              <ul className="space-y-3 text-sm">
                {navLinks.map(link => (
                  <li key={link.name}>
                    <Link href={link.href} className="hover:text-aviationGold transition-colors duration-300 capitalize">
                      {t[link.name as keyof typeof t] || link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </nav>
          </div>

          <div>
            <h4 className="text-white font-semibold mb-4 text-lg">{t.contact}</h4>
            <ul className="text-sm space-y-3">
              <li className="flex items-center gap-2">
                <Mail className="h-4 w-4 text-aviationGold flex-shrink-0" />
                <div>
                  <span className="text-gray-400">{t.email}: </span>
                  <a href="mailto:info@aais2025.com" className="hover:text-aviationGold transition-colors duration-300">
                    info@aais2025.com
                  </a>
                </div>
              </li>
              <li className="flex items-center gap-2">
                <span className="h-4 w-4 text-aviationGold flex items-center justify-center text-xs">📞</span>
                <div>
                  <span className="text-gray-400">{t.phone}: </span>
                  <a href="tel:+254716851914" className="hover:text-aviationGold transition-colors duration-300">
                    +254 716 851 914
                  </a>
                </div>
              </li>
            </ul>
          </div>

          <div>
            {showNewsletter ? (
              <div className="space-y-4">
                <h4 className="text-white font-semibold mb-4 text-lg">{t.newsletter}</h4>
                <p className="text-sm text-gray-400 mb-4">{t.newsletterDesc}</p>
                <form onSubmit={handleNewsletterSubmit} className="space-y-3" noValidate>
                  <div className="flex flex-col gap-3">
                    <input
                      type="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder={t.newsletterPlaceholder}
                      className={cn(
                        'w-full px-3 py-2 text-sm rounded-lg border',
                        'bg-gray-800 border-gray-700 text-gray-100 placeholder:text-gray-500',
                        'focus:outline-none focus:ring-2 focus:ring-aviationGold focus:border-transparent',
                        'transition-all duration-300 disabled:opacity-50'
                      )}
                      disabled={isSubmitting}
                      required
                    />
                    <button
                      type="submit"
                      disabled={isSubmitting || !email.trim()}
                      className={cn(
                        'w-full px-3 py-2 text-sm rounded-lg font-semibold',
                        'bg-aviationGold text-gray-900 transition-all duration-300',
                        'hover:bg-aviationGold/90 hover:scale-105',
                        'focus:outline-none focus:ring-2 focus:ring-aviationGold focus:ring-offset-2 focus:ring-offset-gray-900',
                        'disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:scale-100',
                        'flex items-center justify-center gap-2'
                      )}
                    >
                      {isSubmitting ? (
                        <>
                          <svg className="animate-spin h-4 w-4" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                            <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                            <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z" />
                          </svg>
                          ...
                        </>
                      ) : (
                        <>
                          <Send className="h-4 w-4" />
                          {t.newsletterButton}
                        </>
                      )}
                    </button>
                  </div>
                  {submitMessage && (
                    <p
                      className={cn(
                        'text-xs',
                        submitStatus === 'success' ? 'text-green-400' : 'text-red-400'
                      )}
                      role={submitStatus === 'error' ? 'alert' : 'status'}
                      aria-live="polite"
                    >
                      {submitMessage}
                    </p>
                  )}
                </form>
              </div>
            ) : (
              <div>
                <h4 className="text-white font-semibold mb-4 text-lg">{t.legal}</h4>
                <ul className="text-sm space-y-3">
                  <li><Link href="/privacy" className="hover:text-aviationGold transition-colors duration-300">{t.privacy}</Link></li>
                  <li><Link href="/terms" className="hover:text-aviationGold transition-colors duration-300">{t.terms}</Link></li>
                </ul>
              </div>
            )}
          </div>
        </div>
        <div className="mt-10 border-t border-gray-700 pt-6 text-sm text-center text-gray-500">
          <p>&copy; {year} {t.copyright}</p>
        </div>
      </div>
    </footer>
  );
}

export type { FooterProps, NewsletterFormData, NewsletterSubmissionResult };
