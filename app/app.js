'use strict';

// Declare app level module which depends on views, and components
angular.module('myApp', [
    'ngMaterial',
    'ngRoute',
    'myApp.home',
    'myApp.view2',
    'myApp.version'
])
.config(['$routeProvider','$mdThemingProvider', function ($routeProvider,$mdThemingProvider) {
        $routeProvider.otherwise({ redirectTo: '/home' });
        $mdThemingProvider.theme('default').primaryColor('grey');

    }])
;