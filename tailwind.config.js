/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.tsx'],
  theme: {
    colors: {
      'mint': '#3BBA9C',
      'mintLight': '#63EFCE',
      'darkBlue': '#2E3047',
    },
    extend: {
      fontFamily: {
        'roboto': ['Roboto Mono', 'sans-serif'],
      },
      dropShadow: {
        'custom': '0 4px 4px rgba(0, 0, 0, 0.25)',
      }
    },
    plugins: [],
  },
};
