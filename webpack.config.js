const path = require('path') //Nodeのpathモジュールを取り込む

const outputPath = path.resolve(__dirname, 'dist') // 出力先としてdistディレクトリをフルパスで指定
console.log({outputPath})

module.exports = {
  entry: './src/index.js', // webpackのエントリーポイント(バンドルの対象ファイル)の設定
  output: {
    filename: 'main.js', // 出力する際のファイル名を指定
    path: outputPath // 出力先を設定
  }
}