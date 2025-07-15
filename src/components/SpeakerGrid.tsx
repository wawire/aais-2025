'use client';

import Image from 'next/image';
import { useCallback, useMemo, useState } from 'react';

/**
 * Speaker interface defining the structure for AAIS 2025 speakers
 * Follows clean architecture principles with clear data contracts
 */
interface Speaker {
  /** Unique identifier for the speaker */
  id: number;
  /** Full name of the speaker */
  name: string;
  /** Professional title and organization */
  title: string;
  /** Detailed biography highlighting aviation expertise */
  bio: string;
  /** Photo URL - Must be provided by developer */
  photo: string;
}

/**
 * Sample speakers for AAIS 2025: "Investing in Africa's Aviation Future"
 * Real photo URLs must be provided by developer at /speakers/ directory
 */
const speakers: Speaker[] = [
  {
    id: 1,
    name: 'ALLAN KILAVUKA',
    title: 'Group MD & CEO, Kenya Airways; Chairperson of the Executive Committee, AFRAA',
    bio: 'Allan Kilavuka leads Kenya Airways as Group Managing Director and CEO, serving simultaneously as Chairperson of the Executive Committee at the African Airlines Association (AFRAA). With extensive aviation industry experience, he champions African aviation development, regional connectivity, and sustainable growth initiatives. His leadership drives innovation in airline operations, strategic partnerships, and the advancement of the Single African Air Transport Market (SAATM) across the continent.',
    photo: '/images/speakers/allan.jpeg', 
  },
  {
    id: 2,
    name: 'ABDERAHMANE BERTHÉ',
    title: 'Secretary General, African Civil Aviation Commission (AFCAC)',
    bio: 'Abderahmane Berthé serves as Secretary General of the African Civil Aviation Commission (AFCAC), leading continental aviation policy development and regulatory harmonization. With expertise in aviation safety, security, and infrastructure development, he spearheads initiatives to strengthen African aviation through improved regulatory frameworks, capacity building, and regional cooperation. His work focuses on enhancing aviation safety standards and promoting sustainable aviation development across Africa.',
    photo: '/images/speakers/berthe.jpg',
  },
  {
    id: 3,
    name: 'HELLEN M. MWARIRI',
    title: 'Chief Strategy & Innovation Officer, Kenya Airways',
    bio: 'Hellen M. Mwariri leads strategic innovation and transformation initiatives at Kenya Airways as Chief Strategy & Innovation Officer. Her expertise spans digital transformation, operational excellence, and strategic business development within the aviation sector. She drives innovation in customer experience, operational efficiency, and sustainable aviation practices, positioning Kenya Airways for competitive advantage in the evolving African aviation landscape.',
    photo: '/images/speakers/Hellen-Mwariri-Mathuka.jpg', 
  },
];

/**
 * SpeakerCard Component
 * Displays individual speaker with hover animations and interaction
 * Optimized for performance with memoization and minimal re-renders
 */
interface SpeakerCardProps {
  speaker: Speaker;
  onClick: () => void;
}

