 
'use strict';

const path = require('path');

module.exports = {
  entry: './src/index.js',
  output: {
    path: path.join(__dirname, './lib'),
    filename: 'index.js',
    library: 'ReactErrorOverlay',
    libraryTarget: 'umd',
  },
  module: {
    rules: [
      {
        test: /iframe-bundle\.js$/,
        use: 'raw-loader',
      },
      {
        test: /\.js$/,
        include: path.resolve(__dirname, './src'),
        use: 'babel-loader',
      },
    ],
  },
  resolve: {
    alias: {
      iframeScript$: path.resolve(__dirname, './lib/iframe-bundle.js'),
    },
  },
};
