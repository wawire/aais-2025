'use client';

import Image from 'next/image';
import { useCallback, useMemo, useState } from 'react';

/**
 * Moderator interface defining the structure for AAIS 2025 moderators
 * Follows clean architecture principles with clear data contracts
 */
interface Moderator {
  /** Unique identifier for the moderator */
  id: number;
  /** Full name of the moderator */
  name: string;
  /** Professional title and organization */
  title: string;
  /** Detailed biography highlighting aviation expertise */
  bio: string;
  /** Photo URL - Must be provided by developer */
  photo: string;
}

/**
 * Sample moderators for AAIS 2025: "Investing in Africa's Aviation Future"
 * Real photo URLs must be provided by developer at /moderators/ directory
 */
const moderators: Moderator[] = [
  {
    id: 1,
    name: 'MAUREEN KAHONGE',
    title: 'Senior Manager Business Development and Communications, AFRAA',
    bio: 'Maureen Kahonge serves as Senior Manager Business Development and Communications at the African Airlines Association (AFRAA), a position she has held since February 2016. With over 12 years of aviation experience at AFRAA, the leading trade association of African airlines, she coordinates various initiatives that facilitate beneficial cooperation among African airlines. An analytical thinker with commercial orientation and strong customer focus, Maureen is well-versed in air transport industry trends and dynamics. Her role covers development and management of beneficial working relationships with member airlines and partners, marketing, events, PR, and communications across the African aviation sector.',
    photo: '/images/moderators/maureen-kahonge.jpg',
  },
  {
    id: 2,
    name: 'WAKINA MUTEMBEI',
    title: 'Lead Sustainability, Kenya Airways',
    bio: "Wakina Mutembei leads sustainability initiatives at Kenya Airways as Lead Sustainability, driving the airline's commitment to environmental stewardship and carbon net-zero goals by 2050. A Quantity Surveyor and Environmental Impact Assessment Expert, she holds certifications as a GRI Sustainability Professional, LEED Green Associate, and EDGE Expert. With over 11 years of experience in the Built Environment and Infrastructure Industry, Wakina spearheads Kenya Airways' award-winning sustainability programs, including Sustainable Aviation Fuel (SAF) development, waste reduction initiatives, and the airline's participation in global aviation challenges that have earned multiple prestigious awards for innovative environmental solutions.",
    photo: '/images/moderators/wakina-mutembei.jpg',
  },
];

/**
 * ModeratorCard Component
 * Displays individual moderator with hover animations and interaction
 * Optimized for performance with memoization and minimal re-renders
 */
interface ModeratorCardProps {
  moderator: Moderator;
  onClick: () => void;
}

const ModeratorCard = ({ moderator, onClick }: ModeratorCardProps) => {
  const [isHovered, setIsHovered] = useState(false);
  const [imageError, setImageError] = useState(false);

  // Memoized hover handlers for performance optimization
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
      aria-label={`View ${moderator.name}'s profile`}
      onKeyDown={e => {
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
          ${isHovered ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}
        `}
      >
        <div className="pt-28 pb-6 flex flex-col items-center">
          <h3 className="text-base font-bold text-[#C2A542] text-center px-4">
            {moderator.name.toUpperCase()}
          </h3>
          <p className="text-sm text-gray-600 mt-1 text-center px-4 leading-relaxed">
            {moderator.title}
          </p>
          <button
            onClick={e => {
              e.stopPropagation();
              onClick();
            }}
            className="mt-4 px-6 py-2 bg-[#C2A542] text-white text-sm rounded-full
                     hover:bg-[#A68F3A] transition-colors focus:outline-none focus:ring-2 focus:ring-[#C2A542] focus:ring-opacity-50"
            aria-label={`View ${moderator.name}'s detailed profile`}
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
 * Full-screen modal displaying detailed moderator information
 * Implements accessibility best practices and keyboard navigation
 */
interface ModeratorModalProps {
  moderator: Moderator | null;
  onClose: () => void;
}

const ModeratorModal = ({ moderator, onClose }: ModeratorModalProps) => {
  const [imageError, setImageError] = useState(false);

  // Handle escape key for accessibility
  const handleKeyDown = useCallback(
    (e: React.KeyboardEvent) => {
      if (e.key === 'Escape') {
        onClose();
      }
    },
    [onClose]
  );

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
        onClick={e => e.stopPropagation()}
      >
        {/* Flex Layout: Photo (1/3) + Content (2/3) */}
        <div className="flex flex-col md:flex-row items-stretch">
          {/* Left Side - Moderator Photo */}
          <div className="w-full md:w-1/3 relative bg-gray-100">
            <div className="h-64 md:h-full md:min-h-[500px]">
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
          <div className="w-full md:w-2/3 p-8 flex flex-col">
            <div className="flex justify-between items-start mb-4">
              <div className="flex-1">
                <h2 id="moderator-modal-title" className="text-2xl font-bold text-[#C2A542] mb-2">
                  {moderator.name.toUpperCase()}
                </h2>
                <p className="text-base font-medium text-gray-600 mb-4">{moderator.title}</p>
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
                  <line x1="18" y1="6" x2="6" y2="18" />
                  <line x1="6" y1="6" x2="18" y2="18" />
                </svg>
              </button>
            </div>

            {/* Divider */}
            <div className="border-t border-gray-200 mb-6" />

            {/* Biography Section */}
            <div className="flex-grow">
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
    <section className="py-12 bg-blue-50" aria-labelledby="moderators-heading">
      {/* Header Section - Centered */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-20 text-center">
        <h2 id="moderators-heading" className="text-3xl font-bold text-[#C2A542] mb-4">
          Our Moderators
        </h2>

        {/* Decorative Line with Centered Moderator Icon */}
        <div className="relative flex items-center justify-center mb-6">
          <hr className="w-full border-gray-300" />
          <span className="absolute left-1/2 transform -translate-x-1/2 bg-blue-50 px-4 text-[#C2A542]">
            {/* Moderator/Leadership themed SVG Icon */}
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
                d="M3.75 13.5l10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75z"
              />
            </svg>
          </span>
        </div>

        <p className="text-base text-gray-600 max-w-5xl mx-auto leading-relaxed">
          Our distinguished moderators will guide insightful discussions throughout AAIS 2025,
          facilitating meaningful dialogue between industry leaders, policymakers, and innovators.
          With expertise spanning continental aviation development, sustainability initiatives, and
          strategic business transformation, they ensure productive exchanges that drive the future
          of African aviation forward.
        </p>
      </div>

      {/* Moderators Grid - Centered Layout */}
      <div className="flex items-center justify-center">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap justify-center gap-8">
            {memoizedModerators.map(moderator => (
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
        <ModeratorModal moderator={selectedModerator} onClose={handleModalClose} />
      )}
    </section>
  );
};

export default ModeratorGrid;
