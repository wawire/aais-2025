// src/app/agenda/page.tsx
import AgendaHero from '@/components/sections/AgendaHero';
import AgendaViewer from '@/components/sections/AgendaViewer';

export default function AgendaPage(): JSX.Element {
  return (
    <>
      <AgendaHero />
      <AgendaViewer />
    </>
  );
}
