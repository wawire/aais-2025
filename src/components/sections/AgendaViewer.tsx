'use client';

import { useEffect, useRef, useState } from 'react';

/**
 * Speaker interface for agenda participants
 */
interface Speaker {
  name: string;
  title: string;
  company: string;
}

/**
 * Session interface for agenda items
 */
interface Session {
  id: string;
  title: string;
  startTime: string;
  endTime: string;
  location: string;
  speakers: Speaker[];
  day: 1 | 2 | 3; // 1: Nov 5, 2: Nov 6, 3: Nov 7
}

/**
 * Sponsor interface for sponsor information
 */
interface Sponsor {
  name: string;
  tier: 'Platinum' | 'Gold' | 'Silver' | 'Bronze';
  logo: string; // URL to logo image - now required
}

/**
 * Agenda data for AAIS 2025
 */
const SUMMIT_SESSIONS: Session[] = [
  // Wednesday, November 5, 2025
  {
    id: 'setup-registrations',
    title: 'Set Up & Registrations',
    startTime: '08:00',
    endTime: '20:00',
    location: 'Diani Reef Beach Resort, Diani, Kenya',
    speakers: [],
    day: 1,
  },

  // Thursday, November 6, 2025
  {
    id: 'ceo-breakfast-welcome',
    title: "CEO's Breakfast (Invites Only) - Brief Welcome",
    startTime: '08:00',
    endTime: '08:10',
    location: 'Diani Reef Beach Resort, Diani, Kenya',
    speakers: [],
    day: 2,
  },
  {
    id: 'fireside-chat',
    title: 'Fireside Chat: Vision 2035 – Executive Insights',
    startTime: '08:10',
    endTime: '08:25',
    location: 'Diani Reef Beach Resort, Diani, Kenya',
    speakers: [],
    day: 2,
  },
  {
    id: 'roundtable-discussion',
    title: 'Roundtable Discussion: Unlocking C-Suite Collaboration',
    startTime: '08:25',
    endTime: '08:45',
    location: 'Diani Reef Beach Resort, Diani, Kenya',
    speakers: [],
    day: 2,
  },
  {
    id: 'open-floor',
    title: 'Open Floor: Reflections & Key Takeaways',
    startTime: '08:45',
    endTime: '08:55',
    location: 'Diani Reef Beach Resort, Diani, Kenya',
    speakers: [],
    day: 2,
  },
  {
    id: 'closing-remarks',
    title: 'Closing Remarks & Transition to Main Event',
    startTime: '08:55',
    endTime: '09:00',
    location: 'Diani Reef Beach Resort, Diani, Kenya',
    speakers: [],
    day: 2,
  },
  {
    id: 'arrival-networking',
    title: 'Arrival, Registration & Networking',
    startTime: '08:00',
    endTime: '09:00',
    location: 'Diani Reef Beach Resort, Diani, Kenya',
    speakers: [],
    day: 2,
  },
  {
    id: 'opening-ceremony',
    title: 'Opening Ceremony',
    startTime: '09:00',
    endTime: '10:00',
    location: 'Diani Reef Beach Resort, Diani, Kenya',
    speakers: [
      { name: 'Hellen Mwariri', title: 'CISO', company: 'Kenya Airways' },
      { name: 'Allan Kilavuka', title: 'CEO', company: 'Kenya Airways' },
      { name: 'Abderahmane Berthe', title: 'Secretary General', company: 'AFRAA' },
      { name: 'Cabinet Secretary', title: '', company: 'Ministry of Roads and Transport, Kenya' },
    ],
    day: 2,
  },
  {
    id: 'keynote-future',
    title: 'Keynote Speech – The Future of African Aviation',
    startTime: '10:00',
    endTime: '11:00',
    location: 'Diani Reef Beach Resort, Diani, Kenya',
    speakers: [],
    day: 2,
  },
  {
    id: 'tea-networking-break',
    title: 'Tea & Networking Break',
    startTime: '11:00',
    endTime: '11:30',
    location: 'Diani Reef Beach Resort, Diani, Kenya',
    speakers: [],
    day: 2,
  },
  {
    id: 'panel-infrastructure',
    title: 'Panel Discussion – Investing in Aviation Infrastructure',
    startTime: '11:30',
    endTime: '12:30',
    location: 'Diani Reef Beach Resort, Diani, Kenya',
    speakers: [],
    day: 2,
  },
  {
    id: 'sponsor-platinum',
    title: 'Sponsor Highlight (Platinum) - Sponsor Spotlight',
    startTime: '12:30',
    endTime: '13:00',
    location: 'Diani Reef Beach Resort, Diani, Kenya',
    speakers: [],
    day: 2,
  },
  {
    id: 'lunch',
    title: 'Lunch',
    startTime: '13:00',
    endTime: '14:00',
    location: 'Diani Reef Beach Resort, Diani, Kenya',
    speakers: [],
    day: 2,
  },
  {
    id: 'panel-digital',
    title: 'Panel Discussion – Sky-Tech Africa: Digital Transformation',
    startTime: '14:00',
    endTime: '15:00',
    location: 'Diani Reef Beach Resort, Diani, Kenya',
    speakers: [],
    day: 2,
  },
  {
    id: 'sponsor-gold',
    title: 'Sponsor Highlight (Gold) - Sponsor Spotlight',
    startTime: '15:00',
    endTime: '15:30',
    location: 'Diani Reef Beach Resort, Diani, Kenya',
    speakers: [],
    day: 2,
  },
  {
    id: 'fireside-human-capital',
    title: 'Fireside Chat – Investing in Human Capital',
    startTime: '15:30',
    endTime: '16:30',
    location: 'Diani Reef Beach Resort, Diani, Kenya',
    speakers: [],
    day: 2,
  },
  {
    id: 'tea-networking-break-2',
    title: 'Tea & Networking Break',
    startTime: '16:30',
    endTime: '17:00',
    location: 'Diani Reef Beach Resort, Diani, Kenya',
    speakers: [],
    day: 2,
  },
  {
    id: 'gala-dinner',
    title: 'Gala Dinner',
    startTime: '18:00',
    endTime: '22:00',
    location: 'Diani Reef Beach Resort, Diani, Kenya',
    speakers: [],
    day: 2,
  },

  // Friday, November 7, 2025
  {
    id: 'arrival-breakfast-networking',
    title: 'Arrival, Morning Breakfast & Networking',
    startTime: '08:00',
    endTime: '09:00',
    location: 'Diani Reef Beach Resort, Diani, Kenya',
    speakers: [],
    day: 3,
  },
  {
    id: 'opening-remarks-recap',
    title: 'Opening Remarks by the Master of Ceremony & Recap of Day 1',
    startTime: '09:00',
    endTime: '09:20',
    location: 'Diani Reef Beach Resort, Diani, Kenya',
    speakers: [],
    day: 3,
  },
  {
    id: 'sponsor-silver',
    title: 'Sponsor Highlight (Silver) - Sponsor Spotlight',
    startTime: '09:20',
    endTime: '09:30',
    location: 'Diani Reef Beach Resort, Diani, Kenya',
    speakers: [],
    day: 3,
  },
  {
    id: 'talk-beyond-runway',
    title: "Talk – Beyond the Runway: Unlocking Africa's Aviation Potential",
    startTime: '09:30',
    endTime: '10:30',
    location: 'Diani Reef Beach Resort, Diani, Kenya',
    speakers: [],
    day: 3,
  },
  {
    id: 'tea-break',
    title: 'Tea Break',
    startTime: '10:30',
    endTime: '11:00',
    location: 'Diani Reef Beach Resort, Diani, Kenya',
    speakers: [],
    day: 3,
  },
  {
    id: 'panel-hubs',
    title: 'Panel Discussion – Building Aviation Hubs',
    startTime: '11:00',
    endTime: '12:00',
    location: 'Diani Reef Beach Resort, Diani, Kenya',
    speakers: [],
    day: 3,
  },
  {
    id: 'fireside-industries',
    title: 'Fireside Chat – Behind the Scenes: The Industries Powering Aviation',
    startTime: '12:00',
    endTime: '13:00',
    location: 'Diani Reef Beach Resort, Diani, Kenya',
    speakers: [],
    day: 3,
  },
  {
    id: 'lunch-2',
    title: 'Lunch',
    startTime: '13:00',
    endTime: '14:00',
    location: 'Diani Reef Beach Resort, Diani, Kenya',
    speakers: [],
    day: 3,
  },
  {
    id: 'master-classes',
    title: 'Master Classes - Financing African Aviation Growth',
    startTime: '14:00',
    endTime: '15:00',
    location: 'Diani Reef Beach Resort, Diani, Kenya',
    speakers: [],
    day: 3,
  },
  {
    id: 'award-ceremony',
    title: 'Award Ceremony - Recognitions and Giveaways',
    startTime: '15:00',
    endTime: '15:30',
    location: 'Diani Reef Beach Resort, Diani, Kenya',
    speakers: [],
    day: 3,
  },
  {
    id: 'closing-ceremony',
    title: 'Closing Ceremony - Summit Summary & Closing Remarks',
    startTime: '15:30',
    endTime: '16:00',
    location: 'Diani Reef Beach Resort, Diani, Kenya',
    speakers: [],
    day: 3,
  },
  {
    id: 'tea-networking-break-3',
    title: 'Tea and Networking Break',
    startTime: '16:00',
    endTime: '17:00',
    location: 'Diani Reef Beach Resort, Diani, Kenya',
    speakers: [],
    day: 3,
  },
];

