const { resolve } = require('path');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

const PATHS = {
  dist: resolve(__dirname, 'dist'),
  src: resolve(__dirname, 'src'),
};

const cleanWebpackPluginConfig = new CleanWebpackPlugin({
  cleanOnceBeforeBuildPatterns: [PATHS.dist],
});
const miniCssExtractPluginConfig = new MiniCssExtractPlugin({
  filename: '[name].css',
});

module.exports = {
  devtool: 'source-map',
  module: {
    rules: [
      {
        test: /\.js$/,
        include: [PATHS.src],
        use: 'babel-loader',
      },
      {
        test: /\.scss$/,
        include: [PATHS.src],
        use: [
          { loader: MiniCssExtractPlugin.loader },
          'css-loader',
          'postcss-loader',
          'sass-loader',
        ],
      },
    ],
  },
  plugins: [
    cleanWebpackPluginConfig,
    miniCssExtractPluginConfig,
  ],
}
