import fs from 'fs';
import path from 'path';
import webpack from 'webpack';

const plugins = [];
const pkgJson = JSON.parse(fs.readFileSync('package.json', 'utf8'));
const {name: libraryName} = pkgJson;
const isMinify = !!process.env.MINIFY;

if (isMinify) {
  plugins.push(new webpack.optimize.UglifyJsPlugin({minimize: true}));
}

const config = {
  entry: './src/index.js',
  devtool: 'inline-source-map',
  output: {
    path: `${__dirname}/lib`,
    filename: `${libraryName}${isMinify ? '.min' : ''}.js`,
    library: libraryName,
    libraryTarget: 'umd',
    umdNamedDefine: true
  },
  module: {
    loaders: [
      {
        test: /\.js$/,
        loader: 'babel',
        exclude: /(node_modules)/
      }
    ]
  },
  resolve: {
    root: path.resolve('./src'),
    extensions: ['', '.js']
  },
  plugins: plugins
};

export default config;
