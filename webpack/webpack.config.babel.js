/**
 * Webpack Config for Javascript Bundling
 *
 * @package  generator-kittn
 * @author   Lars Eichler <larseichler.le@gmail.com>
 */

import webpack from 'webpack'
import { getIfUtils, removeEmpty } from 'webpack-config-utils'
import path from 'path'
import { BundleAnalyzerPlugin } from 'webpack-bundle-analyzer'
import FriendlyErrorsWebpackPlugin from 'friendly-errors-webpack-plugin'
import Webpack2Polyfill from 'webpack2-polyfill-plugin'
const kittnConf = require('../config.json')

const nodeEnv = process.env.NODE_ENV || 'production'

const {
  ifProduction,
  ifDevelopment
} = getIfUtils(nodeEnv)

/*
 |--------------------------------------------------------------------------
 | Setting some paths for our Application
 |--------------------------------------------------------------------------
 */
const ROOT_PATH = path.resolve(__dirname, '..')
const PUBLIC_PATH = path.join(ROOT_PATH, kittnConf.dist.webpackpublic)
const ASSETS_PATH = kittnConf.dist.webpackjsassets
const LOADER_PATH = path.join(ROOT_PATH, kittnConf.src.js)

/*
 |--------------------------------------------------------------------------
 | Hot Middleware Client
 |--------------------------------------------------------------------------
 */

const hotClient =
'webpack-hot-middleware/client?path=/__webpack_hmr&timeout=20000&reload=true&overlay=true'

/*
 |--------------------------------------------------------------------------
 | Defining Entry Points, could be used to manually split Parts of the Application, for example
 | Admin Javascript and FrontEnd JavaScript
 |--------------------------------------------------------------------------
 */

const entryPoints = kittnConf.src.jsEntryPoints

if (ifDevelopment()) {
  Object.keys(entryPoints).forEach((entry) => entryPoints[entry] = [hotClient].concat(entryPoints[entry]))
}

function resolve (dir) {
  return path.join(__dirname, '..', dir)
}

/*
 |--------------------------------------------------------------------------
 | return webpack config object
 |--------------------------------------------------------------------------
 */
module.exports = {
  devtool: ifProduction('#source-map', '#cheap-module-eval-source-map'),
  context: path.join(ROOT_PATH, 'src'),
  entry: removeEmpty(entryPoints),
  output: {
    path: path.join(PUBLIC_PATH, ASSETS_PATH),
    publicPath: '/' + ASSETS_PATH,
    filename: 'js/[name].js',
    chunkFilename: 'js/[name].js'
  },
  externals: {
    Modernizr: 'Modernizr'
  },
  resolve: {
    extensions: [
      '.vue',
      '.js'
    ],
    modules: [resolve(kittnConf.src.base), resolve('node_modules')],
    alias: {
      src: resolve(kittnConf.src.base)
    }
  },
  module: {
    rules: [
      {
        enforce: 'pre',
        test: /\.(js)$/,
        loader: 'eslint-loader',
        options: {
          formatter: require('eslint-friendly-formatter')
        },
        exclude: /node_modules/,
        include: resolve(kittnConf.src.base)
      },
      {
        test: /\.js$/,
        use: 'babel-loader',
        include: resolve(kittnConf.src.base),
        exclude: /node_modules/
      }
    ]
  },
  plugins: removeEmpty([
    new Webpack2Polyfill(),
    ifProduction(
      new BundleAnalyzerPlugin({
        analyzerMode: 'disabled',
        generateStatsFile: true,
        statsFilename: `${ROOT_PATH}/webpack/stats.json`,
        logLevel: 'info'
      })
    ),
    ifDevelopment(new webpack.HotModuleReplacementPlugin()),
    ifDevelopment(new webpack.NamedModulesPlugin()),
    ifDevelopment(new webpack.NoEmitOnErrorsPlugin()),
    ifDevelopment(new FriendlyErrorsWebpackPlugin()),
    new webpack.DefinePlugin({
      'process.env': {
        NODE_ENV: JSON.stringify(nodeEnv)
      }
    }),
    new webpack.LoaderOptionsPlugin({
      options: {
        eslint: {
          failOnError: false,
          failOnWarning: false,
          configFile: ifProduction('./.eslintrc.js', './.eslintrc-dev.js'),
          formatter: require('eslint-formatter-pretty')
        }
      }
    }),
    ifProduction(new webpack.optimize.UglifyJsPlugin({
      sourceMap: true,
      compress: {
        warnings: false
      }
    }))
  ])
}
