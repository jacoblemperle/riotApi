angular.module('statsApp').directive('showTime', function(){
  return {
    restrict: 'E',
    template: '<span>{{time}}</span>',
    link: function(scope, element, attrs){
      var currentTime = new Date();
      scope.time = currentTime.toString();
    },
    controller: function($scope){

    }
  }
})
