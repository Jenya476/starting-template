const merge = require('webpack-merge');
const baseWebpackConfig = require('./webpack.base.config');
const ImageminPlugin = require('imagemin-webpack-plugin').default;

const buildWebpackConfig = merge(baseWebpackConfig, {
  mode: 'production',
  plugins: [
    // Make sure that the plugin is after any plugins that add images
    new ImageminPlugin({
      pngquant: {
        quality: '50-75'
      },
    })
  ]
});

module.exports = new Promise((resolve, reject) => {
  resolve(buildWebpackConfig);
});
