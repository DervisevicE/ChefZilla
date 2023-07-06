/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}"
  ],
  theme: {
    extend: {
      colors:{
        "redColor" : "#FF0000",
        "darkerRedColor" : "#E20000",
        "greenColor" : "#66CC00",
        "whiteishColor" : "#F5F5F5"
      }

    },
  },
  plugins: [],
}

