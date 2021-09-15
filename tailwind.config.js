const colors = require("tailwindcss/colors");

module.exports = {
  mode: "jit",
  purge: {
    content: ["./src/**/*.{html,njk,svg,md}", "./src/js/**/*.js"],
    safelist: [
      "bg-projects-afiye",
      "bg-projects-apartmentor",
      "bg-projects-thunk",
    ],
  },
  darkMode: "class",
  theme: {
    container: {
      center: true,
    },
    extend: {
      colors: {
        blueGray: colors.blueGray,
        gray: colors.trueGray,
        orange: colors.orange,
        projects: {
          afiye: "#922AFF",
          apartmentor: "#FF7E00",
          thunk: "#ED1B69",
        },
      },
      fontFamily: {
        display: ["Poppins", "Robooto", "Helvetica", "Arial", "sans-serif"],
        body: ["Roboto", "Helvetica", "Arial", "sans-serif"],
      },
      gridTemplateColumns: {
        feature: "repeat(auto-fit, minmax(300px, 1fr))",
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
