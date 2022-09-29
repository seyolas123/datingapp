/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      keyframes: {
        'fade-in-down': {
          "from": {
            transform: "translateY(-0.75rem)",
            opacity: '0'
          },
          "to": {
            transform: "translateY(0rem)",
            opacity: '1'
          },
        },
      },
      colors: {
        "connetta-purple": "#5267DF",
        "connetta-red": "#FA5959",
        "connetta-blue": "#242A45",
        "connetta-grey": "#9194A2",
        "connekta-white": "#f7f7f7",
        "connekta-main": "#955989",
        "connekta-main-light": "#A28398",
        "connekta-black": "#955989"
      },
      fontFamily: {
        body: ["Roboto, sans-serif"],
      },
      animation: {
        'fade-in-down': "fade-in-down 0.2s ease-in-out both",
      },
    },
    container:{
      center:true,
      padding: "1rem",
    }
  },
  plugins: [],
}
