(function (global, angular) {
    'use strict';
    angular
        .module("nz.com.stock.addstock", [])
        .controller("AddController", AddController);

    AddController.$inject = ['$scope', '$http', '$filter'];

    function AddController($scope, $http, $filter) {

     $scope.stock = {};
     $scope.discountTypes = ["$NZ", "% Discount"];

    $scope.saveStock = function () {
    console.log($scope.stock.code);
    console.log($scope.stock.name);
    console.log($scope.stock.price);
      var dataObj = {
				name : $scope.stock.name,
				code : $scope.stock.code,
                stockData : { price : $scope.stock.price}
		};

     var res = $http.post('http://localhost:9090/stock/addStock', dataObj);
		res.success(function(data, status, headers, config) {
			$scope.message = data;
		});
		res.error(function(data, status, headers, config) {
			alert( "failure message: " + JSON.stringify({data: data}));
		});

		}

    }

})(this, angular);
