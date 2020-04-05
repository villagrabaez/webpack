const path = require('path');

module.exports = {
  entry: {
    home: path.resolve(__dirname, 'src/js/home.js'),
  },
  mode: 'development', // or production
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'js/[name].js'
  },
  module: {
    rules: [
      {
        test: /\.css$/,
        use: [
          'style-loader',
          'css-loader'
        ]
      }
    ]
  }
}