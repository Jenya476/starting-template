const webpack = require('webpack');
const merge = require('webpack-merge');
const baseWebpackConfig = require('./webpack.base.config');

const devWebpackConfig = baseWebpackConfig.map(conf => merge(conf, {
  mode: 'development',
  devtool: 'cheap-module-eval-source-map',
  devServer: {
    contentBase: conf.externals.paths.dist,
    port: 4200,
    overlay: {
      warning: true,
      errors: true
    }
  },
  plugins: [
    new webpack.SourceMapDevToolPlugin({
      filename: '[file].map'
    })
  ]
}));

module.exports = new Promise((resolve, reject) => {
  resolve(devWebpackConfig);
});
