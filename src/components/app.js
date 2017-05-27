angular.module('video-player')
.controller('appCtrl', function() {
  this.videos = window.exampleVideoData;
  this.currentVideo = this.currentVideo || this.videos[0];
  this.click = function(video) {
    console.log('in click video: ', video)
    this.currentVideo = video;
  };
  this.concatYoutubeUrl = function(videoId) {
    return 'https://www.youtube.com/embed/' + videoId;
  };
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
