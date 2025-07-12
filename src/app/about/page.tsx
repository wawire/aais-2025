
import AboutHero from '@/components/sections/AboutHero';
import {
  Award,
  Building2,
  Globe,
  Lightbulb,
  Shield,
  Target,
  TrendingUp,
  Users,
  Wifi
} from 'lucide-react';
import type { Metadata } from 'next';

/**
 * Event statistics interface for type safety
 */
interface EventStat {
  readonly icon: React.ComponentType<any>;
  readonly value: string;
  readonly label: string;
  readonly description: string;
}

/**
 * Objective interface for structured content
 */
interface Objective {
  readonly icon: React.ComponentType<any>;
  readonly title: string;
  readonly description: string;
}

/**
 * Key theme interface for structured content
 */
interface KeyTheme {
  readonly icon: React.ComponentType<any>;
  readonly title: string;
  readonly description: string;
}

/**
 * Event format interface
 */
interface EventFormat {
  readonly title: string;
  readonly description: string;
}

/**
 * Metadata for SEO optimization
 */
export const metadata: Metadata = {
  title: 'About AAIS 2025 | Africa Aviation Innovation Summit',
  description: 'Learn about the 4th edition of Africa Aviation Innovation Summit 2025 in Diani, Kenya. Driving investment opportunities and transformation in African aviation through innovation, sustainability, and strategic partnerships.',
  keywords: 'AAIS 2025, Africa aviation summit, Kenya Airways, AFRAA, Diani Kenya, aviation investment, innovation summit',
};

/**
 * Enhanced About page component for AAIS 2025.
 * Features improved design with larger hero, 85% width components, and comprehensive content.
 * @returns {JSX.Element} Enhanced about page with full event information
 */
