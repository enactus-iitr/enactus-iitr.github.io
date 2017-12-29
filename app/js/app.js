var myApp = angular.module('myApp', ['ngRoute']);

myApp.config(function ($routeProvider) {

    $routeProvider

    .when('/team', {
        templateUrl: 'app/pages/team.html',
        controller: 'teamController'
    })

    .when('/gallery', {
        templateUrl: 'app/pages/gallery.html',
        controller: 'galleryController'
    })

});
myApp.controller('teamController', ['$scope', '$log', function($scope, $log) {

    $scope.team = [
        {
          name: 'Ashish Sinha',
          fb_id: 'i.ashish.sinha',
          twitter_id: 'ashishsinhajsr',
          github_id: 'sinashish',
          linkedin_id: 'sinashish'
        },
        {
          name: 'Ashish Sinha',
          fb_id: 'i.ashish.sinha',
          twitter_id: 'ashishsinhajsr',
          github_id: 'sinashish',
          linkedin_id: 'sinashish'
        },
        {
          name: 'Ashish Sinha',
          fb_id: 'i.ashish.sinha',
          twitter_id: 'ashishsinhajsr',
          github_id: 'sinashish',
          linkedin_id: 'sinashish'
        }
    ]
}]);

myApp.controller('galleryController', ['$scope', '$log', function($scope, $log) {
    $scope.photos=[
      {
        src="app/images/me2.jpg",
        alt="me.jpg"

      },
      {
        src="app/images/me2.jpg",
        alt="me.jpg"
      },
      {
        src="app/images/me2.jpg",
        alt="me.jpg"
      },
      {
        src="app/images/me2.jpg",
        alt="me.jpg"
      },
      {
        src="app/images/me2.jpg",
        alt="me.jpg"
      },
      {
        src="app/images/me2.jpg",
        alt="me.jpg"
      }
    ]


}]);
