var path = require('path');
var webpack = require('webpack');

module.exports = {
  entry: {
    bundle: './src/js/main.jsx'
  },
  output: {
    path: path.join(__dirname, 'dist'),
    publicPath: '/',
    filename: '[name].js'
  },
  module: {
    loaders: [
      {
        test: /\.jsx?$/,
        loader: 'babel-loader',
        exclude: /node_modules/,
        query: {
          presets: ['es2015', 'react', 'react-hmre']
        }
      }
    ]
  },
  resolve: {
    extensions: ['', '.js', '.jsx', '.css', '.scss']
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin()
  ],
  devServer: {
    historyApiFallback: true,
    hot: true,
    inline: true,
    progress: true,
    colors: true,
    stats: 'errors-only',
    contentBase: './dist'
  }
}