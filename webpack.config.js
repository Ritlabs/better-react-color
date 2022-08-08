const path = require('path')
const webpack = require('webpack')

const babelLoader = {
  loader: 'babel-loader'
}

module.exports = {
  entry: ['./docs/index.js'],
  output: {
    path: path.join(__dirname, 'docs/build'),
    filename: 'bundle.js',
    publicPath: 'docs/build/',
  },
  devTool: "source-map",
  module: {
    loaders: [
      {
        test: /\.tsx?$/,
        exclude: [/node_modules/, /modules/],
        use: [babelLoader, {loader: 'ts-loader'}],
      },
      {
        test: /\.js$/,
        include: /react-context/,
        use: babelLoader,
      },
      {
        test: /\.js$/,
        exclude: [/node_modules/, /modules/],
        use: [babelLoader],
        // enforce: 'pre',
      },
      // {
      //   test: /\.jsx$/,
      //   exclude: [/node_modules/, /modules/],
      //   loaders: ['jsx-loader', 'babel-loader'],
      // },
      {
        test: /\.css$/,
        loaders: ['style-loader', 'css-loader'],
      }, {
        test: /\.md$/,
        loaders: ['html-loader'],
      },
    ],
  },
  resolve: {
    extensions: ['', '.ts', '.tsx', '.js', '.jsx'],
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin({ quiet: true }),
    new webpack.NoErrorsPlugin(),
  ],
  quiet: true,
}
