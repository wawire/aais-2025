import Link from 'next/link';

/**
 * Interface defining the props for the Footer component.
 * @interface FooterProps
 */
interface FooterProps {
  year?: number; // Optional year for copyright
}

/**
 * Footer component for AAIS 2025 with contact, social links, navigation, and legal info.
 * Implements a charcoal/dark theme with responsive design and accessibility features.
 * @param {FooterProps} props - Component props
 * @param {number} [props.year] - Optional year for copyright (defaults to current year)
 * @returns {JSX.Element} Rendered Footer component
 */
export function Footer({ year = new Date().getFullYear() }: FooterProps): JSX.Element {
  return (
    <footer className="bg-gray-900 text-gray-200 py-6 border-t border-gray-800">
      <div className="container mx-auto px-4 lg:px-8">
        {/* Contact Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-6">
          <div className="col-span-1 md:col-span-2 lg:col-span-1">
            <h3 className="text-lg font-semibold text-aviationGold mb-2">Contact Us</h3>
            <p className="demibold">
              Email: <a href="mailto:aais@kenya-airways.com" className="text-aviationGold hover:underline" aria-label="Email AAIS">aais@kenya-airways.com</a>
            </p>
            <p className="demibold mt-1">
              Phone: <a href="tel:+254716851914" className="text-aviationGold hover:underline" aria-label="Call AAIS">+254 716 851 914</a>
            </p>
          </div>

          {/* Navigation Section */}
          <div>
            <h3 className="text-lg font-semibold text-aviationGold mb-2">Quick Links</h3>
            <ul className="space-y-1">
              <li>
                <Link href="/" className="text-gray-200 hover:text-aviationGold demibold" aria-label="Home">Home</Link>
              </li>
              <li>
                <Link href="/about" className="text-gray-200 hover:text-aviationGold demibold" aria-label="About AAIS">About</Link>
              </li>
              <li>
                <Link href="/agenda" className="text-gray-200 hover:text-aviationGold demibold" aria-label="Agenda">Agenda</Link>
              </li>
              <li>
                <Link href="/register" className="text-gray-200 hover:text-aviationGold demibold" aria-label="Register">Register</Link>
              </li>
            </ul>
          </div>

          {/* Social Media Section */}
          <div>
            <h3 className="text-lg font-semibold text-aviationGold mb-2">Follow Us</h3>
            <div className="flex flex-col space-y-2">
              <a href="https://twitter.com/AAIS2025" className="text-aviationGold hover:underline demibold" aria-label="Twitter" target="_blank" rel="noopener noreferrer">Twitter</a>
              <a href="https://linkedin.com/company/AAIS2025" className="text-aviationGold hover:underline demibold" aria-label="LinkedIn" target="_blank" rel="noopener noreferrer">LinkedIn</a>
            </div>
          </div>

          {/* Legal Section */}
          <div>
            <h3 className="text-lg font-semibold text-aviationGold mb-2">Legal</h3>
            <p className="demibold">© {year} Kenya Airways PLC</p>
            <p className="mt-1 demibold">
              <Link href="/terms" className="text-gray-200 hover:text-aviationGold" aria-label="Terms of Service">Terms of Service</Link> |{' '}
              <Link href="/privacy" className="text-gray-200 hover:text-aviationGold" aria-label="Privacy Policy">Privacy Policy</Link>
            </p>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-800 pt-4 text-center text-sm text-gray-400">
          <p>
            Africa Aviation Innovation Summit 2025 | All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
