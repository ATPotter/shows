'use strict';

export default function($routeProvider) {
  'ngInject';
  $routeProvider
    .when('/oneShow/:showNumber', {
      template: '<one-show></one-show>'
    });
}
