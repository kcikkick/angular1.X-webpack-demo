let path = require('path');
let BASIC_MODULE_PATH='./client/modules/';

let modulesConfig = {};

function mergeConfig(config){
    for(const key in config){
        modulesConfig[key] = config[key];
    }
}

exampleConfig = {
    app: BASIC_MODULE_PATH + 'app/app.client.module.js',
    home: BASIC_MODULE_PATH + 'home/home.client.module.js'
}
mergeConfig(exampleConfig);



module.exports={
    modulesConfig: modulesConfig
}



