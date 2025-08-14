import ModeratorGrid from '@/components/ModeratorGrid';
import PanelistGrid from '@/components/PanelistGrid';
import SpeakersHero from '@/components/sections/SpeakersHero';
import SpeakerGrid from '@/components/SpeakerGrid';

/**
 * Speakers page for AAIS 2025.
 * @returns {JSX.Element} Speakers page content
 */
export default function SpeakersPage(): JSX.Element {
  return (
    <div className="space-y-4">
      <SpeakersHero />
      <SpeakerGrid />
      <PanelistGrid />
      <ModeratorGrid />
    </div>
  );
}
