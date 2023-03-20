/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        space: ['Space Grotesk', 'sans-serif']
      },
      colors: {
        // Light mode
        'bg-light': '#F2F2F2',
        'text-light': 'gray-800',
        // Dark mode
        'bg-light': '#00000',
        'text-light': 'white',
      },
    },
  },
  plugins: [],
}