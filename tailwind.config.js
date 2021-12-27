const colors = require("tailwindcss/colors");

module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      gridTemplateColumns: {
        minmax: "repeat(auto-fit, minmax(18rem, 1fr))",
      },
    },
    colors: {
      background: "var(--color-background)",
      purple: colors.purple,
      white: colors.white,
      black: colors.black,
    },
    fontFamily: {
      montserrat: ["Montserrat", "sans-serif"],
      overpass: ["Overpass", "sans-serif"],
    },
  },
  plugins: [],
};
