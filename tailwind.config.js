/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './index.html',
    './src/**/*.{js,jsx}',
  ],
  theme: {
    extend: {
      backgroundImage:{
        'header':"url(./src/assets/headerImg.jpg)"
      },
      animatedSettings: {
        animatedSpeed: 1000,
        heartBeatSpeed: 500,
        hingeSpeed: 2000,
        bounceInSpeed: 750,
        bounceOutSpeed: 750,
        animationDelaySpeed: 500,
        classes: ['fadeIn', 'fadeInDown']
    }
    },
  },
  plugins: [
    require('tailwindcss-animatecss'),
    require("daisyui")
  ],
}

