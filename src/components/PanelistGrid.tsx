'use client';

import Image from 'next/image';
import { useCallback, useMemo, useState } from 'react';

/**
 * Panelist interface defining the structure for AAIS 2025 panelists
 * Follows clean architecture principles with clear data contracts
 */
interface Panelist {
  /** Unique identifier for the panelist */
  id: number;
  /** Full name of the panelist */
  name: string;
  /** Professional title and organization */
  title: string;
  /** Detailed biography highlighting aviation expertise */
  bio: string;
  /** Photo URL - Must be provided by developer */
  photo: string;
}

/**
 * Sample panelists for AAIS 2025: "Investing in Africa's Aviation Future"
 * Real photo URLs must be provided by developer at /panelists/ directory
 */
const panelists: Panelist[] = [
  {
    id: 1,
    name: 'FREDRICK KITUNGA',
    title: 'Chief Information and Data Officer, Kenya Airways',
    bio: 'Fredrick Kitunga serves as the Chief Information and Data Officer at Kenya Airways, overseeing people, processes, and technologies within the Kenya Airways Technology organization. With over 27 years of experience in technology across energy, banking, telecommunications, and aviation sectors, he leads digital transformation strategies that drive business operational efficiency and effectiveness. An Electrical Engineer with professional certifications including CRISK, CISA, and ITIL, Fredrick has been instrumental in implementing AI, ML, and data analytics solutions that enhance customer experience and operational excellence at Kenya Airways.',
    photo: '/images/panelists/fredrick-kitunga.png',
  },
  {
    id: 2,
    name: 'KARANJA NDEGWA',
    title: 'Chief Executive Officer and Managing Director, Jambojet',
    bio: "Karanja Ndegwa leads Jambojet, Kenya Airways' low-cost subsidiary, as Chief Executive Officer and Managing Director. A Certified Public Accountant and graduate of Economics and Statistics from the University of Nairobi, he brings over 20 years of aviation industry experience, with 12 years in leadership positions. Prior to joining Jambojet in 2014, he worked at Kenya Airways in various capacities, rising to Revenue Accounting Manager. Under his leadership, Jambojet has grown significantly, carrying over 1.4 million passengers and expanding its route network across East Africa, making air travel more accessible and affordable.",
    photo: '/images/panelists/karanja-ndegwa.jpg',
  },
];

/**
 * PanelistCard Component
 * Displays individual panelist with hover animations and interaction
 * Optimized for performance with memoization and minimal re-renders
 */
interface PanelistCardProps {
  panelist: Panelist;
  onClick: () => void;
}

