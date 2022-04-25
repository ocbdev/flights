const HtmlWebPackPlugin = require('html-webpack-plugin')

const htmlWebpackPlugin = new HtmlWebPackPlugin({
  template: './examples/index2.html',
  filename: './index.html'
})

module.exports = {
  entry: {
    app: ['./src/index.js']
  },
  plugins: [
    htmlWebpackPlugin
  ]
}
