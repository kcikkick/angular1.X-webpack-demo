import angular from 'angular';

import '../public/static/css/app.css';
import AppCtrl from './controllers/app.client.controllers';

let app = () => {
  return {
    template: require('./views/app.html'),
    controller: 'AppCtrl',
    controllerAs: 'app'
  }
};



const MODULE_NAME = 'app';

angular.module(MODULE_NAME, [])
  .directive('app', app)
  .controller('AppCtrl', AppCtrl);

export default MODULE_NAME;