var failPlugin = require('webpack-fail-plugin');

module.exports = {
  entry: './src/index.tsx',

  output: {
    filename: './dist/bundle.js',
  },
  devtool: 'source-map',
  resolve: {
    extensions: ['', '.webpack.js', '.web.js', '.ts', '.tsx', '.js']
  },
  plugins: [ failPlugin ],
  module: {
    loaders: [
      { test: /\.tsx?$/, loader: 'babel-loader?presets[]=es2015!ts-loader' },
    ],
    preloaders: [
      { test: /\.js$/, loader: 'source-map-loader' }
    ]
  },
};
