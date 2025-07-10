/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/app/**/*.{js,ts,jsx,tsx}',
    './src/components/**/*.{js,ts,jsx,tsx}',
    './src/**/*.{js,ts,jsx,tsx}', // Added broader path to ensure all files are included
  ],
  theme: {
    extend: {
      colors: {
        aviationGold: '#C2A542',
      },
      fontFamily: {
        sans: ['Roboto Flex', 'Lucida Sans Demibold', 'Interstate', 'Helvetica', 'Arial', 'sans-serif'],
      },
    },
  },
  plugins: [],
};
