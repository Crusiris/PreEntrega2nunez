/** @type {import('tailwindcss').Config} */
const plugin = require('tailwindcss/plugin');

module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: { 
        'primary': { 
          50:'#F9FDF9',
          100: '#E7F7E8',   
          500: '#ACE1AF', 
          900: '#98DA9B',
        },
         
      },
    },
  },
  plugins: [
    require('@tailwindcss/forms'),
  ],
}

