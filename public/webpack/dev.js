const path = require('path');
const webpack = require('webpack');

module.exports = {

  devtool: 'inline-cheap-source-map',

  entry: {
    app: [
      'webpack/hot/dev-server',
      'webpack-hot-middleware/client',
      path.resolve(__dirname, '..', 'app/index.jsx'),
    ],
    vendor: [
      'react',
      'react-dom',
      'redux',
      /* add css vendors here*/
    ],
  },

  output: {
    path: path.resolve(__dirname, '..', 'public/build'),
    filename: 'bundle.js',
    publicPath: '/build',
  },

  plugins: [
    new webpack.DefinePlugin({
      'process.env': {
        NODE_ENV: '"development"',
      },
    }),
    new webpack.HotModuleReplacementPlugin(),
    new webpack.optimize.CommonsChunkPlugin('vendor', 'vendor.bundle.js'),
  ],

  module: {
    loaders: [
      { test: /\.jsx?$/, loaders: ['babel-loader', 'react-hot-loader/webpack', 'babel?presets[]=react,presets[]=es2015,presets[]=react-hmre', ], },
      { test: /\.json$/, loader: 'json' },
      { test: /\.scss$/, loader: 'style!css!sass' },
      { test: /\.(png|jpg|gif)$/, loader: 'url-loader?limit=100000' },
      { test: /.(woff(2)?|eot|ttf|svg)(\?[a-z0-9=\.]+)?$/, loader: 'url?limit=100000' },
    ],
  },
};
