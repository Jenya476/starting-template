const webpack = require('webpack');
const merge = require('webpack-merge');
const baseWebpackConfig = require('./webpack.base.config');
const ImageminPlugin = require('imagemin-webpack-plugin').default;

const buildWebpackConfig = baseWebpackConfig.map(conf => merge(conf, {
  mode: 'production',
  plugins: [
    new webpack.NormalModuleReplacementPlugin(
      /environment\.ts/,
      './environment.prod.ts'
    ),
    // Make sure that the plugin is after any plugins that add images
    new ImageminPlugin({
      pngquant: {
        quality: '50-75'
      },
    })
  ]
}));

module.exports = new Promise((resolve, reject) => {
  resolve(buildWebpackConfig);
});
