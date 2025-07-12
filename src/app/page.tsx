import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Home',
  description: 'Welcome to Africa Aviation Innovation Summit 2025',
};

/**
 * Home page for AAIS 2025.
 * Features hero section with call-to-action and key information.
 */
export default function HomePage(): JSX.Element {
  return (
    <div className="text-content">
      {/* Hero Section */}
      <section className="text-center py-12 mb-12 bg-black">
        <h1 className="text-4xl md:text-6xl font-bold text-aviationGold mb-6">
          Welcome to AAIS 2025
        </h1>
        <p className="text-xl md:text-2xl text-gray-600 mb-8 demibold">
          Africa Aviation Innovation Summit 2025
        </p>
        <p className="text-lg text-gray-700 mb-8 max-w-3xl mx-auto">
          Join us for the premier aviation innovation event in Africa, where industry leaders,
          innovators, and stakeholders come together to shape the future of African aviation.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a href="/register" className="btn-primary">
            Register Now
          </a>
          <a href="/agenda" className="btn-secondary">
            View Agenda
          </a>
        </div>
      </section>
<section className="text-center py-12 mb-12 bg-black">
        <h1 className="text-4xl md:text-6xl font-bold text-aviationGold mb-6">
          Welcome to AAIS 2025
        </h1>
        <p className="text-xl md:text-2xl text-gray-600 mb-8 demibold">
          Africa Aviation Innovation Summit 2025
        </p>
        <p className="text-lg text-gray-700 mb-8 max-w-3xl mx-auto">
          Join us for the premier aviation innovation event in Africa, where industry leaders,
          innovators, and stakeholders come together to shape the future of African aviation.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a href="/register" className="btn-primary">
            Register Now
          </a>
          <a href="/agenda" className="btn-secondary">
            View Agenda
          </a>
        </div>
      </section>
      {/* Key Information */}
      <section className="grid md:grid-cols-3 gap-8 mb-12">
        <div className="text-center p-6 bg-gray-50 rounded-lg">
          <h3 className="text-xl font-semibold text-aviationGold mb-3">
            Innovation Focus
          </h3>
          <p className="text-gray-700">
            Discover cutting-edge technologies and solutions transforming African aviation.
          </p>
        </div>
        <div className="text-center p-6 bg-gray-50 rounded-lg">
          <h3 className="text-xl font-semibold text-aviationGold mb-3">
            Industry Leaders
          </h3>
          <p className="text-gray-700">
            Connect with top executives and thought leaders from across the continent.
          </p>
        </div>
        <div className="text-center p-6 bg-gray-50 rounded-lg">
          <h3 className="text-xl font-semibold text-aviationGold mb-3">
            Networking
          </h3>
          <p className="text-gray-700">
            Build valuable partnerships and expand your professional network.
          </p>
        </div>
        <section className="text-center py-12 mb-12 bg-black">
        <h1 className="text-4xl md:text-6xl font-bold text-aviationGold mb-6">
          Welcome to AAIS 2025
        </h1>
        <p className="text-xl md:text-2xl text-gray-600 mb-8 demibold">
          Africa Aviation Innovation Summit 2025
        </p>
        <p className="text-lg text-gray-700 mb-8 max-w-3xl mx-auto">
          Join us for the premier aviation innovation event in Africa, where industry leaders,
          innovators, and stakeholders come together to shape the future of African aviation.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a href="/register" className="btn-primary">
            Register Now
          </a>
          <a href="/agenda" className="btn-secondary">
            View Agenda
          </a>
        </div>
      </section>
      </section>
    </div>
  );
}
