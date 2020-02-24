var SvgStorePlugin = require('external-svg-sprite-loader/lib/SvgStorePlugin');
var path = require('path');

var config = {
  entry: './src/index.tsx',

  output: {
    path: '/',
    filename: 'index.js'
  },

  resolve: {
    extensions: ['.ts', '.tsx', '.js', '.jsx'],
    alias: {
      src: path.resolve(__dirname, './src')
    }
  },

  devServer: {
    inline: true,
    port: 3000,
    historyApiFallback: true
  },
  module: {
    loaders: [
      {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        loader: 'babel-loader',

        query: {
          presets: ['es2015', 'react', 'stage-0'],
          plugins: ['transform-decorators-legacy']
        }
      },
      {
        test: /\.tsx?$/,
        loader: 'ts-loader',
        exclude: /node_modules/
      },
      {
        test: /\.woff(2)?(\?v=[0-9]\.[0-9]\.[0-9])?$/,
        loader: 'url-loader'
      },
      {
        test: /\.(png|jp(e*)g|svg)$/,
        use: [{
          loader: 'url-loader',
          options: {
            limit: 8000,
            name: 'images/[hash]-[name].[ext]'
          }
        }]
      },
      { test: /\.(scss|css)$/, loader: 'style-loader!css-loader' },
      {
        loader: 'external-svg-sprite-loader',
        test: /\.svg$/
      }
    ]
  },
  plugins: [
    new SvgStorePlugin({
      sprite:
        {
          startX: 10,
          startY: 10,
          deltaX: 20,
          deltaY: 20,
          iconHeight: 20
        }
    })
  ]
}

module.exports = config;
