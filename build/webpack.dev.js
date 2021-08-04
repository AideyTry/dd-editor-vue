const { resolve } = require('path')
const { merge } = require('webpack-merge')
const common = require('./webpack.common.js')

module.exports = merge(common, {
    mode: 'development',
    output: {
        path: resolve(__dirname, "../dist"),
        filename: "[name].js",
      },
    devtool: 'eval-source-map',
    devServer: {
        contentBase: resolve(__dirname, "../public"), // 内容的基本路劲,可加载静态资源
        compress: true, // 是否开启压缩
        port: 8088,
        open: true,
        hot: true
      }
})