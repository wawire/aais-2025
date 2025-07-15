'use client';

import { useState } from 'react';
import { Mail, Phone, CheckCircle, Copy, Building, Users, Clock } from 'lucide-react'; // Re-added Clock

/**
 * Simple Help Center page for AAIS 2025
 * Clean layout matching registration page style
 */
export default function ContactHelpCenter(): JSX.Element {
  const [copiedEmail, setCopiedEmail] = useState(false);
  const [copiedPhone, setCopiedPhone] = useState(false);

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

  return (
    <div className=" bg-gradient-to-br from-white via-gray-50 to-aviationGold/5">
      {/* Reduced py-24 to py-16 for less vertical space */}
      <section className="relative py-16 px-4 overflow-hidden">
        {/* Background Elements */}
        <div className="absolute inset-0 bg-gradient-to-r from-aviationGold/5 to-transparent"></div>
        <div className="absolute top-10 right-5 w-64 h-64 bg-aviationGold/10 rounded-full blur-3xl"></div> {/* Slightly reduced size and moved up/right */}
        <div className="absolute bottom-10 left-5 w-80 h-80 bg-blue-500/5 rounded-full blur-3xl"></div> {/* Slightly reduced size and moved down/left */}

        <div className="relative max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-8 items-start"> {/* Reduced gap from gap-12 to gap-8 */}
            {/* Left Column - Main Content */}
            <div className="text-center lg:text-left">
              <h1 className="text-4xl lg:text-6xl font-bold text-gray-900 mb-4 leading-tight"> 
                Help &
                <span className="block text-aviationGold">Support</span>
              </h1>

              <p className="text-lg text-gray-600 mb-6 max-w-lg mx-auto lg:mx-0"> 
                Get in touch with our team for any questions about AAIS 2025.
                We're here to help with registration, packages, and event information.
              </p>

              {/* Direct Contact Methods - Explicitly listed */}
              <div className="space-y-6 max-w-lg mx-auto lg:mx-0"> 
                {/* General Inquiries */}
                <div className="text-center lg:text-left">
  <h3 className="text-lg font-bold text-gray-900 mb-1">General Inquiries</h3>
  <p className="text-gray-600 text-sm mb-3">
    For registration, pricing, or general questions, email us at{' '}
    <a href="mailto:aais@kenya-airways.com" className="text-aviationGold hover:underline font-medium">
      aais@kenya-airways.com
    </a>.
  </p>
</div>
              </div>
            </div>

            {/* Right Column - Contact Card */}
            <div className="lg:pl-8">
              {/* Reduced p-8 to p-6 inside the contact card */}
              <div className="bg-white/80 backdrop-blur-sm rounded-xl shadow-xl p-6 border border-gray-100">
                <div className="text-center mb-6"> {/* Reduced mb-8 to mb-6 */}
                  <h3 className="text-xl font-bold text-gray-900 mb-3">Quick Contact</h3> {/* Reduced text size and margin */}
                  <p className="text-gray-600 text-sm">Get in touch with us directly</p> {/* Reduced text size */}
                </div>

                <div className="space-y-4"> {/* Reduced space-y from 6 to 4 */}
                  {/* Email Contact */}
                  <div className="text-center">
                    <div className="w-12 h-12 bg-aviationGold/10 rounded-full flex items-center justify-center mx-auto mb-3"> {/* Reduced size and margin */}
                      <Mail className="w-6 h-6 text-aviationGold" /> {/* Reduced icon size */}
                    </div>
                    <div className="font-semibold text-gray-900 text-base mb-1">Email Support</div> {/* Reduced text size */}
                    <div className="flex items-center justify-center gap-1 mb-2"> {/* Reduced gap and margin */}
                      <a href="mailto:aais@kenya-airways.com" className="text-aviationGold hover:underline text-sm font-medium"> {/* Reduced text size */}
                        aais@kenya-airways.com
                      </a>
                      <button
                        onClick={() => copyToClipboard('aais@kenya-airways.com', 'email')}
                        className="p-0.5 hover:bg-gray-200 rounded transition-colors" // Reduced padding
                        title="Copy email"
                      >
                        {copiedEmail ? (
                          <CheckCircle className="w-3.5 h-3.5 text-green-500" /> // Reduced icon size
                        ) : (
                          <Copy className="w-3.5 h-3.5 text-gray-400" /> // Reduced icon size
                        )}
                      </button>
                    </div>
                  </div>

                  <div className="border-t border-gray-200 pt-4"> {/* Reduced pt-6 to pt-4 */}
                    {/* Phone Contact */}
                    <div className="text-center">
                      <div className="w-12 h-12 bg-aviationGold/10 rounded-full flex items-center justify-center mx-auto mb-3">
                        <Phone className="w-6 h-6 text-aviationGold" />
                      </div>
                      <div className="font-semibold text-gray-900 text-base mb-1">Phone Support</div>
                      <div className="flex items-center justify-center gap-1 mb-2">
                        <a href="tel:+254716851914" className="text-aviationGold hover:underline text-sm font-medium">
                          +254 716 851 914
                        </a>
                        <button
                          onClick={() => copyToClipboard('+254716851914', 'phone')}
                          className="p-0.5 hover:bg-gray-200 rounded transition-colors"
                          title="Copy phone"
                        >
                          {copiedPhone ? (
                            <CheckCircle className="w-3.5 h-3.5 text-green-500" />
                          ) : (
                            <Copy className="w-3.5 h-3.5 text-gray-400" />
                          )}
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="text-center mt-4 pt-4 border-t border-gray-200"> {/* Reduced mt-6 pt-6 to mt-4 pt-4 */}
                  <p className="text-xs text-gray-600 flex items-center justify-center gap-1"> {/* Reduced text size and added flex for icon */}
                    <Clock className="w-3.5 h-3.5 text-aviationGold" /> {/* Added Clock icon */}
                    <strong>Support Hours:</strong> Monday - Friday, 8AM - 6PM EAT
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}