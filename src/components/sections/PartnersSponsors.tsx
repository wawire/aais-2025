// components/sections/PartnersSponsors.tsx
export function PartnersSponsors(): JSX.Element {
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12">
          Trusted by Industry Leaders
        </h2>

        <div className="space-y-12">
          {/* Strategic Partners */}
          <div>
            <h3 className="text-lg font-semibold text-gray-600 text-center mb-8">
              Strategic Partners
            </h3>
            <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-8 items-center">
              {/* Partner logos */}
            </div>
          </div>

          {/* Sponsors */}
          <div>
            <h3 className="text-lg font-semibold text-gray-600 text-center mb-8">
              Platinum Sponsors
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-center">
              {/* Sponsor logos */}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
