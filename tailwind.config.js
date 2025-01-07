/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./public/**/*.{html,js}",
    "./dist/**/*.js"
  ],
  theme: {
    extend: {
      fontFamily:{
        vt323: ["VT323", 'serif']
      },
      colors: {
        bgColor:'#fdf0d5',
        fontColor: '#c1121f'
      },
    },
  },
  plugins: [],
}

