/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        'frontend': 'var(--frontend-color)',
        'secondary': 'var(--secondary-color)',
      },
      fontFamily: {
        sans: ['Source Sans 3', 'sans-serif'],
      },
    },
  },
  plugins: [],
}

