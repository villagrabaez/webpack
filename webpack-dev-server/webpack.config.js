const path = require('path');
const MiniCSSExtractPlugin = require('mini-css-extract-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const webpack = require('webpack');

module.exports = {
  entry: {
    home: path.resolve(__dirname, 'src/js/home.js'),
  },
  mode: 'development', // or production
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'js/[name].js'
  },
  devServer: {
    hot:true,
    open: true,
    port: 9000, // por defecto se usa el puerto 8080s
  },
  module: {
    rules: [
      {
        test: /\.css$/,
        use: [
          // {
          //   loader: MiniCSSExtractPlugin.loader
          // },
          'style-loader', // inyecta el codigo css en el archivo HTML
          'css-loader' // entiende que podemos tener CSS dentro de JS
        ]
      }
    ]
  },
  plugins: [
    // new MiniCSSExtractPlugin({
    //   filename: 'css/[name].css'
    // }),
    new HtmlWebpackPlugin({
      title: 'webpack-dev-server'
    }),
    new webpack.HotModuleReplacementPlugin()
  ]
}