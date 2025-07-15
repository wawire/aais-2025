'use client';

import { useState } from 'react';
import { Calendar, Clock, Users, Mail, Phone, MapPin, CheckCircle, Copy, ArrowRight, Building, Crown, User, Star, Award, Globe } from 'lucide-react';

/**
 * Coming Soon registration page with enhanced sales copy and improved design
 */
export default function RegisterComingSoon(): JSX.Element {
  const [copiedEmail, setCopiedEmail] = useState(false);
  const [copiedPhone, setCopiedPhone] = useState(false);
  const [activeTab, setActiveTab] = useState<'delegates' | 'exhibitors' | 'sponsors'>('delegates');

  const copyToClipboard = async (text: string, type: 'email' | 'phone') => {
    try {
      await navigator.clipboard.writeText(text);
      if (type === 'email') setCopiedEmail(true);
      if (type === 'phone') setCopiedPhone(true);
      setTimeout(() => {
        setCopiedEmail(false);
        setCopiedPhone(false);
      }, 2000);
    } catch (err) {
      console.error('Failed to copy: ', err);
    }
  };

  const tabs = [
    { id: 'delegates', label: 'Delegates', icon: User },
    { id: 'exhibitors', label: 'Exhibitors', icon: Building },
    { id: 'sponsors', label: 'Sponsors', icon: Crown }
  ] as const;

  const highlights = [
    { icon: Users, text: "500+ Industry Leaders" },
    { icon: Globe, text: "Pan-African Network" },
    { icon: Award, text: "Premium Venue" },
    { icon: Star, text: "Exclusive Access" }
  ];

  const renderTabContent = () => {
    switch (activeTab) {
      case 'delegates':
        return (
          <>
            <div className="space-y-4 mb-8">
              <div className="flex items-center justify-between p-3 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors">
                <div>
                  <span className="font-medium text-gray-900">Early Bird</span>
                  <div className="text-xs text-gray-500">Save $50 • Until Oct 1st</div>
                </div>
                <span className="text-aviationGold font-bold">$300</span>
              </div>
              <div className="flex items-center justify-between p-3 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors">
                <div>
                  <span className="font-medium text-gray-900">Student</span>
                  <div className="text-xs text-gray-500">Valid ID required</div>
                </div>
                <span className="text-aviationGold font-bold">$150</span>
              </div>
              <div className="flex items-center justify-between p-3 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors">
                <div>
                  <span className="font-medium text-gray-900">Corporate (5 pax)</span>
                  <div className="text-xs text-gray-500">VIP networking included</div>
                </div>
                <span className="text-aviationGold font-bold">$1,500</span>
              </div>
            </div>
            <div className="text-center">
              <p className="text-sm text-gray-600 mb-4">
                Full conference access, networking events, and materials included
              </p>
            </div>
          </>
        );

      case 'exhibitors':
        return (
          <>
            <div className="space-y-4 mb-8">
              <div className="flex items-center justify-between p-3 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors">
                <div>
                  <span className="font-medium text-gray-900">Basic Booth (3x3m)</span>
                  <div className="text-xs text-gray-500">2 passes + setup</div>
                </div>
                <span className="text-aviationGold font-bold">$1,000</span>
              </div>
              <div className="flex items-center justify-between p-3 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors">
                <div>
                  <span className="font-medium text-gray-900">Modular Booth (3x4m)</span>
                  <div className="text-xs text-gray-500">3 passes + enhanced setup</div>
                </div>
                <span className="text-aviationGold font-bold">$2,000</span>
              </div>
              <div className="flex items-center justify-between p-3 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors">
                <div>
                  <span className="font-medium text-gray-900">Premium Booth (3x6m)</span>
                  <div className="text-xs text-gray-500">4 passes + premium setup</div>
                </div>
                <span className="text-aviationGold font-bold">$3,000</span>
              </div>
            </div>
            <div className="text-center">
              <p className="text-sm text-gray-600 mb-4">
                Includes booth setup, conference passes, and branding opportunities
              </p>
            </div>
          </>
        );

      case 'sponsors':
        return (
          <>
            <div className="space-y-4 mb-8">
              <div className="flex items-center justify-between p-3 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors">
                <div>
                  <span className="font-medium text-gray-900">Bronze</span>
                  <div className="text-xs text-gray-500">2 VIP passes</div>
                </div>
                <span className="text-aviationGold font-bold">$10,000</span>
              </div>
              <div className="flex items-center justify-between p-3 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors">
                <div>
                  <span className="font-medium text-gray-900">Silver</span>
                  <div className="text-xs text-gray-500">4 VIP passes</div>
                </div>
                <span className="text-aviationGold font-bold">$20,000</span>
              </div>
              <div className="flex items-center justify-between p-3 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors">
                <div>
                  <span className="font-medium text-gray-900">Gold</span>
                  <div className="text-xs text-gray-500">6 VIP passes + panel seat</div>
                </div>
                <span className="text-aviationGold font-bold">$30,000</span>
              </div>
              <div className="flex items-center justify-between p-3 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors">
                <div>
                  <span className="font-medium text-gray-900">Platinum</span>
                  <div className="text-xs text-gray-500">10 VIP passes + keynote</div>
                </div>
                <span className="text-aviationGold font-bold">$40,000</span>
              </div>
              <div className="flex items-center justify-between p-3 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors border-2 border-aviationGold/20">
                <div>
                  <span className="font-medium text-gray-900">Diamond</span>
                  <div className="text-xs text-gray-500">12 VIP passes + naming rights</div>
                </div>
                <span className="text-aviationGold font-bold">$60,000</span>
              </div>
            </div>
            <div className="text-center">
              <p className="text-sm text-gray-600 mb-4">
                Premium branding, speaking opportunities, and VIP networking
              </p>
            </div>
          </>
        );
      default:
        return null;
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-white via-gray-50 to-aviationGold/5">
      {/* Enhanced Hero Section */}
      <section className="relative py-24 px-4 overflow-hidden">
        {/* Background Elements */}
        <div className="absolute inset-0 bg-gradient-to-r from-aviationGold/5 to-transparent"></div>
        <div className="absolute top-20 right-10 w-72 h-72 bg-aviationGold/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 left-10 w-96 h-96 bg-blue-500/5 rounded-full blur-3xl"></div>

        <div className="relative max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left Column - Enhanced Sales Content */}
            <div className="text-center lg:text-left">
              <div className="inline-flex items-center px-4 py-2 bg-aviationGold/10 rounded-full text-aviationGold font-semibold mb-8">
                <Clock className="w-4 h-4 mr-2" />
                Registration Opening Soon
              </div>

             <h1 className="text-5xl lg:text-7xl font-bold text-gray-900 mb-6 leading-tight">
  Aviation
  <span className="block text-aviationGold">Summit</span>
  <span className="block text-aviationGold">2025</span>
</h1>

              {/* Enhanced Sales Paragraph */}
              <p className="text-xl text-gray-600 mb-8 max-w-lg mx-auto lg:mx-0 leading-relaxed">
                Africa's leading aviation innovation summit brings 500+ industry leaders, investors, and visionaries to Diani Beach, Kenya. Connect with decision-makers, explore breakthrough technologies, and shape the future of African aviation.
              </p>

              {/* Value Highlights */}
              <div className="grid grid-cols-2 gap-4 mb-8 max-w-lg mx-auto lg:mx-0">
                {highlights.map((item, index) => (
                  <div key={index} className="flex items-center gap-2 text-sm text-gray-600">
                    <item.icon className="w-4 h-4 text-aviationGold" />
                    <span>{item.text}</span>
                  </div>
                ))}
              </div>

              <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start mb-8">
                {/* Fixed: Added missing <a> tags */}
                <a
                  href="mailto:aais@kenya-airways.com?subject=AAIS 2025 Early Registration Interest"
                  className="inline-flex items-center justify-center px-8 py-4 bg-aviationGold text-white font-semibold rounded-xl hover:bg-aviationGold/90 transition-all duration-300 shadow-lg hover:shadow-xl group"
                >
                  Secure Your Spot
                  <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
                </a>

                <a
                  href="tel:+254716851914"
                  className="inline-flex items-center justify-center px-8 py-4 bg-white text-aviationGold font-semibold rounded-xl border-2 border-aviationGold hover:bg-aviationGold/5 transition-all duration-300 shadow-lg hover:shadow-xl"
                >
                  <Phone className="w-5 h-5 mr-2" />
                  Speak to Expert
                </a>
              </div>

              
            </div>

            {/* Right Column - Enhanced Registration Card */}
            <div className="lg:pl-8">
              <div className="bg-white/90 backdrop-blur-sm rounded-xl shadow-xl p-8 border border-gray-100 relative">
               

                <div className="text-center mb-8">
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">Registration Opens</h3>
                  <div className="text-4xl font-bold text-aviationGold mb-2">
                    July 21, 2025
                  </div>
                  <p className="text-gray-600">Early Bird pricing until September 1 <sup>st</sup></p>
                  <div className="mt-4 p-3 bg-green-50 rounded-lg">
                    <p className="text-sm text-green-700 font-medium">
                      ⚡ Save up to $50 with Early Bird pricing
                    </p>
                  </div>
                </div>

                {/* Enhanced Tabs */}
                <div className="flex space-x-1 mb-6 bg-gray-100 p-1 rounded-lg">
                  {tabs.map((tab) => {
                    const Icon = tab.icon;
                    return (
                      <button
                        key={tab.id}
                        onClick={() => setActiveTab(tab.id)}
                        className={`
                          flex-1 flex items-center justify-center gap-2 py-3 px-3 rounded-md text-sm font-medium transition-all duration-200
                          ${activeTab === tab.id
                            ? 'bg-white text-aviationGold shadow-sm scale-105'
                            : 'text-gray-600 hover:text-gray-900 hover:bg-gray-50'
                          }
                        `}
                      >
                        <Icon className="w-4 h-4" />
                        <span className="hidden sm:inline">{tab.label}</span>
                      </button>
                    );
                  })}
                </div>

                {/* Enhanced Tab Content */}
                {renderTabContent()}

                <div className="text-center border-t border-gray-100 pt-6">
                  <p className="text-sm text-gray-600 mb-4">
                    📞 Need custom packages? We're here to help!
                  </p>
                  <div className="flex flex-col gap-3">
                    <div className="flex items-center justify-center gap-2 text-sm text-gray-600">
                      <Mail className="w-4 h-4 text-aviationGold" />
                      <span className="font-medium">aais@kenya-airways.com</span>
                    </div>
                    <div className="flex items-center justify-center gap-2 text-sm text-gray-600">
                      <Phone className="w-4 h-4 text-aviationGold" />
                      <span className="font-medium">+254 716 851 914</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section with Enhanced Design */}
      <section className="py-16 px-4 bg-white">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Don't Miss Out – Reserve Your Place Today
            </h2>
            <p className="text-lg text-gray-600">
              Join Africa's most influential aviation gathering. Limited seats available.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {/* Enhanced Contact Information */}
            <div className="bg-gradient-to-br from-gray-50 to-white rounded-2xl shadow-lg p-8 border border-gray-100">
              <h3 className="text-xl font-bold text-gray-900 mb-6">Get Priority Access</h3>

              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-aviationGold/10 rounded-xl flex items-center justify-center flex-shrink-0">
                    <Mail className="w-6 h-6 text-aviationGold" />
                  </div>
                  <div className="flex-1">
                    <div className="font-semibold text-gray-900 mb-1">Email Our Team</div>
                    <div className="flex items-center gap-2">
                      <a href="mailto:aais@kenya-airways.com" className="text-aviationGold hover:underline font-medium">
                        aais@kenya-airways.com
                      </a>
                      <button
                        onClick={() => copyToClipboard('aais@kenya-airways.com', 'email')}
                        className="p-1 hover:bg-gray-200 rounded transition-colors"
                        title="Copy email"
                      >
                        {copiedEmail ? (
                          <CheckCircle className="w-4 h-4 text-green-500" />
                        ) : (
                          <Copy className="w-4 h-4 text-gray-400" />
                        )}
                      </button>
                    </div>
                    <p className="text-xs text-gray-500 mt-1">Response within 2 hours</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-aviationGold/10 rounded-xl flex items-center justify-center flex-shrink-0">
                    <Phone className="w-6 h-6 text-aviationGold" />
                  </div>
                  <div className="flex-1">
                    <div className="font-semibold text-gray-900 mb-1">Call Direct</div>
                    <div className="flex items-center gap-2">
                      <a href="tel:+254716851914" className="text-aviationGold hover:underline font-medium">
                        +254 716 851 914
                      </a>
                      <button
                        onClick={() => copyToClipboard('+254716851914', 'phone')}
                        className="p-1 hover:bg-gray-200 rounded transition-colors"
                        title="Copy phone"
                      >
                        {copiedPhone ? (
                          <CheckCircle className="w-4 h-4 text-green-500" />
                        ) : (
                          <Copy className="w-4 h-4 text-gray-400" />
                        )}
                      </button>
                    </div>
                    <p className="text-xs text-gray-500 mt-1">Monday - Friday: 8AM - 6PM EAT</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Enhanced Event Information */}
           <div className="bg-gradient-to-br from-aviationGold/5 to-blue-50 rounded-2xl p-8">
              <h3 className="text-xl font-bold text-gray-900 mb-6">Event Information</h3>
              
              <div className="space-y-4">
                <div className="flex justify-between items-center py-2 border-b border-gray-200">
                  <span className="font-medium text-gray-700">Dates</span>
                  <span className="text-gray-900">November 6-7, 2025</span>
                </div>
                <div className="flex justify-between items-center py-2 border-b border-gray-200">
                  <span className="font-medium text-gray-700">Venue</span>
                  <span className="text-gray-900 text-right">Diani Reef Beach Resort & Spa</span>
                </div>
                <div className="flex justify-between items-center py-2 border-b border-gray-200">
                  <span className="font-medium text-gray-700">Location</span>
                  <span className="text-gray-900">Diani, Kenya</span>
                </div>
                <div className="flex justify-between items-center py-2 border-b border-gray-200">
                  <span className="font-medium text-gray-700">Organizer</span>
                  <span className="text-gray-900">Kenya Airways PLC</span>
                </div>
                <div className="flex justify-between items-center py-2">
                  <span className="font-medium text-gray-700">Payment</span>
                  <span className="text-gray-900">M-Pesa, Bank</span>
                </div>
              </div></div>
          </div>
        </div>
      </section>
    </div>
  );
}