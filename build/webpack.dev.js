const { resolve } = require('path')
const { merge } = require('webpack-merge')
const common = require('./webpack.common.js')
const HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = merge(common, {
    mode: 'development',
    entry: './example/entry.js',
    output: {
        path: resolve(__dirname, "../dist"),
        filename: "[name].js",
      },
    devtool: 'eval-source-map',
    plugins: [
      new HtmlWebpackPlugin({
        template: resolve(__dirname, '../public', 'index.html'),
      })
    ],
    devServer: {
        contentBase: resolve(__dirname, "../public"), // 内容的基本路劲,可加载静态资源
        compress: true, // 是否开启压缩
        port: 8088,
        open: true,
        hot: true
      }
})