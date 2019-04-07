'use strict'

const path = require('path')
const data = require('./data')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = {
  entry: './src/scripts/index.js',
  output: {
    path: data.path.build,
    publicPath: '/',
    filename: 'bundle.js'
  },
  devtool: 'source-map',
  module: {
    rules: [
      // Markup processing
      {
        test: /\.hbs$/,
        loader: 'handlebars-loader',
        query: {
          helperDirs: [
            path.join(data.path.root, '/src/helpers')
          ]
        }
      },
      // Style processing
      {
        test: /\.(sass|scss|css)$/,
        use: [
          MiniCssExtractPlugin.loader,
          {
            loader: 'css-loader',
            options: {
              url: false,
              sourceMap: true
            }
          },
          {
            loader: 'sass-loader',
            options: {
              sourceMap: true
            }
          }
        ]
      },
      // JavaScript processing
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: 'babel-loader'
      }
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      hash: true,
      template: path.join(data.path.root, '/src/markup/index.hbs'),
      templateParameters: data,
      filename: path.join(data.path.build, '/index.html')
    }),
    new MiniCssExtractPlugin({ filename: 'styles.css' })
  ],
  devServer: {
    contentBase: data.path.build,
    writeToDisk: true,
    compress: true
  }
}
