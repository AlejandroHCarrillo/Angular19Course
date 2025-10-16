// const { default: daisyui } = require('daisyui');
// const { default: themes } = require('daisyui/theme/object');

module.exports = {
    content: ["./src/**/*.{html,js,ts,jsx,tsx}"],
    theme: {
          fontFamily: {
              'montserrat': [ 'Montserrat', 'sans-serif'],
              'montserratAlt': ['Montserrat Alternates', 'sans-serif'],
          },
        extend: {        
          animation:{
              fadeIn: 'fadeIn 0.3s ease-in-out',
          },
          keyframes:{
            fadeIn: {
              '0%': {opacity:0},
              '100%': {opacity:1},
            }
          }
        },
    },
    plugins: [require('daisyui')],  
    daisyui: { 
    themes : [ "light", "dark", "cupcake", "bumblebee", "emerald", "corporate", "synthwave", "retro", "cyberpunk", "valentine", "halloween", "garden", "forest", "aqua", "lofi", "pastel", "fantasy", "wireframe", "black", "luxury", "dracula", "cmyk", "autumn", "business", "acid", "lemonade", "night", "coffee", "winter" ] 
  }
}
