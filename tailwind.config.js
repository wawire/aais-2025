/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/app/**/*.{js,ts,jsx,tsx}',
    './src/components/**/*.{js,ts,jsx,tsx}',
    './src/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      // Enhanced color palette while keeping your aviationGold
      colors: {
        aviationGold: '#C2A542',
        charcoal: {
          50: '#f8fafc',
          100: '#f1f5f9',
          200: '#e2e8f0',
          300: '#cbd5e1',
          400: '#94a3b8',
          500: '#64748b',
          600: '#475569',
          700: '#334155',
          800: '#1e293b',
          900: '#1a202c',
          950: '#0f172a',
        },
        softGray: {
          50: '#f8fafc',
          100: '#f1f5f9',
          200: '#e2e8f0',
          300: '#cbd5e1',
          400: '#94a3b8',
          500: '#64748b',
          600: '#475569',
          700: '#334155',
          800: '#1e293b',
          900: '#0f172a',
        },
        midnightBlue: {
          50: '#eff6ff',
          100: '#dbeafe',
          200: '#bfdbfe',
          300: '#93c5fd',
          400: '#60a5fa',
          500: '#3b82f6',
          600: '#2563eb',
          700: '#1d4ed8',
          800: '#1e3a8a',
          900: '#1e40af',
          950: '#172554',
        },
        aviationOrange: {
          50: '#fff7ed',
          100: '#ffedd5',
          200: '#fed7aa',
          300: '#fdba74',
          400: '#fb923c',
          500: '#f97316',
          600: '#ea580c',
          700: '#c2410c',
          800: '#9a3412',
          900: '#7c2d12',
        },
      },

      // Enhanced typography configuration
      fontFamily: {
        sans: [
          'Roboto Flex',
          'Lucida Sans Demibold',
          'Interstate',
          'Helvetica',
          'Arial',
          'sans-serif'
        ],
        heading: [
          'Interstate',
          'Lucida Sans Demibold',
          'Roboto Flex',
          'Helvetica',
          'Arial',
          'sans-serif'
        ],
        accent: [
          'Lucida Sans Demibold',
          'Lucida Sans',
          'Interstate',
          'Helvetica',
          'Arial',
          'sans-serif'
        ],
        body: [
          'Roboto Flex',
          'Lucida Sans',
          'Interstate',
          'Helvetica',
          'Arial',
          'sans-serif'
        ],
      },

      // Typography scale for aviation luxury theme
      fontSize: {
        // Display sizes for hero sections
        'display-2xl': ['4.5rem', { lineHeight: '1.1', letterSpacing: '-0.02em' }], // 72px
        'display-xl': ['3.75rem', { lineHeight: '1.1', letterSpacing: '-0.02em' }], // 60px
        'display-lg': ['3rem', { lineHeight: '1.15', letterSpacing: '-0.01em' }],    // 48px

        // Heading sizes
        'heading-xl': ['2.25rem', { lineHeight: '1.2', letterSpacing: '-0.01em' }], // 36px
        'heading-lg': ['1.875rem', { lineHeight: '1.25', letterSpacing: '-0.005em' }], // 30px
        'heading-md': ['1.5rem', { lineHeight: '1.3', letterSpacing: '0em' }],      // 24px
        'heading-sm': ['1.25rem', { lineHeight: '1.35', letterSpacing: '0em' }],    // 20px

        // Body text
        'body-xl': ['1.125rem', { lineHeight: '1.6', letterSpacing: '0em' }],       // 18px
        'body-lg': ['1rem', { lineHeight: '1.65', letterSpacing: '0em' }],          // 16px
        'body-md': ['0.875rem', { lineHeight: '1.7', letterSpacing: '0.01em' }],    // 14px
        'body-sm': ['0.75rem', { lineHeight: '1.75', letterSpacing: '0.02em' }],    // 12px

        // Specialty sizes
        'caption': ['0.6875rem', { lineHeight: '1.6', letterSpacing: '0.03em' }],   // 11px
        'overline': ['0.625rem', { lineHeight: '1.5', letterSpacing: '0.1em' }],    // 10px
      },

      // Enhanced font weights
      fontWeight: {
        hairline: '100',
        thin: '200',
        light: '300',
        normal: '400',
        medium: '500',
        semibold: '600',
        bold: '700',
        extrabold: '800',
        black: '900',
      },

      // Letter spacing refinements
      letterSpacing: {
        tightest: '-0.025em',
        tighter: '-0.02em',
        tight: '-0.01em',
        normal: '0em',
        wide: '0.01em',
        wider: '0.02em',
        widest: '0.1em',
      },

      // Line height improvements
      lineHeight: {
        none: '1',
        tight: '1.1',
        snug: '1.15',
        normal: '1.25',
        relaxed: '1.35',
        comfortable: '1.5',
        loose: '1.65',
        extra: '1.75',
      },

      // Enhanced spacing for relaxed luxury feel
      spacing: {
        '18': '4.5rem',
        '22': '5.5rem',
        '26': '6.5rem',
        '30': '7.5rem',
        '128': '32rem',
        '144': '36rem',
      },

      // Typography-specific margins and padding
      typography: {
        DEFAULT: {
          css: {
            maxWidth: '75ch',
            color: 'var(--tw-prose-body)',
            lineHeight: '1.65',
            fontSize: '1rem',
            fontFamily: 'Roboto Flex, sans-serif',
          },
        },
        lg: {
          css: {
            fontSize: '1.125rem',
            lineHeight: '1.6',
            maxWidth: '70ch',
          },
        },
        xl: {
          css: {
            fontSize: '1.25rem',
            lineHeight: '1.55',
            maxWidth: '65ch',
          },
        },
      },

      // Smooth transitions for premium feel
      transitionDuration: {
        '400': '400ms',
        '600': '600ms',
      },
    },
  },

  plugins: [
    require('@tailwindcss/typography'),
    require('@tailwindcss/forms'),
  ],
};
