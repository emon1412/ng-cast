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

  this.search = function(query, callback) {
    $http({
    url: makeQueryString('https://www.googleapis.com/youtube/v3/search?', {
      part: 'snippet',
      key: window.YOUTUBE_API_KEY,
      q: query || 'turtles',
      maxResults:  5,
      type:'video'
    }),
    method: 'GET',
    dataType: 'json',
    }).then(function successCallback(response) {
      // this callback will be called asynchronously
      // when the response is available
      if (callback) {
        callback(response.data.items);
      }
    }, function errorCallback(response) {
      // called asynchronously if an error occurs
      // or server returns response with an error status.
      console.log('=( error')
    });
  }
});

angular.injector(['ng', 'video-player']).get("youTube").search();
