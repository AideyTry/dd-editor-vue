const { resolve } = require('path')
const { merge } = require('webpack-merge')
const common = require('./webpack.common.js')
const TerserPlugin = require('terser-webpack-plugin')

const Components = require('../components.json')

module.exports = merge(common, {
  mode: 'production',
  entry: Components,
  output: {
    path: resolve(__dirname, '../lib'),
    filename: '[name].js',
    libraryExport: 'default',
    library: {
      type: 'commonjs2',
    },
  },
  devtool: 'source-map',
  // it's important!!!
  externals: {
    vue: {
      root: 'Vue',
      commonjs: 'vue',
      commonjs2: 'vue',
      amd: 'vue',
    },
  }
})
