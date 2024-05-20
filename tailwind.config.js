/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    screens: {
      'sm': '640px',
      // => @media (min-width: 640px)

      'md': '768px',
      // => @media (min-width: 768px)

      'lg': '1024px',
      // => @media (min-width: 1024px)

      'xl': '1280px',
      // => @media (min-width: 1280px)
    },
    extend: {
      colors: {
        primary: '#EEEEEE', // white
        textColor: '#0C0C0C', // black
        hoverColor: '#008DDA', // dark blue
        buttonColor: '#5BBCFF' // light blue
      },
      container: {
        center: true,
        padding: {
          DEFAULT: '1rem',
        }
      }
    },
  },
  plugins: [],
}

