(function (global, angular) {
    'use strict';

    angular.module("nz.com.product", [
        'nz.com.product.productService',
        'nz.com.product.listProduct',
        'nz.com.product.addProduct',
        'nz.com.product.editProduct',
        'ngCookies',
        'ngResource',
        'ngSanitize',
        'ui.router',
        'ngMaterial'
    ]).config(['$stateProvider', '$urlRouterProvider', function ($stateProvider, $urlRouterProvider) {

        $urlRouterProvider.otherwise('/');

        $stateProvider.state('main', {
            url: '/',
            views: {
                'content': {
                    templateUrl: 'views/main.html',
                    controller: 'MainController'
                }
            }
        }),
            $stateProvider.state('listProducts', {
                url: '/listProducts',
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
        }),
            $stateProvider.state('editProduct', {
                url: '/:id/editProduct',
                views: {
                    'content': {
                        templateUrl: 'views/edit.html',
                        controller: 'EditController'
                    }
                }
            })

    }]).config(function($mdDateLocaleProvider) {
        $mdDateLocaleProvider.formatDate = function(date) {
            return moment(date).format("DD/MM/YYYY");
            //return moment(date).format('L');
        };
    }).controller('MainController', function($scope, $state) {
           // $scope.imagePath = 'img/washedout.png';

            $scope.addProduct = function () {
                       return $state.go('addProduct');
            };

            $scope.listProduct = function () {
                       return $state.go('listProducts');
            };
        })
        .config(function($mdThemingProvider) {
            $mdThemingProvider.theme('dark-grey').backgroundPalette('grey').dark();
            $mdThemingProvider.theme('dark-orange').backgroundPalette('orange').dark();
            $mdThemingProvider.theme('dark-purple').backgroundPalette('deep-purple').dark();
            $mdThemingProvider.theme('dark-blue').backgroundPalette('blue').dark();
        });
})(this, angular);