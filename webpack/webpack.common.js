const path = require("path");
const ImageminWebpackPlugin = require("imagemin-webpack-plugin").default;
const ImageminWebP = require("imagemin-webp");
const CopyWebpackPlugin = require("copy-webpack-plugin");

module.exports = {
  entry: {
    // eslint-disable-next-line no-undef
    main: path.resolve(__dirname, "../src/js/main.js"),
  },
  output: {
    // eslint-disable-next-line no-undef
    path: path.resolve(__dirname, "../dist"),
  },
  module: {
    rules: [
      {
        test: /\.m?js$/,
        exclude: /(node_modules)/,
        use: {
          loader: "babel-loader",
          options: {
            presets: ["@babel/preset-env"],
          },
        },
      },
    ],
  },
  plugins: [
    new CopyWebpackPlugin({
      patterns: [
        // {
        //   from: "./src/assets/images/**/*.{png,jpg,jpeg}",
        //   to: "./assets/images/[name].webp",
        // },
        {
          from: "./src/fonts/**/*.{eot,svg,ttf,woff,woff2}",
          to: "./fonts/[name][ext]",
        },
        {
          from: "./src/*.{png,ico,svg}",
          to: "./[name][ext]",
        },
      ],
    }),
    new ImageminWebpackPlugin({
      plugins: [
        ImageminWebP({
          quality: 75,
        }),
      ],
    }),
  ],
};
