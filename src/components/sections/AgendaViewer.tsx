'use client';

import { useCallback, useEffect, useRef, useState } from 'react';

/**
 * Minimal interfaces for agenda
 */
interface Speaker {
  name: string;
  title: string;
  company: string;
}

interface Session {
  id: string;
  title: string;
  description?: string;
  day: 1 | 2 | 3;
  type:
    | 'keynote'
    | 'panel'
    | 'workshop'
    | 'networking'
    | 'ceremony'
    | 'spotlight'
    | 'talk'
    | 'fireside';
}

interface DayInfo {
  title: string;
  subtitle: string;
}

/**
 * Session data
 */
const SUMMIT_SESSIONS: Session[] = [
  // Wednesday, November 5, 2025
  {
    id: 'setup-registrations',
    title: 'Set Up & Registrations',
    description: 'Venue preparation, equipment setup, and early delegate registration.',
    day: 1,
    type: 'networking',
  },

  // Thursday, November 6, 2025
  {
    id: 'ceo-breakfast-welcome',
    title: "CEO's Breakfast & Welcome",
    description: 'Exclusive breakfast session for invited CEOs with brief welcome remarks.',
    day: 2,
    type: 'networking',
  },
  {
    id: 'fireside-chat',
    title: 'Fireside Chat: Vision 2035 – Executive Insights',
    description: 'Strategic vision for African aviation over the next decade.',
    day: 2,
    type: 'fireside',
  },
  {
    id: 'opening-ceremony',
    title: 'Opening Ceremony',
    description: 'Official summit opening with keynote addresses from industry leaders.',
    day: 2,
    type: 'ceremony',
  },
  {
    id: 'keynote-future',
    title: 'Keynote: The Future of African Aviation',
    description: 'Transformation opportunities and growth prospects across African aviation.',
    day: 2,
    type: 'keynote',
  },
  {
    id: 'panel-infrastructure',
    title: 'Panel: Investing in Aviation Infrastructure',
    description: 'Funding models and infrastructure development strategies.',
    day: 2,
    type: 'panel',
  },
  {
    id: 'panel-digital',
    title: 'Panel: Sky-Tech Africa - Digital Transformation',
    description: 'Digital innovation and emerging technologies in African aviation.',
    day: 2,
    type: 'panel',
  },
  {
    id: 'gala-dinner',
    title: 'Gala Dinner & Awards Ceremony',
    description: 'Evening celebration with dinner, entertainment, and industry awards.',
    day: 2,
    type: 'networking',
  },

  // Friday, November 7, 2025
  {
    id: 'talk-beyond-runway',
    title: "Talk: Beyond the Runway - Unlocking Africa's Aviation Potential",
    description: 'Market opportunities and growth pathways across African aviation.',
    day: 3,
    type: 'talk',
  },
  {
    id: 'panel-hubs',
    title: 'Panel: Building Aviation Hubs',
    description: 'Developing aviation hubs and sustainable aviation ecosystems.',
    day: 3,
    type: 'panel',
  },
  {
    id: 'master-classes',
    title: 'Master Classes: Financing African Aviation Growth',
    description: 'Investment strategies and funding mechanisms for aviation growth.',
    day: 3,
    type: 'workshop',
  },
  {
    id: 'closing-ceremony',
    title: 'Closing Ceremony',
    description: 'Summit summary, key takeaways, and closing remarks.',
    day: 3,
    type: 'ceremony',
  },
];

const DAY_INFO: Record<number, DayInfo> = {
  1: {
    title: 'Setup Day',
    subtitle: 'Preparation & Early Registration',
  },
  2: {
    title: 'Day One',
    subtitle: 'Vision & Infrastructure',
  },
  3: {
    title: 'Day Two',
    subtitle: 'Growth & Innovation',
  },
};

/**
 * Session type styling configuration
 */
const SESSION_TYPE_STYLES: Record<Session['type'], string> = {
  keynote: 'bg-aviationGold-500 text-white',
  panel: 'bg-charcoal-700 text-white',
  workshop: 'bg-aviationGold-500 text-white',
  networking: 'bg-charcoal-700 text-white',
  ceremony: 'bg-aviationGold-500 text-white',
  spotlight: 'bg-charcoal-700 text-white',
  talk: 'bg-aviationGold-500 text-white',
  fireside: 'bg-charcoal-700 text-white',
} as const;

/**
 * Minimal AAIS 2025 Agenda Component
 */
