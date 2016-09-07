describe('mainController', function() {
  var controller = {};

  beforeEach(function() {
    angular.mock.module('babelTest');
  });

  beforeEach(inject(function($controller) {
    controller = $controller('mainController', {
      $scope: {}
    });
  }));

  it('should set a title', function() {
    expect(controller.title).toBe('Gulp and Babel Test');
  });

});
