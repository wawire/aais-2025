// components/sections/EventHighlights.tsx
import {
  BanknotesIcon,
  LightBulbIcon,
  RocketLaunchIcon,
  ScaleIcon
} from '@heroicons/react/24/outline';

interface ObjectiveItem {
  title: string;
  description: string;
  icon: React.ReactNode;
}

/**
 * Refined event overview section with subtle interactions and elegant design
 * Features understated styling and gentle hover effects
 */
export function EventHighlights(): JSX.Element {
  const objectives: ObjectiveItem[] = [
    {
      title: "Drive Investment Opportunities",
      description: "Explore how diverse industries can shape Africa's aviation future by actively involving investors, policymakers, and industry leaders in discussions, panels and networking sessions.",
      icon: <BanknotesIcon className="h-6 w-6" />
    },
    {
      title: "Highlight Innovation's Role",
      description: "Demonstrate how innovation enhances efficiency, customer experience, and operational excellence in African aviation.",
      icon: <LightBulbIcon className="h-6 w-6" />
    },
    {
      title: "Showcase Funding Models",
      description: "Present innovative financing models and business strategies that bolster industry resilience and growth.",
      icon: <RocketLaunchIcon className="h-6 w-6" />
    },
    {
      title: "Foster Regulatory Dialogue",
      description: "Encourage discussions on regulatory frameworks that create an enabling environment for aviation investments.",
      icon: <ScaleIcon className="h-6 w-6" />
    }
  ];

  return (
    <section className="py-10 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">

        {/* About the Summit */}
        <div className="mb-8">
          <div className="border-b border-aviationGold/40 pb-1 mb-4 hover:border-aviationGold/60 transition-colors duration-200">
            <h2 className="text-2xl sm:text-3xl font-bold font-heading italic text-aviationGold">
              About the Summit
            </h2>
          </div>
          <div className="space-y-3 text-gray-700">
            <p className="text-base leading-relaxed">
              Africa's aviation industry is at a critical turning point, where strategic investments and innovation can drive transformative growth. By leveraging digitalization, automation, and sustainable-driven strategies, the continent can enhance connectivity, modernize infrastructure, and unlock new economic opportunities.
            </p>
            <p className="text-base leading-relaxed">
              To harness this potential, we invite you to join us for the Africa Aviation Innovation Summit on <strong className="text-aviationGold">6-7 November 2025</strong> in Diani, Kenya hosted by Kenya Airways PLC. This landmark event will bring together industry leaders, policymakers, regulators, investors, and innovators to explore the opportunities, challenges, and best practices for implementing aviation innovation in Africa.
            </p>
          </div>
        </div>

        {/* Objectives */}
        <div>
          <div className="border-b border-aviationGold/40 pb-1 mb-5 hover:border-aviationGold/60 transition-colors duration-200">
            <h3 className="text-2xl sm:text-3xl font-bold font-heading italic text-aviationGold">
              Objectives
            </h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {objectives.map((objective, index) => (
              <div
                key={index}
                className="group flex items-start space-x-3 p-4 rounded-lg hover:bg-gray-50/50 transition-colors duration-200"
              >
                <div className="text-aviationGold group-hover:text-aviationGold-600 flex-shrink-0 mt-1 transition-colors duration-200">
                  {objective.icon}
                </div>
                <div className="flex-1">
                  <h4 className="text-lg font-semibold font-accent italic text-charcoal-800 group-hover:text-aviationGold mb-1 transition-colors duration-200">
                    {objective.title}
                  </h4>
                  <p className="text-sm text-gray-600 leading-relaxed">
                    {objective.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
