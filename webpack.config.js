const path = require('path');

module.exports = {
  entry: './index.js',
  mode: 'development', // or production
  output: {
    path: path.resolve(__dirname),
    filename: 'bundle.js'
  }
}