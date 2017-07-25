'use strict';
const angular = require('angular');

/*@ngInject*/
export function showsServiceService($http, $q) {
	// AngularJS will instantiate a singleton by calling "new" on this function
	
	var service = {
		lastShowNumber: function() {
			return 7;
		},
		
		// Retrieve the list of shows
		getShowsList: function() {
			var deferred = $q.defer();
			
			$http.get('http://data.thepotters.org.uk/alanshows/getAllShows.php').then(
				function(success) {console.log(success); deferred.resolve(success.data);},
				function(failure) {});
				
			return deferred.promise;
			
		}
		
	};
	
	
	
	return service;
	
}

export default angular.module('showsApp.showsService', [])
  .service('showsService', showsServiceService)
  .name;
