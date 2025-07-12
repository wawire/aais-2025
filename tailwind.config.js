/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/app/**/*.{js,ts,jsx,tsx}',
    './src/components/**/*.{js,ts,jsx,tsx}',
    './src/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      // Enhanced color palette matching the Hero component requirements
      colors: {
        aviationGold: {
          DEFAULT: '#C2A542', // Your exact color
          50: '#F5F2E8',
          100: '#EDE7D1',
          200: '#DDCFA3',
          300: '#CDB775',
          400: '#C2A542',
          500: '#A68B35',
          600: '#8A7129',
          700: '#6E571D',
          800: '#523D11',
          900: '#362305',
        },

        // Fixed charcoal colors to match the Hero component
        charcoal: {
          50: '#F7F7F7',
          100: '#E1E1E1',
          200: '#CFCFCF',
          300: '#B1B1B1',
          400: '#9E9E9E',
          500: '#7E7E7E',
          600: '#525252',    // Updated to match Button component
          700: '#404040',    // Updated to match Button component
          800: '#2d2d2d',    // Updated to match CSS variables
          900: '#1a1a1a',    // Updated to match CSS variables
          950: '#0f0f0f',
        },

        // Sage colors from the original requirements
        sage: {
          50: '#F6F7F6',
          100: '#E3E7E3',
          200: '#C7D2C7',
          300: '#A1B5A1',
          400: '#7A9A7A',
          500: '#6b7280', // Main sage color mentioned in requirements
          600: '#5A6C5A',
          700: '#4A5A4A',
          800: '#3A4A3A',
          900: '#2A3A2A',
        },

        // Keeping your excellent additional colors
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

      // Enhanced font configuration matching your design system
      fontFamily: {
        sans: [
          'Roboto Flex',
          'Lucida Sans',
          'Interstate',
          'Helvetica',
          'Arial',
          'sans-serif'
        ],
        heading: [
          'Interstate',
          'Lucida Sans Demibold',
          'Roboto Flex',
          'Helvetica Neue',
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
          'Segoe UI',
          'Roboto',
          'Helvetica',
          'Arial',
          'sans-serif'
        ],
      },

      // Adding font weights for better typography
      fontWeight: {
        demibold: '600',
      },

      // Your excellent spacing enhancements
      spacing: {
        '18': '4.5rem',
        '22': '5.5rem',
        '26': '6.5rem',
        '30': '7.5rem',
        '88': '22rem',    // Added for potential use
        '128': '32rem',
        '144': '36rem',
      },

      // Adding the morphing animations for the Hero component
      animation: {
        'morph': 'morph 20s ease-in-out infinite',
        'morph-reverse': 'morph-reverse 25s ease-in-out infinite',
        'pulse-slow': 'pulse 3s cubic-bezier(0.4, 0, 0.6, 1) infinite',
      },

      // Keyframes for the morphing shapes in Hero
      keyframes: {
        morph: {
          '0%': {
            transform: 'scale(1) rotate(0deg)',
            borderRadius: '60% 40% 30% 70% / 60% 30% 70% 40%',
          },
          '25%': {
            transform: 'scale(1.1) rotate(90deg)',
            borderRadius: '30% 60% 70% 40% / 50% 60% 30% 60%',
          },
          '50%': {
            transform: 'scale(0.9) rotate(180deg)',
            borderRadius: '50% 60% 30% 60% / 60% 40% 60% 40%',
          },
          '75%': {
            transform: 'scale(1.05) rotate(270deg)',
            borderRadius: '60% 40% 60% 40% / 30% 60% 40% 70%',
          },
          '100%': {
            transform: 'scale(1) rotate(360deg)',
            borderRadius: '60% 40% 30% 70% / 60% 30% 70% 40%',
          },
        },
        'morph-reverse': {
          '0%': {
            transform: 'scale(1) rotate(360deg)',
            borderRadius: '40% 60% 70% 30% / 40% 70% 30% 60%',
          },
          '25%': {
            transform: 'scale(0.9) rotate(270deg)',
            borderRadius: '70% 30% 40% 60% / 60% 40% 70% 30%',
          },
          '50%': {
            transform: 'scale(1.1) rotate(180deg)',
            borderRadius: '30% 70% 60% 40% / 40% 60% 40% 60%',
          },
          '75%': {
            transform: 'scale(0.95) rotate(90deg)',
            borderRadius: '60% 40% 30% 70% / 70% 30% 60% 40%',
          },
          '100%': {
            transform: 'scale(1) rotate(0deg)',
            borderRadius: '40% 60% 70% 30% / 40% 70% 30% 60%',
          },
        },
      },

      // Enhanced transitions for premium feel
      transitionDuration: {
        '400': '400ms',
        '600': '600ms',
        '800': '800ms',
      },

      // Adding some additional utilities for the Hero component
      screens: {
        'xs': '475px',
      },

      // Backdrop blur for glass morphism effects
      backdropBlur: {
        xs: '2px',
      },
    },
  },

  // Safelist to ensure our custom classes aren't purged
  safelist: [
    // Aviation Gold variations
    'bg-aviationGold',
    'text-aviationGold',
    'border-aviationGold',
    'hover:bg-aviationGold/90',
    'focus:ring-aviationGold',

    // Charcoal variations used in components
    'bg-charcoal-600',
    'bg-charcoal-700',
    'bg-charcoal-800',
    'bg-charcoal-900',
    'hover:bg-charcoal-600',
    'text-charcoal-900',
    'focus:ring-charcoal-500',
    'border-charcoal-600',

    // Glass morphism and transparency
    'bg-charcoal-800/60',
    'bg-charcoal-800/50',
    'bg-charcoal-900/90',
    'bg-charcoal-900/80',
    'bg-charcoal-900/60',
    'bg-charcoal-900/40',

    // Animation classes
    'animate-morph',
    'animate-morph-reverse',

    // Focus ring offset for dark backgrounds
    'focus:ring-offset-charcoal-900',
  ],

  // Your excellent plugins
  plugins: [
    require('@tailwindcss/typography'),
    require('@tailwindcss/forms'),
  ],
};
