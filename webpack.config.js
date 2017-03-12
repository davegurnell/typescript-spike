var path              = require('path');
var failPlugin        = require('webpack-fail-plugin');
var CopyWebpackPlugin = require('copy-webpack-plugin');

module.exports = {
  entry: './src/index.tsx',

  output: {
    filename: './dist/bundle.js',
  },
  devtool: 'source-map',
  resolve: {
    extensions: ['.webpack.js', '.web.js', '.ts', '.tsx', '.js']
  },
  plugins: [ failPlugin ],
  module: {
    rules: [
      {
        enforce: 'pre',
        test: /\.js$/,
        loader: 'source-map-loader'
      },
      {
        test: /\.tsx?$/,
        loader: 'babel-loader?presets[]=es2015!ts-loader'
      },
    ],
  },
  plugins: [
    new CopyWebpackPlugin([
      { from: path.join(__dirname, 'index.html'), to: path.join(__dirname, 'dist') }
    ])
  ],
  devServer: {
    port: 8000,
    contentBase: path.join(__dirname, 'dist'),
    historyApiFallback: true
  }
};
