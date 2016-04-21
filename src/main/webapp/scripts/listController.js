(function (global, angular) {
    'use strict';
    angular
        .module("nz.com.product.listProduct", [])
        .controller("ListController", ListController);

    ListController.$inject = ['$scope', '$http', '$filter', '$state'];

    function ListController($scope, $http, $filter, $state) {

       $scope.addProductPage = function () {
            return $state.go('addProduct');
        };

        $http.get('http://localhost:9090/product/allProducts').success(function (data) {
            $scope.products = data;
        }).error(function (data, status) {
            console.log('Error ' + data)
        });

    }

})(this, angular);