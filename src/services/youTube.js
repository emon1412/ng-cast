angular.module('video-player')
.service('youTube', function($http){
  // TODO

  var makeQueryString = function(url, params) {
    var paramsArray = []
    for (p in params) {
      paramsArray.push(p + '=' + params[p]);
    }
    return url + paramsArray.join('&');
  }

  this.search = function(params = {}) {
    $http({
    url: makeQueryString('https://www.googleapis.com/youtube/v3/search?', {
      part: 'snippet',
      key: params.key || window.YOUTUBE_API_KEY,
      q: params.query || 'turtles',
      maxResults: params.max || 5,
      type:'video'
    }),
    method: 'GET',
    dataType: 'json',
    }).then(function successCallback(response) {
      // this callback will be called asynchronously
      // when the response is available
      console.log('data is: ', response)
    }, function errorCallback(response) {
      // called asynchronously if an error occurs
      // or server returns response with an error status.
      console.log('=( error')
    });
  }
});

angular.injector(['ng', 'video-player']).get("youTube").search();
