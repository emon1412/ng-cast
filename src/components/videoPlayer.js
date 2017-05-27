angular.module('video-player')

.directive('videoPlayer', function() {
  return {
    // TODO
    scope: {
      video: '='
    },
    controllerAs: 'ctrl',
    bindToController: true,
    restrict: 'E',
    templateUrl: 'src/templates/videoPlayer.html',
    controller: function() {

    }
  };
});
