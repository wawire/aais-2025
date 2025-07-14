'use client';

import Image from 'next/image';
import { useCallback, useMemo, useState } from 'react';

/**
 * Moderator interface for AAIS 2025 session facilitation
 * Defines structure for event moderators and session facilitators
 */
interface Moderator {
  /** Unique identifier for the moderator */
  id: number;
  /** Full name of the moderator */
  name: string;
  /** Professional title and organization */
  title: string;
  /** Detailed biography highlighting moderation expertise */
  bio: string;
  /** Photo URL - Must be provided by developer */
  photo: string;
  /** Sessions the moderator facilitates */
  sessions: string[];
  /** Years of moderation experience */
  experience: number;
}

/**
 * Sample moderators for AAIS 2025: "Investing in Africa's Aviation Future"
 * Real photo URLs must be provided by developer at /moderators/ directory
 */
const moderators: Moderator[] = [
  {
    id: 1,
    name: 'Ian Muiruri',
    title: 'Business Development Consultant, Event Host',
    bio: 'A seasoned business development expert with over a decade of experience in technology and financial services, Ian drives digital transformation and fintech innovation across East Africa as a Business Development Consultant at Caseware Africa. Previously the Head of BFSI & Partnerships at Popote Pay, he excels in forging strategic partnerships and leading high-impact initiatives. With an MBA in Strategic Management from Africa Nazarene University and a robust background spanning Konvergenz Network Solutions, Telkom Kenya, and the United Nations Environmental Program, Ian is passionate about leveraging leadership and collaboration to advance regional growth.',
    photo: '/moderators/ian.jpeg', // Developer: Replace with actual photo
    sessions: ['Opening Ceremony', 'Keynote Sessions', 'Closing Ceremony'],
    experience: 12,
  },
  {
    id: 2,
    name: 'Maureen Kahonge',
    title: 'Senior Manager AFRAA',
    bio: 'Maureen Kahonge, Senior Manager at AFRAA, is an expert in African aviation policy and industry development. She collaborates with stakeholders to advance air transport across the continent, integrating strategies that connect aviation with marine trade hubs like Mombasa and Lagos. Passionate about sustainability, she promotes policies that support both air routes and Africa\'s coastal ecosystems, driving economic growth through initiatives like the Single African Air Transport Market (SAATM).',
    photo: '/moderators/maureen.png', // Developer: Replace with actual photo
    sessions: ['Aviation Infrastructure Panel', 'Regional Partnerships Discussion'],
    experience: 15,
  },
  {
    id: 3,
    name: 'Eunice Chepkemboi',
    title: 'Business Development Lead, Fahari Aviation',
    bio: 'Eunice Chepkemboi is the Business Development Lead at Fahari Aviation, a subsidiary of Kenya Airways, where she drives Advanced Air Mobility (AAM) initiatives and the adoption of drone technology to address Africa\'s transportation challenges. She played a key role in organizing the inaugural AAM Symposium in March 2025 to foster industry collaboration. Her expertise in strategic partnerships has strengthened Fahari Aviation\'s collaborations and expanded UAS applications. Passionate about mentorship and inclusive aviation, she works with Girls in Aviation Africa. She holds a Master\'s in Strategic Management (JKUAT) and a Bachelor\'s in Information Sciences (Moi University) and is a certified Aviation Sustainability and Accessibility Auditor.',
    photo: '/moderators/eunice.jpg', // Developer: Replace with actual photo
    sessions: ['Sky-Tech Africa Panel', 'Innovation Showcase'],
    experience: 8,
  },
  {
    id: 4,
    name: 'Abigail Ageng\'o',
    title: 'Management Trainee, Fahari Aviation',
    bio: 'Supports Fahari Aviation in pioneering market research and integrating advanced air mobility use cases into Kenya\'s aviation landscape. Passionate about the future of air transport in Africa, she is dedicated to driving innovation and unlocking new frontiers in the aviation industry. Her fresh perspective and research skills make her an effective moderator for technical sessions and innovation-focused discussions.',
    photo: '/moderators/abigail.jpg', // Developer: Replace with actual photo
    sessions: ['Master Classes', 'Innovation Workshops'],
    experience: 3,
  },
  {
    id: 5,
    name: 'Mark Muita',
    title: 'Senior First Officer (Embraer 190)',
    bio: 'Mark Muita, a Senior First Officer on the Embraer 190, is a tech enthusiast who excels in managing technical sessions and workshops. With a passion for aviation innovation, he drives advancements in flight operations, leveraging cutting-edge systems to enhance safety and efficiency. His operational expertise and communication skills make him an ideal moderator for technical discussions and safety-focused panels.',
    photo: '/moderators/mark-01.jpg', // Developer: Replace with actual photo
    sessions: ['Technical Operations Panel', 'Safety Innovation Workshop'],
    experience: 10,
  },
  {
    id: 6,
    name: 'Lina Mkoji',
    title: 'Sustainability Advocate',
    bio: 'Lina Mkoji, a dedicated Sustainability Advocate, brings years of experience in facilitating impactful discussions and debates that drive environmental progress. With a talent for steering diverse groups toward consensus, she champions sustainable practices, fostering dialogue on climate solutions and eco-friendly innovation across industries. Her moderation style encourages inclusive participation and actionable outcomes.',
    photo: '/moderators/linnah.png', // Developer: Replace with actual photo
    sessions: ['Sustainability Panel', 'Environmental Innovation Discussion'],
    experience: 7,
  },
  {
    id: 7,
    name: 'Wycliffe Osoro',
    title: 'Head HR, East and South Africa Sub Cluster & Manager, HR- Kenya',
    bio: 'Seasoned HR professional with 20 years of experience in human resource management and leadership across industries including manufacturing, financial services, technology, petroleum, real estate construction, and aviation services in African markets. Experienced board member in HR regulatory and financial institutions. Expertise in HR leadership, employee relations, CBA negotiations, talent acquisition, business partnering, job evaluation, HR Information systems, project management, stakeholder management, writing, and public speaking.',
    photo: '/moderators/Wycliffe-01.jpg', // Developer: Replace with actual photo
    sessions: ['Human Capital Panel', 'Workforce Development Discussion'],
    experience: 20,
  },
  {
    id: 8,
    name: 'Susan Nambusi',
    title: 'Senior Manager Innovation and Sustainability, Kenya Airways',
    bio: 'Susan Nambusi, Senior Manager of Innovation and Sustainability at Kenya Airways, is a seasoned communicator who excels in panel discussions and Q&A sessions. With over 13 years in aviation, she leads fuel optimization and carbon emissions strategies, driving Kenya\'s first CORSIA verification and advancing sustainable aviation fuel initiatives. As CEO and Founder of Living Peak Group, she empowers individuals through coaching, blending her passion for sustainability with personal development.',
    photo: '/moderators/Susan1.gif', // Developer: Replace with actual photo
    sessions: ['Innovation Panel', 'Sustainability Leadership Forum'],
    experience: 13,
  },
];

