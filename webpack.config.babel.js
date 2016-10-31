const libraryName = 'environment-normalize';
const config = {
  entry: './src/index.js',
  devtool: 'inline-source-map',
  output: {
    path: `${__dirname}/lib`,
    filename: `${libraryName}.js`,
    library: libraryName,
    libraryTarget: 'umd',
    umdNamedDefine: true
  },
  module: {
    loaders: [
      {
        test: /\.js$/,
        loader: 'babel'
      }
    ]
  }
};

export default config;
