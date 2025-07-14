// components/sections/FeaturedSpeakers.tsx
import { ArrowRightIcon } from '@heroicons/react/24/outline';
import Image from 'next/image';
import Link from 'next/link';

interface Speaker {
  id: string;
  name: string;
  title: string;
  company: string;
  image: string;
  expertise: string[];
  sessionType: string;
}

/**
 * Featured speakers section highlighting key AAIS 2025 industry leaders
 * Showcases confirmed speakers from Kenya Airways, AFRAA, and government
 */
export function FeaturedSpeakers(): JSX.Element {
  const speakers: Speaker[] = [
    {
      id: "allan-kilavuka",
      name: "Allan Kilavuka",
      title: "Group Managing Director & CEO",
      company: "Kenya Airways PLC",
      image: "/images/speakers/allan-kilavuka.jpg",
      expertise: ["Vision 2035", "African Aviation Leadership", "Strategic Growth"],
      sessionType: "Keynote Speaker"
    },
    {
      id: "abderahmane-berthe",
      name: "Abderahmane Berthe",
      title: "Secretary General",
      company: "African Airlines Association (AFRAA)",
      image: "/images/speakers/abderahmane-berthe.jpg",
      expertise: ["African Aviation Policy", "Regional Integration", "Industry Standards"],
      sessionType: "Opening Ceremony"
    },
    {
      id: "hellen-mwariri",
      name: "Hellen Mwariri",
      title: "Chief Information Security Officer",
      company: "Kenya Airways",
      image: "/images/speakers/hellen-mwariri.jpg",
      expertise: ["Digital Security", "Aviation Technology", "Cybersecurity"],
      sessionType: "Digital Transformation Panel"
    }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Industry Visionaries Leading the Conversation
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Learn from aviation leaders, policymakers, and innovators shaping Africa's aviation future
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {speakers.map((speaker) => (
            <div
              key={speaker.id}
              className="bg-white border border-gray-200 rounded-xl shadow-lg hover:shadow-xl transition-shadow p-6"
            >
              <div className="text-center">
                <div className="relative w-32 h-32 mx-auto mb-6">
                  <Image
                    src={speaker.image}
                    alt={`${speaker.name} - ${speaker.title}`}
                    fill
                    className="rounded-full object-cover"
                  />
                </div>

                <div className="mb-4">
                  <span className="inline-block px-3 py-1 bg-aviationGold text-white text-sm rounded-full mb-3">
                    {speaker.sessionType}
                  </span>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">{speaker.name}</h3>
                  <p className="text-gray-600 mb-1">{speaker.title}</p>
                  <p className="text-gray-500 font-medium">{speaker.company}</p>
                </div>

                <div className="flex flex-wrap gap-2 justify-center">
                  {speaker.expertise.map((skill, index) => (
                    <span
                      key={index}
                      className="px-2 py-1 bg-gray-100 text-gray-700 text-xs rounded"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <Link
            href="/speakers"
            className="inline-flex items-center px-8 py-3 bg-aviationGold text-white rounded-lg hover:bg-yellow-600 transition-colors font-semibold"
          >
            View All Speakers & Agenda
            <ArrowRightIcon className="ml-2 h-5 w-5" />
          </Link>
        </div>
      </div>
    </section>
  );
}
