angular.module('video-player')
.directive('videoListEntry', function() {
  return {
    scope: {
      video: '<',
      onClick: '='
    },
    controller: function() {
       
    },
    controllerAs: 'ctrl',
    bindToController: true,
    restrict: 'E',
    templateUrl: 'src/templates/videoListEntry.html'
  };
});
