const path = require('path')

const HtmlWebpackPlugin = require('html-webpack-plugin')
const CssMinimizerPlugin = require('css-minimizer-webpack-plugin')

module.exports = (options) => {
  const { development } = options
  const isDevMode = development === 'development'

  const config = {
    entry: path.resolve('src', 'index.tsx'),
    resolve: { extensions: ['.ts', '.tsx', '.js', '.jsx'] },

    devtool: isDevMode ? 'inline-source-map' : false,

    output: {
      path: path.resolve(__dirname, 'public'),
      filename: '[name].js',
      clean: true,
      publicPath: '/',
    },

    devServer: {
      port: 3000,
      hot: true,
      historyApiFallback: true,
      open: true,
    },

    module: {
      rules: [
        {
          test: /\.(ts|tsx)$/,
          exclude: /node_modules/,
          use: [
            'babel-loader',
            {
              loader: 'ts-loader',
              options: {
                transpileOnly: true,
              },
            },
          ],
        },
        {
          test: /\.(css|scss|sass)$/,
          use: ['style-loader', 'css-loader', 'sass-loader'],
        },
        {
          test: /\.(woff2|woff|ttf)$/i,
          type: 'asset/resource',
          generator: {
            filename: 'fonts/[name][ext]',
          },
        },
        {
          test: /\.(png|svg|jpe?g|gif)$/i,
          type: 'asset/resource',
        },
      ],
    },

    optimization: {
      minimize: true,
      splitChunks: { chunks: 'all' },
      minimizer: ['...', new CssMinimizerPlugin()],
    },

    performance: {
      hints: false,
    },

    plugins: [new HtmlWebpackPlugin({ template: './index.html' })],
  }

  return config
}
