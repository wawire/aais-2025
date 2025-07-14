'use client';

import Image from 'next/image';
import { useCallback, useMemo, useState } from 'react';

/**
 * Panelist interface for AAIS 2025 panel discussions
 * Structured for clean architecture and type safety
 */
interface Panelist {
  /** Unique identifier for the panelist */
  id: number;
  /** Full name of the panelist */
  name: string;
  /** Professional title and organization */
  title: string;
  /** Detailed biography highlighting expertise */
  bio: string;
  /** Photo URL - Must be provided by developer */
  photo: string;
  /** Panel sessions the panelist participates in */
  panels: string[];
}

/**
 * Sample panelists for AAIS 2025 panel discussions
 * Real photo URLs must be provided by developer at /panelists/ directory
 */
const panelists: Panelist[] = [
  {
    id: 1,
    name: 'Patricia Asante',
    title: 'Director of Infrastructure Finance, African Development Bank',
    bio: 'Patricia Asante leads aviation infrastructure financing across Africa, managing a $1.2 billion portfolio of airport and connectivity projects. Her expertise in public-private partnerships has revolutionized funding models for sustainable route development. She champions innovative financing solutions that balance commercial viability with social impact, particularly in underserved regions.',
    photo: '/panelists/patricia-asante.jpg', // Developer: Replace with actual photo
    panels: ['Investing in Aviation Infrastructure', 'Building Aviation Hubs'],
  },
  {
    id: 2,
    name: 'Dr. Kwame Osei',
    title: 'Chief Technology Officer, Ghana Aviation Authority',
    bio: 'Dr. Kwame Osei spearheads digital transformation initiatives across West African aviation. His pioneering work in AI-powered air traffic management and biometric passenger processing has improved efficiency by 40%. As a leading advocate for blockchain in aviation security, he develops cutting-edge solutions that enhance operational safety and transparency.',
    photo: '/panelists/kwame-osei.jpg', // Developer: Replace with actual photo
    panels: ['Sky-Tech Africa: Digital Transformation', 'Building Aviation Hubs'],
  },
  {
    id: 3,
    name: 'Caroline Muthoni',
    title: 'Human Resources Director, East African Aviation Academy',
    bio: 'Caroline Muthoni transforms aviation workforce development through innovative training programs and gender inclusion initiatives. Her leadership has increased female participation in technical aviation roles by 60% across East Africa. She designs comprehensive career pathways that address skill gaps while promoting diversity and sustainable employment in the aviation sector.',
    photo: '/panelists/caroline-muthoni.jpg', // Developer: Replace with actual photo
    panels: ['Human Capital', 'Cross-Sector Collaboration'],
  },
  {
    id: 4,
    name: 'Ahmed Farouk',
    title: 'Managing Partner, North African Aviation Logistics',
    bio: 'Ahmed Farouk orchestrates complex cargo operations connecting Africa with global markets. His expertise in cold chain logistics and pharmaceutical transport has made North Africa a critical hub for vaccine distribution. He champions sustainable logistics solutions and cross-border collaboration that strengthen regional trade relationships and economic integration.',
    photo: '/panelists/ahmed-farouk.jpg', // Developer: Replace with actual photo
    panels: ['Industries Powering Aviation', 'Building Aviation Hubs'],
  },
  {
    id: 5,
    name: 'Dr. Nalaka Perera',
    title: 'Senior Aviation Economist, International Air Transport Association',
    bio: 'Dr. Nalaka Perera provides economic analysis and policy guidance for African aviation markets. His research on tourism-aviation synergies has influenced government policies across 20 African countries. With expertise in market liberalization and route development, he identifies opportunities that maximize economic impact while ensuring sustainable industry growth.',
    photo: '/panelists/nalaka-perera.jpg', // Developer: Replace with actual photo
    panels: ['Cross-Sector Collaboration', 'Industries Powering Aviation'],
  },
  {
    id: 6,
    name: 'Fatou Diagne',
    title: 'Chief Operating Officer, West African Airways Union',
    bio: 'Fatou Diagne drives operational excellence and safety standards across West African airlines. Her leadership in maintenance harmonization and pilot training accreditation has enhanced regional aviation safety by 45%. She advocates for collaborative approaches to challenges, fostering partnerships that strengthen the entire West African aviation ecosystem.',
    photo: '/panelists/fatou-diagne.jpg', // Developer: Replace with actual photo
    panels: ['Cross-Sector Collaboration', 'Human Capital'],
  },
  {
    id: 7,
    name: 'Michael Banda',
    title: 'Infrastructure Development Manager, Southern African Development Community',
    bio: 'Michael Banda coordinates aviation infrastructure projects across 16 SADC member states. His expertise in airport modernization and regional connectivity has facilitated $800 million in infrastructure investments. He specializes in creating synergies between aviation development and broader economic growth, particularly in landlocked countries seeking improved connectivity.',
    photo: '/panelists/michael-banda.jpg', // Developer: Replace with actual photo
    panels: ['Investing in Aviation Infrastructure', 'Building Aviation Hubs'],
  },
  {
    id: 8,
    name: 'Rahma Said',
    title: 'Director of Innovation, Ethiopian Airlines Group',
    bio: 'Rahma Said leads digital innovation initiatives at Africa\'s largest airline group. Her work in passenger experience technology and operational automation has set new industry standards. She champions the integration of emerging technologies with traditional aviation operations, ensuring that innovation enhances rather than disrupts established safety and service protocols.',
    photo: '/panelists/rahma-said.jpg', // Developer: Replace with actual photo
    panels: ['Sky-Tech Africa: Digital Transformation', 'Industries Powering Aviation'],
  },
];

