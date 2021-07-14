const path = require('path');
const webpack = require('webpack');
const rules = require('./webpack.rules');
const webAppManifest = require('./manifest.template');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { WebpackManifestPlugin } = require('webpack-manifest-plugin');

const HOST = process.env.HOST || '0.0.0.0';
const PORT = process.env.PORT || '8080';

module.exports = {
  entry: ['react-hot-loader/patch', './src/index.jsx'],
  mode: 'development',
  module: { rules },
  resolve: {
    extensions: ['.js', '.jsx'],
  },
  output: {
    filename: 'bundle.js',
    path: path.join(__dirname, 'dist'),
    publicPath: './',
    clean: true,
  },
  devServer: {
    contentBase: path.join(__dirname, 'public'),
    historyApiFallback: true,
    host: HOST,
    hot: true,
    inline: true,
    noInfo: true,
    port: PORT,
    open: true,
    publicPath: '/'
  },
  devtool: process.env.WEBPACK_DEVTOOL || 'eval-source-map',
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new HtmlWebpackPlugin({
      favicon: './public/icon.png',
      template: './public/index.html',
      filename: 'index.html',
    }),
    new WebpackManifestPlugin({
      writeToFileEmit: true,
      seed: webAppManifest,
    }),
  ],
  stats: {
    colors: true,
    logging: 'verbose',
  },
};
