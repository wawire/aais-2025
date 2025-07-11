import { FooterLocale } from '@/types/footer';

/**
 * Footer translations for English and Swahili.
 * @constant FOOTER_TRANSLATIONS
 */
export const FOOTER_TRANSLATIONS = {
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

/**
 * Get translations for the specified locale.
 * @param locale - Target locale
 * @returns Translation object
 */
export function getFooterTranslations(locale: FooterLocale = 'en') {
  return FOOTER_TRANSLATIONS[locale] || FOOTER_TRANSLATIONS.en;
}