const SpeakerCard = ({ speaker, onClick }: SpeakerCardProps) => {
  const [isHovered, setIsHovered] = useState(false);
  const [imageError, setImageError] = useState(false);

  // Memoized hover handlers for performance optimization
  const handleMouseEnter = useCallback(() => setIsHovered(true), []);
  const handleMouseLeave = useCallback(() => setIsHovered(false), []);
  const handleImageError = useCallback(() => setImageError(true), []);

  // Fallback image for error handling
  const imageSrc = imageError ? '/images/placeholder-speaker.jpg' : speaker.photo;

  return (
    <div
      className="relative w-[280px] h-[340px] flex flex-col items-center group cursor-pointer"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      onClick={onClick}
      role="button"
      tabIndex={0}
      aria-label={`View ${speaker.name}'s profile`}
      onKeyDown={(e) => {
        if (e.key === 'Enter' || e.key === ' ') {
          e.preventDefault();
          onClick();
        }
      }}
    >
      {/* Speaker Photo with Hover Animation */}
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
          alt={`${speaker.name} - ${speaker.title}`}
          width={220}
          height={220}
          className="w-full h-full object-cover"
          onError={handleImageError}
          loading="lazy"
          placeholder="blur"
          blurDataURL="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCAABAAEDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAv/xAAhEAACAQMDBQAAAAAAAAAAAAABAgMABAUGIWGRkqGx0f/EABUBAQEAAAAAAAAAAAAAAAAAAAMF/8QAGhEAAgIDAAAAAAAAAAAAAAAAAAECEgMRkf/aAAwDAQACEQMRAD8AltJagyeH0AthI5xdrLcNM91BF5pX2HaH9bcfaSXWGaRmknyJckliyjqTzSlT54b6bk+h0R+Waj2vTSlT54b6bk+h0R+Waj2vTS"
        />
      </div>

      {/* Speaker Info Card - Slides up on hover */}
      <div
        className={`absolute bottom-0 w-full bg-white rounded-xl shadow-lg transform transition-all duration-300 ease-in-out z-10
          ${
            isHovered ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
          }
        `}
      >
        <div className="pt-28 pb-6 flex flex-col items-center">
          <h3 className="text-base font-bold text-[#C2A542] text-center px-4">
            {speaker.name.toUpperCase()}
          </h3>
          <p className="text-sm text-gray-600 mt-1 text-center px-4 leading-relaxed">
            {speaker.title}
          </p>
          <button
            onClick={(e) => {
              e.stopPropagation();
              onClick();
            }}
            className="mt-4 px-6 py-2 bg-[#C2A542] text-white text-sm rounded-full
                     hover:bg-[#A68F3A] transition-colors focus:outline-none focus:ring-2 focus:ring-[#C2A542] focus:ring-opacity-50"
            aria-label={`View ${speaker.name}'s detailed profile`}
          >
            View Profile
          </button>
        </div>
      </div>
    </div>
  );
};

/**
 * SpeakerModal Component
 * Full-screen modal displaying detailed speaker information
 * Implements accessibility best practices and keyboard navigation
 */
interface SpeakerModalProps {
  speaker: Speaker | null;
  onClose: () => void;
}

const SpeakerModal = ({ speaker, onClose }: SpeakerModalProps) => {
  const [imageError, setImageError] = useState(false);

  // Handle escape key for accessibility
  const handleKeyDown = useCallback((e: React.KeyboardEvent) => {
    if (e.key === 'Escape') {
      onClose();
    }
  }, [onClose]);

  const handleImageError = useCallback(() => setImageError(true), []);

  if (!speaker) return null;

  const imageSrc = imageError ? '/images/placeholder-speaker.jpg' : speaker.photo;

  return (
    <div
      className="fixed inset-0 bg-black/50 flex items-center justify-center p-4 z-50"
      onClick={onClose}
      onKeyDown={handleKeyDown}
      role="dialog"
      aria-modal="true"
      aria-labelledby="speaker-modal-title"
      aria-describedby="speaker-modal-description"
    >
      <div
        className="bg-white rounded-2xl max-w-6xl w-full overflow-hidden shadow-2xl"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Flex Layout: Photo (1/3) + Content (2/3) */}
        <div className="flex flex-col md:flex-row items-stretch">
          {/* Left Side - Speaker Photo */}
          <div className="w-full md:w-1/3 relative bg-gray-100">
            <div className="h-64 md:h-full md:min-h-[500px]">
              <Image
                src={imageSrc}
                alt={`${speaker.name} - ${speaker.title}`}
                width={300}
                height={500}
                className="object-cover w-full h-full"
                onError={handleImageError}
                priority
              />
            </div>
          </div>

          {/* Right Side - Speaker Information */}
          <div className="w-full md:w-2/3 p-8 flex flex-col">
            <div className="flex justify-between items-start mb-4">
              <div className="flex-1">
                <h2
                  id="speaker-modal-title"
                  className="text-2xl font-bold text-[#C2A542] mb-2"
                >
                  {speaker.name.toUpperCase()}
                </h2>
                <p className="text-base font-medium text-gray-600 mb-4">
                  {speaker.title}
                </p>
              </div>

              {/* Close Button */}
              <button
                onClick={onClose}
                className="text-gray-500 hover:text-gray-800 transition-colors p-2 rounded-full hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-[#C2A542] focus:ring-opacity-50"
                aria-label="Close speaker profile"
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
              <p
                id="speaker-modal-description"
                className="text-gray-700 text-base leading-relaxed"
              >
                {speaker.bio}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

/**
 * Main SpeakerGrid Component
 * Renders the complete speakers section with grid layout and modal functionality
 * Optimized for performance and accessibility
 */
const SpeakerGrid = () => {
  const [selectedSpeaker, setSelectedSpeaker] = useState<Speaker | null>(null);

  // Memoized handlers for performance
  const handleSpeakerSelect = useCallback((speaker: Speaker) => {
    setSelectedSpeaker(speaker);
  }, []);

  const handleModalClose = useCallback(() => {
    setSelectedSpeaker(null);
  }, []);

  // Memoized speakers list to prevent unnecessary re-renders
  const memoizedSpeakers = useMemo(() => speakers, []);

  return (
    <section className="py-12 bg-white" aria-labelledby="speakers-heading">
      {/* Header Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-20">
        <h2
          id="speakers-heading"
          className="text-3xl font-bold text-[#C2A542] mb-4"
        >
          Our Speakers
        </h2>

        {/* Decorative Line with Aviation Icon */}
        <div className="relative flex items-center justify-center mb-6">
          <hr className="w-full border-gray-300" />
          <span className="absolute right-0 bg-white px-2 text-[#C2A542]">
            {/* Aviation-themed SVG Icon */}
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
                d="M6 12L3.269 3.126A59.768 59.768 0 0121.485 12 59.77 59.77 0 013.27 20.876L5.999 12zm0 0h7.5"
              />
            </svg>
          </span>
        </div>

        <p className="text-base text-gray-600 max-w-5xl leading-relaxed">
          Meet our esteemed speakers driving the AAIS 2025 theme: "Investing in Africa's Aviation Future:
          Unlocking Opportunities for Growth and Transformation through Innovation." These industry leaders
          bring decades of expertise in aviation development, sustainability, and technological advancement
          across the African continent.
        </p>
      </div>

      {/* Speakers Grid */}
      <div className="flex items-center justify-center">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 justify-items-center">
            {memoizedSpeakers.map((speaker) => (
              <SpeakerCard
                key={speaker.id}
                speaker={speaker}
                onClick={() => handleSpeakerSelect(speaker)}
              />
            ))}
          </div>
        </div>
      </div>

      {/* Speaker Modal */}
      {selectedSpeaker && (
        <SpeakerModal
          speaker={selectedSpeaker}
          onClose={handleModalClose}
        />
      )}
    </section>
  );
};

export default SpeakerGrid;