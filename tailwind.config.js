/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["*.{html,js}"],
  theme: {
    extend: {},
    colors: {
      'white': '#ffffff',
      'main-color': '#458FF6',
      'second-color': '#462E6A',
      'transparent-color': '#212a4a',
      'dark-color': '#3C567B',
    },
    container: {
      center: true,
      padding: {
        DEFAULT: '1rem',
        'lg': '6rem',
        'md': '2.5rem',
        'sm': '1rem',
      },
    },
  },
  plugins: [],
};
