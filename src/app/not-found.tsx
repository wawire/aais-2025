import { Metadata } from 'next';

export const metadata: Metadata = {
  title: '404 - Page Not Found | AAIS 2025',
  description: 'The page you are looking for could not be found.',
};

export default function NotFound() {
  return (
    <html lang="en">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <title>404 - Page Not Found | AAIS 2025</title>
        {/* Add your favicon and basic styles */}
        <style
          dangerouslySetInnerHTML={{
            __html: `
            body {
              font-family: system-ui, -apple-system, sans-serif;
              margin: 0;
              padding: 0;
              background: #f9fafb;
            }
            .container {
              min-height: 100vh;
              display: flex;
              align-items: center;
              justify-content: center;
              padding: 1rem;
            }
            .content {
              text-align: center;
              max-width: 500px;
            }
            .error-code {
              font-size: 4rem;
              font-weight: bold;
              color: #1f2937;
              margin-bottom: 1rem;
            }
            .error-title {
              font-size: 1.5rem;
              color: #374151;
              margin-bottom: 1rem;
            }
            .error-description {
              color: #6b7280;
              margin-bottom: 2rem;
              line-height: 1.6;
            }
            .btn {
              display: inline-block;
              background: #3b82f6;
              color: white;
              padding: 0.75rem 1.5rem;
              text-decoration: none;
              border-radius: 0.5rem;
              font-weight: 500;
              margin: 0.25rem;
              transition: background-color 0.2s;
            }
            .btn:hover {
              background: #2563eb;
            }
            .links {
              margin-top: 2rem;
              display: flex;
              flex-wrap: wrap;
              justify-content: center;
              gap: 1rem;
            }
            .link {
              color: #3b82f6;
              text-decoration: none;
            }
            .link:hover {
              text-decoration: underline;
            }
            @media (max-width: 640px) {
              .error-code { font-size: 3rem; }
              .links { flex-direction: column; }
            }
          `,
          }}
        />
      </head>
      <body>
        <div className="container">
          <div className="content">
            <div className="error-code">404</div>
            <h1 className="error-title">Page Not Found</h1>
            <p className="error-description">
              Sorry, we couldn't find the page you're looking for. The page may have been moved,
              deleted, or the URL might be incorrect.
            </p>

            <div>
              <a href="/" className="btn">
                Go Home
              </a>
            </div>

            <div className="links">
              <a href="/about" className="link">
                About
              </a>
              <a href="/speakers" className="link">
                Speakers
              </a>
              <a href="/agenda" className="link">
                Agenda
              </a>
              <a href="/register" className="link">
                Register
              </a>
              <a href="/venue" className="link">
                Venue
              </a>
              <a href="/contact" className="link">
                Contact
              </a>
            </div>
          </div>
        </div>

        {/* Optional: Client-side redirect for common patterns */}
        <script
          dangerouslySetInnerHTML={{
            __html: `
            // Handle common redirect patterns
            const path = window.location.pathname;
            const redirects = {
              '/about.html': '/about/',
              '/speakers.html': '/speakers/',
              '/register.html': '/register/',
              '/venue.html': '/venue/',
              '/contact.html': '/contact/',
              '/registration': '/register/',
              '/speakers-list': '/speakers/'
            };

            if (redirects[path]) {
              window.location.replace(redirects[path]);
            }
          `,
          }}
        />
      </body>
    </html>
  );
}
