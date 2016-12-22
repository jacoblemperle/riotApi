angular.module('statsApp').service('getSummoner', function($http, $q) {


    this.getSummonerId = function(summonerName) {
        var defer = $q.defer();
        var summonerGetter = 'https://na.api.pvp.net/api/lol/na/v1.4/summoner/by-name/' + summonerName + '?api_key=RGAPI-a07f02d4-6066-4c62-b6ea-7f06fc202090';
         $http({
            method: 'GET',
            url: summonerGetter
        }).then(function(response) {
          console.log(response, 'from first');
            var idGetter = response.data[summonerName].id;
            var summonerHistoryGetter = 'https://na.api.pvp.net/api/lol/na/v1.3/stats/by-summoner/' + idGetter + '/ranked?season=SEASON2016&api_key=RGAPI-a07f02d4-6066-4c62-b6ea-7f06fc202090';
            $http({
                method: 'GET',
                url: summonerHistoryGetter
            }).then(function(response){
              console.log(response, 'second response');
            });
            defer.resolve(idGetter);
        });
        return defer.promise;
    };

    // this.getSummonerData = function(id){
    //   var summonerHistoryGetter = 'https://na.api.pvp.net/api/lol/na/v1.3/stats/by-summoner/'+ id +'/ranked?season=SEASON2016&api_key=RGAPI-a07f02d4-6066-4c62-b6ea-7f06fc202090';
    //   return $http({
    //     method: 'GET',
    //     url: summonerHistoryGetter
    //   }).then(function(summonerHistoryResponse){
    //       return summonerHistoryResponse.data;
    //   });
    //   return "didnt recieve data"
    // };

});
