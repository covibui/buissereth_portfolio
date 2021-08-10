module.exports = {
  mode: "jit",
  purge: ["./src/**/*.html", "./src/**/*.njk", "./src/**/*.svg"],
  darkMode: "media",
  theme: {
    extend: {
      fontFamily: {
        display: ["Poppins", "Robooto", "Helvetica", "Arial", "sans-serif"],
        body: ["Roboto", "Helvetica", "Arial", "sans-serif"],
      },
    },
  },
};
