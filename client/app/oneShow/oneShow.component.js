'use strict';
const angular = require('angular');
const ngRoute = require('angular-route');


import routes from './oneShow.routes';

export class OneShowComponent {
  /*@ngInject*/
  constructor($routeParams) {
	  'ngInject';
    this.message = 'Hello';
    
    this.routeParams = $routeParams;
    this.showNumber = $routeParams['showNumber'];
  }
}

export default angular.module('showsApp.oneShow', [ngRoute])
  .config(routes)
  .component('oneShow', {
    template: require('./oneShow.html'),
    controller: OneShowComponent,
    controllerAs: 'oneShowCtrl'
  })
  .name;
