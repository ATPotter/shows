'use strict';
const angular = require('angular');
const ngRoute = require('angular-route');


import routes from './oneShow.routes';

export class OneShowComponent {
	/*@ngInject*/
	constructor($routeParams, showsService) {
		'ngInject';

		this.showsService = showsService;
		this.showInfo = {};
		this.showHtml = {};
		this.photoblocks = {};

		this.routeParams = $routeParams;
		this.showNumber = parseInt($routeParams['showNumber']);
	}
  
	$onInit() {
		this.showsService.getShowInfo(this.showNumber).then(response => this.showInfo = response);
		this.showsService.getShowHtml(this.showNumber).then(response => this.showHtml = response);
		this.showsService.getShowPhotos(this.showNumber).then(response => this.buildPhotoInfo(response));
	}
	
	// -- Helper functions
	
	// Parse the list of photoblocks we have been returned.  We need to 
	// build two separate things 
	// - a collection of photoblocks, each of which contains information
	//   about the photoblock and its pictures
	// - a flat collection of all photos in this page - used for the 
	//   lightbox image viewer
	
	buildPhotoInfo(photoblocks) {
		console.log(photoblocks)
	}
};

export default angular.module('showsApp.oneShow', [ngRoute])
  .config(routes)
  .component('oneShow', {
    template: require('./oneShow.html'),
    controller: OneShowComponent,
    controllerAs: 'oneShowCtrl'
  })
  .name;
