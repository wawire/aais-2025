'use client';

import { useState } from 'react';
import {
  MapPin,
  Plane,
  Car,
  Clock,
  Phone,
  Mail,
  CheckCircle,
  Info,
  AlertTriangle,
  Calendar,
  FileText,
  Navigation,
  Hotel,
  Globe,
  ChevronDown, // Added for collapsible functionality
  ChevronUp // Added for collapsible functionality
} from 'lucide-react';

interface TimelineItem {
  period: string;
  title: string;
  description: string;
  action: string;
}

interface AccommodationOption {
  name: string;
  type: string;
  distance: string;
  link?: string;
}

/**
 * Comprehensive Travel & Visa Information page for AAIS 2025
 * Includes visa requirements, travel timeline, and detailed travel info
 */
export default function App(): JSX.Element { // Changed to App for default export
  const [activeTab, setActiveTab] = useState<'visa-requirements' | 'travel-options'>('visa-requirements'); // Removed 'accommodation' tab
  const [showAccommodation, setShowAccommodation] = useState(false); // State for collapsible accommodation

  const travelTimeline: TimelineItem[] = [
    {
      period: '8 weeks before',
      title: 'Check Passport Validity',
      description: 'Ensure your passport is valid for at least 6 months beyond your stay',
      action: 'Verify passport expiration date'
    },
    {
      period: '6 weeks before',
      title: 'Apply for ETA',
      description: 'Submit your Electronic Travel Authorization application online',
      action: 'Complete ETA application at etakenya.go.ke'
    },
    {
      period: '4 weeks before',
      title: 'Book Flights & Accommodation', // Updated action
      description: 'Secure your flights and accommodation in Diani Beach area',
      action: 'Make reservations and confirm bookings'
    },
    {
      period: '2 weeks before',
      title: 'Prepare Documentation',
      description: 'Gather all required documents and make necessary copies',
      action: 'Organize travel documents and confirmations'
    },
    {
      period: '1 week before',
      title: 'Final Preparations',
      description: 'Check-in online, pack essentials, and confirm ground transport',
      action: 'Complete final travel preparations'
    }
  ];

  const accommodationOptions: AccommodationOption[] = [
    {
      name: 'Diani Reef Beach Resort & Spa',
      type: 'Main Venue - Official Hotel',
      distance: 'At venue',
      link: 'booking@dianireef.com'
    },
    {
      name: 'Almanara Luxury Resort',
      type: 'Luxury Beachfront',
      distance: '5 minutes to venue',
      link: 'Contact for group rates'
    },
    {
      name: 'Leopard Beach Resort & Spa',
      type: '4-Star Beach Resort',
      distance: '10 minutes to venue',
      link: 'reservations@leopardbeach.com'
    },
    {
      name: 'Diani Sea Resort',
      type: 'Mid-Range Option',
      distance: '8 minutes to venue',
      link: 'Contact for availability'
    },
    {
      name: 'The Sands at Chale Island',
      type: 'Island Resort Experience',
      distance: '30 minutes to venue',
      link: 'Unique island location'
    },
    {
      name: 'Private Beach Villas',
      type: 'Luxury Private Options',
      distance: '5-15 minutes to venue',
      link: 'Contact our team for arrangements'
    }
  ];

  const renderTabContent = () => {
    switch (activeTab) {
      case 'visa-requirements':
        return (
          <div className="space-y-8">
            {/* Important ETA Notice */}
            <div className="bg-yellow-50 border-l-4 border-yellow-400 p-6 rounded-r-lg">
              <div className="flex items-start gap-3">
                <AlertTriangle className="w-6 h-6 text-yellow-600 flex-shrink-0 mt-1" />
                <div>
                  <h3 className="font-bold text-yellow-800 mb-2">Important Update</h3>
                  <p className="text-yellow-700">
                    Kenya has abolished the traditional visa regime. All travelers must obtain an
                    <strong> Electronic Travel Authorization (ETA)</strong> before arrival.
                  </p>
                </div>
              </div>
            </div>

            {/* ETA Information */}
            <div className="bg-white rounded-xl border border-gray-100 p-6">
              <h3 className="font-bold text-gray-900 text-lg mb-4 flex items-center gap-2">
                <Globe className="w-5 h-5 text-aviationGold" />
                Electronic Travel Authorization (ETA)
              </h3>
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <h4 className="font-semibold text-gray-900 mb-3">Requirements:</h4>
                  <ul className="space-y-2 text-sm text-gray-600">
                    <li className="flex items-center gap-2">
                      <CheckCircle className="w-4 h-4 text-green-500" />
                      Valid passport (6+ months validity)
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle className="w-4 h-4 text-green-500" />
                      Passport-style photograph
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle className="w-4 h-4 text-green-500" />
                      Return/onward flight ticket
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle className="w-4 h-4 text-green-500" />
                      Proof of accommodation
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle className="w-4 h-4 text-green-500" />
                      Yellow fever certificate (if applicable)
                    </li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900 mb-3">Processing Details:</h4>
                  <div className="space-y-3 text-sm">
                    <div className="flex justify-between">
                      <span className="text-gray-600">Processing Time:</span>
                      <span className="font-medium text-gray-900">3-7 business days</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-600">ETA Fee:</span>
                      <span className="font-medium text-gray-900">$30 USD</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-600">Validity:</span>
                      <span className="font-medium text-gray-900">90 days</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-600">Apply Online:</span>
                      <a href="https://etakenya.go.ke" target="_blank" rel="noopener noreferrer"
                        className="font-medium text-aviationGold hover:underline">
                        etakenya.go.ke
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Travel Timeline */}
            <div className="bg-white rounded-xl border border-gray-100 p-6">
              <h3 className="font-bold text-gray-900 text-lg mb-6 flex items-center gap-2">
                <Calendar className="w-5 h-5 text-aviationGold" />
                Recommended Timeline
              </h3>
              <div className="space-y-6">
                {travelTimeline.map((item, index) => (
                  <div key={index} className="flex items-start gap-4">
                    <div className="w-24 flex-shrink-0">
                      <div className="text-sm font-bold text-aviationGold bg-aviationGold/10 px-3 py-1 rounded-full text-center">
                        {item.period}
                      </div>
                    </div>
                    <div className="flex-1">
                      <h4 className="font-semibold text-gray-900 mb-1">{item.title}</h4>
                      <p className="text-gray-600 text-sm mb-2">{item.description}</p>
                      <p className="text-aviationGold text-sm font-medium">{item.action}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        );

      case 'travel-options':
        return (
          <div className="space-y-6">
            {/* International Routes */}
            <div className="bg-white rounded-xl border border-gray-100 p-6">
              <h3 className="font-bold text-gray-900 text-lg mb-4 flex items-center gap-2">
                <Plane className="w-5 h-5 text-aviationGold" />
                International Routes to Kenya
              </h3>
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <h4 className="font-semibold text-gray-900 mb-3">Jomo Kenyatta International Airport (NBO)</h4>
                  <ul className="space-y-2 text-sm text-gray-600">
                    <li>• Main international gateway to Kenya</li>
                    <li>• Direct flights from major global cities</li>
                    <li>• Kenya Airways hub with extensive connections</li>
                    <li>• 5-6 hours drive to Diani Beach</li>
                    <li>• Domestic connections to Ukunda available</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900 mb-3">Direct to Coast</h4>
                  <ul className="space-y-2 text-sm text-gray-600">
                    <li>• Moi International Airport (MBA) - Mombasa</li>
                    <li>• Limited international flights</li>
                    <li>• 1.5 hours drive to Diani Beach</li>
                    <li>• Ukunda Airstrip (UKA) - Charter/private flights</li>
                    <li>• 15 minutes to Diani Beach</li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Domestic Travel Options */}
            <div className="bg-white rounded-xl border border-gray-100 p-6">
              <h3 className="font-bold text-gray-900 text-lg mb-4 flex items-center gap-2">
                <Navigation className="w-5 h-5 text-aviationGold" />
                Getting to Diani Beach
              </h3>
              <div className="grid md:grid-cols-3 gap-6">
                <div className="p-4 bg-gray-50 rounded-lg">
                  <div className="flex items-center gap-2 mb-3">
                    <Plane className="w-5 h-5 text-aviationGold" />
                    <h4 className="font-semibold text-gray-900">Fly to Ukunda</h4>
                  </div>
                  <div className="space-y-2 text-sm text-gray-600">
                    <p><strong>Time:</strong> 15 min to resort</p>
                    <p><strong>Cost:</strong> $120-200</p>
                    <p><strong>Airlines:</strong> Kenya Airways, Safarilink</p>
                    <p><strong>Frequency:</strong> Multiple daily flights</p>
                  </div>
                </div>

                <div className="p-4 bg-gray-50 rounded-lg">
                  <div className="flex items-center gap-2 mb-3">
                    <Car className="w-5 h-5 text-aviationGold" />
                    <h4 className="font-semibold text-gray-900">Drive/Bus</h4>
                  </div>
                  <div className="space-y-2 text-sm text-gray-600">
                    <p><strong>Time:</strong> 5-6 hours from Nairobi</p>
                    <p><strong>Cost:</strong> Bus $15-25, Car rental $40/day</p>
                    <p><strong>Route:</strong> A109 Mombasa Highway</p>
                    <p><strong>Scenic:</strong> Beautiful coastal drive</p>
                  </div>
                </div>

                <div className="p-4 bg-gray-50 rounded-lg">
                  <div className="flex items-center gap-2 mb-3">
                    <Plane className="w-5 h-5 text-aviationGold" />
                    <h4 className="font-semibold text-gray-900">Via Mombasa</h4>
                  </div>
                  <div className="space-y-2 text-sm text-gray-600">
                    <p><strong>Time:</strong> 1.5 hours to resort</p>
                    <p><strong>Cost:</strong> Transfer $40-60</p>
                    <p><strong>Options:</strong> Taxi, shuttle, rental car</p>
                    <p><strong>International:</strong> Some direct flights</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Local Transportation */}
            <div className="bg-blue-50 rounded-xl p-6">
              <h3 className="font-bold text-gray-900 mb-4">Local Transportation in Diani</h3>
              <div className="grid md:grid-cols-2 gap-4 text-sm">
                <div>
                  <strong>Tuk-tuks:</strong> Short distances, negotiate fare
                </div>
                <div>
                  <strong>Taxis:</strong> Reliable, hotel can arrange
                </div>
                <div>
                  <strong>Matatus:</strong> Local buses, very affordable
                </div>
                <div>
                  <strong>Hotel Shuttles:</strong> Many resorts provide transfers
                </div>
              </div>
            </div>

            {/* Minimized Accommodation Section */}
            <div className="bg-white rounded-xl border border-gray-100 p-6">
              <button
                onClick={() => setShowAccommodation(!showAccommodation)}
                className="w-full flex justify-between items-center text-left font-bold text-gray-900 text-lg pb-4 border-b border-gray-100 focus:outline-none"
              >
                <span className="flex items-center gap-2">
                  <Hotel className="w-5 h-5 text-aviationGold" />
                  Accommodation Options
                </span>
                {showAccommodation ? (
                  <ChevronUp className="w-5 h-5 text-aviationGold" />
                ) : (
                  <ChevronDown className="w-5 h-5 text-aviationGold" />
                )}
              </button>
              {showAccommodation && (
                <div className="pt-6 space-y-6">
                  {accommodationOptions.map((option, index) => (
                    <div key={index} className="bg-gray-50 rounded-lg p-4 hover:shadow-sm transition-shadow">
                      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-2">
                        <div>
                          <h4 className="font-semibold text-gray-900 text-base">{option.name}</h4>
                          <span className="inline-block px-2 py-0.5 bg-aviationGold/10 text-aviationGold text-xs font-medium rounded-full mt-1">
                            {option.type}
                          </span>
                        </div>
                        <div className="flex items-center gap-1 text-sm text-aviationGold font-medium sm:mt-0 mt-2">
                          <MapPin className="w-3 h-3" />
                          {option.distance}
                        </div>
                      </div>
                      <p className="text-xs text-gray-600">
                        <strong>Contact:</strong> {option.link}
                      </p>
                    </div>
                  ))}
                  <div className="bg-green-50 rounded-xl p-4 mt-6">
                    <h3 className="font-bold text-gray-900 mb-3">Accommodation Support</h3>
                    <p className="text-gray-700 mb-4 text-sm">
                      Need help finding the perfect accommodation? Our team can assist with group bookings,
                      special rates, and recommendations based on your preferences and budget.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-3">
                      <a
                        href="mailto:aais@kenya-airways.com?subject=Accommodation Assistance - AAIS 2025"
                        className="inline-flex items-center justify-center px-4 py-2 bg-aviationGold text-white font-semibold rounded-lg text-sm hover:bg-aviationGold/90 transition-colors"
                      >
                        <Mail className="w-4 h-4 mr-2" />
                        Get Accommodation Help
                      </a>
                      <a
                        href="tel:+254716851914"
                        className="inline-flex items-center justify-center px-4 py-2 bg-white text-aviationGold font-semibold rounded-lg border border-aviationGold text-sm hover:bg-aviationGold/5 transition-colors"
                      >
                        <Phone className="w-4 h-4 mr-2" />
                        Call for Assistance
                      </a>
                    </div>
                  </div>
                </div>
              )}
            </div>
          </div>
        );

      default:
        return null;
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-white via-gray-50 to-aviationGold/5">
    

      {/* Travel Information Tabs */}
      <section className="py-16 px-4 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Complete Travel Guide</h2>
            <p className="text-lg text-gray-600">Everything you need for a smooth journey to AAIS 2025</p>
          </div>

          {/* Tabs */}
          <div className="flex flex-wrap justify-center gap-2 mb-8">
            <button
              onClick={() => setActiveTab('visa-requirements')}
              className={`px-6 py-3 rounded-lg font-medium transition-all duration-200 ${
                activeTab === 'visa-requirements'
                  ? 'bg-aviationGold text-white shadow-lg'
                  : 'bg-gray-100 text-gray-600 hover:text-gray-900 hover:bg-gray-200'
              }`}
            >
              Visa & ETA
            </button>
            <button
              onClick={() => setActiveTab('travel-options')}
              className={`px-6 py-3 rounded-lg font-medium transition-all duration-200 ${
                activeTab === 'travel-options'
                  ? 'bg-aviationGold text-white shadow-lg'
                  : 'bg-gray-100 text-gray-600 hover:text-gray-900 hover:bg-gray-200'
              }`}
            >
              Travel Options
            </button>
          </div>

          {/* Tab Content */}
          <div>
            {renderTabContent()}
          </div>
        </div>
      </section>

      {/* Comprehensive Map Section */}
      <section className="py-16 px-4 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-8">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Travel Routes & Location</h2>
            <p className="text-lg text-gray-600">Interactive map showing all routes to Diani Beach, Kenya</p>
          </div>

          {/* Route Overview */}
          {/* <div className="grid md:grid-cols-3 gap-6 mb-8">
            <div className="bg-white rounded-xl p-6 text-center">
              <Plane className="w-8 h-8 text-aviationGold mx-auto mb-3" />
              <h3 className="font-bold text-gray-900 mb-2">International</h3>
              <p className="text-gray-600 text-sm">Fly to Nairobi (NBO) then connect to Ukunda or drive to coast</p>
            </div>
            <div className="bg-white rounded-xl p-6 text-center">
              <MapPin className="w-8 h-8 text-aviationGold mx-auto mb-3" />
              <h3 className="font-bold text-gray-900 mb-2">Regional</h3>
              <p className="text-gray-600 text-sm">Direct flights to Mombasa (MBA) or Ukunda (UKA) airports</p>
            </div>
            <div className="bg-white rounded-xl p-6 text-center">
              <Car className="w-8 h-8 text-aviationGold mx-auto mb-3" />
              <h3 className="font-bold text-gray-900 mb-2">Overland</h3>
              <p className="text-gray-600 text-sm">Road transport from anywhere in East Africa via A109 highway</p>
            </div>
          </div> */}

          {/* Enhanced Map */}
          <div className="bg-white rounded-2xl overflow-hidden shadow-xl border border-gray-100">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m28!1m12!1m3!1d127553.84847797192!2d39.48563326435547!3d-4.297691599999999!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!4m13!3e6!4m5!1s0x182f5a6b7bb8c2e5%3A0x72a0c5f0a3c8f9a8!2sJomo%20Kenyatta%20International%20Airport%2C%20Nairobi%2C%20Kenya!3m2!1d-1.3191469!2d36.9275472!4m5!1s0x184013c2b7e5e0e5%3A0x5e5f5f5f5f5f5f5f!2sDiani%20Beach%2C%20Kenya!3m2!1d-4.2976!2d39.5676!5e0!3m2!1sen!2sus!4v1620000000000!5m2!1sen!2sus"
              width="100%"
              height="500"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Complete Travel Routes to Diani Beach"
            />
          </div>

          <div className="mt-8 text-center">
            <p className="text-gray-600 mb-6 text-lg">
              Need personalized travel assistance or have questions about your journey?
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="mailto:aais@kenya-airways.com?subject=Travel Planning Assistance - AAIS 2025"
                className="inline-flex items-center justify-center px-8 py-4 bg-aviationGold text-white font-semibold rounded-xl hover:bg-aviationGold/90 transition-colors shadow-lg"
              >
                <Mail className="w-5 h-5 mr-2" />
                Get Travel Support
              </a>
              <a
                href="tel:+254716851914"
                className="inline-flex items-center justify-center px-8 py-4 bg-white text-aviationGold font-semibold rounded-xl border-2 border-aviationGold hover:bg-aviationGold/5 transition-colors shadow-lg"
              >
                <Phone className="w-5 h-5 mr-2" />
                Call Our Travel Team
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}