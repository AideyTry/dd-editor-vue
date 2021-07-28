const { resolve } = require('path')
const { merge } = require('webpack-merge')
const common = require('./webpack.common.js')
const TerserPlugin = require("terser-webpack-plugin");

module.exports = merge(common, {
    mode: 'production',
    output: {
        path: resolve(__dirname, "../dist"),
        filename: "[name][contenthash:8].js",
      },
    devtool: 'source-map',
    optimization: {
        minimize: true,
        minimizer: [
            new TerserPlugin({
              extractComments: false, //不将注释提取到单独的文件中
            }),
          ],
        splitChunks: {
            chunks: 'all',
          }
    }
})