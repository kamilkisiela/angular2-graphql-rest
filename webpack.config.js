var webpackMerge = require('webpack-merge');
var path  = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

var clientConfig = {
  target: 'web',
  entry: './src/client/index',
  output: {
    path: root('build/client'),
    publicPath: '/',
  },
  node: {
    global: true,
    __dirname: true,
    __filename: true,
    process: true,
    Buffer: false
  },
  module: {
    loaders: [
      { test: /\.css$/,  loader: 'style!css' },
      { test: /\.ts$/, loader: 'ts-loader' }
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: 'src/client/index.html',
    }),
  ],
  devServer: {
    proxy: {
      '/graphql': 'http://localhost:3010/graphql',
      '/api/*': 'http://localhost:3010'
    },
    historyApiFallback: {
      index: '/',
    },
  },
};

var serverConfig = {
  target: 'node',
  entry: './src/server/index', // use the entry file of the node server if everything is ts rather than es5
  output: {
    path: root('build/server'),
    libraryTarget: 'commonjs2'
  },
  externals: checkNodeImport,
  node: {
    global: true,
    __dirname: true,
    __filename: true,
    process: true,
    Buffer: true
  },
  module: {
    loaders: [
      { test: /\.js$/, loader: 'babel' }
    ]
  }
};

// Default config
var defaultConfig = {
  context: __dirname,
  resolve: {
    root: root('/src'),
    extensions: ['', '.webpack.js', '.ts', '.js', '.css']
  },
  output: {
    publicPath: path.resolve(__dirname),
    filename: 'index.js'
  },
}

module.exports = [
  // Client
  webpackMerge({}, defaultConfig, clientConfig),

  // Server
  webpackMerge({}, defaultConfig, serverConfig)
];

// Helpers
function checkNodeImport(context, request, cb) {
  if (!path.isAbsolute(request) && request.charAt(0) !== '.') {
    cb(null, 'commonjs ' + request); return;
  }
  cb();
}

function root(args) {
  args = Array.prototype.slice.call(arguments, 0);
  return path.join.apply(path, [__dirname].concat(args));
}
