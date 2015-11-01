'use strict';

describe('experiments.actors-search module', function() {

  beforeEach(module('experiments.actors-search'));

  describe('actors-search controller', function(){
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