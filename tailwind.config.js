/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{ts,tsx,js,jsx}', './public/index.html'],
  theme: {
    extend: {
      screens: {
        sm: '480px',
        md: '768px',
        lg: '976px',
        xl: '1440px',
      },
      textColor: {
        white: '#FFF',
        black: '#000',
        ivory: '#fbed9c',
        shyGreen: '#1ec178',
        danger: '#ff0055',
        red: '#ff0000',
        body: '#4d4d4d',
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
        gray: {
          100: '#f8f8f8',
          200: '#C0C0C0',
          300: '#A5A5A5',
          400: '#8A8A8A',
          500: '#717171',
          600: '#585858',
          700: '#414141',
          800: '#2B2B2B',
        },
        red: '#ff0000',
        ivory: '#fbed9c',
        white: '#FFF',
        black: '#000',
        body: '#4d4d4d',
        disabled: '#cccccc',
        transparent: 'transparent',
      },
    },
  },

  plugins: [],
};
