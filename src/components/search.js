angular.module('video-player')
.directive('search', function() {

  return {
    // TODO
    scope: {
      result: '<',
      service: '<'
    },
    controllerAs: 'ctrl',
    bindToController: true,
    restrict: 'E',
    templateUrl: 'src/templates/search.html',
    controller: function() {
      this.handleClick = () => {
        this.service.search(this.input, (data) => {
          this.result(data);
        });
      }
    }
  };
});
