/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/app/**/*.{js,ts,jsx,tsx}',
    './src/components/**/*.{js,ts,jsx,tsx}',
    './src/**/*.{js,ts,jsx,tsx}', // Your existing broader path
  ],
  theme: {
    extend: {
      // Enhanced color palette while keeping your aviationGold
      colors: {
        aviationGold: '#C2A542', // Your exact color

        // Additional aviation-inspired colors for luxury feel
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
          900: '#1a202c', // Deep charcoal for luxury backgrounds
          950: '#0f172a',
        },

        // Soft grays for relaxed backgrounds
        softGray: {
          50: '#f8fafc',
          100: '#f1f5f9',
          200: '#e2e8f0', // Light background
          300: '#cbd5e1',
          400: '#94a3b8',
          500: '#64748b',
          600: '#475569',
          700: '#334155',
          800: '#1e293b',
          900: '#0f172a',
        },

        // Midnight blue for accents
        midnightBlue: {
          50: '#eff6ff',
          100: '#dbeafe',
          200: '#bfdbfe',
          300: '#93c5fd',
          400: '#60a5fa',
          500: '#3b82f6',
          600: '#2563eb',
          700: '#1d4ed8',
          800: '#1e3a8a', // Aviation blue
          900: '#1e40af',
          950: '#172554',
        },

        // Orange accents as mentioned in your design system
        aviationOrange: {
          50: '#fff7ed',
          100: '#ffedd5',
          200: '#fed7aa',
          300: '#fdba74',
          400: '#fb923c',
          500: '#f97316', // Primary orange
          600: '#ea580c',
          700: '#c2410c',
          800: '#9a3412',
          900: '#7c2d12',
        },
      },

      // Your exact font configuration enhanced
      fontFamily: {
        sans: [
          'Roboto Flex',           // Your primary font (body paragraphs)
          'Lucida Sans Demibold',  // Your accent font
          'Interstate',            // Your heading font
          'Helvetica',
          'Arial',
          'sans-serif'
        ],
        // Adding specific font stacks based on your design system
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

      // Enhanced spacing for relaxed luxury feel
      spacing: {
        '18': '4.5rem',   // 72px
        '22': '5.5rem',   // 88px
        '26': '6.5rem',   // 104px
        '30': '7.5rem',   // 120px
        '128': '32rem',   // 512px
        '144': '36rem',   // 576px
      },

      // Sophisticated border radius for modern aesthetics
      borderRadius: {
        'xl': '0.75rem',  // 12px
        '2xl': '1rem',    // 16px
        '3xl': '1.5rem',  // 24px
        '4xl': '2rem',    // 32px
      },

      // Custom shadows for luxury depth
      boxShadow: {
        'luxury': '0 10px 25px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)',
        'aviation': '0 20px 25px -5px rgba(26, 32, 44, 0.1), 0 10px 10px -5px rgba(26, 32, 44, 0.04)',
        'gold-glow': '0 0 20px rgba(194, 165, 66, 0.3)',
      },

      // Smooth transitions for premium feel
      transitionDuration: {
        '400': '400ms',
        '600': '600ms',
      },
    },
  },

  // Essential plugins for production-ready styling
  plugins: [
    require('@tailwindcss/typography'),
    require('@tailwindcss/forms'),
  ],
};
