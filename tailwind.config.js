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
      },
      colors: {
        primary: 'rgba(35, 37, 54, 1)',
        'overlay': 'rgba(0,0,0,0.2)',
        'lavender': 'rgba(244, 240, 248, 1)',
        'mediumGray': 'rgba(109, 110, 118, 1)',
        lightGray: 'rgba(244, 244, 244, 1)',
        lightYellow: 'rgba(251, 246, 234, 1)',
        hoverColor: '#EDC14A',
      },
      borderWidth: {
        '1': '1px',
      }
    },
  },
  plugins: [],
}

