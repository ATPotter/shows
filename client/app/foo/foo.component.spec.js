'use strict';

describe('Component: FooComponent', function() {
  // load the controller's module
  beforeEach(module('showsApp.foo'));

  var FooComponent;

  // Initialize the controller and a mock scope
  beforeEach(inject(function($componentController) {
    FooComponent = $componentController('foo', {});
  }));

  it('should ...', function() {
    expect(1).toEqual(1);
  });
});
