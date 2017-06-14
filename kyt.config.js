const HtmlWebpackPlugin = require('html-webpack-plugin');


module.exports = {
  productionPublicPath: '/spring-metrics/docs/current/public/',
  clientURL: 'http://localhost:3001/spring-metrics/docs/current/public/',
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
