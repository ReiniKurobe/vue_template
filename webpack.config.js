const path = require('path');
const { VueLoaderPlugin } = require('vue-loader')

module.exports = {
  mode: "production",
  entry: './src/js/index.js',
  ////
  // 出力設定
  // この場合はdest/bundle.jsというファイルが生成される
  ////
  output: {
    // 出力先のファイル名
    filename: 'bundle.js',
    // 出力先のファイルパス
    path: `${__dirname}/dest/js`,
  },
  plugins: [
    new VueLoaderPlugin()
  ],
  module: {
    rules: [
      {
        test: /\.vue$/,
        loader: 'vue-loader',
      },
      {
        test: /\.js$/,
        loader: 'babel-loader',
      },
      {
        test: /\.(css|sass|scss)$/,
        loader: 'sass-loader',
      },
    ]
  },
  resolve: {
    extensions: ['.js', '.vue'],
    alias: {
      vue$: 'vue/dist/vue.esm.js',
    },
  },
  // 開発サーバの設定
  devServer: {
    // destディレクトリの中身を表示する
    contentBase: 'dest',
  },
  entry: [
    'babel-polyfill',
    path.resolve('src/js', 'index.js')
  ],
}

// module.exports = {
//   entry: './src/index.js',
  ////
  // 出力設定
  // この場合はdest/bundle.jsというファイルが生成される
  ////
//   output: {
      // 出力先のファイル名
//       filename: 'bundle.js',
      // 出力先のファイルパス
//       path: `${__dirname}/dest`,
//   },
  // 開発サーバの設定
//   devServer: {
      // destディレクトリの中身を表示する
//       contentBase: 'dest',
//   },
// }
