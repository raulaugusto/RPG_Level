const path = require(`path`);
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
module.exports = {
  devServer: {
    static: {
      directory: path.resolve(__dirname, "dist"),
    },
  },
  entry: {
    main: `./src/Main.js`,
  },
  mode: `development`,
  module: {
    rules: [
      {
        test: /\.css$/,
        use: [MiniCssExtractPlugin.loader, "css-loader"],
      },
    ],
  },
  plugins: [new MiniCssExtractPlugin()],
};
