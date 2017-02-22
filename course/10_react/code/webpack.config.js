module.exports = {
  entry: './src/index.js',
  output: {
    filename: 'bundle.js',
    path: __dirname
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        use: [
          {
            loader: 'babel-loader',
            query: {
              presets: ['es2015', 'react', 'stage-1'],
              plugins: ['transform-decorators-legacy']
            }
          }

        ],
        exclude: 'node_modules'
      }
    ]
  }
}
