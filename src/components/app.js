angular.module('video-player')
.controller('appCtrl', function(youTube) {
  // this.videos = window.exampleVideoData;
  // this.currentVideo = this.videos[0];
  this.selectVideo = function(video) {
    console.log('in click video: ', video)
    this.currentVideo = video;
  }.bind(this);

  this.searchResults = (results) => {
    this.videos = results
    this.currentVideo = this.videos[0];
  }

  this.service = youTube

  youTube.search('turtles', this.searchResults);

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
