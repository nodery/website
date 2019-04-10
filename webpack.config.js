'use strict'

const path = require('path')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const HtmlWebpackPlugin = require('html-webpack-plugin')

const data = require('./data')
const brand = require('@nodewell/brand')
const getData = require('./src/styles/helpers/getData')

module.exports = {
  entry: './src/scripts/index.js',
  output: {
    path: data.path.build,
    publicPath: '/',
    filename: 'assets/scripts.js'
  },
  devtool: 'source-map',
  module: {
    rules: [
      // Image processing
      {
        test: /\.(png|jpg|gif|svg)$/,
        use: [
          {
            loader: 'file-loader',
            options: {
              name: 'assets/images/[name].[ext]'
            }
          }
        ]
      },
      // Markup processing
      {
        test: /\.hbs$/,
        loader: 'handlebars-loader',
        query: {
          helperDirs: [
            path.join(data.path.root, '/src/markup/helpers')
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
              sourceMap: true,
              // data: `$COLOR: green`,
              functions: {
                ...getData(brand)
              }
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
    new MiniCssExtractPlugin({ filename: 'assets/styles.css' })
  ],
  devServer: {
    contentBase: data.path.build,
    writeToDisk: true,
    compress: true
  }
}
