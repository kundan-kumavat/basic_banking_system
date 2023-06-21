/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{html,js,jsx}"],
  mod: "jit",
  theme: {
    extend: {
      colors: {
        primary: "rgb(0, 0, 0)",
        secondary: "rgb(19, 56, 82)",
        color: "rgba(212, 240, 31, .8)",
        dimWhite: "rgba(255, 255, 255, 0.6)"
      },
      fontFamily: {
        poppins: ["Poppins", "sans-serif"],
      }
    },
    screens: {
      xs: "480px",
      ss: "620px",
      sm: "768px",
      md: "1060px",
      lg: "1200px",
      xl: "1700px",
    }
  },
  plugins: [],
}