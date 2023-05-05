"use strict";

const path = require("path");
const autoprefixer = require("autoprefixer");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const miniCssExtractPlugin = require("mini-css-extract-plugin");
const CopyPlugin = require("copy-webpack-plugin");

module.exports = {
  mode: "development",
  entry: {
    index: "./src/assets/js/main.js",
    nav: "./src/assets/js/nav.js",
    flowbite: "./src/assets/js/flowbite.js",
    scrollout: "./src/assets/js/scrollOut.js",
    swiper: "./src/assets/js/swiper.js",
    gasp: "./src/assets/js/gasp.js",
  },
  output: {
    filename: "./assets/js/[name]_bundle.js",
    path: path.resolve(__dirname, "dist"),
  },
  devServer: {
    static: path.resolve(__dirname, "dist"),
    port: 8080,
    hot: true,
  },
  plugins: [
    new HtmlWebpackPlugin({
      title: "GNB Data Center | Home",
      template: "./src/index.html",
    }),
    new HtmlWebpackPlugin({
      title: "GNB Data Center | Service",
      filename: "service.html",
      template: "./src/service.html",
    }),
    new HtmlWebpackPlugin({
      title: "GNB Data Center | Data Center",
      filename: "datacenter.html",
      template: "./src/datacenter.html",
    }),
    new HtmlWebpackPlugin({
      title: "GNB Data Center | Infra",
      filename: "infra.html",
      template: "./src/infra.html",
    }),
    new HtmlWebpackPlugin({
      title: "GNB Data Center | Trend",
      filename: "trending.html",
      template: "./src/trending.html",
    }),

    new miniCssExtractPlugin({ filename: "./assets/css/base.css" }),

    new CopyPlugin({
      patterns: [
        { from: "./src/assets/img", to: "./assets/img" },
        { from: "./src/assets/flag", to: "./assets/flag" },
      ],
    }),
  ],
  module: {
    rules: [
      {
        test: /\.((c|sa|sc)ss)$/i,
        use: [
          {
            // Extracts CSS for each JS file that includes CSS
            loader: miniCssExtractPlugin.loader,
          },
          {
            // Interprets `@import` and `url()` like `import/require()` and will resolve them
            loader: "css-loader",
          },
          {
            // Loader for webpack to process CSS with PostCSS
            loader: "postcss-loader",
            options: {
              postcssOptions: {
                plugins: () => [autoprefixer],
              },
            },
          },
        ],
      },
    ],
  },
};
