(function (global, angular) {
    'use strict';
    angular
        .module("nz.com.stock.addstock", [])
        .controller("AddController", AddController);

    AddController.$inject = ['$scope', '$http', '$filter'];

    function AddController($scope, $http, $filter) {

     $scope.saveStock = _saveStock();
     function _saveStock() {
      var dataObj = {
				name : "coffee",
				code : "COFF",
                stockData : { price : '200'}
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