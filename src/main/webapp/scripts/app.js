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

        $stateProvider.state('listProduct', {
            url: '/',
            views: {
                'content': {
                    templateUrl: 'views/list.html',
                    controller: 'ListController'
                }
            }
        }),
       $stateProvider.state('addProduct', {
            url: '/addProduct',
            views: {
                'content': {
                    templateUrl: 'views/add.html',
                    controller: 'AddController'
                }
            }
        })

    }]).config(function($mdDateLocaleProvider) {
        $mdDateLocaleProvider.formatDate = function(date) {
            return moment(date).format("DD/MM/YYYY");
        };
    });
})(this, angular);