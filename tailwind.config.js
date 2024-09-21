/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
    "./node_modules/flowbite/**/*.js",
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
        'inner-large-streamcard' : 'inset 0px -120px 250px -8px rgba(0, 0, 0, 0.8)',
        'inner-small-streamcard' : 'inset 0px 0px 31.4px 4px rgba(0,0,0,0.2)',
        'inner-side-streamcard' : 'inset 0px 0px 20px 2px rgba(0,0,0,0.12)',
      },
      fontFamily: {
        NotoSans: ['Noto Sans', 'sans-serif'],
      },
    },
  },
  plugins: [
    require('flowbite/plugin')
  ],
}