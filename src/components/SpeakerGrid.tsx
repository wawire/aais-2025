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
    name: 'Dr. Amina Hassan',
    title: 'CEO, African Aviation Development Bank',
    bio: 'Dr. Amina Hassan leads continental aviation financing initiatives, having facilitated over $2.5 billion in infrastructure investments across 25 African countries. With expertise in sustainable aviation fuel development and airport modernization, she champions the Single African Air Transport Market (SAATM) and drives digital transformation in African aviation. Her leadership in public-private partnerships has revolutionized regional connectivity and cargo operations.',
    photo: '/speakers/amina-hassan.jpg', // Developer: Replace with actual photo
  },
  {
    id: 2,
    name: 'Captain James Mwangi',
    title: 'Director of Flight Operations, Pan-African Airlines Alliance',
    bio: 'Captain James Mwangi brings 25 years of aviation experience, leading safety innovations and operational excellence across African skies. As a certified aviation sustainability auditor, he spearheads green flight operations and advanced air mobility initiatives. His expertise in pilot training and regulatory compliance has enhanced safety standards across 15 African carriers, positioning the continent for next-generation aviation technologies.',
    photo: '/speakers/james-mwangi.jpg', // Developer: Replace with actual photo
  },
  {
    id: 3,
    name: 'Sarah Okonkwo',
    title: 'Chief Innovation Officer, West African Air Transport',
    bio: 'Sarah Okonkwo pioneers digital aviation solutions and smart airport technologies across West Africa. Her leadership in drone integration and urban air mobility has positioned Lagos and Accra as innovation hubs. With expertise in AI-powered logistics and passenger experience optimization, she drives the region\'s transformation into a competitive aviation market, attracting over $500 million in tech investments.',
    photo: '/speakers/sarah-okonkwo.jpg', // Developer: Replace with actual photo
  },
  {
    id: 4,
    name: 'Mohamed Al-Rashid',
    title: 'Chairman, North African Aviation Consortium',
    bio: 'Mohamed Al-Rashid orchestrates strategic partnerships connecting North African aviation with global markets. His expertise in cross-border regulatory harmonization and cargo hub development has increased regional air freight by 300%. As an advocate for sustainable aviation fuels and carbon-neutral operations, he leads initiatives that balance economic growth with environmental stewardship across the Maghreb region.',
    photo: '/speakers/mohamed-al-rashid.jpg', // Developer: Replace with actual photo
  },
  {
    id: 5,
    name: 'Dr. Grace Nyong',
    title: 'Head of Aviation Sustainability, African Union Commission',
    bio: 'Dr. Grace Nyong leads continental efforts in sustainable aviation development and climate-resilient infrastructure. Her research in alternative fuels and green airport design has influenced AU aviation policies affecting 54 member states. With expertise in carbon offset mechanisms and environmental impact assessment, she ensures Africa\'s aviation growth aligns with global climate commitments and sustainable development goals.',
    photo: '/speakers/grace-nyong.jpg', // Developer: Replace with actual photo
  },
  {
    id: 6,
    name: 'Robert Kimani',
    title: 'Managing Director, East African Aviation Hub',
    bio: 'Robert Kimani transforms East Africa into a premier aviation destination through strategic infrastructure development and regional integration. His leadership in cargo operations and maintenance, repair, and overhaul (MRO) services has positioned the region as a competitive hub. With expertise in public-private partnerships and aviation finance, he attracts international investment while building local capacity.',
    photo: '/speakers/robert-kimani.jpg', // Developer: Replace with actual photo
  },
  {
    id: 7,
    name: 'Dr. Fatima Diallo',
    title: 'Director, African Aviation Research Institute',
    bio: 'Dr. Fatima Diallo leads cutting-edge research in aviation technology and workforce development across Africa. Her studies on pilot training optimization and aircraft maintenance innovations have reduced operational costs by 25% for participating airlines. As an expert in gender inclusion and youth engagement in aviation, she champions diversity initiatives that are building the next generation of African aviation leaders.',
    photo: '/speakers/fatima-diallo.jpg', // Developer: Replace with actual photo
  },
  {
    id: 8,
    name: 'David Mthembu',
    title: 'CEO, Southern African Aviation Investment Fund',
    bio: 'David Mthembu mobilizes capital for aviation infrastructure and technology investments across Southern Africa. His portfolio includes airport expansions, fleet modernization, and startup incubation programs worth over $1.8 billion. With expertise in fintech integration and digital payment systems for aviation, he drives innovation that makes air travel more accessible and efficient for African communities.',
    photo: '/speakers/david-mthembu.jpg', // Developer: Replace with actual photo
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
        <div className="flex flex-row items-stretch">
          {/* Left Side - Speaker Photo */}
          <div className="w-1/3 relative bg-gray-100">
            <div className="h-full min-h-[500px]">
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
          <div className="w-2/3 p-8 flex flex-col">
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
      <div className="padding-container max-container mb-20">
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
            {/* Aviation-themed SVG Icon - Developer: Replace with preferred icon */}
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
        <div className="padding-container max-container mx-auto px-4">
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
