module.exports = {
  plugins: [
    require("postcss-import")({
      path: ["src/css"],
    }),
    require("tailwindcss/nesting"),
    require("tailwindcss"),
    require("autoprefixer"),
  ],
};
