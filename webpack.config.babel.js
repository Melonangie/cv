const webpack = require('webpack')
const merge = require('webpack-merge')
const path = require('path')
const yargs = require('yargs')
const ExtractTextPlugin = require('extract-text-webpack-plugin')
const kittnConf = require('./config.json')

const argv = yargs.argv
const env = argv.env || 'development'
const nodeEnv = process.env.NODE_ENV || 'production'

const ROOT_PATH = path.resolve(__dirname)
const PUBLIC_PATH = path.join(ROOT_PATH, kittnConf.dist.dist)
const ASSETS_PATH = kittnConf.dist.webpackjsassets
const LOADER_PATH = path.join(ROOT_PATH, kittnConf.src.js)
const PRIMARY_FILE_NAME = 'main.js'

let bundle = {
  context: path.join(ROOT_PATH, 'src'),
  entry: {
    main: `${LOADER_PATH}${PRIMARY_FILE_NAME}`
  },
  output: {
    path: path.join(PUBLIC_PATH, ASSETS_PATH),
    publicPath: '/' + ASSETS_PATH,
    filename: 'js/[name].js'
  },
  externals: {
    Modernizr: 'Modernizr',
    jquery: 'jQuery'
  },
  resolve: {
    extensions: [
      '.js'
    ],
    alias: {
    }
  },
  module: {
    rules: [
      {
        enforce: 'pre',
        test: /\.js$/,
        use: 'eslint-loader',
        exclude: /node_modules/
      },
      {
        test: /\.js$/,
        use: 'babel-loader',
        include: LOADER_PATH,
        exclude: /node_modules/
      }
    ]
  },
  plugins: [
    new webpack.DefinePlugin({
      'process.env': {
        NODE_ENV: JSON.stringify(nodeEnv)
      }
    }),
    new webpack.LoaderOptionsPlugin({
      options: {
        eslint: {
          failOnError  : false,
          failOnWarning: false,
          configFile: env === 'development' ? './.eslintrc-dev' : './.eslintrc',
          formatter    : require('eslint-formatter-pretty')
        }
      }
    })
  ]
};


module.exports = bundle
