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
        'base-yellow' : '#FFA500',
        'base-navy'   : '#001B28',
        'base-blue'   : '#0496FF',
      },
      boxShadow: {
        'inner-recent-post': 'inset 200px 4px 250px rgba(0, 0, 0, 0.8)',
        'inner-recent-post-mobile': 'inset 0px 0px 250px 12px rgba(0, 0, 0, 0.64)',
        'inner-large-streamcard' : 'inset 0px -120px 250px -8px rgba(0, 0, 0, 0.8)',
        'inner-small-streamcard' : 'inset 0px 0px 31.4px 4px rgba(0,0,0,0.2)',
        'inner-side-streamcard' : 'inset 0px 0px 20px 2px rgba(0,0,0,0.12)',
      },
      fontFamily: {
        spartan : ['League Spartan', 'sans-serif'],
        libre : ['Libre Baskerville', 'serif'],
        bayon : ['Bayon', 'sans-serif'],
        inter : ['Inter', 'serif'],
        montserrat : ['Montserrat', 'serif'],
        robotofl: ['Roboto Flex', 'serif'],
        roboto: ['Roboto', 'serif'],
      },
    },
  },
  plugins: [
    require('flowbite/plugin'),
    require('@tailwindcss/typography')
  ],
}