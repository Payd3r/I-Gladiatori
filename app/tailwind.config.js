/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'primary': {
          'black': '#000000',
          'white': '#FFFFFF',
          'yellow': '#FFC107',
        },
        'secondary': {
          'orange-dark': '#D97706',
          'orange-light': '#F59E0B',
          'gray': '#4B5563',
        },
        'accent': {
          'red': '#DC2626',
          'green': '#10B981',
        },
      },
      fontFamily: {
        'heading': ['"Playfair Display"', 'serif'],
        'body': ['"Lato"', 'sans-serif'],
      },
    },
  },
  plugins: [],
}