// components/sections/ConferenceTracks.tsx
interface Track {
  id: string;
  title: string;
  description: string;
  sessions: number;
  color: string;
  topics: string[];
}

export function ConferenceTracks(): JSX.Element {
  const tracks: Track[] = [
    {
      id: "innovation",
      title: "Aviation Innovation",
      description: "Exploring cutting-edge technologies transforming African aviation",
      sessions: 12,
      color: "bg-blue-600",
      topics: ["eVTOL", "Sustainable Aviation", "Digital Transformation"]
    },
    {
      id: "infrastructure",
      title: "Infrastructure Development",
      description: "Building the foundation for Africa's aviation future",
      sessions: 10,
      color: "bg-green-600",
      topics: ["Airport Modernization", "Air Traffic Management", "Connectivity"]
    },
    {
      id: "policy",
      title: "Policy & Regulation",
      description: "Regulatory frameworks enabling aviation growth across Africa",
      sessions: 8,
      color: "bg-orange-600",
      topics: ["SAATM Implementation", "Safety Standards", "Investment Policy"]
    }
  ];

  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-16">Conference Tracks</h2>
        <div className="grid lg:grid-cols-3 gap-8">
          {tracks.map((track) => (
            <div key={track.id} className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow">
              <div className={`${track.color} h-2`}></div>
              {/* Track content */}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
