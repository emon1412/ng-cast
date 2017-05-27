angular.module('video-player')
.controller('appCtrl', function() {
  this.videos = window.exampleVideoData;
  this.currentVideo = window.exampleVideoData[0];
  this.click = function(video) {
    console.log('in click video: ', video)
    this.currentVideo = video;
  }.bind(this);
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
