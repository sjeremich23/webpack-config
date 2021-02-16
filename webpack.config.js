const MiniCssExtractPlugin = require("mini-css-extract-plugin");

let target = "web";
let mode = "development";

process.env.NODE_ENV === "production" ? ((mode = "production"), (target = "browserlist")) : null;

module.exports = {
  mode: mode,
  target: target,

  module: {
    rules: [
      {
        test: /\.(s[ac]|c)ss$/,
        use: [MiniCssExtractPlugin.loader, "css-loader", "postcss-loader", "sass-loader"]
      },
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader"
        }
      }
    ]
  },

  plugins: [new MiniCssExtractPlugin()],

  devtool: "source-map",
  devServer: {
    contentBase: "./dist",
    hot: true
  }
};
