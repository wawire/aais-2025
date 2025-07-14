// components/sections/WhyAttend.tsx
import {
  ChartBarIcon,
  GlobeAltIcon,
  LightBulbIcon,
  SparklesIcon,
  TrophyIcon,
  UserGroupIcon
} from '@heroicons/react/24/outline';

interface Benefit {
  title: string;
  description: string;
  icon: React.ReactNode;
}

/**
 * Enhanced Why Attend section with consistent font sizing and clean card design
 * Simplified styling with better typography hierarchy
 */
export function WhyAttend(): JSX.Element {
  const keyBenefits: Benefit[] = [
    {
      title: "Unparalleled Networking",
      description: "Connect with aviation leaders, policymakers, investors, and professionals from tourism, finance, logistics, and technology sectors.",
      icon: <UserGroupIcon className="h-5 w-5" />
    },
    {
      title: "Cutting-Edge Insights",
      description: "Gain expert insights from industry leaders through keynote addresses, panel discussions, and interactive sessions.",
      icon: <LightBulbIcon className="h-5 w-5" />
    },
    {
      title: "Investment Opportunities",
      description: "Discover innovative financing models, investment strategies, and business partnerships that drive measurable returns.",
      icon: <ChartBarIcon className="h-5 w-5" />
    },
    {
      title: "Strategic Partnerships",
      description: "Build cross-sector collaborations and regional partnerships that unlock new economic opportunities.",
      icon: <GlobeAltIcon className="h-5 w-5" />
    }
  ];

  return (
    <section className="py-12 sm:py-16 bg-gray-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">

        {/* Simple Header */}
        <div className="text-center mb-10 sm:mb-12">
          <div className="inline-flex items-center space-x-2 bg-aviationGold/10 px-3 py-2 rounded-full mb-4">
            <SparklesIcon className="h-4 w-4 text-aviationGold" />
            <span className="text-xs sm:text-sm font-medium text-aviationGold">Premium Aviation Event</span>
          </div>

          <h2 className="text-2xl sm:text-3xl font-bold font-heading italic text-aviationGold">
            Why Attend AAIS 2025?
          </h2>
        </div>

        {/* Main Content Area */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 lg:gap-8 mb-12 sm:mb-16">

          {/* Event Highlight Card */}
          <div className="lg:col-span-1">
            <div className="bg-white rounded-xl border border-aviationGold/20 p-6 sm:p-8 relative overflow-hidden">
              {/* Background pattern */}
              <div className="absolute inset-0 opacity-5">
                <div className="absolute top-0 right-0 w-24 h-24 sm:w-32 sm:h-32 bg-aviationGold rounded-full -translate-y-12 sm:-translate-y-16 translate-x-12 sm:translate-x-16"></div>
                <div className="absolute bottom-0 left-0 w-20 h-20 sm:w-24 sm:h-24 bg-charcoal-400 rounded-full translate-y-10 sm:translate-y-12 -translate-x-10 sm:-translate-x-12"></div>
              </div>

              <div className="relative z-10 text-center">
                <div className="w-12 h-12 sm:w-16 sm:h-16 bg-aviationGold/20 rounded-full flex items-center justify-center mx-auto mb-4 sm:mb-6">
                  <TrophyIcon className="h-6 w-6 sm:h-8 sm:w-8 text-aviationGold" />
                </div>

                <h3 className="text-lg sm:text-xl font-bold text-charcoal-800 mb-4">
                  4<sup>th</sup> Edition Summit
                </h3>

                <div className="space-y-3 mb-4 sm:mb-6">
                  <div>
                    <p className="text-xs sm:text-sm text-gray-600">Date</p>
                    <p className="text-sm sm:text-base font-semibold text-aviationGold">November 6-7, 2025</p>
                  </div>
                  <div>

                    <p className="text-sm sm:text-base font-semibold text-charcoal-800">Diani Reef Resort & Spa, Diani</p>
                  </div>
                  <div>
                    <p className="text-sm sm:text-base font-semibold text-aviationGold">250+ Professionals</p>
                  </div>
                </div>

                <div className="bg-aviationGold/10 rounded-lg p-3 sm:p-4">
                  <p className="text-xs sm:text-sm font-medium text-charcoal-800">
                    "Networking in Paradise"
                  </p>
                  <p className="text-sm text-gray-600 mt-1">
                    Premium beachfront venue with luxury amenities
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Benefits Section with Combined Content */}
          <div className="lg:col-span-2">
            <div className="mb-6 sm:mb-8">
              {/* Combined Value Proposition */}
              <div className="space-y-3 mb-6">
                <p className="text-sm sm:text-base text-gray-700 leading-relaxed">
                  This <strong className="text-aviationGold">exclusive, high-impact event</strong> provides unparalleled networking opportunities, cutting-edge industry insights, and actionable strategies, ensuring attendees gain a <strong className="text-charcoal-800">measurable return on investment</strong> while shaping the future of African aviation. Join Africa's premier aviation summit for exclusive access to industry leaders, innovative solutions, and strategic partnerships.
                </p>

              </div>
            </div>
{/*
            <h3 className="text-lg sm:text-xl font-bold font-heading italic text-aviationGold mb-4 sm:mb-6">
              What You'll Gain
            </h3> */}

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
              {keyBenefits.map((benefit, index) => (
                <div
                  key={index}
                  className="bg-white rounded-lg border border-gray-200 p-4 sm:p-6 hover:border-aviationGold/40 transition-colors duration-200 group"
                >
                  <div className="flex items-start space-x-3 sm:space-x-4">
                    <div className="w-8 h-8 sm:w-10 sm:h-10 bg-aviationGold/10 rounded-lg flex items-center justify-center flex-shrink-0 group-hover:bg-aviationGold/20 transition-colors duration-200">
                      <div className="text-aviationGold group-hover:text-aviationGold-600 transition-colors duration-200">
                        {benefit.icon}
                      </div>
                    </div>
                    <div>
                      <h4 className="text-sm sm:text-base font-semibold text-charcoal-800 mb-1 sm:mb-2 group-hover:text-aviationGold transition-colors duration-200">
                        {benefit.title}
                      </h4>
                      <p className="text-xs sm:text-sm text-gray-600 leading-relaxed">
                        {benefit.description}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Call to Action
        <div className="text-center">
          <div className="bg-gradient-to-r from-aviationGold/10 via-aviationGold/5 to-aviationGold/10 rounded-xl p-6 sm:p-8">
            <h4 className="text-lg sm:text-xl font-bold text-charcoal-800 mb-3 sm:mb-4">
              Ready to Transform Your Aviation Network?
            </h4>
            <p className="text-lg sm:text-base text-gray-600 mb-4 sm:mb-6 max-w-2xl mx-auto">
              Join industry leaders, investors, and innovators at Kenya's most exclusive aviation summit
            </p>
            <div className="flex flex-wrap justify-center gap-3 sm:gap-4 text-xs sm:text-sm">
              <div className="bg-white rounded-lg px-3 py-2 border border-gray-200">
                <span className="font-medium text-aviationGold">CEO's Breakfast</span>
              </div>
              <div className="bg-white rounded-lg px-3 py-2 border border-gray-200">
                <span className="font-medium text-aviationGold">Innovation Showcases</span>
              </div>
              <div className="bg-white rounded-lg px-3 py-2 border border-gray-200">
                <span className="font-medium text-aviationGold">Gala Dinner</span>
              </div>
            </div>
          </div>
        </div> */}
      </div>
    </section>
  );
}
