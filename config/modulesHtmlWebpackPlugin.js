let HtmlWebpackPlugin = require('html-webpack-plugin');
let ExtractTextPlugin = require('extract-text-webpack-plugin');

let modulesConfig = require('./modulesEntry').modulesConfig;

let BASIC_MODULE_PATH='./client/modules/public/views/';
let htmlPlugin=[];
let ENV = process.env.npm_lifecycle_event;
let isProd = ENV === 'build';

for(const key in modulesConfig){
      const fileName=key+'.html';
      const chunksName=[key];
      console.log('');
      htmlPlugin.push(new HtmlWebpackPlugin({
            template: BASIC_MODULE_PATH+'index.html',
            filename: fileName,
            chunks: chunksName,
            inject: 'body'
        })
      ) ;
}

// Reference: https://github.com/webpack/extract-text-webpack-plugin
// Extract css files
// Disabled when in test mode or not in build mode
htmlPlugin.push(new ExtractTextPlugin({filename: 'css/[name].css', disable: !isProd, allChunks: true}));

module.exports={
    htmlPluginConfig:htmlPlugin
}








