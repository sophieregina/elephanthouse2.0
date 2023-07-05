// craco.config.js
module.exports = {
    webpack: {
      configure: {
        output: {
          filename: "static/js/js.js",
        },
        optimization: {
          runtimeChunk: false,
          splitChunks: {
            chunks(chunk) {
              return false;
            },
          },
        },
      },
    },
    plugins: [
      {
        plugin: {
          overrideWebpackConfig: ({ webpackConfig }) => {
            webpackConfig.plugins[5].options.filename = "static/css/css.css";
            return webpackConfig;
          },
        },
        options: {},
      },
    ],
  };