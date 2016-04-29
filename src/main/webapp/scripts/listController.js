(function (global, angular) {
    'use strict';
    angular
        .module("nz.com.product.listProduct", [])
        .controller("ListController", ListController);

    ListController.$inject = ['$scope', '$http', '$filter', '$state', '$mdDialog', 'productService'];

    function ListController($scope, $http, $filter, $state, $mdDialog, productService) {


        //$scope.products = products;
        productService.getAllProducts().then(function (data) {

            $scope.products = data;
        });

        $scope.addProductPage = function () {
            return $state.go('addProduct');
        };

        $scope.deleteProduct = function (ev, id) {
            var confirm = $mdDialog.confirm()
                .title('Would you like to delete this product?')
                .textContent('')
                .ariaLabel('Confirm Delete')
                .targetEvent(ev)
                .ok('Please do it!')
                .cancel('Cancel');

            $mdDialog.show(confirm).then(function() {
                 deleteProduct(id);
            }, function() {

            });

           function deleteProduct(id) {
                $http.post('http://localhost:9090/product/' + id +'/deleteProduct')
                .then(
                    function(response){
                        console.log("success ");
                        getAllProducts();
                        $state.go('listProducts');
                    },
                    function(response){
                        // failure call back
                        console.log( "failure message: " );
                    }
                );
        }};

    }

})(this, angular);