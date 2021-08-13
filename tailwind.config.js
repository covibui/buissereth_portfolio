const colors = require("tailwindcss/colors");

module.exports = {
  mode: "jit",
  purge: {
    content: [
      "./src/**/*.html",
      "./src/**/*.njk",
      "./src/**/*.svg",
      "./src/js/**/*.js",
    ],
    safelist: [
      "bg-red-100",
      "hover:bg-red-200",
      "bg-yellow-100",
      "hover:bg-yellow-200",
      "bg-green-100",
      "hover:bg-green-200",
      "bg-blue-100",
      "hover:bg-blue-200",
      "bg-indigo-100",
      "hover:bg-indigo-200",
      "bg-purple-100",
      "hover:bg-purple-200",
      "bg-pink-100",
      "hover:bg-pink-200",
    ],
  },
  darkMode: "media",
  theme: {
    extend: {
      colors: {
        blueGray: colors.blueGray,
        orange: colors.orange,
      },
      fontFamily: {
        display: ["Poppins", "Robooto", "Helvetica", "Arial", "sans-serif"],
        body: ["Roboto", "Helvetica", "Arial", "sans-serif"],
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
  plugins: [require("tailwindcss-rtl")],
};