/**
 * Updated sponsor data with logo URLs
 * Replace these placeholder URLs with actual sponsor logo URLs
 */
const SUMMIT_SPONSORS: Sponsor[] = [
  {
    name: 'Kenya Airways',
    tier: 'Platinum',
    logo: '/logos/kenya-airways-logo.png' // Replace with actual logo URL
  },
  {
    name: 'AFRAA',
    tier: 'Platinum',
    logo: '/logos/afraa-logo.png' // Replace with actual logo URL
  },
  {
    name: 'Boeing',
    tier: 'Gold',
    logo: '/logos/boeing-logo.png' // Replace with actual logo URL
  },
  {
    name: 'Airbus',
    tier: 'Gold',
    logo: '/logos/airbus-logo.png' // Replace with actual logo URL
  },
  {
    name: 'IATA',
    tier: 'Gold',
    logo: '/logos/iata-logo.png' // Replace with actual logo URL
  },
  {
    name: 'Ethiopian Airlines',
    tier: 'Silver',
    logo: '/logos/ethiopian-logo.png' // Replace with actual logo URL
  },
  {
    name: 'South African Airways',
    tier: 'Silver',
    logo: '/logos/saa-logo.png' // Replace with actual logo URL
  },
  {
    name: 'EgyptAir',
    tier: 'Silver',
    logo: '/logos/egyptair-logo.png' // Replace with actual logo URL
  },
  {
    name: 'Royal Air Maroc',
    tier: 'Silver',
    logo: '/logos/ram-logo.png' // Replace with actual logo URL
  },
  {
    name: 'Air Senegal',
    tier: 'Bronze',
    logo: '/logos/air-senegal-logo.png' // Replace with actual logo URL
  },
  {
    name: 'Rwandair',
    tier: 'Bronze',
    logo: '/logos/rwandair-logo.png' // Replace with actual logo URL
  },
  {
    name: 'Fastjet',
    tier: 'Bronze',
    logo: '/logos/fastjet-logo.png' // Replace with actual logo URL
  },
];

