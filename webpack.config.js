const HtmlWebPackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

module.exports = {
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
        // test: /\.css$/,
        // use: [
        //   MiniCssExtractPlugin.loader,
        //   "css-loader",
        //   "postcss-loader",
        //   "sass-loader"
        // ]

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
            options: {}
            // options: {
            //   autoprefixer: {
            //     browsers: ["last 2 versions"]
            //   },
            //   // plugins: () => [
            //   //   autoprefixer
            //   // ]
            // },
          },
          {
            loader: "sass-loader",
            options: {}
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
    new HtmlWebPackPlugin({
      template: "./src/index.html",
      filename: "./index.html"
    }),
    new MiniCssExtractPlugin({
      filename: "[name].[hash].css",
      chunkFilename: "[id].css"
    })
  ]
};
