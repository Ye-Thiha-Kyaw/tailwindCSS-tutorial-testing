const colors = require('tailwindcss/colors')

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,js,ts,jsx,tsx}",
  ],
  screens: {
    'sm': '640px',
    // => @media (min-width: 640px) { ... }

    'md': '768px',
    // => @media (min-width: 768px) { ... }

    'lg': '1024px',
    // => @media (min-width: 1024px) { ... }

    'xl': '1280px',
    // => @media (min-width: 1280px) { ... }

    '2xl': '1536px',
    // => @media (min-width: 1536px) { ... }
  },
  theme: {
    fontFamily:{
      'body':'Poppins, sans-serif'
    },
    colors: {
      transparent: 'transparent',
      current: 'currentColor',
      white: colors.white,
      black: colors.black,
      'gray': colors.slate,
      'blue': {
        50: '#b3c0ff',
        100: '#8ea1ff',
        200: '#7b91ff',
        300: '#6881ff',
        400: '#5572ff',
        500: '#4262ff',
        600: '#3b58e6',
        700: '#2e45b3',
        800: '#213180',
        900: '#141d4c',
      }
    },
    
    extend: {
      fontSize: {
        'display-1': ['4.209rem', {
          lineHeight: '1.3'
        }],
        'display-2': ['3.157rem', {
          lineHeight: '1.3'
        }],
        'display-3': ['2.369rem', {
          lineHeight: '1.3'
        }],
        'display-4': ['1.777rem', {
          lineHeight: '1.3'
        }],
        'display-5': ['1.333rem', {
          lineHeight: '1.3'
        }]
      }
    },
  },
  plugins: [],
}
