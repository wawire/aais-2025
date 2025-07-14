import BaseHero from '../ui/BaseHero';

/**
 * AgendaHero component for the AAIS 2025 agenda page

 */
const AgendaHero: React.FC = () => {
  return (
    <BaseHero
      backgroundClass="bg-hero-agenda"
      overlay="aviation"
      className="pt-30 md:pt-40 pb-10 md:pb-20"
    >
      <div className="text-center mb-10 max-w-4xl mx-auto  pb-4">
        <h1 className="text-4xl md:text-5xl font-bold font-heading text-aviationGold mb-2">
          Africa Aviation Innovation Summit 2025 Agenda
        </h1>
        <p className="text-xl font-body text-gray-300">
          Theme: Investing in Africa’s Aviation Future: Unlocking Opportunities for Growth and Transformation through Innovation
        </p>
        <p className="text-md text-gray-400 mt-1">Mombasa, Kenya • 06th – 07th November 2025</p>
      </div>
    </BaseHero>
  );
};

export default AgendaHero;
