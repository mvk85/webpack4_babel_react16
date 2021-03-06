const webpack = require('webpack');
const HtmlWebPackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const path = require('path');

const config = {
  entry: './src/index.js',
  output: {
    path: path.resolve(__dirname, './dist'),
    filename: 'app-[hash].js',
    publicPath: '/'
  },
  module: {    
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader'
        }
      },
      {
        test: /\.html$/,
        use: [
          {
            loader: 'html-loader',
            options: { minimize: true }
          }
        ]
      },
      {
        test: /\.(scss|css)$/,
        use: [
          MiniCssExtractPlugin.loader,
          {
            loader: 'css-loader',
            options: {
              minimize: {
                safe: true
              }
            }
          },
          {
            loader: 'postcss-loader',
            options: {} // postcss.config.js
          },
          {
            loader: 'sass-loader',
            options: {} // external config
          }
        ]
      },
      {
        test: /\.(pdf|jpg|png|gif|svg|ico)$/,
        use: [
          {
            loader: 'url-loader?limit=2048&name=assets/img/[name]-[hash].[ext]'
          },
        ]
      },
      {
        test: /\.(ttf|eot|woff|woff2)$/,
        exclude: /img/,
        loader: 'file-loader?name=assets/font/[name].[ext]'
      }
    ]
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NamedModulesPlugin(),
    new CleanWebpackPlugin(['dist'], {
      verbose: true,
      dry: false,
      root: __dirname
    }),
    new HtmlWebPackPlugin({
      template: './src/index.html',
      filename: './index.html'
      // favicon: "./images/favicon.ico"
    }),
    new MiniCssExtractPlugin({
      filename: '[name].[hash].css',
      chunkFilename: '[id].css'
    })
  ],
  devServer: {
    contentBase: path.join(__dirname, 'dist'),
    overlay: true, // error to browser
    hot: true,
    port: 3000,
    inline: true,
    historyApiFallback: true
  },
  devtool: 'eval-sourcemap'
};

module.exports = (env, options) => {
  const mode = options.mode;

  if (mode === 'production') {
    config.devtool = false;
  } else {
    config.devtool = 'source-map';
  }
  
  return config;
};