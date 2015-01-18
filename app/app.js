'use strict';

// Declare app level module which depends on views, and components
angular.module('myApp', [
    'ngMaterial',
    'ngRoute',
    'myApp.view1',
    'myApp.view2',
    'myApp.version'
])
.config(['$routeProvider','$mdThemingProvider', function ($routeProvider,$mdThemingProvider) {
        $routeProvider.otherwise({ redirectTo: '/view1' });
        $mdThemingProvider.theme('default').primaryColor('grey');

    }])
;