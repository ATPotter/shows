'use strict';

import angular from 'angular';
import {
  UtilService
} from './util.service';

export default angular.module('showsApp.util', [])
  .factory('Util', UtilService)
  .name;
