const path = require('path');
const VueLoaderPlugin = require('vue-loader/lib/plugin');

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
    },
    
    module: {
      rules: [        
        {
          test: /\.scss$/,
          use: [
            'vue-style-loader',
            'css-loader',
            {
              loader: 'sass-loader',
              options: {                
                prependData: `variables.scss`
              }
            }            
          ]
        },
        {
          test: /\.js$/,
          loader: 'babel-loader',
          exclude: file => (
            /node_modules/.test(file) &&
            !/\.vue\.js/.test(file)
          )
        },
        {
          test: /\.pug$/,
          oneOf: [
            // это применяется к `<template lang="pug">` в компонентах Vue
            {
              resourceQuery: /^\?vue/,
              use: ['pug-plain-loader']
            },
            // это применяется к импортам pug внутри JavaScript
            {
              use: ['raw-loader', 'pug-plain-loader']
            }
          ]
        },
        {
          test: /\.vue$/,
          loader: 'vue-loader'
        }
      ]
    },

    plugins: [      
      new VueLoaderPlugin()
    ]
  };