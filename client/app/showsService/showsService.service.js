'use strict';
const angular = require('angular');

/*@ngInject*/
export function showsServiceService($http, $q) {
	// AngularJS will instantiate a singleton by calling "new" on this function
	
	const GET_SHOWS_LIST_URL = 'http://data.thepotters.org.uk/alanshows/getAllShows.php';
	const GET_SHOW_INFO = 'http://data.thepotters.org.uk/alanshows/getOneShowInfo.php?showNumber=';
	const GET_SHOW_HTML = 'http://data.thepotters.org.uk/alanshows/getOneShowHtml.php?showNumber=';
	const GET_SHOW_PHOTOS = 'http://data.thepotters.org.uk/alanshows/getAllPhotoblocks.php?showNumber=';
	
	var doGet = function(url) {
		var deferred = $q.defer();
		
		$http.get(url).then(
			function(success) {deferred.resolve(success.data);},
			function(failure) {});
			
		return deferred.promise;
	}
	
	var service = {

		// Retrieve the list of shows
		getShowsList: function() { return doGet(GET_SHOWS_LIST_URL); },
		getShowInfo: function(showNumber) { return doGet(GET_SHOW_INFO + showNumber); },
		getShowHtml: function(showNumber) { return doGet(GET_SHOW_HTML + showNumber); },
		getShowPhotos: function(showNumber) { return doGet(GET_SHOW_PHOTOS + showNumber); }
		
	};
	
	return service;
	
}

export default angular.module('showsApp.showsService', [])
  .service('showsService', showsServiceService)
  .name;
