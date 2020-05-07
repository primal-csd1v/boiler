const path = require('path');

module.exports = {

    mode: "production",

    watch:false,

    devtool: 'cheap-inline-source-map',

    entry: {
      bundle: './js/index.js'
    },
    output: {
      filename: '[name].js',
      path: path.resolve(__dirname, 'dist')
    }
  };