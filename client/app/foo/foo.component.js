

import angular from 'angular';
const ngRoute = require('angular-route');
import routes from './foo.routes';


//const angular = require('angular');
//const ngRoute = require('angular-route');
//import routes from './foo.routes';

export class FooComponent {
	
  /*@ngInject*/
  constructor($http) {
	  'ngInject';
	  
    this.$http = $http;
    this.showsList = [];

    this.message = 'Hello';
    console.log("In constructor");
    
    this.sayHello = function() {
	  return "This is a message";
	}

	// -- Callbacks --
	function successCallback(obj, data) {
		obj.showsList = data;
		console.log(data);
	}
	
	
	this.$http.get('http://data.thepotters.org.uk/alanshows/getAllShows.php').then
	(response => { successCallback(this, response.data);});
  }
}

export default angular.module('showsApp.foo', [ngRoute])
  .config(routes)
  .component('foo', {
    template: require('./foo.html'),
    controller: FooComponent,
    controllerAs: 'fooCtrl'
  })
  .name;
