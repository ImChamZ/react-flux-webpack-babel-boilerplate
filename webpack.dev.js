const HtmlWebPackPlugin = require("html-webpack-plugin");
const path = require('path');

module.exports = {
  mode: "development",
  entry: "./src/index.js",
  output: {
    path:  path.resolve(__dirname, "public/dist"),
    publicPath: "/",
    filename: "bundle.js",
  },
  devServer: {
    host: "localhost",
    port: 8060,
    compress: true,
    publicPath: "/",
    contentBase: path.resolve(__dirname, "public/dist"),
  },
  module: {
    rules: [
      {
        test: /\.(js)$/,
        exclude: /node_modules/,
        use: ["babel-loader"],
      },
      {
        test: /\.css$/i,
        use: [
          { loader: 'style-loader', options: { injectType: 'linkTag' } },
          { loader: 'file-loader' },
        ],
      },
    ],
  },
  plugins: [
    new HtmlWebPackPlugin({
        template: "./public/index.html",
    }),
  ],
  resolve : {
    extensions: [".js", ".jsx", ".scss"],
    alias : {
      "Views" : path.resolve(__dirname, 'src/views/')
    }
  }
};
