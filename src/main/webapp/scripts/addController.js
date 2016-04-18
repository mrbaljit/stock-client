(function (global, angular) {
    'use strict';
    angular
        .module("nz.com.stock.addstock", [])
        .controller("AddController", AddController);

    AddController.$inject = ['$scope', '$http', '$filter'];

    function AddController($scope, $http, $filter) {

    $scope.discountTypes = [{
      'id': 1,
      'label': "$NZ"
    }, {
      'id': 2,
      'label': '% discount'}
      ];

    $scope.discountOnPrd = [{
      'id': 1,
      'label': "all products"
    }, {
      'id': 2,
      'label': 'orders over'}
      ];

        $scope.prdCategoryType = [{
            'id': 1,
            'label': "Medicine"
        }, {
            'id': 2,
            'label': 'Sports'}
            , {
                'id': 3,
                'label': 'Electronics'}
            , {
                'id': 4,
                'label': 'Games'}
            , {
                'id': 5,
                'label': 'Computers'}
        ];


    $scope.stock = {};

        var abc = '2015-12-19';
        $scope.stock.discountStartDate = new Date(abc);
        console.log($scope.stock.discountStartDate);

    $scope.saveStock = function () {
    console.log($scope.stock.productCode);
    console.log($scope.stock.productName);
    console.log($scope.stock.retailPrice);



      var dataObj = {
          productCategory: $scope.stock.productCategory,
          productCode : $scope.stock.productCode,
          productName : $scope.stock.productName,
          costPrice : $scope.stock.costPrice,
          retailPrice : $scope.stock.retailPrice,

          productDescription : $scope.stock.productDescription,
          productInvoiceDescription : $scope.stock.productInvoiceDescription,

          discountStartDate : $scope.stock.discountStartDate,
          discountEndDate : $scope.stock.discountEndDate,
          discountExpires : $scope.stock.discountExpires,

          discountType : $scope.stock.discountType,
          discountAmount : $scope.stock.discountAmount,
          discountPercentage : $scope.stock.discountPercentage,

          discountAmountForOrdersOver : $scope.stock.discountAmountForOrdersOver,
          discountForProduct : $scope.stock.discountForProduct

		};

        console.log(dataObj);

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
