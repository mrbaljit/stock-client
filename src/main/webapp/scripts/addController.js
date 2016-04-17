(function (global, angular) {
    'use strict';
    angular
        .module("nz.com.stock.addstock", [])
        .controller("AddController", AddController);

    AddController.$inject = ['$scope', '$http', '$filter'];

    function AddController($scope, $http, $filter) {

var self = this;
    $scope.discountTypes = [{
      'id': 1,
      'label': "$NZ"
    }, {
      'id': 2,
      'label': '% discount'}
      ];
    $scope.selectedId = 0;
    $scope.selectedUser = function() {
     console.log($scope.selectedId);
    }


     $scope.stock = {};

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
