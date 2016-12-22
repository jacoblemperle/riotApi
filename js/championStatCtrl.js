angular.module('statsApp').controller('championStatCtrl', function($scope, mainCtrl, mainService){
  $scope.getSpecificChamp = function(id) {
      mainService.getSpecificChamp(id).then(function(champInfo) {
          $scope.realMVP = champInfo;
          $scope.champName = id;
          console.log($scope.realMVP);

      });
  };
});
