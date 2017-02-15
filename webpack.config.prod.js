import webpack from 'webpack';
import path from 'path';

export default {
  debug: true,
  devtool: 'source-map',
  noInfo: false,
  entry: [
    path.resolve(__dirname,'src/index')
  ],
  target: 'web',
  output:{
    path: path.resolve(__dirname,'dist'),
    publicPath:'/',
    filename: 'bundle.js'
  },
  devServer:{
    contentBase: path.resolve(__dirname,'src')
  },
  plugins:[
    // Eliminate duplicate packages when generating bundle
    new webapack.optimize.DedupePlugin(),
    // Minify js
    new webpack.optimize.UglifyJsPlugin()
  ],
  module: {
    loaders:[
      {test: /\.js$/, exclude: /node_modules/, loaders: ['babel']},
      {test: /\.css$/,loaders:['style','css']}
    ]
  }
};
