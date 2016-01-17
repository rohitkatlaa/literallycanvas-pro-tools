var path = require('path');

module.exports = {
  entry: "./src/index.js",
  output: {
      path: './lib/js',
      filename: "lc-pro-tools-standalone.js",
      libraryTarget: "var",
      library: 'LCProTools'
  },
  externals: {
    "literallycanvas": "LC",
    "react": "React"
  },
  module: {
    loaders: [
      {
        test: [/\.js$/, /\.jsx$/],
        loader: 'babel-loader',
        query: {
          presets: ['es2015', 'react']
        }
      }
    ]
  },
  resolve: {root: [path.resolve('./')]}
};;