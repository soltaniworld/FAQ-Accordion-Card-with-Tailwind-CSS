/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/*.css','index.html'],
  theme: {
    extend: {
      fontFamily:{
        "myFont" : ['"Kumbh Sans"', 'sans-serif']
      },
      spacing: {
        '18':'4.5rem',
        '19':'4.75rem',
        '22':'5.5rem',
        '88': '22rem',
        '230': '57.5rem', // 920px,
        '127': '31.75rem', // 508px
        '132':'33rem'
        // 966px
      },
      colors:{
        "top-purple": "#B068E9",
        "bottom-purple": "#6463E7",
        "hover-orange": "#F47B56"
      }
    },
  },
  plugins: [],
}

