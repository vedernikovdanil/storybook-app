const path = require('path');
const nodeExternals = require('webpack-node-externals');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const { merge } = require('webpack-merge');
const webpackRules = require('./webpack.rules');

module.exports = merge(webpackRules, {
  entry: './src/index.ts',
  output: {
    filename: 'index.js',
    path: path.resolve(__dirname, 'dist'),
    libraryTarget: 'umd',
    library: 'storybook-app',
  },
  externals: [nodeExternals()],
  plugins: [new CleanWebpackPlugin()],
  resolve: {
    extensions: ['.tsx', '.ts'],
  },
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        use: 'ts-loader',
        exclude: /node_modules/,
      },
    ],
  },
});
