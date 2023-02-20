const {
  override,
  addWebpackAlias,
  useBabelRc,
  addWebpackPlugin,
  removeModuleScopePlugin,
  overrideDevServer,
} = require("customize-cra");
const path = require("path");
const webpack = require("webpack");

const addProxy = () => (configFunction) => {
  configFunction.proxy = {
    "/api": {
      target: `http://localhost:8000`,
      changeOrigin: true,
    },
  };

  return configFunction;
};

module.exports = {
  webpack: function (config, dev) {
    const fn = override(
      removeModuleScopePlugin(),
      addWebpackAlias({
        buffer: path.resolve(__dirname, "./node_modules/buffer"),
        process: "process/browser.js",
        store: path.resolve(__dirname, "./src/store"),
        constants: path.resolve(__dirname, "./src/constants"),
        assets: path.resolve(__dirname, "./src/assets"),
        hooks: path.resolve(__dirname, "./src/hooks"),
        utils: path.resolve(__dirname, "./src/utils"),
      }),
      useBabelRc(),
      addWebpackPlugin(
        new webpack.ProvidePlugin({
          Buffer: ["buffer", "Buffer"],
          process: "process/browser.js",
        })
      )
    );

    return {
      ...fn(config),
      // for safari mobile debug
      // devtool: dev === "development" ? "cheap-module-eval-source-map" : false,
    };
  },
  devServer: overrideDevServer(addProxy()),
};
