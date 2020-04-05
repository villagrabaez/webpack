const path = require('path');

module.exports = {
  entry: path.resolve(__dirname, 'index.js'),
  mode: 'production', // or development
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle.js'
  }
}