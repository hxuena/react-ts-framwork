const argv = require("yargs-parser")(process.argv.slice(2))
const _mode = argv.mode || "development"
const _mergeConfig = require(`./config/webpack.${_mode}.js`)
const merge = require('webpack-merge')
const {join, resolve} = require("path")


const webpackConfig = {
  entry: {
    app: resolve(__dirname, "./src/web/index.tsx")
  },
  module: {
    rules: [
      {
        test: /.(js|jsx|ts|tsx)$/,
        include: [ resolve('src') ],
        exclude: /node_modules/,
        loader: ""
  
      }
    ]
  }
  
}


module.exports = merge(webpackConfig, _mergeConfig) 