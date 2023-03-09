/** @type {import('tailwindcss').Config} */
const colors = require("tailwindcss/colors");

module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    colors: {
      transparent: "transparent",
      current: "currentColor",
      primary: "#050D1D",
      secondary: "#08152B",
      ternary: "#0B2039",
      yellow: "#F7FBB8",
      bluegreen: "#205664",
      green: "#408874",
      black: colors.black,
      white: colors.white,
      gray: colors.slate,
      purple: colors.violet,
      pink: colors.fuchsia,
    },
    extend: {},
  },
  plugins: [],
};
