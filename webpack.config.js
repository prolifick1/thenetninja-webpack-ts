let path = require('path');

module.exports = {
  entry: `./src/index.ts`,
  module: {
    rules: [{
      test: /\.ts$/,
      use: 'ts-loader',
      include: [path.resolve(__dirname, 'src')]
    }]
  },
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, '/public/')
  },
  devServer: {
    publicPath: '/public/',
    port: 8081,
  },
}