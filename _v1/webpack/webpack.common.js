const path = require("path");
const CopyWebpackPlugin = require("copy-webpack-plugin");

module.exports = {
  entry: {
    main: path.resolve(__dirname, "../src/js/main.js"),
  },
  output: {
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
        {
          from: "./src/assets/images/**/*.{svg,png,jpg,jpeg,gif}",
          to: "./assets/images/[name][ext]",
        },
        {
          from: "./src/fonts/**/*.{eot,svg,ttf,woff,woff2}",
          to: "./fonts/[name][ext]",
        },
        {
          from: "./src/*.{png,ico,svg}",
          to: "./[name][ext]",
        },
        {
          from: "./src/assets/documents/*.pdf",
          to: "./assets/documents/[name][ext]",
        },
      ],
    }),
  ],
};
