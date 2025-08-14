'use client';
// components/sections/SponsorsPartners.tsx
import { ArrowRightIcon, ExclamationTriangleIcon, StarIcon } from '@heroicons/react/24/outline';
import { useCallback, useState } from 'react';

interface Partner {
  name: string;
  role: string;
  logo: string;
  description: string;
  website?: string;
}

interface Sponsor {
  name: string;
  logo: string;
  website?: string;
  tier?: 'platinum' | 'gold' | 'silver' | 'bronze';
}

/**
 * Sponsors & Partners section showcasing current partners and sponsors
 * Features main partners with descriptions and sponsor logo grid
 * Implements proper image handling with fallbacks and responsive design
 */
export function SponsorsPartners(): JSX.Element {
  const [imageErrors, setImageErrors] = useState<Set<string>>(new Set());

  /**
   * Handle image load errors by tracking failed URLs
   */
  const handleImageError = useCallback((logoUrl: string) => {
    setImageErrors(prev => new Set(prev).add(logoUrl));
  }, []);

  /**
   * Main strategic partners with full descriptions
   */
  const mainPartners: Partner[] = [
    {
      name: 'Kenya Airways',
      role: 'Host & Organizer',
      logo: '/images/partners/kenya-airways-logo.svg',
      description: "Africa's Pride - Leading the aviation transformation across the continent",
      website: 'https://www.kenya-airways.com',
    },
    {
      name: 'AFRAA',
      role: 'Strategic Partner',
      logo: '/images/partners/afraa-logo.svg',
      description: 'African Airlines Association - Representing the voice of African aviation',
      website: 'https://www.afraa.org',
    },
  ];

  /**
   * Current summit sponsors and technology partners
   */
  const sponsors: Sponsor[] = [
    {
      name: 'Verteil',
      logo: '/images/partners/verteil-logo.svg',
      website: 'https://www.verteil.com',
      tier: 'gold',
    },
  ];

  /**
   * Fallback component for failed logo loads
   */
  const LogoFallback = ({ name }: { name: string }) => (
    <div className="w-full h-full bg-gray-100 rounded-lg flex flex-col items-center justify-center border-2 border-dashed border-gray-300">
      <ExclamationTriangleIcon className="h-6 w-6 text-gray-400 mb-2" />
      <span className="text-xs text-gray-500 text-center px-2">{name}</span>
    </div>
  );

  /**
   * Responsive partner logo component with error handling
   */
  const PartnerLogo = ({ partner, className = '' }: { partner: Partner; className?: string }) => {
    const hasError = imageErrors.has(partner.logo);

    return (
      <div className={`group relative ${className}`}>
        {hasError ? (
          <LogoFallback name={partner.name} />
        ) : (
          <img
            src={partner.logo}
            alt={`${partner.name} logo`}
            className="w-full h-full object-contain transition-transform duration-200 group-hover:scale-105"
            loading="lazy"
            onError={() => handleImageError(partner.logo)}
          />
        )}
        {partner.website && (
          <a
            href={partner.website}
            target="_blank"
            rel="noopener noreferrer"
            className="absolute inset-0 z-10"
            aria-label={`Visit ${partner.name} website`}
          />
        )}
      </div>
    );
  };

  /**
   * Sponsor logo component with tier-based styling
   */
  const SponsorLogo = ({ sponsor }: { sponsor: Sponsor }) => {
    const hasError = imageErrors.has(sponsor.logo);

    // Tier-based sizing
    const tierClasses = {
      platinum: 'h-16 md:h-20',
      gold: 'h-14 md:h-16',
      silver: 'h-12 md:h-14',
      bronze: 'h-10 md:h-12',
    };

    const heightClass = tierClasses[sponsor.tier || 'silver'];

    return (
      <div className={`group relative w-full ${heightClass} flex items-center justify-center`}>
        {hasError ? (
          <LogoFallback name={sponsor.name} />
        ) : (
          <img
            src={sponsor.logo}
            alt={`${sponsor.name} logo`}
            className="max-w-full max-h-full object-contain transition-all duration-200 group-hover:scale-105 group-hover:brightness-110"
            loading="lazy"
            onError={() => handleImageError(sponsor.logo)}
          />
        )}
        {sponsor.website && (
          <a
            href={sponsor.website}
            target="_blank"
            rel="noopener noreferrer"
            className="absolute inset-0 z-10"
            aria-label={`Visit ${sponsor.name} website`}
          />
        )}
      </div>
    );
  };

  return (
    <section className="py-16 bg-gray-50" aria-labelledby="partners-heading">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 2xl:px-16">
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2
            id="partners-heading"
            className="text-2xl sm:text-3xl font-bold font-heading italic text-aviationGold mb-4"
          >
            Our 2025 Summit Partners & Sponsors
          </h2>
          <p className="text-base text-gray-700 max-w-3xl mx-auto">
            Join leading organizations in shaping the future of African aviation through strategic
            partnerships
          </p>
        </div>

        {/* Main Partners Section */}
        <div className="mb-16">
          <h3 className="text-xl font-semibold text-charcoal-800 mb-8 text-center">
            Strategic Partners
          </h3>
          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {mainPartners.map(partner => (
              <div
                key={partner.name}
                className="bg-white rounded-xl p-6 border border-gray-200 hover:shadow-lg transition-shadow duration-200"
              >
                <div className="flex flex-col items-center text-center">
                  <div className="w-48 h-24 mb-4">
                    <PartnerLogo partner={partner} className="w-full h-full" />
                  </div>
                  {/* <div className="mb-2">
                    <h4 className="font-semibold text-charcoal-800">{partner.name}</h4>
                    <p className="text-sm text-aviationGold font-medium">{partner.role}</p>
                  </div> */}
                  {/* <p className="text-sm text-gray-600 leading-relaxed">{partner.description}</p> */}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Current Sponsors Grid */}
        <div className="mb-16">
          <h3 className="text-xl font-semibold text-charcoal-800 mb-8 text-center">
            Summit Sponsors
          </h3>
          <div className="bg-white rounded-xl p-8 border border-gray-200">
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6 gap-8 items-center">
              {sponsors.map(sponsor => (
                <div key={sponsor.name} className="flex items-center justify-center">
                  <SponsorLogo sponsor={sponsor} />
                </div>
              ))}

              {/* Available sponsor slots */}
              {sponsors.length < 12 && (
                <>
                  {Array.from({ length: Math.min(6, 12 - sponsors.length) }).map((_, index) => (
                    <div
                      key={`slot-${index}`}
                      className="h-16 bg-gray-50 rounded-lg border-2 border-dashed border-gray-200 flex items-center justify-center group hover:border-aviationGold/30 transition-colors duration-200"
                    >
                      <div className="text-gray-400 text-center">
                        <StarIcon className="h-6 w-6 mx-auto mb-1 group-hover:text-aviationGold/50 transition-colors duration-200" />
                        <div className="text-xs">Available</div>
                      </div>
                    </div>
                  ))}
                </>
              )}
            </div>

            {sponsors.length > 0 && (
              <div className="text-center mt-6">
                <p className="text-sm text-gray-500">
                  Proud to partner with {sponsors.length} leading organizations
                </p>
              </div>
            )}
          </div>
        </div>

        {/* Partnership Call to Action */}
        <div className="bg-gradient-to-r from-aviationGold/10 via-aviationGold/5 to-aviationGold/10 rounded-xl p-8 text-center">
          <h3 className="text-xl font-bold text-charcoal-800 mb-4">Become a Summit Partner</h3>
          <p className="text-gray-700 mb-6 max-w-2xl mx-auto">
            Position your organization at the forefront of African aviation transformation. Connect
            with industry leaders, showcase innovations, and drive meaningful partnerships.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <a
              href="mailto:aais@kenya-airways.com"
              className="bg-aviationGold text-white px-6 py-3 rounded-lg font-medium hover:bg-aviationGold-600 transition-colors duration-200 flex items-center space-x-2 focus:ring-2 focus:ring-aviationGold/50 focus:outline-none"
              aria-label="Email AAIS sponsorship team"
            >
              <span>Email: aais@kenya-airways.com</span>
              <ArrowRightIcon className="h-4 w-4" />
            </a>

            <div className="text-sm text-gray-600">
              <span>or contact </span>
              <a
                href="mailto:aais@kenya-airways.com"
                className="text-aviationGold hover:text-aviationGold-600 font-medium transition-colors duration-200"
              ></a>

              <a
                href="tel:+254716851914"
                className="text-aviationGold hover:text-aviationGold-600 font-medium transition-colors duration-200"
              >
                +254 716 851 914
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
