/** @type {import('tailwindcss').Config} */
const defaultTheme = require('tailwindcss/defaultTheme');

module.exports = {
  content: ['src/**/*.tsx'],
  theme: {
    extend: {
      black: 'hsla(150, 29%, 11%, 1)',
      primary: {
        DEFAULT: 'hsla(151, 63%, 42%, 1)',
        foreground: 'hsla(0, 0%, 100%, 1)',
      },
      muted: {
        DEFAULT: 'hsla(150, 12%, 40%, 0.7)',
        alt: 'hsla(150, 29%, 11%, 0.7)',
        home: 'hsla(240, 0%, 59%, 1)',
      },
    },
  },
  plugins: [],
};
