var webpack = require('webpack');
var HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  entry: [
    'webpack-hot-middleware/client',
    './client/src/index.jsx'
  ],
  output: {
    path: __dirname + '/client/dist',
    filename: 'bundle.js',
    publicPath: ''
  },
  module: {
    loaders: [
      {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        loader: 'react-hot-loader!babel-loader'
      },
      {
        test: /\.(scss|css)$/,
        loaders: ['style-loader', 'css-loader', 'sass-loader']
      }
    ]
  },
  resolve: {
    extensions: ['.js', '.jsx']
  },
  plugins: (() => {
    let prodArr = []
    if (process.argv.indexOf('-p') !== -1) {
      prodArr = [
        new webpack.DefinePlugin({
          'process.env': {
            NODE_ENV: JSON.stringify('production'),
          },
        }),
        new webpack.optimize.UglifyJsPlugin({
          output: {
            comments: false,
          },
        }),
      ];
    }
    return ([
      new webpack.optimize.OccurrenceOrderPlugin(),
      new webpack.HotModuleReplacementPlugin(),
      new HtmlWebpackPlugin({
        template: './client/src/index.html'
      }),
      new webpack.NoEmitOnErrorsPlugin()
    ]).concat(prodArr)

  })()
}
