angular.module('statsApp')
.service('getSummoner', function($http){
  this.getSpecificSummoner = function(summonerName){
    var getSpecificSummonerName = 'https://na.api.pvp.net/api/lol/na/v1.4/summoner/by-name/'+ summonerName +'?api_key=RGAPI-a07f02d4-6066-4c62-b6ea-7f06fc202090';
    return $http({
      method: 'GET',
      url: getSpecificSummonerName
    }).then(function(response){
      return response.data;
    })
    return "oops"
  }
});
