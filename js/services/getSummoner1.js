angular.module('statsApp').service('getSummoner1', function($http){


this.getSummonerId = function(summonerName){
  var summonerGetter = 'https://na.api.pvp.net/api/lol/na/v1.4/summoner/by-name/'+ summonerName +'?api_key=RGAPI-a07f02d4-6066-4c62-b6ea-7f06fc202090';
  return $http({
      method: 'GET',
      url: summonerGetter
  }).then(function(response){
    return response.data[summonerName].id;
  });
  return "Didn't recieve data"
};

this.getSummonerData = function(id){
  var summonerHistoryGetter = 'https://na.api.pvp.net/api/lol/na/v1.3/stats/by-summoner/'+ id +'/ranked?season=SEASON2016&api_key=RGAPI-a07f02d4-6066-4c62-b6ea-7f06fc202090';
  return $http({
    method: 'GET',
    url: summonerHistoryGetter
  }).then(function(summonerHistoryResponse){
      return summonerHistoryResponse.data;
  });
  return "didnt recieve data"
};

});
