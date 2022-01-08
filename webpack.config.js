const path = require("path");

const HtmlWebpackPlugin = require("html-webpack-plugin");
const CssMinimizerPlugin = require("css-minimizer-webpack-plugin");

module.exports = (options) => {
  const { development } = options;
  const isDevMode = development === "development";

  const config = {
    entry: "./src/index.js",

    devtool: isDevMode ? "inline-source-map" : false,

    output: {
      path: path.resolve(__dirname, "public"),
      filename: "[name].js",
      clean: true,
      publicPath: "/",
    },

    devServer: {
      port: 3000,
      hot: true,
      historyApiFallback: true,
      open: true,
    },

    module: {
      rules: [
        {
          test: /\.(js|jsx)$/,
          exclude: /node_modules/,
          use: ["babel-loader"],
        },
        {
          test: /\.(css|scss|sass)$/,
          use: ["style-loader", "css-loader", "sass-loader"],
        },
        {
          test: /\.(woff2|woff|ttf)$/i,
          type: "asset/resource",
          generator: {
            filename: "fonts/[name][ext]",
          },
        },
      ],
    },

    optimization: {
      minimize: true,
      splitChunks: { chunks: "all" },
      minimizer: ["...", new CssMinimizerPlugin()],
    },

    performance: {
      hints: false,
    },

    plugins: [new HtmlWebpackPlugin({ template: "./index.html" })],
  };

  return config;
};
