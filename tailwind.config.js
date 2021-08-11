const colors = require("tailwindcss/colors");

module.exports = {
  mode: "jit",
  purge: [
    "./src/**/*.html",
    "./src/**/*.njk",
    "./src/**/*.svg",
    "./src/js/**/*.js",
  ],
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
      transitionProperty: {
        position: "top, right, bottom, left",
      },
    },
  },
};
