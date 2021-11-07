"use strict"

const path = require("path")
const CopyWebpackPlugin = require("copy-webpack-plugin")

/** @type {import('webpack').Configuration} */
const config = {
  entry: {
    contentScript: path.resolve("src", "contentScript.js"),
  },
  output: {
    path: path.resolve("build"),
    filename: "[name].js",
  },
  devtool: "source-map",
  stats: {
    all: false,
    errors: true,
    builtAt: true,
  },
  module: {
    rules: [],
  },
  plugins: [
    new CopyWebpackPlugin({
      patterns: [
        {
          from: "**/*",
          context: "public",
        },
      ],
    }),
  ],
}

module.exports = config
