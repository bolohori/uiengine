const webpack = require('webpack')
const merge = require('webpack-merge')
const nodeExternals = require('webpack-node-externals')
const VueLoaderPlugin = require('vue-loader/lib/plugin')

const mode = process.env.NODE_ENV || 'development'

const baseConfig = {
  mode,

  // entry and output aren't necessary for the tests,
  // because the adapter overwrites them anyways

  resolve: {
    extensions: ['.js', '.vue']
  },

  module: {
    rules: [
      {
        test: /\.vue$/,
        loader: 'vue-loader'
      },
      {
        test: /\.css$/,
        loader: 'css-loader'
      },
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: 'babel-loader',
        options: {
          cacheDirectory: true,
          presets: [
            '@babel/preset-env',
            'vue'
          ]
        }
      }
    ]
  },

  plugins: [
    new VueLoaderPlugin()
  ]
}

const clientConfig = merge(baseConfig, {
  name: 'client',

  plugins: [
    new webpack.DefinePlugin({
      'process.env.NODE_ENV': JSON.stringify(mode),
      'process.env.VUE_ENV': '"client"'
    })
  ]
})

const serverConfig = merge(baseConfig, {
  name: 'server',
  target: 'node',

  // https://webpack.js.org/configuration/externals/#function
  // https://github.com/liady/webpack-node-externals
  // Externalize app dependencies. This makes the server build much faster
  // and generates a smaller bundle file.
  externals: [
    // FIXME: To be honest I don't know why the vue deps must be defined here!
    'vue',
    'vue-server-renderer',
    nodeExternals({
      // do not externalize CSS files in case we need to import it from a dep
      whitelist: /\.css$/
    })
  ],

  plugins: [
    new webpack.DefinePlugin({
      'process.env.NODE_ENV': JSON.stringify(mode),
      'process.env.VUE_ENV': '"server"'
    })
  ]
})

module.exports = [clientConfig, serverConfig]
