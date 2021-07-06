module.exports = {
  purge: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  darkMode: "class", // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        "main-dark-gray": "#211D23"
      },
      fontFamily: {
        "title": ['"Indie Flower"'],
        "body": ['"Montserrat Alternates"']
      },
      height: {
        "100px": "100px",
      },
      backgroundImage: {
        "light-bulb": "url('/LightBulb_1.png')",
        "light-bulb-dark": "url('/LightBulbDark_1.png')",
      },
      animation:{
        "gif": "giffy 0.9s infinite steps(1)",
        "gif-dark": "giffyDark 0.9s infinite steps(1)",
        "pause-on-hover": "giffy 0.9s infinite steps(1) paused",
        "pause-on-hover-dark": "giffyDark 0.9s infinite steps(1) paused",
      },
      keyframes: {
        giffy: {
          "0%": { backgroundImage: 'url(/LightBulb_1.png)' },
          "33%": { backgroundImage: 'url(/LightBulb_2.png)' },
          "67%": { backgroundImage: 'url(/LightBulb_3.png)' },
          "100%": { backgroundImage: 'url(/LightBulb_1.png)' },
        },
        giffyDark: {
          "0%": { backgroundImage: 'url(/LightBulbDark_1.png)' },
          "33%": { backgroundImage: 'url(/LightBulbDark_2.png)' },
          "67%": { backgroundImage: 'url(/LightBulbDark_3.png)' },
          "100%": { backgroundImage: 'url(/LightBulbDark_1.png)' },
        }
      }
    },
  },
  variants: {
    extend: {
      animation: ["hover"],
    },
  },
  plugins: [],
}
