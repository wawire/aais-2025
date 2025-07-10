import Link from 'next/link';

/**
 * Footer with contact and social links for AAIS 2025.
 * @returns {JSX.Element} Footer component
 */
export function Footer(): JSX.Element {
  return (
    <footer className="bg-gray-800 text-white py-4">
      <div className="container mx-auto px-4 text-center">
        <p>Email: <a href="mailto:aais@kenya-airways.com" aria-label="Email AAIS">aais@kenya-airways.com</a></p>
        <p>Phone: <a href="tel:+254716851914" aria-label="Call AAIS">+254 716 851 914</a></p>
        <div className="flex justify-center space-x-4 mt-2">
          <a href="https://twitter.com/AAIS2025" aria-label="Twitter" target="_blank" rel="noopener noreferrer">Twitter</a>
          <a href="https://linkedin.com/company/AAIS2025" aria-label="LinkedIn" target="_blank" rel="noopener noreferrer">LinkedIn</a>
        </div>
        <p className="mt-2">© 2025 Kenya Airways PLC</p>
      </div>
    </footer>
  );
}
