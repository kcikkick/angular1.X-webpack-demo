var HtmlWebpackPlugin = require('html-webpack-plugin');
var ExtractTextPlugin = require('extract-text-webpack-plugin');

let BASIC_MODULE_PATH='./client/modules/public/views/';
let htmlPlugin=[];

let pageConfigs=[{
        template:BASIC_MODULE_PATH+'index.html',
        filename: 'index.html',
        chunks: ['app']
},{
        template: BASIC_MODULE_PATH+'home.html',
        filename: 'home.html',
        chunks: ['home']
}];



for(const curPageConfig in pageConfigs){
    htmlPlugin.push(new HtmlWebpackPlugin({
            template: curPageConfig.template,
            filename: curPageConfig.filename,
            chunks: curPageConfig.chunks,
            inject: 'body'
        }),

        // Reference: https://github.com/webpack/extract-text-webpack-plugin
        // Extract css files
        // Disabled when in test mode or not in build mode
        new ExtractTextPlugin({filename: 'css/[name].css', disable: true, allChunks: true})
      )
}

module.exports={
    htmlPluginConfig:htmlPlugin
}








