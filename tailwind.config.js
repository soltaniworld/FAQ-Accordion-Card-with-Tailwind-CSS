/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/*.css','index.html'],
  theme: {
    extend: {
      fontFamily:{
        "myFont" : ['"Kumbh Sans"', 'sans-serif']
      },
      spacing: {
        '88': '22rem'
      }
    },
  },
  plugins: [],
}

