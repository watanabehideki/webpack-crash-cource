const path = require("path") //Nodeのpathモジュールを取り込む
const HtmlWebpackPlugin = require("html-webpack-plugin")

const outputPath = path.resolve(__dirname, "dist") // 出力先としてdistディレクトリをフルパスで指定
console.log({ outputPath })

module.exports = {
  entry: "./src/index.js", // webpackのエントリーポイント(バンドルの対象ファイル)の設定
  output: {
    filename: "main.js", // 出力する際のファイル名を指定
    path: outputPath, // 出力先を設定
  },
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        exclude: /node_modules/, // トランスパイルの対象から除外する
        loader: "babel-loader", // トランスパイル実行ローダー
      },
      {
        test: /\.html$/,
        loader: 'html-loader'
      }
    ]
  },
  devServer: {
    // webpack-dev-serverのドキュメントルートをoutputPathに設定
    contentBase: outputPath,
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: "./src/index.html",
      filename: "./index.html"
    })
  ]
}
