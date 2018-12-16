//npm install webpack@3.10.0 -g

var path = require('path'),
  webpack = require('webpack'),
  config = require('./webpack/config'),
  loaders = require('./webpack/loaders'),
  plugins = require('./webpack/plugins')

module.exports = {
  entry: config.entrys,
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: '[name].bundle.js', // '[name].min.[hash:5].js'
    chunkFilename: '[name].chunk.js',
    publicPath: config.root + '/dist/' // 代码分割时寻找代码块
  },
  module: {
    rules: loaders
  },
  plugins: plugins
}

// $ webpack --config ./dome-webpack.config.js