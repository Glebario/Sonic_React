const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {

  // webpack will take the files from ./src/index
  entry: './src/index',

  // and output it into /dist as bundle.js
  output: {
    path: path.join(__dirname, '/dist'),
    filename: 'bundle.js',
    publicPath: '/',
  },

  devServer: {
    host: 'localhost',
    port: '3000',
    hot: true,
    historyApiFallback: true,
    proxy: {
      '/api': {
        target: 'http://localhost:5000',
        secure: false,
      },
      '/uploads': {
        target: 'http://localhost:5000',
      },
    },
  },

  resolve: {
    modules: [
      'node_modules',
      path.resolve('./src'),
    ],
    extensions: ['.ts', '.tsx', '.js'],
  },

  module: {
    rules: [

      // we use babel-loader to load our jsx and tsx files
      {
        test: /\.(ts|js)x?$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
        },
      },

      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader'],
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './src/index.html',
    }),
  ],
};
