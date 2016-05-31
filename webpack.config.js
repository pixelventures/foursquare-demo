var webpack = require('webpack')

module.exports = {
  cache: true,
  entry: {
    main: __dirname + '/client/public/js/client.js'
  },
  output: {
    path: __dirname + '/client/dist',
    filename: '[name].js'
  },
  watch: true,
  keepalive: true,
  plugins: [
    new webpack.OldWatchingPlugin()
  ],
  module: {
    loaders: [
      { test: /\.jsx?$/, exclude: /(node_modules|bower_components)/, loader: 'babel' },
      { test: /\.css$/, loader: 'style-loader!css-loader' },
      { test: /\.eot(\?v=\d+\.\d+\.\d+)?$/, loader: "file" },
      { test: /\.(woff|woff2)$/, loader:"url?prefix=font/&limit=5000" },
      { test: /\.ttf(\?v=\d+\.\d+\.\d+)?$/, loader: "url?limit=10000&mimetype=application/octet-stream" },
      { test: /\.svg(\?v=\d+\.\d+\.\d+)?$/, loader: "url?limit=10000&mimetype=image/svg+xml" },
      { test: /\.html$/, loader: 'html' }
    ]
  }
}
