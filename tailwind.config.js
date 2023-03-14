/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    screens: {
      '2xl': '1536px',

      'xl': {'max': '1300px'},

      'lg': {'max': '1100px'},

      'md': {'max': '1024px'},

      'sm': {'max': '600px'},
    },

    extend: {},
  },
  plugins: [],
}
