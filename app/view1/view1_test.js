'use strict';

describe('myApp.view1 module', function() {

  beforeEach(module('myApp.view1'));

  describe('view1 controller', function(){
    var scope, view1Ctrl;
    beforeEach(inject(function($rootScope, $controller) {
      scope = $rootScope.$new();
      view1Ctrl = $controller('View1Ctrl', {$scope: scope});
    }));
    it('should ....', function() {
      expect(view1Ctrl).toBeDefined();
    });
  });

});