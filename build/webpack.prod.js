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
    // filename: '[name][contenthash:8].js',
    filename: '[name].js',
    // libraryExport: 'default',
    // libraryTarget: 'commonjs2',
    // libraryTarget: "umd", // 通用模块定义
    // umdNamedDefine: true,
    // libraryTarget: 'umd',
    // library: 'dd-editor-vue',
    // umdNamedDefine: true,
    // globalObject: 'typeof self !== \'undefined\' ? self : this',
    library: {
      // note there's no `name` here
      // name: 'dd-editor-vue',
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
  },
  optimization: {
    minimize: true,
    minimizer: [
      new TerserPlugin({
        extractComments: false, //不将注释提取到单独的文件中
      }),
    ],
    splitChunks: {
      chunks: 'all',
    },
  },
})
