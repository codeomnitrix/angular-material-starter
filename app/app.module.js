'use strict';

var angular = require('angular');
require('angular-ui-router');
require('angular-material');

var qlApp = angular.module('qlsearch', ['ui.router', 'ngMaterial']);

qlApp.config(['$stateProvider', '$urlRouterProvider', '$mdThemingProvider', function ($stateProvider, $urlRouterProvider, $mdThemingProvider) {
    $urlRouterProvider.otherwise("/search");
    $stateProvider.state("search", {
        url: "/search",
        templateUrl: "app/search_results/search.html",
        controller: "searchCtrl"
    });
    var themes = new ThemeService();
    for (var i = 0; i < themes.length; i++) {
        if(themes[i] == "default") {
            $mdThemingProvider.theme("default").primaryPalette('white', {
                    'default': '50',
                    'hue-1': '100',
                    'hue-2': '200'
                });    
        }else{
            $mdThemingProvider.theme(themes[i]).primaryPalette(themes[i]);
        }        
    }
    $mdThemingProvider.definePalette('black', {
    '50': '000000',
    '100': '000000',
    '200': '000000',
    '300': '000000',
    '400': '000000',
    '500': '000000',
    '600': '000000',
    '700': '000000',
    '800': '000000',
    '900': '000000',
    'A100': '000000',
    'A200': '000000',
    'A400': '000000',
    'A700': '000000',
    'contrastDefaultColor': 'light'
  });
  $mdThemingProvider.definePalette('white', {
    '50': 'f7f8f8',
    '100': 'f0f1f1',
    '200': 'e8ebea',
    '300': 'e1e4e3',
    '400': 'dadedc',
    '500': 'd2d7d5',
    '600': 'cbd1ce',
    '700': 'c4cac7',
    '800': 'bcc4c0',
    '900': 'b5bdb9',
    'A100': 'aeb7b3',
    'A200': '9fa7a3',
    'A400': '8f9693',
    'A700': '7f8683',
    'contrastDefaultColor': 'dark'
  });

  $mdThemingProvider.theme('default')
    .primaryPalette('white', {
        'default': '50',
        'hue-1': '100',
        'hue-2': '200'
    });    
}]);

qlApp.run(['$rootScope', function($rootScope) {
    $rootScope.theme = {
        "name": "default"
    };
}]);


window.ThemeService = function() {
    var themes = [ 
        'default', 
        'red',
        'pink',
        'purple',
        'deep-purple',
        'indigo',
        'blue',
        'light-blue',
        'cyan',
        'teal',
        'green',
        'light-green',
        'lime',
        'yellow',
        'amber',
        'orange',
        'deep-orange',
        'brown',
        'grey',
        'blue-grey'
    ];

    return themes;
}

qlApp.controller("rootCtrl", ['$scope', function($scope) {
    $scope.config = {
        "leftNavFlex": 20
    }
}]);

require("./search_results");
require("./common");