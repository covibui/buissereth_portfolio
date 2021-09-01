const colors = require("tailwindcss/colors");

module.exports = {
  mode: "jit",
  purge: {
    content: ["./src/**/*.{html,njk,svg}", "./src/js/**/*.js"],
    safelist: [
      "bg-red-500",
      "bg-yellow-500",
      "bg-green-500",
      "bg-blue-500",
      "bg-indigo-500",
      "bg-purple-500",
      "bg-pink-500",
      "bg-orange-500",
    ],
  },
  darkMode: "media",
  theme: {
    extend: {
      colors: {
        blueGray: colors.blueGray,
        gray: colors.trueGray,
        orange: colors.orange,
      },
      fontFamily: {
        display: ["Poppins", "Robooto", "Helvetica", "Arial", "sans-serif"],
        body: ["Roboto", "Helvetica", "Arial", "sans-serif"],
      },
      maxHeight: {
        "3/4": "75%",
      },
      maxWidth: {
        prose: "80ch",
      },
      spacing: {
        25: "6.25rem",
      },
      transitionProperty: {
        "op-pos": "opacity, top, right, bottom, left",
        position: "top, right, bottom, left",
      },
    },
  },
  plugins: [require("tailwindcss-rtl"), require("@tailwindcss/aspect-ratio")],
};
