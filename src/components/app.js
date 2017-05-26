angular.module('video-player')
.controller('appCtrl', function() {
  this.videos = window.exampleVideoData;
})
.directive('app', function() {
  return {
    scope: {

    },
    restrict: 'E',
    templateUrl: 'src/templates/app.html',
    controller: 'appCtrl',
    controllerAs: 'ctrl',
    bindToController: true
  };
});
