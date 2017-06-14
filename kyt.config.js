const HtmlWebpackPlugin = require('html-webpack-plugin');


module.exports = {
  productionPublicPath: '/spring-metrics/',
  hasServer: false,
  modifyWebpackConfig: (config, options) => {
    if (options.type === 'client') {
      config.plugins.push(new HtmlWebpackPlugin({
        template: 'src/index.ejs',
      }));
    }

    config.module.rules.push({
      test: /\.(md|txt)$/,
      use: 'raw-loader',
    });

    return config;
  },
};
