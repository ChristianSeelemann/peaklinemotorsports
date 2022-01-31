const colors = require("tailwindcss/colors");

module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    "./forms/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      gridTemplateColumns: {
        minmax: "repeat(auto-fit, minmax(18rem, 1fr))",
        erfolge: "5rem 1fr 3.5rem",
        erfolgesmall: "4rem 1fr 3.5rem",
      },
    },
    colors: {
      background: "var(--color-background)",
      purple: colors.purple,
      white: colors.white,
      black: colors.black,
      violet: colors.violet,
      red: colors.red,
      orange: colors.orange,
      green: colors.green,
    },
    fontFamily: {
      montserrat: ["Montserrat", "sans-serif"],
      overpass: ["Overpass", "sans-serif"],
    },
  },
  plugins: [],
};
