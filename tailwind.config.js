/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./app.js"],
  theme: {
    extend: {
      colors: {
        Brand: "#2D61DE",
        Scrim: "#FFFFFF",
        Blue: "#61B0FB",
        Green: "#78C634",
        Yellow: "#FFBE5C",
        50: "#FFFFFF",
        100: "#F2F4F6",
        300: "#D7D7D7",
        500: "#868686",
        700: "#444444",
        900: "#1C1C1C",
      },
      fontFamily:{
        Bold : ["Zona-Bold"],
        Light : ["Zona-Light"]
      }
    },
  },
  plugins: [],
};