/**
 * PanelistCard Component
 * Interactive card displaying panelist information with hover animations
 */
interface PanelistCardProps {
  panelist: Panelist;
  onClick: () => void;
}

const PanelistCard = ({ panelist, onClick }: PanelistCardProps) => {
  const [isHovered, setIsHovered] = useState(false);
  const [imageError, setImageError] = useState(false);

  const handleMouseEnter = useCallback(() => setIsHovered(true), []);
  const handleMouseLeave = useCallback(() => setIsHovered(false), []);
  const handleImageError = useCallback(() => setImageError(true), []);

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
      onKeyDown={(e) => {
        if (e.key === 'Enter' || e.key === ' ') {
          e.preventDefault();
          onClick();
        }
      }}
    >
      {/* Panelist Photo */}
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
        />
      </div>

      {/* Panelist Info Card */}
      <div
        className={`absolute bottom-0 w-full bg-white rounded-xl shadow-lg transform transition-all duration-300 ease-in-out z-10
          ${
            isHovered ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
          }
        `}
      >
        <div className="pt-28 pb-6 flex flex-col items-center">
          <h3 className="text-base font-bold text-[#C2A542] text-center px-4">
            {panelist.name.toUpperCase()}
          </h3>
          <p className="text-sm text-gray-600 mt-1 text-center px-4 leading-relaxed">
            {panelist.title}
          </p>
          <div className="mt-2 text-xs text-[#1A252F] text-center px-4">
            {panelist.panels.length} Panel{panelist.panels.length > 1 ? 's' : ''}
          </div>
          <button
            onClick={(e) => {
              e.stopPropagation();
              onClick();
            }}
            className="mt-4 px-6 py-2 bg-[#C2A542] text-white text-sm rounded-full
                     hover:bg-[#A68F3A] transition-colors focus:outline-none focus:ring-2 focus:ring-[#C2A542] focus:ring-opacity-50"
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
 * Detailed view of panelist information
 */
interface PanelistModalProps {
  panelist: Panelist | null;
  onClose: () => void;
}

const PanelistModal = ({ panelist, onClose }: PanelistModalProps) => {
  const [imageError, setImageError] = useState(false);

  const handleKeyDown = useCallback((e: React.KeyboardEvent) => {
    if (e.key === 'Escape') {
      onClose();
    }
  }, [onClose]);

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
    >
      <div
        className="bg-white rounded-2xl max-w-6xl w-full overflow-hidden shadow-2xl"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="flex flex-row items-stretch">
          {/* Left Side - Photo */}
          <div className="w-1/3 relative bg-gray-100">
            <div className="h-full min-h-[500px]">
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

          {/* Right Side - Information */}
          <div className="w-2/3 p-8 flex flex-col">
            <div className="flex justify-between items-start mb-4">
              <div className="flex-1">
                <h2
                  id="panelist-modal-title"
                  className="text-2xl font-bold text-[#C2A542] mb-2"
                >
                  {panelist.name.toUpperCase()}
                </h2>
                <p className="text-base font-medium text-gray-600 mb-4">
                  {panelist.title}
                </p>

                {/* Panel Participation */}
                <div className="mb-4">
                  <h3 className="text-sm font-semibold text-[#1A252F] mb-2">
                    Panel Participation:
                  </h3>
                  <div className="flex flex-wrap gap-2">
                    {panelist.panels.map((panel, index) => (
                      <span
                        key={index}
                        className="px-3 py-1 bg-[#C2A542]/10 text-[#1A252F] text-xs rounded-full border border-[#C2A542]/20"
                      >
                        {panel}
                      </span>
                    ))}
                  </div>
                </div>
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
                  <line x1="18" y1="6" x2="6" y2="18"></line>
                  <line x1="6" y1="6" x2="18" y2="18"></line>
                </svg>
              </button>
            </div>

            <div className="border-t border-gray-200 mb-6"></div>

            {/* Biography */}
            <div className="flex-grow">
              <p className="text-gray-700 text-base leading-relaxed">
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
 * Displays panel discussion experts for AAIS 2025
 */
const PanelistGrid = () => {
  const [selectedPanelist, setSelectedPanelist] = useState<Panelist | null>(null);

  const handlePanelistSelect = useCallback((panelist: Panelist) => {
    setSelectedPanelist(panelist);
  }, []);

  const handleModalClose = useCallback(() => {
    setSelectedPanelist(null);
  }, []);

  const memoizedPanelists = useMemo(() => panelists, []);

  return (
    <section className="py-12 bg-white" aria-labelledby="panelists-heading">
      {/* Header Section */}
      <div className="padding-container max-container mb-20">
        <h2
          id="panelists-heading"
          className="text-3xl font-bold text-[#C2A542] mb-4"
        >
          Our Panelists
        </h2>

        {/* Decorative Line with Icon */}
        <div className="relative flex items-center justify-center mb-6">
          <hr className="w-full border-gray-300" />
          <span className="absolute right-0 bg-white px-2 text-[#C2A542]">
            {/* Panel discussion icon - Developer: Replace with preferred icon */}
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
                d="M18 18.72a9.094 9.094 0 003.741-.479 3 3 0 00-4.682-2.72m.94 3.198l.001.031c0 .225-.012.447-.037.666A11.944 11.944 0 0112 21c-2.17 0-4.207-.576-5.963-1.584A6.062 6.062 0 016 18.719m12 0a5.971 5.971 0 00-.941-3.197m0 0A5.995 5.995 0 0012 12.75a5.995 5.995 0 00-5.058 2.772m0 0a3 3 0 00-4.681 2.72 8.986 8.986 0 003.74.477m.94-3.197a5.971 5.971 0 00-.94 3.197M15 6.75a3 3 0 11-6 0 3 3 0 016 0zm6 3a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0zm-13.5 0a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0z"
              />
            </svg>
          </span>
        </div>

        <p className="text-base text-gray-600 max-w-5xl leading-relaxed">
          Discover the expert panelists facilitating dynamic discussions at AAIS 2025. These industry
          leaders will guide conversations on critical topics including aviation infrastructure investment,
          digital transformation, human capital development, and cross-sector collaboration that are
          shaping Africa's aviation future.
        </p>
      </div>

      {/* Panelists Grid */}
      <div className="flex items-center justify-center">
        <div className="padding-container max-container mx-auto px-4">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 justify-items-center">
            {memoizedPanelists.map((panelist) => (
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
      {selectedPanelist && (
        <PanelistModal
          panelist={selectedPanelist}
          onClose={handleModalClose}
        />
      )}
    </section>
  );
};

export default PanelistGrid;
