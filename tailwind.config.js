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
        "title-desktop": "150px",
        "title": "75px",
      },
      backgroundImage: {
        "light-bulb": "url('/LightBulb_1.png')",
        "light-bulb-dark": "url('/LightBulbDark_1.png')",
        "title": "url('/Light/Musty1.png')",
        "title-dark": "url('/Dark/MustyDark1.png')",
      },
      inset: {
        "-45px": "-45px",
        "57%": "57%",
        "35%": "35%",
      },
      scale: {
        "60": "0.6",
      },
      animation:{
        "gif": "giffy 0.9s infinite steps(1)",
        "gif-dark": "giffyDark 0.9s infinite steps(1)",
        "pause-on-hover": "giffy 0.9s infinite steps(1) paused",
        "pause-on-hover-dark": "giffyDark 0.9s infinite steps(1) paused",
        "title": "titleGif 0.9s infinite steps(1)",
        "title-dark": "titleGifDark 0.9s infinite steps(1)",
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
        },
        titleGif: {
          "0%": { backgroundImage: 'url(/Light/Musty1.png)' },
          "33%": { backgroundImage: 'url(/Light/Musty2.png)' },
          "67%": { backgroundImage: 'url(/Light/Musty3.png)' },
          "100%": { backgroundImage: 'url(/Light/Musty1.png)' },
        },
        titleGifDark: {
          "0%": { backgroundImage: 'url(/Dark/MustyDark1.png)' },
          "33%": { backgroundImage: 'url(/Dark/MustyDark2.png)' },
          "67%": { backgroundImage: 'url(/Dark/MustyDark3.png)' },
          "100%": { backgroundImage: 'url(/Dark/MustyDark1.png)' },
        },
      }
    },
  },
  variants: {
    extend: {
      animation: ["hover", "dark"],
      backgroundImage: ["dark"],
      opacity: ["dark"],
      margin: ["odd"],
    },
  },
  plugins: [],
}
