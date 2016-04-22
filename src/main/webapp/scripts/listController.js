(function (global, angular) {
    'use strict';
    angular
        .module("nz.com.product.listProduct", [])
        .controller("ListController", ListController);

    ListController.$inject = ['$scope', '$http', '$filter', '$state', '$mdDialog'];

    function ListController($scope, $http, $filter, $state, $mdDialog) {

        getAllProducts();

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

        function getAllProducts() {
            $http.get('http://localhost:9090/product/allProducts').success(function (data) {
                $scope.products = data;
            }).error(function (data, status) {
                console.log('Error ' + data)
            });
        }
        
    }

})(this, angular);