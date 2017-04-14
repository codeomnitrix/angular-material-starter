'use strict';
var angular = require('angular');

angular.module('qlsearch').controller('headerCtrl', ['$scope', '$rootScope', '$window', '$mdSidenav', function($scope, $rootScope, $window, $mdSidenav) {
    $scope.themes = new $window.ThemeService();
    $scope.theme = $rootScope.theme;
    $scope.changeTheme = function(ind) {
        $rootScope.theme.name = $scope.themes[ind];
        $scope.theme = $rootScope.theme;
    }
    $scope.collapseLeftNav = function(){
        $scope.config.leftNavFlex = ($scope.config.leftNavFlex == 5 ? 20: 5 );
    }
}]);