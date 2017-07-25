

import angular from 'angular';
const ngRoute = require('angular-route');
import routes from './foo.routes';


//const angular = require('angular');
//const ngRoute = require('angular-route');
//import routes from './foo.routes';

export class FooComponent {
	
	/*@ngInject*/
	constructor($http, showsService) {
		'ngInject';

		this.$http = $http;
		this.showsList = [];
		this.showsService = showsService;

		this.message = 'Hello';
		//console.log("In constructor");

	};

	// -- Callbacks --
	successCallback(/*obj,*/ data) {
		this.buildDataForShowsListTable(data);
		this.showsList = data;
	};

	// -- Module initialisation code
	$onInit() {
		this.showsService.getShowsList().then
		(response => { this.successCallback(/*this,*/ response);});
	};


	// -- Private helper methods
	buildDataForShowsListTable = function(srcData) {
	  //console.log(srcData);
	};

}

export default angular.module('showsApp.foo', [ngRoute])
  .config(routes)
  .component('foo', {
    template: require('./foo.html'),
    controller: FooComponent,
    controllerAs: 'fooCtrl'
  })
  .name;
