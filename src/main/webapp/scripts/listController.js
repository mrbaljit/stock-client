(function (global, angular) {
    'use strict';
    angular
        .module("nz.com.stock.liststock", [])
        .controller("ListController", ListController);

    ListController.$inject = ['$scope', '$http', '$filter', '$state'];

    function ListController($scope, $http, $filter, $state) {

       $scope.addStockPage = function () {
            return $state.go('addProduct');
        };

        $http.get('http://localhost:9090/stock/allProduct').success(function (data) {
            $scope.todos = data;
            console.log(data);
            console.log(data[0].productCode);
            var abc = new Date(data[0].discountEndDate);
            console.log(abc)

        }).error(function (data, status) {
            console.log('Error ' + data)
        });

    }

})(this, angular);