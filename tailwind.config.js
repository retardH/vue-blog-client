/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundColor: {
        primary: 'rgba(35, 37, 54, 1)',
        secondary: 'rgba(255, 208, 80, 1)',
        overlay: 'rgba(0,0,0,0.2)',
      }
    },
  },
  plugins: [],
}