const ModernAAISAgenda: React.FC = () => {
  const [activeDay, setActiveDay] = useState<1 | 2 | 3>(2);
  const [visibleSessions, setVisibleSessions] = useState<Set<string>>(new Set());
  const observerRef = useRef<IntersectionObserver | null>(null);

  /**
   * Handle intersection observer entries
   */
  const handleIntersection = useCallback((entries: IntersectionObserverEntry[]) => {
    entries.forEach(entry => {
      if (entry.isIntersecting && entry.target.id) {
        setVisibleSessions(prev => {
          // Fix: Use Set.add() method instead of spreading
          const newSet = new Set(prev);
          newSet.add(entry.target.id);
          return newSet;
        });
      }
    });
  }, []);

  /**
   * Initialize intersection observer for animations
   */
  useEffect(() => {
    try {
      observerRef.current = new IntersectionObserver(handleIntersection, {
        threshold: 0.1,
        rootMargin: '50px',
      });
    } catch (error) {
      console.error('Failed to initialize IntersectionObserver:', error);
    }

    return () => {
      if (observerRef.current) {
        observerRef.current.disconnect();
        observerRef.current = null;
      }
    };
  }, [handleIntersection]);

  /**
   * Reset visible sessions when day changes
   */
  useEffect(() => {
    setVisibleSessions(new Set());
  }, [activeDay]);

  /**
   * Get sessions for active day with error handling
   */
  const getSessionsForDay = useCallback((day: 1 | 2 | 3): Session[] => {
    try {
      return SUMMIT_SESSIONS.filter(session => session.day === day);
    } catch (error) {
      console.error(`Error filtering sessions for day ${day}:`, error);
      return [];
    }
  }, []);

  /**
   * Get session type styling with fallback
   */
  const getSessionTypeStyle = useCallback((type: Session['type']): string => {
    return SESSION_TYPE_STYLES[type] || SESSION_TYPE_STYLES.panel;
  }, []);

  /**
   * Handle day change with validation
   */
  const handleDayChange = useCallback((day: 1 | 2 | 3) => {
    if ([1, 2, 3].includes(day)) {
      setActiveDay(day);
    }
  }, []);

  /**
   * Handle session element ref callback
   */
  const handleSessionRef = useCallback((element: HTMLDivElement | null) => {
    if (element && observerRef.current) {
      try {
        observerRef.current.observe(element);
      } catch (error) {
        console.error('Error observing element:', error);
      }
    }
  }, []);

  const currentSessions = getSessionsForDay(activeDay);

  return (
    <div className="min-h-screen bg-white font-sans">
      <main className="container mx-auto px-4 py-8 max-w-4xl">
        {/* Day Selection */}
        <nav
          className="flex justify-center mb-8"
          role="tablist"
          aria-label="Summit days navigation"
        >
          <div className="flex bg-gray-100 rounded-lg p-1">
            {([1, 2, 3] as const).map(day => (
              <button
                key={day}
                onClick={() => handleDayChange(day)}
                role="tab"
                aria-selected={activeDay === day}
                aria-controls={`day-${day}-panel`}
                className={`px-6 py-3 text-sm font-medium transition-all duration-300 rounded-md focus:outline-none focus:ring-2 focus:ring-aviationGold-500 focus:ring-offset-2 ${
                  activeDay === day
                    ? 'bg-aviationGold-500 text-white'
                    : 'text-charcoal-700 hover:text-charcoal-900 hover:bg-gray-200'
                }`}
              >
                <div className="text-center">
                  <div className="font-semibold">{DAY_INFO[day]?.title || `Day ${day}`}</div>
                  <div className="text-xs opacity-80">{DAY_INFO[day]?.subtitle || ''}</div>
                </div>
              </button>
            ))}
          </div>
        </nav>

        {/* Sessions */}
        <section
          id={`day-${activeDay}-panel`}
          role="tabpanel"
          aria-labelledby={`day-${activeDay}-tab`}
          className="space-y-4"
        >
          {currentSessions.length > 0 ? (
            currentSessions.map((session, index) => (
              <article
                key={session.id}
                id={session.id}
                ref={handleSessionRef}
                className={`transition-all duration-500 transform ${
                  visibleSessions.has(session.id)
                    ? 'translate-y-0 opacity-100'
                    : 'translate-y-4 opacity-0'
                }`}
                style={{ transitionDelay: `${index * 100}ms` }}
              >
                <div className="bg-white rounded-lg border border-gray-200 p-6 hover:border-aviationGold-300 hover:shadow-md transition-all duration-200">
                  <div className="flex items-start justify-between gap-4">
                    <div className="flex-1">
                      <div className="flex items-center gap-3 mb-3">
                        <span
                          className={`inline-flex items-center px-3 py-1 rounded-full text-xs font-medium ${getSessionTypeStyle(
                            session.type
                          )}`}
                        >
                          {session.type.charAt(0).toUpperCase() + session.type.slice(1)}
                        </span>
                      </div>

                      <h3 className="text-lg font-semibold text-charcoal-900 mb-2">
                        {session.title}
                      </h3>

                      {session.description && (
                        <p className="text-charcoal-600 text-sm leading-relaxed">
                          {session.description}
                        </p>
                      )}
                    </div>
                  </div>
                </div>
              </article>
            ))
          ) : (
            <div className="text-center py-8">
              <p className="text-charcoal-600">No sessions available for this day.</p>
            </div>
          )}
        </section>
      </main>
    </div>
  );
};

export default ModernAAISAgenda;
