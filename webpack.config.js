const HtmlWebPackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const CleanWebpackPlugin = require('clean-webpack-plugin');
const path = require('path');

const config = {
  entry: './src/index.js',
  output: {
    path: path.resolve(__dirname, './dist'),
    filename: 'main.js'
    // publicPath: 'dist/'
  },
  module: {    
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader"
        }
      },
      {
        test: /\.html$/,
        use: [
          {
            loader: "html-loader",
            options: { minimize: true }
          }
        ]
      },
      {
        test: /\.(scss|css)$/,
        use: [
          MiniCssExtractPlugin.loader,
          {
            loader: "css-loader",
            options: {
              minimize: {
                safe: true
              }
            }
          },
          {
            loader: "postcss-loader",
            options: {} // postcss.config.js
          },
          {
            loader: "sass-loader",
            options: {} // external config
          }
        ]
      },
      {
        test: /\.(pdf|jpg|png|gif|svg|ico)$/,
        use: [
          {
            loader: 'url-loader?limit=20480&name=assets/img/[name]-[hash].[ext]'
          },
        ]
      },
      {
        test: /\.(ttf|eot|woff|woff2|svg)$/,
        exclude: /img/,
        loader: 'file-loader?name=assets/font/[name].[ext]'
      }
    ]
  },
  plugins: [
    new CleanWebpackPlugin(['dist'], {
      verbose: true,
      dry: false,
      root: __dirname
    }),
    new HtmlWebPackPlugin({
      template: "./src/index.html",
      filename: "./index.html"
    }),
    new MiniCssExtractPlugin({
      filename: "[name].[hash].css",
      chunkFilename: "[id].css"
    })
  ],
  devServer: {
    overlay: true // error to browser
  },
  devtool: 'eval-sourcemap'
};

module.exports = (env, options) => {
  console.log(options, options.mode); // production
  const mode = options.mode;

  if (mode === 'production') {
    config.devtool = 'source-map';
  } else {
    config.devtool = 'source-map';
  }
  
  return config;
}