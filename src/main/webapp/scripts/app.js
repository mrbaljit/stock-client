(function (global, angular) {
    'use strict';

    angular.module("nz.com.stock", [
        'nz.com.stock.liststock',
        'ngCookies',
        'ngResource',
        'ngSanitize',
        'ui.router',
    ]).config(['$stateProvider', '$urlRouterProvider', function ($stateProvider, $urlRouterProvider) {

        $urlRouterProvider.otherwise('/');

        $stateProvider.state('list', {
            url: '/',
            views: {
                'content': {
                    templateUrl: 'views/list.html',
                    controller: 'ListController'
                }
            }
        })

    }])
})(this, angular);