import AboutHero from '@/components/sections/AboutHero';
import {
  ArrowRight,
  Building2,
  Download,
  FileText,
  Globe,
  Lightbulb,
  Target,
  TrendingUp,
  Users
} from 'lucide-react';
import type { Metadata } from 'next';

interface Partner {
  name: string;
  role: string;
  logo: string;
  description: string;
}

export const metadata: Metadata = {
  title: 'About AAIS 2025 | Africa Aviation Innovation Summit',
  description: 'Learn about the 4th edition of Africa Aviation Innovation Summit 2025 in Diani, Kenya.',
  keywords: 'AAIS 2025, Africa aviation summit, Kenya Airways, AFRAA, Diani Kenya',
};

export default function AboutPage(): JSX.Element {
  const organizingPartners: Partner[] = [
    {
      name: "Kenya Airways",
      role: "Host & Organizer",
      logo: "/images/partners/KenyaAirways.svg",
      description: "Africa's Pride - Leading the aviation transformation across the continent."
    },
    {
      name: "AFRAA",
      role: "Strategic Partner",
      logo: "/images/partners/afraa.svg",
      description: "African Airlines Association - Representing the voice of African aviation."
    }
  ];

  const industries = [
    {
      icon: Building2,
      title: "Aviation",
      description: "Airlines, airports, air traffic management, and aviation authorities"
    },
    {
      icon: TrendingUp,
      title: "Finance",
      description: "Investors, financiers, venture capitalists, and financial institutions"
    },
    {
      icon: Globe,
      title: "Tourism",
      description: "Tourism boards, hospitality leaders, and travel agencies"
    },
    {
      icon: Lightbulb,
      title: "Technology",
      description: "Tech providers, startups, AI specialists, and blockchain experts"
    },
    {
      icon: Target,
      title: "Logistics",
      description: "Supply chain professionals, cargo operators, and freight forwarders"
    },
    {
      icon: Users,
      title: "Government",
      description: "Policymakers, regulators, and government representatives"
    }
  ];

  const objectives = [
    {
      title: "Infrastructure Development",
      description: "Strengthening airports, air traffic management, and regional connectivity through cutting-edge solutions."
    },
    {
      title: "Efficiency & Sustainability",
      description: "Exploring funding models and innovative approaches for long-term sustainability in African aviation."
    },
    {
      title: "Regional Partnerships",
      description: "Identifying synergies among African airlines, governments, and investors for collaborative growth."
    },
    {
      title: "Pan-African Connectivity",
      description: "Enhancing regional aviation ties to improve air transport across the continent."
    },
    {
      title: "Technological Advancements",
      description: "Utilizing AI and automation to improve operational efficiency, safety, and customer experience."
    },
    {
      title: "Blockchain Security",
      description: "Employing blockchain technology to increase transparency and security in aviation operations."
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      <AboutHero />

      {/* About The Summit */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 2xl:px-16">
          <div className="text-center mb-12">
            <h2 className="text-2xl sm:text-3xl font-bold font-heading italic text-aviationGold mb-4">
              About The Summit
            </h2>
            <h3 className="text-xl font-bold text-charcoal-800 mb-6">
              Shaping Africa's Aviation Future Through Innovation
            </h3>
            <p className="text-base text-gray-700 max-w-4xl mx-auto leading-relaxed">
              Africa's aviation industry is at a critical turning point, where strategic investments and innovation can drive transformative growth. The Africa Aviation Innovation Summit 2025 brings together aviation leaders, policymakers, investors, and professionals to explore how innovative investments can fuel the next phase of Africa's aviation expansion.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-start">
            <div className="space-y-6">
              <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-200">
                <h4 className="font-bold text-charcoal-800 mb-4">Event Details</h4>
                <div className="space-y-2 text-sm">
                  <p className="text-gray-700"><strong>Dates:</strong> November 6-7, 2025</p>
                  <p className="text-gray-700"><strong>Venue:</strong> Diani Reef Beach Resort, Kenya</p>
                  <p className="text-gray-700"><strong>Expected Attendees:</strong> 500+ executives from 20+ countries</p>
                </div>
              </div>
            </div>

            <div className="space-y-6">
              <div className="grid grid-cols-2 gap-4">
                <div className="bg-white p-4 rounded-lg border border-gray-200 text-center">
                  <h4 className="font-bold text-aviationGold text-sm mb-1">High-Impact Networking</h4>
                  <p className="text-xs text-gray-600">Connect with 500+ executives from 20+ countries</p>
                </div>
                <div className="bg-white p-4 rounded-lg border border-gray-200 text-center">
                  <h4 className="font-bold text-aviationGold text-sm mb-1">Investment Opportunities</h4>
                  <p className="text-xs text-gray-600">Access to potential deal flow</p>
                </div>
                <div className="bg-white p-4 rounded-lg border border-gray-200 text-center">
                  <h4 className="font-bold text-aviationGold text-sm mb-1">Industry Insights</h4>
                  <p className="text-xs text-gray-600">Cutting-edge knowledge from aviation leaders</p>
                </div>
                <div className="bg-white p-4 rounded-lg border border-gray-200 text-center">
                  <h4 className="font-bold text-aviationGold text-sm mb-1">Cross-Industry Collaboration</h4>
                  <p className="text-xs text-gray-600">Multi-sector partnerships and opportunities</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Register CTA */}
      <section className="py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 2xl:px-16">
          <div className="bg-gradient-to-r from-aviationGold/10 via-aviationGold/5 to-aviationGold/10 rounded-xl p-8 text-center">
            <h3 className="text-xl font-bold text-charcoal-800 mb-4">
              Join Africa's Premier Aviation Summit
            </h3>
            <p className="text-gray-700 mb-8 max-w-2xl mx-auto">
              Secure your place among aviation leaders, investors, and innovators shaping the future of African aviation.
              Limited seats available for this exclusive gathering.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-6">
              <button className="bg-aviationGold text-white px-8 py-3 rounded-lg font-medium hover:bg-aviationGold-600 transition-colors duration-200 flex items-center space-x-2">
                <span>Register Now</span>
                <ArrowRight className="h-4 w-4" />
              </button>

              <div className="flex gap-3">
                <button className="flex items-center space-x-2 bg-white border border-gray-300 text-gray-700 px-4 py-2 rounded-lg text-sm font-medium hover:bg-gray-50 transition-colors">
                  <Download className="w-4 h-4" />
                  <span>Concept Note</span>
                </button>
                <button className="flex items-center space-x-2 bg-white border border-gray-300 text-gray-700 px-4 py-2 rounded-lg text-sm font-medium hover:bg-gray-50 transition-colors">
                  <FileText className="w-4 h-4" />
                  <span>Agenda</span>
                </button>
              </div>
            </div>

            <div className="text-sm text-gray-600">
              <span>Questions? Contact us at </span>
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
      </section>

      {/* Organizing Partners */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 2xl:px-16">
          <div className="text-center mb-12">
            <h2 className="text-2xl sm:text-3xl font-bold font-heading italic text-aviationGold mb-4">
              Organizing Partners
            </h2>
            <p className="text-base text-gray-700 max-w-3xl mx-auto">
              Leading African aviation organizations driving innovation across the continent.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {organizingPartners.map((partner, index) => (
              <div
                key={index}
                className="bg-white rounded-xl p-8 border border-gray-200 text-center hover:shadow-lg transition-all duration-300"
              >
                <div className="w-40 h-32 flex items-center justify-center mx-auto mb-6">
                  <img
                    src={partner.logo}
                    alt={`${partner.name} logo`}
                    className="max-w-full max-h-full object-contain"
                  />
                </div>
                <h3 className="text-xl font-bold font-heading text-charcoal-800 mb-2">{partner.name}</h3>
                <p className="text-sm font-medium text-aviationGold mb-3">{partner.role}</p>
                <p className="text-sm text-gray-600 leading-relaxed">{partner.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Cross-Industry Collaboration */}
      <section className="py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 2xl:px-16">
          <div className="text-center mb-12">
            <h2 className="text-2xl sm:text-3xl font-bold font-heading italic text-aviationGold mb-4">
              Cross-Industry Collaboration
            </h2>
            <p className="text-base text-gray-700 max-w-3xl mx-auto">
              The summit attracts key players across industries, fostering cross-sector collaboration and partnerships.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {industries.map((industry, index) => {
              const IconComponent = industry.icon;
              return (
                <div
                  key={index}
                  className="bg-white p-6 rounded-xl shadow-sm border border-gray-200 hover:shadow-md transition-all duration-300"
                >
                  <div className="text-aviationGold mb-3">
                    <IconComponent className="w-6 h-6" />
                  </div>
                  <h3 className="font-bold text-charcoal-800 mb-2 text-base">
                    {industry.title}
                  </h3>
                  <p className="text-sm text-gray-600 leading-relaxed">
                    {industry.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Summit Objectives */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 2xl:px-16">
          <div className="text-center mb-12">
            <h2 className="text-2xl sm:text-3xl font-bold font-heading italic text-aviationGold mb-4">
              Summit Objectives
            </h2>
            <p className="text-base text-gray-700 max-w-3xl mx-auto">
              Strategic focus areas driving transformation and innovation in African aviation.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {objectives.map((objective, index) => (
              <div
                key={index}
                className="bg-white p-6 rounded-xl shadow-sm border border-gray-200 hover:shadow-md transition-all duration-300"
              >
                <h3 className="font-bold text-aviationGold mb-3 text-base">
                  {objective.title}
                </h3>
                <p className="text-sm text-gray-600 leading-relaxed">
                  {objective.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
