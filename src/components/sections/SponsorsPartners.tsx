// components/sections/SponsorsPartners.tsx
import {
  ArrowRightIcon,
  StarIcon
} from '@heroicons/react/24/outline';

interface Partner {
  name: string;
  role: string;
  logo: string;
  description: string;
}

/**
 * Sponsors & Partners section showcasing current partners
 * Features Kenya Airways, AFRAA, and current summit sponsors
 */
export function SponsorsPartners(): JSX.Element {
  const mainPartners: Partner[] = [
    {
      name: "Kenya Airways",
      role: "Host & Organizer",
      logo: "/images/partners/KenyaAirways.svg",
      description: "Africa's Pride - Leading the aviation transformation across the continent"
    },
    {
      name: "AFRAA",
      role: "Strategic Partner",
      logo: "/images/partners/afraa.s",
      description: "African Airlines Association - Representing the voice of African aviation"
    }
  ];

  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 2xl:px-16">

        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="text-2xl sm:text-3xl font-bold font-heading italic text-aviationGold mb-4">
            Our 2025 Summit Partners & Sponsors
          </h2>
          <p className="text-base text-gray-700 max-w-3xl mx-auto">
            Join leading organizations in shaping the future of African aviation through strategic partnerships
          </p>
        </div>
        {/* Current Sponsors Showcase */}
        <div className="mb-16">
          {/* Sponsor logos grid - placeholder for actual sponsors */}
          <div className="bg-white rounded-xl p-8 border border-gray-200">
            <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-8 items-center justify-items-center">
              {/* Placeholder sponsor slots */}
              {[1, 2, 3, 4, 5, 6].map((slot) => (
                <div key={slot} className="w-24 h-16 bg-gray-100 rounded-lg flex items-center justify-center">
                  <div className="text-gray-400 text-xs text-center">
                    <StarIcon className="h-6 w-6 mx-auto mb-1" />
                    <div>Sponsor Logo</div>
                  </div>
                </div>
              ))}
            </div>
            <div className="text-center mt-6">

            </div>
          </div>
        </div>

        {/* Call to Action */}
        <div className="bg-gradient-to-r from-aviationGold/10 via-aviationGold/5 to-aviationGold/10 rounded-xl p-8 text-center">
          <h3 className="text-xl font-bold text-charcoal-800 mb-4">
            Become a Summit Partner
          </h3>
          <p className="text-gray-700 mb-6 max-w-2xl mx-auto">
            Position your organization at the forefront of African aviation transformation.
            Connect with industry leaders, showcase innovations, and drive meaningful partnerships.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <button className="bg-aviationGold text-white px-6 py-3 rounded-lg font-medium hover:bg-aviationGold-600 transition-colors duration-200 flex items-center space-x-2">
              <span>Download Sponsorship Brochure</span>
              <ArrowRightIcon className="h-4 w-4" />
            </button>

            <div className="text-sm text-gray-600">
              <span>or contact </span>
              <a href="mailto:aais@kenya-airways.com" className="text-aviationGold hover:text-aviationGold-600 font-medium">
                aais@kenya-airways.com
              </a>
              <span> • </span>
              <a href="tel:+254716851914" className="text-aviationGold hover:text-aviationGold-600 font-medium">
                +254 716 851 914
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
