var path = require('path');
var webpack = require('webpack');
var ExtractTextPlugin = require("extract-text-webpack-plugin");
var DashboardPlugin = require('webpack-dashboard/plugin');

module.exports = {
  entry: {
    bundle: './src/js/index.js',
    style:  './src/css/main.js'
  },
  output: {
    path: path.join(__dirname, 'dist'),
    publicPath: '/',
    filename: '[name].js'
  },
  module: {
    preLoaders: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        loader: 'eslint',
      },
      {
        test: /\.(scss|sass)$/,
        loader: 'sasslint'
      }
    ],
    loaders: [
      {
        test: /\.(js|jsx)$/,
        loader: 'babel',
        exclude: /node_modules/,
        query: {
          presets: ['es2015', 'stage-0', 'react', 'react-hmre']
        }
      },
      {
        test: /\.(scss|sass)$/,
        loader: ExtractTextPlugin.extract('css?sourceMap!sass?sourceMap!postcss')
      }
    ]
  },
  resolve: {
    extensions: ['', '.js', '.jsx', '.css', '.scss']
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new ExtractTextPlugin('[name].css'),
    new DashboardPlugin()
  ],
  postcss: [
    require('autoprefixer')({ browsers:["last 2 version"] })
  ],
  eslint: {
    configFile: './.eslintrc'
  },
  sasslint: {
    configFile: './.sass-lint.yml'
  },
  devtool: '#source-map',
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