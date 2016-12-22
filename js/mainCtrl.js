angular.module('statsApp').controller('mainCtrl', function($scope, mainService, getSummoner) {

  $scope.getChampions = function() {
    mainService.getChampions().then(function(champs) {
        $scope.champs = champs;
    });
  };

  $scope.getChampions();



    $scope.getSpecificSummoner = function(summonerName){
      getSummoner.getSummonerId(summonerName).then(function(summonerInfo){
        $scope.summonerInfo = summonerInfo.data.champions;
        console.log($scope.summonerInfo);
      });
    };

  });
