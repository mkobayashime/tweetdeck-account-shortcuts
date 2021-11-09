"use strict"

const path = require("path")
const CopyWebpackPlugin = require("copy-webpack-plugin")
const ZipWebpackPlugin = require("zip-webpack-plugin")

const nodeEnv = process.env.NODE_ENV

const version = require("./package.json").version

/** @type {import('webpack').Configuration} */
const config = {
  mode: nodeEnv === "development" ? "development" : "production",
  entry: {
    contentScript: path.resolve("src", "contentScript.js"),
  },
  output: {
    path: path.resolve("build"),
    filename: "[name].js",
  },
  devtool: nodeEnv === "development" ? "source-map" : false,
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
    ...(nodeEnv === "production"
      ? [
          new ZipWebpackPlugin({
            filename: `${version}.zip`,
          }),
        ]
      : []),
  ],
}

module.exports = config
