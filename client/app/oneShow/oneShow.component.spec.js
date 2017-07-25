'use strict';

describe('Component: OneShowComponent', function() {
  // load the controller's module
  beforeEach(module('showsApp.oneShow'));

  var OneShowComponent;

  // Initialize the controller and a mock scope
  beforeEach(inject(function($componentController) {
    OneShowComponent = $componentController('oneShow', {});
  }));

  it('should ...', function() {
    expect(1).toEqual(1);
  });
});
