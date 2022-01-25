const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ReactRefreshWebpackPlugin = require('@pmmmwh/react-refresh-webpack-plugin');

module.exports = {
  entry: './src/index.js',
  resolve: {
    extensions: ['*', '.js', '.jsx']
  },
  // Where files should be sent once they are bundled
  output: {
    path: path.resolve(__dirname, '/dist'),
    filename: '[name].[contenthash].js'
  },
  // webpack 5 comes with devServer which loads in development mode
  devServer: {
    port: 3000,
    hot: true
  },
  target: 'web',
  // Rules of how webpack will take our files, complie & bundle them for the browser
  module: {
    rules: [
      {
        use: 'babel-loader',
        test: /\.(js|jsx)$/,
        exclude: /node_modules/
      },
      {
        use: ['style-loader', 'css-loader'],
        test: /\.(css|less)$/
      },
      {
        type: 'asset',
        test: /\.(png|svg|jpg|jpeg|gif)$/i
      }
    ]
  },

  plugins: [new HtmlWebpackPlugin({ template: './src/index.html' }), new ReactRefreshWebpackPlugin()]
};
