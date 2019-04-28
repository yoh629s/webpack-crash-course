const path = require('path')

//デバッグログ
console.log(path.resolve(__dirname, 'dist'))

module.exports = {
    entry: './src/index.js',
    output: {
        filename: 'main.js',
        path: path.resolve(__dirname, 'dist')
      },
    devServer: {
      contentBase: path.resolve(__dirname, 'dist')
    }
  }