/**
 * AAIS 2025 Agenda Booklet Component
 * @description Professional booklet-style agenda viewer with welcome page, sponsor section, and responsive design
 */
const AAISAgendaBooklet = () => {
  const [openSpread, setOpenSpread] = useState(0);
  const [totalSpreads, setTotalSpreads] = useState(0);
  const [isMobile, setIsMobile] = useState(false);
  const bookletRef = useRef<HTMLDivElement>(null);

  // Day labels mapping
  const dayLabels = {
    1: 'Wednesday, November 5, 2025',
    2: 'Thursday, November 6, 2025',
    3: 'Friday, November 7, 2025',
  };

  // Handle responsive layout detection
  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };

    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  // Calculate total spreads - now includes 4 pages total
  useEffect(() => {
    // 4 pages total: Welcome (1), Thursday (2), Friday (3), Sponsors (4)
    const totalPages = 4;
    const pagesPerSpread = isMobile ? 1 : 2;
    setTotalSpreads(Math.ceil(totalPages / pagesPerSpread));
  }, [isMobile]);

  const goToNextSpread = () => {
    if (openSpread < totalSpreads - 1) {
      setOpenSpread((prev) => prev + 1);
    }
  };

  const goToPrevSpread = () => {
    if (openSpread > 0) {
      setOpenSpread((prev) => prev - 1);
    }
  };

  // Get sessions for a specific day
  const getSessionsForDay = (day: 1 | 2 | 3) => {
    return SUMMIT_SESSIONS.filter(session => session.day === day);
  };

  // Check if session is a special type (breaks, networking, etc.)
  const isSpecialSession = (session: Session) => {
    return (
      session.title.toLowerCase().includes('networking') ||
      session.title.toLowerCase().includes('break') ||
      session.title.toLowerCase().includes('lunch') ||
      session.title.toLowerCase().includes('dinner') ||
      session.title.toLowerCase().includes('breakfast') ||
      session.title.toLowerCase().includes('set up') ||
      session.title.toLowerCase().includes('registration')
    );
  };

  // Render dedicated sponsors page
  const renderSponsorsPage = () => {
    return (
      <div className="h-full flex flex-col overflow-hidden">
        <div className="flex-grow overflow-auto pr-2 pl-2 custom-scrollbar safe-scroll-area">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 p-4">
            {SUMMIT_SPONSORS.map((sponsor, index) => (
              <div
                key={index}
                className="flex items-center justify-center p-2 bg-white border border-gray-200 rounded-lg hover:cursor-pointer transition-transform duration-300 hover:scale-110"
              >
                <img
                  src={sponsor.logo}
                  alt={`${sponsor.name} logo`}
                  className="w-auto h-12 md:h-16 object-contain"
                  onError={(e) => {
                    const target = e.target as HTMLImageElement;
                    target.style.display = 'none';
                    const parent = target.parentElement;
                    if (parent) {
                      parent.innerHTML = `<div class="text-center text-sm md:text-base font-medium text-gray-800">${sponsor.name}</div>`;
                    }
                  }}
                />
              </div>
            ))}
          </div>
          <div className="mt-8 p-4 bg-gradient-to-r from-yellow-50 to-yellow-100 border-2 border-yellow-300 rounded-xl">
            <p className="text-sm md:text-base text-center text-gray-700 leading-relaxed">
              We extend our heartfelt gratitude to all our sponsors and partners who make AAIS 2025 possible.
              Your commitment to advancing African aviation drives innovation, creates opportunities, and builds
              the foundation for our industry's sustainable future.
            </p>
            <div className="text-center mt-4">
              <p className="text-sm md:text-base font-semibold text-yellow-600">
                Together, we're shaping the future of African aviation.
              </p>
            </div>
          </div>
          <div className="mt-6 p-4 bg-gray-50 border border-gray-200 rounded-lg">
            <div className="text-center space-y-1">
              <p className="text-sm md:text-base text-gray-600">
                Join our growing community of industry leaders
              </p>
              <p className="text-sm md:text-base text-gray-700">
                <span className="font-medium">Contact:</span> aais@kenya-airways.com
              </p>
            </div>
          </div>
          <div className="bottom-spacer"></div>
        </div>
      </div>
    );
  };

  // Render welcome page for Wednesday
  const renderWelcomePage = () => {
    return (
      <div className="h-full flex flex-col overflow-hidden">
        <div className="text-center mb-4">
          <div className="mb-3">
            <h1 className="text-2xl md:text-3xl font-bold text-yellow-600 mb-1">
              Welcome to AAIS 2025
            </h1>
            <div className="text-lg md:text-xl font-semibold text-gray-800 mb-1">
              4th Edition
            </div>
            <p className="text-sm md:text-base text-gray-600 italic">
              Africa Aviation Innovation Summit
            </p>
          </div>
        </div>
        <div className="flex-grow overflow-auto pr-2 pl-2 custom-scrollbar safe-scroll-area">
          {/* <div className="mb-4 p-3 bg-yellow-50 border-l-4 border-yellow-600 rounded-r-lg">
            <h3 className="text-sm md:text-base font-bold text-yellow-700 mb-2">Summit Theme</h3>
            <p className="text-xs md:text-sm text-gray-800 leading-relaxed">
              "Investing in Africa's Aviation Future: Unlocking Opportunities for Growth and Transformation through Innovation"
            </p>
          </div> */}
          <div className="mb-4">
            <h3 className="text-sm md:text-base font-bold text-yellow-600 mb-2 border-b border-yellow-200 pb-1">
              Event Information
            </h3>
            <div className="grid grid-cols-1 gap-2 text-xs md:text-sm">
              <div className="flex">
                <span className="font-medium text-gray-700 w-20 flex-shrink-0">Dates:</span>
                <span className="text-gray-600">November 6-7, 2025</span>
              </div>
              <div className="flex">
                <span className="font-medium text-gray-700 w-20 flex-shrink-0">Setup:</span>
                <span className="text-gray-600">November 5, 2025</span>
              </div>
              <div className="flex">
                <span className="font-medium text-gray-700 w-20 flex-shrink-0">Venue:</span>
                <span className="text-gray-600">Diani Reef Beach Resort, Diani, Kenya</span>
              </div>
              <div className="flex">
                <span className="font-medium text-gray-700 w-20 flex-shrink-0">Organizer:</span>
                <span className="text-gray-600">Kenya Airways PLC</span>
              </div>
              <div className="flex">
                <span className="font-medium text-gray-700 w-20 flex-shrink-0">Contact:</span>
                <span className="text-gray-600">aais@kenya-airways.com</span>
              </div>
            </div>
          </div>
          <div className="mb-4">
            <h3 className="text-sm md:text-base font-bold text-yellow-600 mb-2 border-b border-yellow-200 pb-1">
              Summit Objectives
            </h3>
            <div className="space-y-1 text-xs md:text-sm text-gray-700">
              <p>• Drive investment opportunities in aviation infrastructure and innovation</p>
              <p>• Highlight innovation's role in enhancing efficiency and operational excellence</p>
              <p>• Showcase funding models and business strategies for industry resilience</p>
              <p>• Foster regulatory dialogue for an enabling investment environment</p>
            </div>
          </div>
          <div className="mb-4">
            <h3 className="text-sm md:text-base font-bold text-yellow-600 mb-2 border-b border-yellow-200 pb-1">
              Why Diani?
            </h3>
            <p className="text-xs md:text-sm text-gray-700 leading-relaxed mb-2">
              Diani, the jewel of Kenya's South Coast, provides an ideal setting for networking against the backdrop of pristine beaches, luxury resorts, and rich cultural experiences.
            </p>
            <div className="text-xs md:text-sm text-gray-600 space-y-1">
              <p>• Strategic coastal destination accessible via Ukunda Airstrip</p>
              <p>• Key tourism and economic hub on Kenya's South Coast</p>
              <p>• Excellence in tourism and hospitality</p>
              <p>• Supportive business environment for aviation and investment</p>
            </div>
          </div>
          <div className="mb-4">
            <h3 className="text-sm md:text-base font-bold text-yellow-600 mb-2 border-b border-yellow-200 pb-1">
              Target Audience
            </h3>
            <div className="grid grid-cols-2 gap-1 text-xs md:text-sm text-gray-600">
              <div>• Airline executives</div>
              <div>• Airport operators</div>
              <div>• Government representatives</div>
              <div>• Investors & financiers</div>
              <div>• Tourism leaders</div>
              <div>• Technology providers</div>
              <div>• Trade professionals</div>
              <div>• Sustainability experts</div>
            </div>
          </div>
          <div className="mb-4">
            <h3 className="text-sm md:text-base font-bold text-yellow-600 mb-2 border-b border-yellow-200 pb-1">
              {dayLabels[1]} - Setup Day
            </h3>
            <div className="bg-gray-50 p-3 rounded-lg">
              <div className="flex items-center justify-between mb-2">
                <span className="text-xs md:text-sm font-medium bg-yellow-100 px-2 py-1 rounded text-yellow-800">
                  08:00 - 20:00
                </span>
              </div>
              <h4 className="text-sm md:text-base font-semibold text-gray-900 mb-1">
                Set Up & Registrations
              </h4>
              <p className="text-xs md:text-sm text-gray-600 mb-2">
                <span className="font-medium">Location:</span> Diani Reef Beach Resort, Diani, Kenya
              </p>
              <p className="text-xs md:text-sm text-gray-600">
                Venue preparation, equipment setup, and early delegate registration.
                This day ensures everything is ready for the main summit activities.
              </p>
            </div>
          </div>
          <div className="bottom-spacer"></div>
        </div>
      </div>
    );
  };

  // Render a single day's agenda
  const renderDayAgenda = (day: 1 | 2 | 3) => {
    // For day 1, show welcome page instead
    if (day === 1) {
      return renderWelcomePage();
    }

    const sessions = getSessionsForDay(day);

    if (sessions.length === 0) return null;

    return (
      <div className="h-full flex flex-col overflow-hidden">
        <div className="border-b-2 border-yellow-600 pb-2 mb-3">
          <h2 className="text-xl font-bold text-yellow-600">{dayLabels[day]}</h2>
          <p className="text-sm text-gray-600">Diani Reef Beach Resort, Diani, Kenya</p>
        </div>
        <div className="flex-grow overflow-auto pr-2 pl-2 custom-scrollbar safe-scroll-area">
          {sessions.map((session, sessionIdx) => {
            const isSpecial = isSpecialSession(session);

            return (
              <div
                key={session.id}
                className={`mb-3 ${isSpecial ? 'special-session' : ''}`}
              >
                <div className="mb-2 pb-2 border-b border-gray-300">
                  <div className="flex flex-wrap items-start justify-between">
                    <span className="text-xs md:text-sm font-medium bg-yellow-100 px-2 py-0.5 rounded mr-1.5 mb-1 text-yellow-800">
                      {session.startTime} - {session.endTime}
                    </span>
                  </div>
                  <h3 className="text-sm md:text-base font-semibold text-gray-900 mt-1 leading-relaxed">
                    {session.title}
                  </h3>
                  <p className="text-xs md:text-sm text-gray-600 mt-1">
                    <span className="font-medium">Location:</span> {session.location}
                  </p>
                </div>
                {session.speakers && session.speakers.length > 0 && (
                  <div className="text-xs md:text-sm mt-2 mb-2">
                    <span className="font-medium text-yellow-600">
                      {session.title.toLowerCase().includes('keynote') ||
                       session.title.toLowerCase().includes('opening ceremony')
                        ? 'Speakers:'
                        : 'Panelists:'}
                    </span>
                    <ul className="pl-2 md:pl-3 mt-1">
                      {session.speakers.map((speaker, speakerIdx) => (
                        <li
                          key={speakerIdx}
                          className="text-gray-700 leading-normal mb-1"
                        >
                          <span className="font-medium text-gray-900">
                            {speaker.name}
                          </span>
                          {speaker.title && (
                            <span className="text-gray-600">
                              , {speaker.title}
                              {speaker.company ? `, ${speaker.company}` : ''}
                            </span>
                          )}
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
                {isSpecial && <div className="invisible-spacer"></div>}
              </div>
            );
          })}
          <div className="bottom-spacer"></div>
        </div>
      </div>
    );
  };

  // Render booklet content based on screen size
  const renderBookletContent = () => {
    if (isMobile) {
      // Mobile: One page per spread
      // Page 1: Welcome, Page 2: Thursday, Page 3: Friday, Page 4: Sponsors
      let currentPage;
      if (openSpread === 0) {
        currentPage = renderWelcomePage();
      } else if (openSpread === 1) {
        currentPage = renderDayAgenda(2); // Thursday
      } else if (openSpread === 2) {
        currentPage = renderDayAgenda(3); // Friday
      } else if (openSpread === 3) {
        currentPage = renderSponsorsPage();
      }

      return (
        <div className="bg-gradient-to-b from-white to-yellow-50 rounded-lg border border-gray-200 p-3 md:p-6 h-full flex flex-col w-full page-container">
          {currentPage}
        </div>
      );
    } else {
      // Desktop: Two pages per spread
      let leftPage, rightPage;

      if (openSpread === 0) {
        // Spread 1: Welcome + Thursday
        leftPage = renderWelcomePage();
        rightPage = renderDayAgenda(2); // Thursday
      } else if (openSpread === 1) {
        // Spread 2: Friday + Sponsors
        leftPage = renderDayAgenda(3); // Friday
        rightPage = renderSponsorsPage();
      }

      return (
        <>
          <div className="bg-gradient-to-b from-white to-yellow-50 rounded-l-lg border-r border-gray-200 p-4 md:p-6 h-full flex flex-col w-1/2 page-container">
            {leftPage}
          </div>
          <div className="bg-gradient-to-b from-white to-yellow-50 rounded-r-lg border-l border-gray-200 p-4 md:p-6 h-full flex flex-col w-1/2 page-container">
            {rightPage}
          </div>
        </>
      );
    }
  };

  return (
    <div
      ref={bookletRef}
      id="printable-booklet"
      className="mx-auto my-4 md:my-8 flex justify-center px-2 md:px-4"
    >
      <div className="flex flex-col w-full max-w-7xl">
        <div
          className="flex bg-gray-100 rounded-lg shadow-xl overflow-hidden w-full"
          style={{
            height: isMobile ? '650px' : '900px',
            maxHeight: isMobile ? '90vh' : '95vh',
          }}
        >
          {renderBookletContent()}
        </div>
        {totalSpreads > 1 && (
          <div className="mt-4 flex justify-center space-x-4">
            <button
              onClick={goToPrevSpread}
              disabled={openSpread === 0}
              className="px-2 py-1 md:px-4 md:py-2 bg-yellow-600 text-white rounded text-sm md:text-base disabled:opacity-50 hover:bg-yellow-700 transition-colors"
            >
              Previous
            </button>
            <span className="px-2 py-1 md:px-4 md:py-2 text-sm md:text-base text-gray-700">
              {openSpread + 1} of {totalSpreads}
            </span>
            <button
              onClick={goToNextSpread}
              disabled={openSpread === totalSpreads - 1}
              className="px-2 py-1 md:px-4 md:py-2 bg-yellow-600 text-white rounded text-sm md:text-base disabled:opacity-50 hover:bg-yellow-700 transition-colors"
            >
              Next
            </button>
          </div>
        )}
        <style jsx global>{`
          .custom-scrollbar::-webkit-scrollbar {
            width: 3px;
          }
          .custom-scrollbar::-webkit-scrollbar-track {
            background: #f1f1f1;
            border-radius: 10px;
          }
          .custom-scrollbar::-webkit-scrollbar-thumb {
            background: #d4a574;
            border-radius: 10px;
          }
          .custom-scrollbar::-webkit-scrollbar-thumb:hover {
            background: #b8935c;
          }
          .page-container {
            position: relative;
            background-position: center bottom;
            padding-bottom: 60px;
          }
          .safe-scroll-area {
            padding-bottom: 60px;
            mask-image: linear-gradient(to bottom, black 92%, transparent 100%);
            -webkit-mask-image: linear-gradient(to bottom, black 92%, transparent 100%);
          }
          .special-session {
            margin-bottom: 25px;
          }
          .invisible-spacer {
            height: 40px;
            width: 100%;
          }
          .bottom-spacer {
            height: 80px;
            width: 100%;
          }
          @media (max-width: 768px) {
            .special-session {
              margin-bottom: 30px;
            }
            .invisible-spacer {
              height: 50px;
            }
            .bottom-spacer {
              height: 100px;
            }
            .safe-scroll-area {
              padding-bottom: 80px;
              mask-image: linear-gradient(to bottom, black 88%, transparent 100%);
              -webkit-mask-image: linear-gradient(to bottom, black 88%, transparent 100%);
            }
            .page-container {
              padding-bottom: 80px;
            }
          }
        `}</style>
      </div>
    </div>
  );
};

export default AAISAgendaBooklet;