const PanelistCard = ({ panelist, onClick }: PanelistCardProps) => {
  const [isHovered, setIsHovered] = useState(false);
  const [imageError, setImageError] = useState(false);

  // Memoized hover handlers for performance optimization
  const handleMouseEnter = useCallback(() => setIsHovered(true), []);
  const handleMouseLeave = useCallback(() => setIsHovered(false), []);
  const handleImageError = useCallback(() => setImageError(true), []);

  // Fallback image for error handling
  const imageSrc = imageError ? '/images/placeholder-panelist.jpg' : panelist.photo;

  return (
    <div
      className="relative w-[280px] h-[340px] flex flex-col items-center group cursor-pointer"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      onClick={onClick}
      role="button"
      tabIndex={0}
      aria-label={`View ${panelist.name}'s profile`}
      onKeyDown={e => {
        if (e.key === 'Enter' || e.key === ' ') {
          e.preventDefault();
          onClick();
        }
      }}
    >
      {/* Panelist Photo with Hover Animation */}
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
          alt={`${panelist.name} - ${panelist.title}`}
          width={220}
          height={220}
          className="w-full h-full object-cover"
          onError={handleImageError}
          loading="lazy"
          placeholder="blur"
          blurDataURL="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCAABAAEDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAv/xAAhEAACAQMDBQAAAAAAAAAAAAABAgMABAUGIWGRkqGx0f/EABUBAQEAAAAAAAAAAAAAAAAAAAMF/8QAGhEAAgIDAAAAAAAAAAAAAAAAAAECEgMRkf/aAAwDAQACEQMRAD8AltJagyeH0AthI5xdrLcNM91BF5pX2HaH9bcfaSXWGaRmknyJckliyjqTzSlT54b6bk+h0R+Waj2vTSlT54b6bk+h0R+Waj2vTS"
        />
      </div>

      {/* Panelist Info Card - Slides up on hover */}
      <div
        className={`absolute bottom-0 w-full bg-white rounded-xl shadow-lg transform transition-all duration-300 ease-in-out z-10
          ${isHovered ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}
        `}
      >
        <div className="pt-28 pb-6 flex flex-col items-center">
          <h3 className="text-base font-bold text-[#C2A542] text-center px-4">
            {panelist.name.toUpperCase()}
          </h3>
          <p className="text-sm text-gray-600 mt-1 text-center px-4 leading-relaxed">
            {panelist.title}
          </p>
          <button
            onClick={e => {
              e.stopPropagation();
              onClick();
            }}
            className="mt-4 px-6 py-2 bg-[#C2A542] text-white text-sm rounded-full
                     hover:bg-[#A68F3A] transition-colors focus:outline-none focus:ring-2 focus:ring-[#C2A542] focus:ring-opacity-50"
            aria-label={`View ${panelist.name}'s detailed profile`}
          >
            View Profile
          </button>
        </div>
      </div>
    </div>
  );
};

/**
 * PanelistModal Component
 * Full-screen modal displaying detailed panelist information
 * Implements accessibility best practices and keyboard navigation
 */
interface PanelistModalProps {
  panelist: Panelist | null;
  onClose: () => void;
}

const PanelistModal = ({ panelist, onClose }: PanelistModalProps) => {
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

  if (!panelist) return null;

  const imageSrc = imageError ? '/images/placeholder-panelist.jpg' : panelist.photo;

  return (
    <div
      className="fixed inset-0 bg-black/50 flex items-center justify-center p-4 z-50"
      onClick={onClose}
      onKeyDown={handleKeyDown}
      role="dialog"
      aria-modal="true"
      aria-labelledby="panelist-modal-title"
      aria-describedby="panelist-modal-description"
    >
      <div
        className="bg-white rounded-2xl max-w-6xl w-full overflow-hidden shadow-2xl"
        onClick={e => e.stopPropagation()}
      >
        {/* Flex Layout: Photo (1/3) + Content (2/3) */}
        <div className="flex flex-col md:flex-row items-stretch">
          {/* Left Side - Panelist Photo */}
          <div className="w-full md:w-1/3 relative bg-gray-100">
            <div className="h-64 md:h-full md:min-h-[500px]">
              <Image
                src={imageSrc}
                alt={`${panelist.name} - ${panelist.title}`}
                width={300}
                height={500}
                className="object-cover w-full h-full"
                onError={handleImageError}
                priority
              />
            </div>
          </div>

          {/* Right Side - Panelist Information */}
          <div className="w-full md:w-2/3 p-8 flex flex-col">
            <div className="flex justify-between items-start mb-4">
              <div className="flex-1">
                <h2 id="panelist-modal-title" className="text-2xl font-bold text-[#C2A542] mb-2">
                  {panelist.name.toUpperCase()}
                </h2>
                <p className="text-base font-medium text-gray-600 mb-4">{panelist.title}</p>
              </div>

              {/* Close Button */}
              <button
                onClick={onClose}
                className="text-gray-500 hover:text-gray-800 transition-colors p-2 rounded-full hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-[#C2A542] focus:ring-opacity-50"
                aria-label="Close panelist profile"
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
                id="panelist-modal-description"
                className="text-gray-700 text-base leading-relaxed"
              >
                {panelist.bio}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

/**
 * Main PanelistGrid Component
 * Renders the complete panelists section with grid layout and modal functionality
 * Optimized for performance and accessibility
 */
const PanelistGrid = () => {
  const [selectedPanelist, setSelectedPanelist] = useState<Panelist | null>(null);

  // Memoized handlers for performance
  const handlePanelistSelect = useCallback((panelist: Panelist) => {
    setSelectedPanelist(panelist);
  }, []);

  const handleModalClose = useCallback(() => {
    setSelectedPanelist(null);
  }, []);

  // Memoized panelists list to prevent unnecessary re-renders
  const memoizedPanelists = useMemo(() => panelists, []);

  return (
    <section className="py-12 bg-gray-50" aria-labelledby="panelists-heading">
      {/* Header Section - Centered */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-20 text-center">
        <h2 id="panelists-heading" className="text-3xl font-bold text-[#C2A542] mb-4">
          Our Panelists
        </h2>

        {/* Decorative Line with Centered Aviation Icon */}
        <div className="relative flex items-center justify-center mb-6">
          <hr className="w-full border-gray-300" />
          <span className="absolute left-1/2 transform -translate-x-1/2 bg-gray-50 px-4 text-[#C2A542]">
            {/* Panel Discussion themed SVG Icon */}
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
                d="M12 20.25c4.97 0 9-3.694 9-8.25s-4.03-8.25-9-8.25S3 7.444 3 12c0 2.104.859 4.023 2.273 5.48.432.447.74 1.04.586 1.641a4.483 4.483 0 01-.923 1.785A5.969 5.969 0 006 21c1.282 0 2.47-.402 3.445-1.087.81.22 1.668.337 2.555.337z"
              />
            </svg>
          </span>
        </div>

        <p className="text-base text-gray-600 max-w-5xl mx-auto leading-relaxed">
          Join our distinguished panelists as they engage in dynamic discussions on the future of
          African aviation. These industry experts will explore cutting-edge technological
          innovations, digital transformation strategies, and sustainable growth opportunities that
          are reshaping the aviation landscape across Africa.
        </p>
      </div>

      {/* Panelists Grid - Centered Layout */}
      <div className="flex items-center justify-center">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap justify-center gap-8">
            {memoizedPanelists.map(panelist => (
              <PanelistCard
                key={panelist.id}
                panelist={panelist}
                onClick={() => handlePanelistSelect(panelist)}
              />
            ))}
          </div>
        </div>
      </div>

      {/* Panelist Modal */}
      {selectedPanelist && <PanelistModal panelist={selectedPanelist} onClose={handleModalClose} />}
    </section>
  );
};

export default PanelistGrid;
