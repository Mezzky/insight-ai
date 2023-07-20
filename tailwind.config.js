/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./**/*.{html,js}'],
  theme: {
    screens: {
      'sm': '320px',
      'md': '375px', 
      'lg': '425px',
      'tablet': '768px',
      'laptop': '1024px',
      'desktop': '1280px',
    },
    extend: {
      fontFamily: {
        poppins: 'Poppins'
      },
      colors: {
        box: 'rgba(120, 120, 120, 0.2)',
        text: '#FBFBFB',
        span: '#4BA7D8',
        main: '#500DE0',
        boxborder: '#4D4D4D',
        bg: '#0C0F16',
      },
      dropShadow: {
        '3xl': '0 35px 35px rgba(225, 225, 225, 0.25)'
      },
      backgroundImage: {
        'home': "url('../Assets/gif/home-img.gif')",
        'service': "url('../Assets/gif/service-bg.gif')",
        'recognition': "url('../Assets/gif/bumi-mutars.gif')"
      }
    },
  },
  plugins: [],
}

