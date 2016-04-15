(function (global, angular) {
    'use strict';

});


angular.module('todoapp', [
    'ngCookies',
    'ngResource',
    'ngSanitize',
    "ui.router",
]).config(['$stateProvider', '$urlRouterProvider', function ($stateProvider, $urlRouterProvider) {

    $urlRouterProvider.otherwise('/');

    $stateProvider.state('list', {
            url: '/',
        views: {
            'content': {
                templateUrl: 'views/list.html',
                controller: 'ListCtrl'
            }
        }
    })

}]).controller('ListCtrl', function ($scope, $http, $filter) {

    var orderBy = $filter('orderBy');

   /* $http.get('http://localhost:7090/todo/getSample').success(function (data) {
        $scope.todos = data;

        $scope.order = function (predicate, reverse) {
            $scope.todos = orderBy($scope.todos, predicate, reverse);
        };

    }).error(function (data, status) {
        console.log('Error ' + data)
    })
*/
    $http.get('http://localhost:9090/stock/allStock').success(function (data) {
        $scope.todos = data;
        console.log(data)

       /* $scope.order = function (predicate, reverse) {
            $scope.todos = orderBy($scope.todos, predicate, reverse);
        };*/

    }).error(function (data, status) {
        console.log('Error ' + data)
    })

});