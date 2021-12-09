var path = require('path')
var webpack = require('webpack')
var TerserPlugin = require("terser-webpack-plugin");

module.exports = {
    entry: {
      'nr-browser-agent-wrapper': './src/index.ts',
      'nr-browser-agent-wrappermin': './src/index.ts'
    },
    output: {
      path: path.resolve(__dirname, '_bundles'),
      filename: '[name].js',
      libraryTarget: 'umd',
      library: 'NRBrowserAgentWrapper',
      umdNamedDefine: true
    },
    resolve: {
      extensions: ['.ts', '.js']
    },
    devtool: 'source-map',
    optimization: {
        minimize: true,
        minimizer: [new TerserPlugin()],
    },
    module: {
      rules: [
        { test: /\.ts$/, use: 'awesome-typescript-loader', exclude: /node_modules/ },
      ],
    }
  }