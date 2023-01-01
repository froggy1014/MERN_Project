/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{ts,tsx,js,jsx}', './public/index.html'],
  theme: {
    screens: {
      sm: '480px',
      md: '768px',
      lg: '976px',
      xl: '1440px',
    },
    colors: {
      shyGreen: {
        100: '#e3fbf0',
        200: '#acf2d3',
        300: '#75eab5',
        400: '#3ee198',
        500: '#1ec178',
        600: '#158a56',
        700: '#0d5333',
        800: '#041c11',
      },
    },
  },
  extend: {
    fontFamily: {
      standard: ['"Kalam"'],
    },
  },
  plugins: [],
};
