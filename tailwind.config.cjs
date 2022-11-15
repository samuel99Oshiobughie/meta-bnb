/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'red': ['Red Rose']
      },
      colors: {
        'white': '#ffffff',
        'black': '#434343',
      }
    },
  },
  plugins: [],
}