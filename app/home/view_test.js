'use strict';

describe('home', function() {

  beforeEach(module('home'));

  describe('controller', function(){
    var scope, actorsSearchCtrl;
    beforeEach(inject(function($rootScope, $controller) {
      scope = $rootScope.$new();
      actorsSearchCtrl = $controller('ActorsSearchController', {$scope: scope});
    }));
    it('should be defined', function() {
      expect(actorsSearchCtrl).toBeDefined();
    });
  });

});