/**
 * ModeratorCard Component
 * Displays individual moderator with hover animations and session information
 * Optimized for performance with memoization and accessibility
 */
interface ModeratorCardProps {
  moderator: Moderator;
  onClick: () => void;
}

const ModeratorCard = ({ moderator, onClick }: ModeratorCardProps) => {
  const [isHovered, setIsHovered] = useState(false);
  const [imageError, setImageError] = useState(false);

  // Memoized event handlers for performance optimization
  const handleMouseEnter = useCallback(() => setIsHovered(true), []);
  const handleMouseLeave = useCallback(() => setIsHovered(false), []);
  const handleImageError = useCallback(() => setImageError(true), []);

  // Fallback image for error handling
  const imageSrc = imageError ? '/images/placeholder-moderator.jpg' : moderator.photo;

  return (
    <div
      className="relative w-[280px] h-[340px] flex flex-col items-center group cursor-pointer"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      onClick={onClick}
      role="button"
      tabIndex={0}
      aria-label={`View ${moderator.name}'s moderator profile`}
      onKeyDown={(e) => {
        if (e.key === 'Enter' || e.key === ' ') {
          e.preventDefault();
          onClick();
        }
      }}
    >
      {/* Moderator Photo with Hover Animation */}
      <div
        className={`absolute top-0 left-1/2 transform -translate-x-1/2
          w-[220px] h-[220px] overflow-hidden border-4 border-white shadow-lg
          transition-all duration-300 ease-in-out z-20
          ${
            isHovered
              ? 'rounded-xl scale-110 -translate-y-16'
              : 'rounded-full scale-100 translate-y-0'
          }
        `}
      >
        <Image
          src={imageSrc}
          alt={`${moderator.name} - ${moderator.title}`}
          width={220}
          height={220}
          className="w-full h-full object-cover"
          onError={handleImageError}
          loading="lazy"
          placeholder="blur"
          blurDataURL="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCAABAAEDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAv/xAAhEAACAQMDBQAAAAAAAAAAAAABAgMABAUGIWGRkqGx0f/EABUBAQEAAAAAAAAAAAAAAAAAAAMF/8QAGhEAAgIDAAAAAAAAAAAAAAAAAAECEgMRkf/aAAwDAQACEQMRAD8AltJagyeH0AthI5xdrLcNM91BF5pX2HaH9bcfaSXWGaRmknyJckliyjqTzSlT54b6bk+h0R+Waj2vTSlT54b6bk+h0R+Waj2vTS"
        />
      </div>

      {/* Moderator Info Card - Slides up on hover */}
      <div
        className={`absolute bottom-0 w-full bg-white rounded-xl shadow-lg transform transition-all duration-300 ease-in-out z-10
          ${
            isHovered ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
          }
        `}
      >
        <div className="pt-28 pb-6 flex flex-col items-center">
          <h3 className="text-base font-bold text-[#C2A542] text-center px-4">
            {moderator.name.toUpperCase()}
          </h3>
          <p className="text-sm text-gray-600 mt-1 text-center px-4 leading-relaxed">
            {moderator.title}
          </p>
          <div className="mt-2 flex items-center gap-2 text-xs text-[#1A252F]">
            <span className="bg-[#C2A542]/10 px-2 py-1 rounded-full">
              {moderator.experience}+ years
            </span>
            <span className="text-gray-500">•</span>
            <span>{moderator.sessions.length} sessions</span>
          </div>
          <button
            onClick={(e) => {
              e.stopPropagation();
              onClick();
            }}
            className="mt-4 px-6 py-2 bg-[#C2A542] text-white text-sm rounded-full
                     hover:bg-[#A68F3A] transition-colors focus:outline-none focus:ring-2 focus:ring-[#C2A542] focus:ring-opacity-50"
            aria-label={`View ${moderator.name}'s detailed moderator profile`}
          >
            View Profile
          </button>
        </div>
      </div>
    </div>
  );
};

/**
 * ModeratorModal Component
 * Full-screen modal displaying detailed moderator information and session details
 * Implements accessibility best practices and keyboard navigation
 */
interface ModeratorModalProps {
  moderator: Moderator | null;
  onClose: () => void;
}

const ModeratorModal = ({ moderator, onClose }: ModeratorModalProps) => {
  const [imageError, setImageError] = useState(false);

  // Handle escape key for accessibility
  const handleKeyDown = useCallback((e: React.KeyboardEvent) => {
    if (e.key === 'Escape') {
      onClose();
    }
  }, [onClose]);

  const handleImageError = useCallback(() => setImageError(true), []);

  if (!moderator) return null;

  const imageSrc = imageError ? '/images/placeholder-moderator.jpg' : moderator.photo;

  return (
    <div
      className="fixed inset-0 bg-black/50 flex items-center justify-center p-4 z-50"
      onClick={onClose}
      onKeyDown={handleKeyDown}
      role="dialog"
      aria-modal="true"
      aria-labelledby="moderator-modal-title"
      aria-describedby="moderator-modal-description"
    >
      <div
        className="bg-white rounded-2xl max-w-6xl w-full overflow-hidden shadow-2xl"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Flex Layout: Photo (1/3) + Content (2/3) */}
        <div className="flex flex-row items-stretch">
          {/* Left Side - Moderator Photo */}
          <div className="w-1/3 relative bg-gray-100">
            <div className="h-full min-h-[500px]">
              <Image
                src={imageSrc}
                alt={`${moderator.name} - ${moderator.title}`}
                width={300}
                height={500}
                className="object-cover w-full h-full"
                onError={handleImageError}
                priority
              />
            </div>
          </div>

          {/* Right Side - Moderator Information */}
          <div className="w-2/3 p-8 flex flex-col">
            <div className="flex justify-between items-start mb-4">
              <div className="flex-1">
                <h2
                  id="moderator-modal-title"
                  className="text-2xl font-bold text-[#C2A542] mb-2"
                >
                  {moderator.name.toUpperCase()}
                </h2>
                <p className="text-base font-medium text-gray-600 mb-4">
                  {moderator.title}
                </p>

                {/* Experience Badge */}
                <div className="flex items-center gap-4 mb-4">
                  <div className="bg-[#C2A542]/10 px-4 py-2 rounded-lg">
                    <span className="text-sm font-semibold text-[#1A252F]">
                      {moderator.experience}+ Years Experience
                    </span>
                  </div>
                  <div className="text-sm text-gray-600">
                    Moderating {moderator.sessions.length} session{moderator.sessions.length > 1 ? 's' : ''}
                  </div>
                </div>

                {/* Sessions Moderated */}
                <div className="mb-4">
                  <h3 className="text-sm font-semibold text-[#1A252F] mb-3">
                    Sessions Moderated:
                  </h3>
                  <div className="grid grid-cols-1 gap-2">
                    {moderator.sessions.map((session, index) => (
                      <div
                        key={index}
                        className="flex items-center gap-3 p-3 bg-gray-50 rounded-lg border border-gray-200"
                      >
                        <div className="w-2 h-2 bg-[#C2A542] rounded-full flex-shrink-0"></div>
                        <span className="text-sm text-[#1A252F] font-medium">
                          {session}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Close Button */}
              <button
                onClick={onClose}
                className="text-gray-500 hover:text-gray-800 transition-colors p-2 rounded-full hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-[#C2A542] focus:ring-opacity-50"
                aria-label="Close moderator profile"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <line x1="18" y1="6" x2="6" y2="18"></line>
                  <line x1="6" y1="6" x2="18" y2="18"></line>
                </svg>
              </button>
            </div>

            {/* Divider */}
            <div className="border-t border-gray-200 mb-6"></div>

            {/* Biography Section */}
            <div className="flex-grow">
              <h3 className="text-lg font-semibold text-[#1A252F] mb-3">
                About the Moderator
              </h3>
              <p
                id="moderator-modal-description"
                className="text-gray-700 text-base leading-relaxed"
              >
                {moderator.bio}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

/**
 * Main ModeratorGrid Component
 * Renders the complete moderators section with grid layout and modal functionality
 * Optimized for performance and accessibility
 */
const ModeratorGrid = () => {
  const [selectedModerator, setSelectedModerator] = useState<Moderator | null>(null);

  // Memoized handlers for performance
  const handleModeratorSelect = useCallback((moderator: Moderator) => {
    setSelectedModerator(moderator);
  }, []);

  const handleModalClose = useCallback(() => {
    setSelectedModerator(null);
  }, []);

  // Memoized moderators list to prevent unnecessary re-renders
  const memoizedModerators = useMemo(() => moderators, []);

  return (
    <section className="py-12 bg-white" aria-labelledby="moderators-heading">
      {/* Header Section */}
      <div className="padding-container max-container mb-20">
        <h2
          id="moderators-heading"
          className="text-3xl font-bold text-[#C2A542] mb-4"
        >
          Our Moderators
        </h2>

        {/* Decorative Line with Moderation Icon */}
        <div className="relative flex items-center justify-center mb-6">
          <hr className="w-full border-gray-300" />
          <span className="absolute right-0 bg-white px-2 text-[#C2A542]">
            {/* Moderation/facilitation icon - Developer: Replace with preferred icon */}
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={2}
              stroke="currentColor"
              className="w-6 h-6"
              aria-hidden="true"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M7.5 8.25h9m-9 3H12m-9.75 1.51c0 1.691 1.351 3.061 3.016 3.061.815 0 1.552-.315 2.094-.822l1.11.793c.529.379 1.26.379 1.789 0l1.11-.793c.542.507 1.279.822 2.094.822 1.665 0 3.016-1.37 3.016-3.061L18 8.25H6l-3.75 4.01Z"
              />
            </svg>
          </span>
        </div>

        <p className="text-base text-gray-600 max-w-5xl leading-relaxed">
          Meet our experienced moderators who ensure engaging and productive discussions throughout
          AAIS 2025. These skilled facilitators bring years of expertise in guiding conversations,
          managing panel discussions, and creating inclusive environments where all participants
          can contribute meaningfully to shaping Africa's aviation future.
        </p>
      </div>

      {/* Moderators Grid */}
      <div className="flex items-center justify-center">
        <div className="padding-container max-container mx-auto px-4">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 justify-items-center">
            {memoizedModerators.map((moderator) => (
              <ModeratorCard
                key={moderator.id}
                moderator={moderator}
                onClick={() => handleModeratorSelect(moderator)}
              />
            ))}
          </div>
        </div>
      </div>

      {/* Moderator Modal */}
      {selectedModerator && (
        <ModeratorModal
          moderator={selectedModerator}
          onClose={handleModalClose}
        />
      )}
    </section>
  );
};

export default ModeratorGrid;
