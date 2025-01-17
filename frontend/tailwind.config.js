/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'dark-greenish-gray': '#111b14',
        'charcoal-gray': '#2e2e2e'
      }
    },
  },
  plugins: [],
}

