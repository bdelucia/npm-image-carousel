const path = require('path');

const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  entry: {
    app: './src/index.js',
  },

  devtool: 'eval-source-map',
  devServer: {
    watchFiles: ['./src/index.html', './src/img/**/*'],
  },

  plugins: [
    new HtmlWebpackPlugin({
      title: 'development',
      template: './src/index.html',
    }),
  ],

  module: {
    rules: [
      {
        test: /\.css$/i,
        use: ['style-loader', 'css-loader'],
      },
      {
        test: /\.(png|svg|jpg|jpeg|gif)$/i,
        use: [
          {
            loader: 'file-loader',
            options: {
              name: 'images/[name].[ext]', // Output images to 'images/' folder in dist
            },
          },
        ],
      },
    ],
  },

  output: {
    filename: 'main.js',

    path: path.resolve(__dirname, 'dist'),

    clean: true,
  },
};
