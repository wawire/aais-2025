// components/sections/Registration.tsx
'use client'
import {
  BanknotesIcon,
  BuildingStorefrontIcon,
  CheckIcon,
  ClockIcon,
  CreditCardIcon,
  DevicePhoneMobileIcon,
  StarIcon,
  UserIcon
} from '@heroicons/react/24/outline';
import { useState } from 'react';

interface Package {
  name: string;
  price: string;
  originalPrice?: string;
  description: string;
  features: string[];
  highlighted?: boolean;
  deadline?: string;
  availability?: string;
}

interface PaymentMethod {
  name: string;
  icon: React.ReactNode;
  description: string;
}

type TabType = 'delegate' | 'exhibitor' | 'sponsor';

/**
 * Enhanced Registration section with full-width containers and aligned buttons
 * Maximizes space usage and ensures consistent card heights
 */
export function Registration(): JSX.Element {
  const [activeTab, setActiveTab] = useState<TabType>('delegate');

  const tabs = [
    { id: 'delegate' as TabType, label: 'Delegate', icon: <UserIcon className="h-4 w-4" /> },
    { id: 'exhibitor' as TabType, label: 'Exhibitor', icon: <BuildingStorefrontIcon className="h-4 w-4" /> },
    { id: 'sponsor' as TabType, label: 'Sponsor', icon: <StarIcon className="h-4 w-4" /> }
  ];

  const delegatePackages: Package[] = [
    {
      name: "Early Bird",
      price: "$300",
      originalPrice: "$350",
      description: "Limited time offer - Save $50",
      features: [
        "All keynote sessions",
        "Panel discussions",
        "Networking events",
        "Conference materials",
        "Lunch & refreshments",
        "Gala dinner access"
      ],
      highlighted: true,
      deadline: "Deadline: October 1, 2025"
    },
    {
      name: "Standard",
      price: "$350",
      description: "Full conference access",
      features: [
        "All keynote sessions",
        "Panel discussions",
        "Networking events",
        "Conference materials",
        "Lunch & refreshments",
        "Gala dinner access"
      ]
    },
    {
      name: "Corporate",
      price: "$1500",
      description: "For 5 people",
      features: [
        "All standard delegate benefits",
        "VIP networking access",
        "Dedicated account manager",
        "Company branding opportunities",
        "5 delegate passes",
        "Priority seating"
      ]
    },
    {
      name: "Student",
      price: "$150",
      description: "Special rate for students",
      features: [
        "All keynote sessions",
        "Panel discussions",
        "Student networking sessions",
        "Conference materials",
        "Lunch & refreshments",
        "Requires: Student ID & institution letter"
      ]
    }
  ];

  const exhibitorPackages: Package[] = [
    {
      name: "Premium Booth",
      price: "$3000",
      description: "Maximum exhibition impact",
      features: [
        "Exhibition booth 3m x 6m with company name",
        "65-inch screen for display",
        "2 executive chairs & 1 round table",
        "1 lockable counter & 2 standard chairs",
        "2 spotlights & 2 electrical sockets",
        "1 dustbin & 4 event passes"
      ],
      availability: "3 slots available"
    },
    {
      name: "Modular Booth",
      price: "$2000",
      description: "Enhanced visibility package",
      features: [
        "Exhibition booth 3m x 4m with company name",
        "55-inch screen for display",
        "1 executive seat & 1 round table",
        "1 lockable counter & 2 standard chairs",
        "2 spotlights & 1 electrical socket",
        "1 dustbin & 3 event passes"
      ],
      availability: "5 slots available",
      highlighted: true
    },
    {
      name: "Basic Booth",
      price: "$1000",
      description: "Essential exhibition package",
      features: [
        "Exhibition booth 3m x 3m with company name",
        "43-inch screen for display",
        "1 lockable counter & 2 standard chairs",
        "2 spotlights & 1 electrical socket",
        "1 dustbin & 2 event passes",
        "Perfect for startups"
      ],
      availability: "5 slots available"
    }
  ];

  const sponsorPackages: Package[] = [
    {
      name: "Diamond",
      price: "$60,000",
      description: "Premier tier with maximum visibility and influence",
      features: [
        'Naming rights: "AAIS 2025 Powered by [Your Company]"',
        "Top-tier logo placement on all event materials",
        "Opening keynote speech opportunity",
        "Largest, most prominent exhibition space",
        "VIP Lounge access for exclusive networking",
        "Special recognition in all media coverage",
        "Invitation to exclusive VIP dinner",
        "12 VIP passes"
      ],
      availability: "2 slots available"
    },
    {
      name: "Platinum",
      price: "$40,000",
      description: "High-level visibility and engagement",
      features: [
        "Premium logo placement on all event materials",
        "Keynote or fireside chat speaking opportunity",
        "Prominent exhibition booth",
        "VIP Lounge access for private networking",
        "Dedicated media feature and press release mention",
        "Invitation to exclusive VIP dinner",
        "10 VIP passes"
      ],
      availability: "3 slots available",
      highlighted: true
    },
    {
      name: "Gold",
      price: "$30,000",
      description: "Enhanced visibility with speaking opportunities",
      features: [
        "Logo on all marketing collateral & digital promotions",
        "Panel discussion seat",
        "Premium exhibition booth",
        "Access to networking sessions & speaker lounge",
        "Dedicated sponsor highlight across social media",
        "Invitation to VIP networking cocktail",
        "6 VIP passes"
      ],
      availability: "4 slots available"
    },
    {
      name: "Silver",
      price: "$20,000",
      description: "Essential visibility package for businesses",
      features: [
        "Logo on event website & select signage",
        "Mention in event brochure",
        "Basic exhibition space",
        "General networking access",
        "Social media mentions",
        "4 VIP passes"
      ],
      availability: "Unlimited slots"
    },
    {
      name: "Bronze",
      price: "$10,000",
      description: "Entry-level brand presence",
      features: [
        "Logo on event website & select signage",
        "Mention in event brochure",
        "Basic exhibition space",
        "General networking access",
        "Social media mentions",
        "2 VIP passes"
      ],
      availability: "Unlimited slots"
    }
  ];

  const paymentMethods: PaymentMethod[] = [
    {
      name: "M-Pesa",
      icon: <DevicePhoneMobileIcon className="h-4 w-4" />,
      description: "Mobile Money"
    },
    {
      name: "Bank Transfer",
      icon: <BanknotesIcon className="h-4 w-4" />,
      description: "KCB Bank"
    },
    {
      name: "Credit Cards",
      icon: <CreditCardIcon className="h-4 w-4" />,
      description: "Visa, Mastercard"
    }
  ];

  const getActivePackages = () => {
    switch (activeTab) {
      case 'delegate':
        return delegatePackages;
      case 'exhibitor':
        return exhibitorPackages;
      case 'sponsor':
        return sponsorPackages;
      default:
        return delegatePackages;
    }
  };

  const getTabDescription = () => {
    switch (activeTab) {
      case 'delegate':
        return "Join as an attendee and network with industry leaders";
      case 'exhibitor':
        return "Showcase your products and services to aviation professionals";
      case 'sponsor':
        return "Partner with us for maximum brand exposure and thought leadership";
      default:
        return "";
    }
  };

  const renderPackageCard = (pkg: Package) => (
    <div
      key={pkg.name}
      className={`bg-white rounded-lg border p-5 relative h-full flex flex-col ${
        pkg.highlighted
          ? 'border-aviationGold ring-1 ring-aviationGold/30'
          : 'border-gray-200 hover:border-aviationGold/40'
      } transition-all duration-200`}
    >
      {pkg.highlighted && (
        <div className="absolute -top-2 left-1/2 transform -translate-x-1/2">
          <span className="bg-aviationGold text-white px-3 py-1 rounded-full text-xs font-medium">
            Most Popular
          </span>
        </div>
      )}

      <div className="text-center mb-5">
        <h4 className="text-lg font-bold text-charcoal-800 mb-2">{pkg.name}</h4>
        <div className="mb-2">
          {pkg.originalPrice && (
            <span className="text-sm text-gray-500 line-through mr-2">{pkg.originalPrice}</span>
          )}
          <span className="text-2xl font-bold text-aviationGold">{pkg.price}</span>
        </div>
        <p className="text-sm text-gray-600 mb-3">{pkg.description}</p>

        {pkg.deadline && (
          <div className="flex items-center justify-center mb-2 text-xs text-red-600">
            <ClockIcon className="h-3 w-3 mr-1" />
            {pkg.deadline}
          </div>
        )}
        {pkg.availability && (
          <div className="text-xs text-aviationGold font-medium">{pkg.availability}</div>
        )}
      </div>

      {/* Horizontal separator before features */}
      <div className="border-t border-gray-200 mb-4"></div>

      {/* Features section that grows to fill available space */}
      <div className="space-y-2 mb-5 flex-grow">
        {pkg.features.map((feature, index) => (
          <div key={index} className="flex items-start space-x-2">
            <CheckIcon className="h-4 w-4 text-aviationGold mt-0.5 flex-shrink-0" />
            <span className="text-sm text-gray-600 leading-relaxed">{feature}</span>
          </div>
        ))}
      </div>

      {/* Button pushed to bottom */}
      <button
        className={`w-full py-3 px-4 rounded-lg text-sm text-white font-medium transition-all duration-200 mt-auto ${
          pkg.highlighted
            ? 'bg-aviationGold text-white hover:bg-aviationGold-600'
            : 'bg-gray-100 text-charcoal-800 hover:bg-aviationGold hover:text-white'
        }`}
      >
        Select Package
      </button>
    </div>
  );

  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 2xl:px-16">

        {/* Header - Centered */}
        <div className="text-center mb-12">
          <h2 className="text-2xl sm:text-3xl font-bold font-heading italic text-aviationGold mb-4">
            Register for AAIS 2025
          </h2>
          <p className="text-base text-gray-700 max-w-2xl mx-auto">
            Choose your participation level and join Africa's premier aviation summit
          </p>
        </div>

        {/* Enhanced Minimalistic Tabs - Centered */}
        <div className="flex justify-center mb-10">
          <div className="inline-flex bg-gray-100 rounded-lg p-1">
            {tabs.map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`flex items-center space-x-2 px-4 py-2 rounded-md text-sm font-medium transition-all duration-200 ${
                  activeTab === tab.id
                    ? 'bg-aviationGold text-white hover:bg-aviationGold-600 hover:text-white'
                    : 'text-gray-600 hover:text-charcoal-800 hover:bg-gray-200'
                }`}
              >
                <div className={`${activeTab === tab.id ? 'text-white' : 'text-white'}`}>
                  {tab.icon}
                </div>
                <span>{tab.label}</span>
              </button>
            ))}
          </div>
        </div>

        {/* Tab Content - Full Width */}
        <div className="mb-12">
          <div className="text-center mb-8">
            <p className="text-sm text-gray-600 max-w-xl mx-auto">{getTabDescription()}</p>
          </div>

          {/* Full width grid with better spacing */}
          <div className={`grid gap-6 ${
            activeTab === 'sponsor'
              ? 'grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5'
              : activeTab === 'exhibitor'
              ? 'grid-cols-1 sm:grid-cols-2 lg:grid-cols-3'
              : 'grid-cols-1 sm:grid-cols-2 lg:grid-cols-4'
          }`}>
            {getActivePackages().map(pkg => renderPackageCard(pkg))}
          </div>

          {activeTab === 'delegate' && (
            <div className="mt-6 text-center">
              <p className="text-sm text-gray-600 max-w-xl mx-auto">
                <strong>Group Discount:</strong> 5+ people = $1500 total, additional attendees at standard rates
              </p>
            </div>
          )}
        </div>

        {/* Payment Methods - Wider container */}

      </div>
    </section>
  );
}
