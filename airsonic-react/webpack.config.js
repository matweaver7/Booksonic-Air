const path = require("path");
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  entry: "./src/index.tsx",
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: {
            loader: "babel-loader"
        },
      },
      {
        test: /\.(ts|tsx)$/,
        exclude: /node_modules/,
        use: ["ts-loader"],
      },
      {
        test: /\.(css)$/,
        use: ['style-loader', 'css-loader']
      },
      {
        test: /\.s[ac]ss$/i,
        use: [
          // Creates `style` nodes from JS strings
          "style-loader",
          // Translates CSS into CommonJS
          "css-loader",
          // Compiles Sass to CSS
          "sass-loader",
        ],
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
        template: path.join(__dirname, "public", "index.html"),
    }),
],
  resolve: {
    extensions: [".ts", ".js", ".tsx", ".css"],
    alias: {
      "components": path.resolve(__dirname, 'src/components'),
      "pages": path.resolve(__dirname, 'src/pages'),
      "public": path.resolve(__dirname, 'public'),
      "constants": path.resolve(__dirname, 'src/constants'),
      "models": path.resolve(__dirname, "src/models")
    }
  },
  output: {
    path: path.resolve(__dirname, "dist"),
    publicPath: '/',
    filename: "index.bundle.js",
  },
  devServer: {
    static: path.join(__dirname, "dist"),
    compress: true,
    historyApiFallback: true,
    port: 4000,
  },
};