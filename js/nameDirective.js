angular.module('statsApp').directive('nameDirective', function() {
  return {
    restrict: "E",
    template: '<span>Name: {{champs.name}}<span>',
    link: function(scope, element, attrs){
      var currentName
    }
  }
});
