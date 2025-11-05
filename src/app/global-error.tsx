/**
 * Next.js 15+ Global Error Component
 * Handles errors in the root layout
 */

'use client';

import { useEffect } from 'react';

export default function GlobalError({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    // Log the error to console in development
    if (process.env.NODE_ENV === 'development') {
      console.error('Global error:', error);
    }
    // In production, log to error monitoring service
  }, [error]);

  return (
    <html lang="en">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <title>Error | AAIS 2025</title>
        <style
          dangerouslySetInnerHTML={{
            __html: `
              body {
                margin: 0;
                padding: 0;
                font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', sans-serif;
                background: linear-gradient(135deg, #f9fafb 0%, #e5e7eb 100%);
              }
              .container {
                min-height: 100vh;
                display: flex;
                align-items: center;
                justify-content: center;
                padding: 1rem;
              }
              .content {
                background: white;
                border-radius: 1rem;
                box-shadow: 0 20px 25px -5px rgba(0, 0, 0, 0.1);
                padding: 3rem;
                max-width: 600px;
                text-align: center;
              }
              .icon {
                width: 64px;
                height: 64px;
                margin: 0 auto 1.5rem;
                background: #fecaca;
                border-radius: 50%;
                display: flex;
                align-items: center;
                justify-content: center;
              }
              .icon svg {
                width: 32px;
                height: 32px;
                color: #dc2626;
              }
              h1 {
                font-size: 2rem;
                font-weight: bold;
                color: #1f2937;
                margin-bottom: 1rem;
              }
              p {
                font-size: 1.125rem;
                color: #6b7280;
                margin-bottom: 2rem;
              }
              .buttons {
                display: flex;
                gap: 1rem;
                justify-content: center;
                flex-wrap: wrap;
              }
              button, a {
                padding: 0.75rem 1.5rem;
                border-radius: 0.5rem;
                font-weight: 500;
                text-decoration: none;
                cursor: pointer;
                transition: all 0.3s;
              }
              .btn-primary {
                background: #C2A542;
                color: white;
                border: none;
              }
              .btn-primary:hover {
                background: #a68b35;
                transform: scale(1.05);
              }
              .btn-secondary {
                background: white;
                color: #374151;
                border: 2px solid #d1d5db;
              }
              .btn-secondary:hover {
                background: #f9fafb;
                transform: scale(1.05);
              }
            `,
          }}
        />
      </head>
      <body>
        <div className="container">
          <div className="content">
            <div className="icon">
              <svg fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z"
                />
              </svg>
            </div>

            <h1>Application Error</h1>
            <p>A critical error occurred. Please try refreshing the page.</p>

            {process.env.NODE_ENV === 'development' && (
              <details style={{ textAlign: 'left', marginBottom: '2rem' }}>
                <summary style={{ cursor: 'pointer', marginBottom: '0.5rem' }}>
                  Error Details
                </summary>
                <pre
                  style={{
                    fontSize: '0.75rem',
                    color: '#dc2626',
                    overflow: 'auto',
                    padding: '1rem',
                    background: '#f9fafb',
                    borderRadius: '0.5rem',
                  }}
                >
                  {error.message}
                </pre>
              </details>
            )}

            <div className="buttons">
              <button onClick={reset} className="btn-primary">
                Try Again
              </button>
              <a href="/" className="btn-secondary">
                Go Home
              </a>
            </div>
          </div>
        </div>
      </body>
    </html>
  );
}
