angular.module('video-player')
.directive('videoList', function() {
  return {
    // TODO
    scope: {
      videos: '<'
    },
    restrict: 'E',
    controllerAs: 'ctrl',
    bindToController: true,
    controller: function() {
    },
    templateUrl: 'src/templates/videoList.html'
  };
});
