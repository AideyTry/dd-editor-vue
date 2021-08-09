const { resolve } = require('path')
const { merge } = require('webpack-merge')
const common = require('./webpack.common.js')
const TerserPlugin = require('terser-webpack-plugin')

module.exports = merge(common, {
  mode: 'production',
  entry: './packages/index.js',
  output: {
    path: resolve(__dirname, '../lib'),
    // filename: '[name][contenthash:8].js',
    filename: '[name].js',
    library: "dd-editor",
    libraryExport: 'default',
    libraryTarget: "umd", // 通用模块定义
    umdNamedDefine: true,
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
