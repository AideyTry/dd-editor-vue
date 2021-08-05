const { resolve } = require('path')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const { VueLoaderPlugin } = require('vue-loader')
const { CleanWebpackPlugin } = require('clean-webpack-plugin')

module.exports = {
  target: ['web', 'es5'],
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        include: process.cwd(),
        exclude: /(node_modules|bower_components)/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env', '@vue/babel-preset-jsx'],
            plugins: ['@babel/plugin-transform-runtime'],
          },
        },
      },
      {
        test: /\.vue$/,
        use: ['vue-loader'],
        exclude: /node_modules/,
      },
      {
        test: /\.css$/,
        use: [
            MiniCssExtractPlugin.loader,
            {
                loader: 'css-loader',
                options: {
                    importLoaders: 1 // 在之前有1个loader即postcss-loader
                }
            },
            {
                loader: 'postcss-loader',
                options: {
                    postcssOptions: {
                        plugins: [
                            ["autoprefixer"]
                        ]
                    }
                }
            }
        ],
      },
      {
        test: /\.scss$/,
        use: [
            MiniCssExtractPlugin.loader,
            {
                loader: 'css-loader',
                options: {
                    importLoaders: 2 // 在之前有2个loader即postcss-loader和sass-loader
                }
            },
            {
                loader: 'postcss-loader', // 有两个作用：第一个就是把 CSS 解析成 JavaScript 可以操作的 AST，第二个就是调用插件来处理 AST 并得到结果。
                options: {
                    postcssOptions: {
                        plugins: [
                            ["autoprefixer"] // 自动添加样式前缀
                        ]
                    }
                }
            },
          'sass-loader',
        ],
      },
    ],
  },
  plugins: [
    new CleanWebpackPlugin(),
    new MiniCssExtractPlugin({
      filename: '[name][contenthash:8].css',
    }),
    new VueLoaderPlugin(),
  ],
  resolve: {
    extensions: ['.js', '.vue', '.json'],
    alias: {
      '@': '../src',
    },
  },
}
