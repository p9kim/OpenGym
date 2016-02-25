// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in item.html)
// the 2nd parameter is an array of 'requires'
angular.module('starter', ['ionic'])

.run(function($ionicPlatform) {
  $ionicPlatform.ready(function() {
    if(window.cordova && window.cordova.plugins.Keyboard) {
      // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
      // for form inputs)
      cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);

      // Don't remove this line unless you know what you are doing. It stops the viewport
      // from snapping when text inputs are focused. Ionic handles this internally for
      // a much nicer keyboard experience.
      cordova.plugins.Keyboard.disableScroll(true);
    }
    if(window.StatusBar) {
      StatusBar.styleDefault();
    }
  });
})


//Config
.config(function($stateProvider, $urlRouterProvider, $ionicConfigProvider) {
  $ionicConfigProvider.tabs.position('bottom');
  $ionicConfigProvider.navBar.alignTitle('center');

  $stateProvider
  .state('tabs', {
    url: '/tab',
    abstract: true,
    templateUrl: 'templates/tabs.html'
  })

  .state('tabs.home', {
    url: '/home',
    views: {
      'home-tab': {
        templateUrl: 'templates/home.html'
      }
    }
  })

  .state('tabs.search', {
    url: '/search',
    views: {
      'search-tab': {
        templateUrl: 'templates/search.html',
        controller: 'GymController'
      }
    }
  })

  .state('tabs.info', {
    url: '/search/:info',
    views: {
      'search-tab': {
        templateUrl: 'templates/info.html',
        controller: 'GymController'
      }
    }
  })

  .state('tabs.checkin', {
    url: '/checkin',
    views: {
      'checkin-tab': {
        templateUrl: 'templates/checkin.html',
        controller: 'GymController'
      }
    }
  })

  .state('tabs.level', {
    url: '/checkin/:level',
    views: {
      'checkin-tab': {
        templateUrl: 'templates/level.html',
        controller: 'GymController'
      }
    }
  })

  $urlRouterProvider.otherwise('/tab/home');
})

//Controllers
.controller('GymController', ['$scope', '$http', '$state', 
  function($scope, $http, $state) {
  $http.get('js/data.json').success(function(data) {
    $scope.gyms = data;
    //$scope.levels = data.pack;
    //console.log("level is: " levels);
    $scope.whichgym = $state.params.level;
    $scope.gyminfo = $state.params.info;

    /*scope.plusOne = function(item) {
      item.pack += 1;
    }

    $scope.minusOne = function(item) {
      if(item.pack <= 0) {
        item.pack = 0;
      }
      else {
        item.pack -= 1;
      }
    }*/

    $scope.doRefresh = function() {
      $http.get('js/data.json').success(function(data) {
        $scope.gyms = data;
        $scope.$broadcast('scroll.refreshComplete');
      })
    }

  });
}])

/*.directive('help', ['$rootScope', function($rootScope) {
  return {
    restrict: 'EA',
    templateUrl: 'directives/help.html',
    link: function(scope, element, attrs){

    }
  };
}])*/;
