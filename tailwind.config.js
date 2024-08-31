/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'base-yellow' : '#FFA116',
        'base-navy'   : '#05192D',
        'base-blue'   : '#3879F3'
      },
      boxShadow: {
        'inner-recent-post': 'inset 200px 4px 250px rgba(0, 0, 0, 0.8)',
      },
    },
  },
  plugins: [],
}