export default function AboutPage(): JSX.Element {
  /**
   * Event statistics data with icons
   */
  const eventStats: EventStat[] = [
    {
      icon: Users,
      value: '250+',
      label: 'Industry Leaders',
      description: 'Aviation executives, investors, and policymakers from across Africa and globally'
    },
    {
      icon: Globe,
      value: '30+',
      label: 'Countries',
      description: 'African nations and international markets represented at the summit'
    },
    {
      icon: TrendingUp,
      value: '$55B',
      label: 'Market Opportunity',
      description: 'Projected African aviation market value by 2030'
    },
    {
      icon: Award,
      value: '4th',
      label: 'Edition',
      description: 'Years of driving aviation innovation and investment across Africa'
    }
  ];

  /**
   * Summit objectives with detailed descriptions
   */
  const objectives: Objective[] = [
    {
      icon: Target,
      title: 'Drive Investment Opportunities',
      description: 'Engage investors, policymakers, and industry leaders in strategic discussions to foster aviation infrastructure and innovation investments across Africa.'
    },
    {
      icon: Lightbulb,
      title: 'Highlight Innovation\'s Role',
      description: 'Demonstrate how cutting-edge technology and innovation enhance operational efficiency, customer experience, and overall excellence in aviation.'
    },
    {
      icon: Building2,
      title: 'Showcase Funding Models',
      description: 'Present innovative financing strategies and business models that strengthen industry resilience and drive sustainable growth.'
    },
    {
      icon: Shield,
      title: 'Foster Regulatory Dialogue',
      description: 'Encourage comprehensive discussions on regulatory frameworks that create an enabling environment for aviation investments.'
    }
  ];

  /**
   * Key themes covered at the summit
   */
  const keyThemes: KeyTheme[] = [
    {
      icon: Building2,
      title: 'Infrastructure Development',
      description: 'Strengthening airports, air traffic management, and regional connectivity through innovative solutions'
    },
    {
      icon: TrendingUp,
      title: 'Efficiency & Sustainability',
      description: 'Exploring funding models and sustainable approaches for long-term aviation growth'
    },
    {
      icon: Globe,
      title: 'African Aviation Horizons',
      description: 'Strategies to boost airline profitability, airport capacity, and continental connectivity'
    },
    {
      icon: Users,
      title: 'Regional Partnerships',
      description: 'Building synergies among African airlines, governments, and international investors'
    },
    {
      icon: Wifi,
      title: 'Technology Advancement',
      description: 'Leveraging AI, automation, and blockchain to transform aviation operations'
    },
    {
      icon: Shield,
      title: 'Policy Reforms',
      description: 'Developing pro-investment aviation environments through regulatory improvements'
    }
  ];

  /**
   * Event format descriptions
   */
  const eventFormats: EventFormat[] = [
    {
      title: 'CEO\'s Breakfast',
      description: 'Exclusive gathering of top executives to discuss industry trends, challenges, and opportunities'
    },
    {
      title: 'Keynote Addresses',
      description: 'Expert insights from industry leaders, policymakers, and investors shaping aviation\'s future'
    },
    {
      title: 'Panel Discussions',
      description: 'Cross-sector dialogues featuring aviation, finance, tourism, logistics, and technology experts'
    },
    {
      title: 'Innovation Showcases',
      description: 'Platform for startups, investors, and technology providers to present cutting-edge solutions'
    },
    {
      title: 'Networking Sessions',
      description: 'High-value B2B opportunities fostering partnerships and collaboration'
    },
    {
      title: 'Interactive Workshops',
      description: 'Knowledge sharing and capacity building sessions for industry professionals'
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Simple Hero Section with Background Image */}
      {/* <section
        className="relative bg-cover bg-center bg-no-repeat text-white py-24"
        style={{
          backgroundImage: `linear-gradient(rgba(194, 165, 66, 0.8), rgba(194, 165, 66, 0.8)), url('/images/aviation-hero-bg.jpg')`
        }}
      >
        <div className="w-[85%] max-w-7xl mx-auto px-4">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              About AAIS 2025
            </h1>
            <p className="text-xl md:text-2xl mb-8 opacity-95 max-w-4xl mx-auto">
              Investing in Africa's Aviation Future: Unlocking Opportunities for Growth and
              Transformation through Innovation
            </p>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto">
              <div className="flex items-center justify-center space-x-2">
                <Calendar className="w-5 h-5" />
                <span className="font-semibold">Nov 6-7, 2025</span>
              </div>
              <div className="flex items-center justify-center space-x-2">
                <MapPin className="w-5 h-5" />
                <span className="font-semibold">Diani, Kenya</span>
              </div>
              <div className="flex items-center justify-center space-x-2">
                <Users className="w-5 h-5" />
                <span className="font-semibold">500+ Attendees</span>
              </div>
              <div className="flex items-center justify-center space-x-2">
                <TrendingUp className="w-5 h-5" />
                <span className="font-semibold">4th Edition</span>
              </div>
            </div>
          </div>
        </div>
      </section> */}
<AboutHero/>
      {/* Summit Overview */}
      <section className="py-20 bg-gray-50">
        <div className="w-[85%] max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Summit Overview
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Africa's aviation industry stands at a critical juncture where strategic investments
              and innovation can drive transformative growth across the continent.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <p className="text-lg text-gray-700 leading-relaxed">
                The Africa Aviation Innovation Summit 2025 brings together aviation leaders,
                policymakers, investors, and cross-sector professionals from tourism, finance,
                logistics, technology, and trade to explore how innovative investments can fuel
                the next phase of Africa's aviation expansion.
              </p>
              <p className="text-lg text-gray-700 leading-relaxed">
                This exclusive, high-impact event provides unparalleled networking opportunities,
                cutting-edge industry insights, and actionable strategies, ensuring attendees gain
                measurable returns while shaping the future of African aviation.
              </p>

              <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
                <h3 className="font-bold text-aviationGold mb-4 text-lg">Organized by</h3>
                <div className="space-y-2">
                  <p className="text-gray-700"><strong>Host:</strong> Kenya Airways PLC</p>
                  <p className="text-gray-700"><strong>Partner:</strong> African Airlines Association (AFRAA)</p>
                  <p className="text-gray-700"><strong>Venue:</strong> Diani Reef Beach Resort, Kwale, Kenya</p>
                </div>
              </div>
            </div>

            {/* Event Statistics */}
            <div className="grid grid-cols-2 gap-6">
              {eventStats.map((stat, index) => {
                const IconComponent = stat.icon;
                return (
                  <div
                    key={index}
                    className="bg-white p-6 rounded-xl shadow-sm border border-gray-100 hover:shadow-md transition-all duration-300 hover:border-aviationGold/30"
                  >
                    <div className="text-aviationGold mb-3">
                      <IconComponent className="w-8 h-8" />
                    </div>
                    <div className="text-3xl font-bold text-gray-900 mb-1">
                      {stat.value}
                    </div>
                    <div className="font-semibold text-gray-800 mb-2">
                      {stat.label}
                    </div>
                    <div className="text-sm text-gray-600 leading-relaxed">
                      {stat.description}
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* Summit Objectives */}
      <section className="py-20">
        <div className="w-[85%] max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Summit Objectives
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Four strategic pillars driving transformation in African aviation
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {objectives.map((objective, index) => {
              const IconComponent = objective.icon;
              return (
                <div
                  key={index}
                  className="bg-white p-8 rounded-xl shadow-sm border border-gray-100 hover:shadow-lg transition-all duration-300 group hover:border-aviationGold/30"
                >
                  <div className="text-aviationGold mb-4 group-hover:scale-110 transition-transform duration-300">
                    <IconComponent className="w-10 h-10" />
                  </div>
                  <h3 className="font-bold text-gray-900 mb-4 text-lg">
                    {objective.title}
                  </h3>
                  <p className="text-gray-700 leading-relaxed">
                    {objective.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Key Themes */}
      <section className="py-20 bg-gray-50">
        <div className="w-[85%] max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Key Themes
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Strategic focus areas driving innovation and investment across African aviation
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {keyThemes.map((theme, index) => {
              const IconComponent = theme.icon;
              return (
                <div
                  key={index}
                  className="bg-white p-6 rounded-xl shadow-sm border border-gray-100 hover:shadow-md transition-all duration-300 hover:border-aviationGold/30"
                >
                  <div className="text-aviationGold mb-4">
                    <IconComponent className="w-8 h-8" />
                  </div>
                  <h3 className="font-bold text-gray-900 mb-3 text-lg">
                    {theme.title}
                  </h3>
                  <p className="text-gray-700 leading-relaxed">
                    {theme.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Event Format */}
      <section className="py-20">
        <div className="w-[85%] max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Event Format
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Diverse engagement opportunities designed for maximum impact and networking
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {eventFormats.map((format, index) => (
              <div
                key={index}
                className="bg-gradient-to-br from-white to-gray-50 p-6 rounded-xl border border-gray-100 hover:shadow-md transition-all duration-300"
              >
                <h3 className="font-bold text-aviationGold mb-3 text-lg">
                  {format.title}
                </h3>
                <p className="text-gray-700 leading-relaxed">
                  {format.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>




    </div>
  );
}
