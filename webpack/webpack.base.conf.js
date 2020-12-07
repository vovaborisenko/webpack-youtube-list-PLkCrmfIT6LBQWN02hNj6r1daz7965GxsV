const CopyWebpackPlugin = require('copy-webpack-plugin')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const path = require('path')
const { VueLoaderPlugin } = require('vue-loader')

const PATHS = {
  src: path.join(__dirname, '../src'),
  dist: path.join(__dirname, '../dist'),
  assets: 'assets'
}

module.exports = {
  externals: {
    paths: PATHS,
  },
  entry: {
    app: [
      'babel-polyfill',
      PATHS.src,
    ],
  },
  output: {
    filename: `${PATHS.assets}/js/[name].[contenthash:8].js`,
    path: PATHS.dist,
    publicPath: '/',
  },
  optimization: {
    splitChunks: {
      cacheGroups: {
        vendor: {
          name: 'vendors',
          test: /node_modules/,
          chunks: 'all',
          enforce: true,
        },
      },
    },
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        loader: 'babel-loader',
        exclude: '/node_modules/',
      },
      {
        test: /\.vue$/,
        loader: 'vue-loader',
        options: {
          loader: {
            scss: 'vue-style-loader!css-loader!sass-loader',
            sass: 'vue-style-loader!css-loader!sass-loader',
          },
        },
      },
      {
        test: /\.(png|jpg|giff|svg)$/,
        loader: 'file-loader',
        options: {
          name: '[name].[ext]',
        },
      },
      {
        test: /\.scss$/,
        use: [
            'style-loader',
            {
              loader: MiniCssExtractPlugin.loader,
              options: {
                esModule: false,
              },
            },
            {
              loader: 'css-loader',
              options: {
                sourceMap: true,
              },
            },
            {
              loader: 'postcss-loader',
              options: {
                sourceMap: true,
              },
            },
            {
              loader: 'sass-loader',
              options: {
                sourceMap: true,
              },
            },
        ],
      },
      {
        test: /\.css$/,
        use: [
          'style-loader',
          {
            loader: MiniCssExtractPlugin.loader,
            options: {
              esModule: false,
            },
          },
          {
            loader: 'css-loader',
            options: {
              sourceMap: true,
            },
          },
          {
            loader: 'postcss-loader',
            options: {
              sourceMap: true,
            },
          },
        ],
      },
    ],
  },
  resolve: {
    alias: {
      vue: 'vue/dist/vue.esm.js',
    }
  },
  plugins: [
    new MiniCssExtractPlugin({
      filename: `${PATHS.assets}/css/[name].[contenthash:8].css`,
    }),
    new HtmlWebpackPlugin({
      template: `${PATHS.src}/index.html`,
      filename: './index.html',
    }),
    new CopyWebpackPlugin({
      patterns: [
        { from: `${PATHS.src}/img`, to: `${PATHS.assets}/img` },
        { from: `${PATHS.src}/static`, to: '' },
      ],
    }),
    new VueLoaderPlugin(),
  ],
}
