var HtmlWebpackPlugin = require('html-webpack-plugin');
var ExtractTextPlugin = require('extract-text-webpack-plugin');

var modulesConfig = require('./modulesEntry').modulesConfig;

let BASIC_MODULE_PATH='./client/modules/public/views/';
let htmlPlugin=[];

/**var pageConfigs=[{
        "template":BASIC_MODULE_PATH+'index.html',
        "filename": 'index.html',
        "chunks": ['app']
},{
        "template": BASIC_MODULE_PATH+'index.html',
        "filename": 'home.html',
        "chunks": ['home']
}];**/




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



/**for(let i =0 ;i<pageConfigs.length;i++){
    const curPageConfig=pageConfigs[i];
    htmlPlugin.push(new HtmlWebpackPlugin({
            template: curPageConfig.template,
            filename: curPageConfig.filename,
            chunks: curPageConfig.chunks,
            inject: 'body'
        })
      )
}**/
// Reference: https://github.com/webpack/extract-text-webpack-plugin
// Extract css files
// Disabled when in test mode or not in build mode
htmlPlugin.push(new ExtractTextPlugin({filename: 'css/[name].css', disable: true, allChunks: true}));

module.exports={
    htmlPluginConfig:htmlPlugin
}








