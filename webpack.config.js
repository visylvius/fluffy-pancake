module.exports = {
  devtool: 'source-map',
  context: __dirname,
  entry: {
    javascript: "./src/main.js"
  },
  output: {
    filename: "./js/main.js",
    path: __dirname + "/static"
  },
  module: {
    loaders: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: "babel",
        query: {
          presets: ['es2015', 'react']
        }
      }
    ]
  }
};
