const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  entry: './src/index.jsx',
  output: {
    path: path.join(__dirname, '/dist'),            //__dirname : 현재 디렉토리, dist 폴더에 모든 컴파일된 하나의 번들파일을 넣을 예정
    filename: 'index_bundle.js'
  },
  devServer: {
    static: {
      directory: path.join(__dirname, 'public'),
    },
    compress: true,
    port: 3001
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_module/, // node module 폴더는 babel 컴파일에서 제외
        use: {
          loader: 'babel-loader',
          options:{
            presets: [
              "@babel/preset-env", ["@babel/preset-react", {"runtime": "automatic"}]
            ]
          }          
        }
      },
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      filename: "./index.html",
      template: path.join(__dirname, 'public/index.html')
    })
  ]
}