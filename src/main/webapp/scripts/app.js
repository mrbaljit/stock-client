(function (global, angular) {
    'use strict';

    angular.module("nz.com.stock", [
        'nz.com.stock.liststock',
        'nz.com.stock.addstock',
        'ngCookies',
        'ngResource',
        'ngSanitize',
        'ui.router',
        'ngMaterial'
    ]).config(['$stateProvider', '$urlRouterProvider', function ($stateProvider, $urlRouterProvider) {

        $urlRouterProvider.otherwise('/');

        $stateProvider.state('listStock', {
            url: '/',
            views: {
                'content': {
                    templateUrl: 'views/list.html',
                    controller: 'ListController'
                }
            }
        }),
       $stateProvider.state('addStock', {
            url: '/addStock',
            views: {
                'content': {
                    templateUrl: 'views/add.html',
                    controller: 'AddController'
                }
            }
        })

    }])
})(this, angular);