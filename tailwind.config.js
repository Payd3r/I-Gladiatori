/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          black: '#000000',
          white: '#FFFFFF',
          yellow: '#FFC107',
          cream: '#F8F6F0',
          light: '#FAFAFA',
        },
        secondary: {
          'orange-dark': '#D97706',
          'orange-light': '#F59E0B',
          gray: '#4B5563',
          'gray-light': '#E5E7EB',
          'gray-dark': '#374151',
        },
        accent: {
          red: '#DC2626',
          green: '#10B981',
        },
      },
      fontFamily: {
        heading: ['Playfair Display', 'serif'],
        body: ['Lato', 'sans-serif'],
      },
    },
  },
  plugins: [],
}