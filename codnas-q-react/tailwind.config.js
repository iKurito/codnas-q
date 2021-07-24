// tailwind.config.js
module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        primary: {
          light: '#66a1d3',
          original: '#3883c2',
          dark: '#2d699b',
        },
        secondary: {
          original: '#2bbbad',
        },
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
