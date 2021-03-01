var path = require('path');

var ENTRY_PATH= path.join(__dirname, 'src/client/index.jsx');
var OUT_PATH= path.join(__dirname, 'public');

module.exports = {
  mode: 'development',
  entry: ENTRY_PATH,
  output: {
    path: OUT_PATH,
    filename: 'bundle.js',
  },
  watch: true,
  resolve: {extensions: ['*','.jsx', '.js']},
  module: {
    rules: [
      {
        test: /\.jsx?/,
        exclude: /(node_modules|bower_components)/,
        use: {
          loader: 'babel-loader',
          options: {
            'presets': ['@babel/preset-env', '@babel/preset-react'],
            // 'plugins': ['babel-plugin-styled-components']
          }
        }
      },
      {
        test: /\.(png|jpg|gif)$/i,
        use: [
          {
            loader: 'url-loader',
            options: {
              limit: 8192,
            },
          },
        ],
      }
    ]
  }
};
