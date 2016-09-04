// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
// 'starter.controllers' is found in controllers.js
var sampleApp = angular.module('starter', ['ionic', 'starter.controllers', 'backand', 'starter.services','ngCordova'])

.run(function($ionicPlatform) {
  $ionicPlatform.ready(function() {
    // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
    // for form inputs)
    if (window.cordova && window.cordova.plugins.Keyboard) {
      cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
      cordova.plugins.Keyboard.disableScroll(true);

    }
    if (window.StatusBar) {
      // org.apache.cordova.statusbar required
      StatusBar.styleDefault();
    }
  });
})
.config(function(BackandProvider, $stateProvider, $urlRouterProvider, $httpProvider) {
        BackandProvider.setAppName('jumboapp');

        BackandProvider.setSignUpToken('7eaead36-2908-42a3-9d52-9d5f263c4c42');

        BackandProvider.setAnonymousToken('ac9e8a59-0727-418a-947c-25e0f6fa2eea');


  $stateProvider

    .state('app', {
    url: '/app',
    abstract: true,
    templateUrl: 'templates/menu.html',
    controller: 'AppCtrl as vm'
  })

  .state('app.signup', {
    url: '/signup',
    views: {
      'menuContent': {
        templateUrl: 'templates/signup.html',
        controller: 'AppCtrl as vm'
      }
    }
  })
  .state('app.signin', {
      url: '/signin',
      views: {
        'menuContent': {
          templateUrl: 'templates/login.html',
          controller: 'AppCtrl as vm'
        }
      }
    })
    .state('app.cost', {
        url: '/cost',
        views: {
          'menuContent': {
            templateUrl: 'templates/cost.html',
            controller: 'CostCtrl'
          }
        }
      })
    .state('app.address', {
        url: '/address',
        views: {
          'menuContent': {
            templateUrl: 'templates/address.html',
            controller: 'OrderCtrl'
          }
        }
      })
  .state('app.list', {
      url: '/list',
      views: {
        'menuContent': {
          templateUrl: 'templates/list.html',
          controller: 'ListCtrl'
        }
      }
    })
    .state('app.categories', {
      url: '/categories',
      views: {
        'menuContent': {
          templateUrl: 'templates/categories.html',
          controller: 'CategoryCtrl'
        }
      }
    }).state('app.order', {
      url: '/order',
      views: {
        'menuContent': {
          templateUrl: 'templates/order.html',
          controller: 'AppCtrl as vm'
        }
      }
    })
    .state('app.cart', {
      url: '/cart',
      views: {
        'menuContent': {
          templateUrl: 'templates/cart.html',
          controller: 'AppCtrl as vm'
        }
      }
    })
    .state('app.restaurants', {
      url: '/restaurants',
      views: {
        'menuContent': {
          templateUrl: 'templates/restaurants.html',
          controller: 'RestCtrl'
        }
      }
    })
    .state('app.rest_items', {
      url: '/rest_items',
      views: {
        'menuContent': {
          templateUrl: 'templates/rest_items.html',
          controller: 'RestCtrl'
        }
      }
    })
    .state('app.scan', {
      url: '/scan',
      views: {
        'menuContent': {
          templateUrl: 'templates/scan.html',
          controller: 'HomeController'
        }
      }
    })
    .state('app.checkout', {
      url: '/checkout',
      views: {
        'menuContent': {
          templateUrl: 'templates/checkout.html',
          controller: 'AppCtrl as vm'
        }
      }
    })
    .state('app.otp', {
      url: '/otp',
      views: {
        'menuContent': {
          templateUrl: 'templates/otp.html',
          controller: 'OtpCtrl'
        }
      }
    })
  .state('app.single', {
    url: '/playlists/:playlistId',
    views: {
      'menuContent': {
        templateUrl: 'templates/playlist.html',
        controller: 'PlaylistCtrl'
      }
    }
  });
  // if none of the above states are matched, use this as the fallback
  $urlRouterProvider.otherwise('/app/signin');
  $httpProvider.interceptors.push('APIInterceptor');
});
sampleApp.controller("ExampleController", function($scope, $cordovaBarcodeScanner,$state) {

   $scope.scanBarcode = function() {
       $cordovaBarcodeScanner.scan().then(function(result) {
           alert(result.text);
           console.log("Barcode Format -> " + result.format);
           console.log("Cancelled -> " + result.cancelled);
             $state.go('app.rest_items');
       }, function(error) {
           console.log("An error happened -> " + error);
       });
   };

});
