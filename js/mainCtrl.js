angular.module('statsApp').controller('mainCtrl', function($scope, mainService) {

  $scope.getChampions = function() {
    mainService.getChampions().then(function(champs) {
        $scope.champs = champs;
    });
  };

  $scope.getChampions();

    $scope.getSpecificChamp = function(id) {
        mainService.getSpecificChamp(id).then(function(champInfo) {
            $scope.realMVP = champInfo;
            $scope.champName = id;
            console.log($scope.realMVP);

        });
    };

  });
