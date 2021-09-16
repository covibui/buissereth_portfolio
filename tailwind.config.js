const colors = require("tailwindcss/colors");

module.exports = {
  mode: "jit",
  purge: {
    content: ["./src/**/*.{html,njk,svg,md}", "./src/js/**/*.js"],
    safelist: [
      "bg-projects-afiye-light",
      "bg-projects-afiye-dark",
      "bg-projects-apartmentor-light",
      "bg-projects-apartmentor-dark",
      "bg-projects-thunk-light",
      "bg-projects-thunk-dark",
    ],
  },
  darkMode: "class",
  theme: {
    container: {
      center: true,
      padding: "2rem",
    },
    extend: {
      colors: {
        blueGray: colors.blueGray,
        gray: colors.trueGray,
        orange: colors.orange,
        projects: {
          afiye: { light: "#922AFF", dark: "#B166FF" },
          apartmentor: { light: "#FF7E00", dark: "#FF9933" },
          thunk: { light: "#ED1B69", dark: "#F83A74" },
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
