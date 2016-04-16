(function (global, angular) {
    'use strict';
    angular
        .module("nz.com.stock.liststock", [])
        .controller("ListController", ListController);

    ListController.$inject = ['$scope', '$http', '$filter'];

    function ListController($scope, $http, $filter) {

        $http.get('http://localhost:9090/stock/allStock').success(function (data) {
            $scope.todos = data;
            console.log(data)

        }).error(function (data, status) {
            console.log('Error ' + data)
        })

    }

})(this, angular);