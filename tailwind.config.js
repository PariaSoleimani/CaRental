/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./*.html'],
  theme: {
    screens: {
      xs: '480px',
      sm: '580px',
      md: '780px',
      lg: '990px',
      xl: '1024px',
    },
    fontFamily: {
      sans: ['Poppins'],
    },
    extend: {},
  },
  plugins: [],
};
