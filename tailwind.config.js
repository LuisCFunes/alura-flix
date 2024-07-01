/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        'frontend': 'var(--frontend-color)',
        'backend': 'var(--backend-color)',
        'innovacion': 'var(--innovacion-color)',
      },
      fontFamily: {
        sans: ['Source Sans 3', 'sans-serif'],
      },
    },
  },
  plugins: [],
}

