angular.module('statsApp').service('mainService', function($http){

// var getChampData = 'https://na.api.pvp.net/api/lol/na/v1.3/stats/by-summoner/26703120/ranked?season=SEASON2016&api_key=RGAPI-a07f02d4-6066-4c62-b6ea-7f06fc202090';
  var getChampData = 'https://global.api.pvp.net/api/lol/static-data/na/v1.2/champion?champData=image,stats&api_key=RGAPI-a07f02d4-6066-4c62-b6ea-7f06fc202090';
this.getChampions = function(){
  return $http({
    method: 'GET',
    url: getChampData
  }).then(function(webResponse){
    if(webResponse.status === 200){
       console.log(webResponse);
      return webResponse.data.data;
    }
    return "oops";
  })
}

this.getSpecificChamp = function(id) {

  var getSpecificChampData = 'https://global.api.pvp.net/api/lol/static-data/na/v1.2/champion/' + id + '?champData=image,stats&api_key=RGAPI-a07f02d4-6066-4c62-b6ea-7f06fc202090';
  return $http({
    method: 'GET',
    url: getSpecificChampData
  }).then(function(response) {
    console.log(response);
    return response.data.stats;

  })
  return "ooops"
}
});
