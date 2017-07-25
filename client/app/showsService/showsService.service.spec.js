'use strict';

describe('Service: showsService', function() {
  // load the service's module
  beforeEach(module('showsApp.showsService'));

  // instantiate service
  var showsService;
  beforeEach(inject(function(_showsService_) {
    showsService = _showsService_;
  }));

  it('should do something', function() {
    expect(!!showsService).toBe(true);
  });
});
