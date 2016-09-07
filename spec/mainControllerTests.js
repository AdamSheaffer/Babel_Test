describe('mainController', () => {
  let controller = {};

  beforeEach(() => {
    angular.mock.module('babelTest');
  });

  beforeEach(inject(($controller) => {
    controller = $controller('mainController', {
      $scope: {}
    });
  }));

  it('should set a title', () => {
    expect(controller.title).toBe('Gulp and Babel Test');
  });

});
