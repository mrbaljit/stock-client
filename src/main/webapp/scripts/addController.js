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


    $scope.product = {};

       // var abc = '2015-12-19';
        //$scope.product.discountStartDate = new Date(abc);
        //console.log($scope.product.discountStartDate);

    $scope.saveStock = function () {
    console.log($scope.product.productCode);
    console.log($scope.product.productName);
    console.log($scope.product.retailPrice);



      var dataObj = {
          productCategory: $scope.product.productCategory,
          productCode : $scope.product.productCode,
          productName : $scope.product.productName,
          costPrice : $scope.product.costPrice,
          retailPrice : $scope.product.retailPrice,

          productDescription : $scope.product.productDescription,
          productInvoiceDescription : $scope.product.productInvoiceDescription,

          discountStartDate : $scope.product.discountStartDate,
          discountEndDate : $scope.product.discountEndDate,
          discountExpires : $scope.product.discountExpires,

          discountType : $scope.product.discountType,
          discountAmount : $scope.product.discountAmount,
          discountPercentage : $scope.product.discountPercentage,

          discountAmountForOrdersOver : $scope.product.discountAmountForOrdersOver,
          discountForProduct : $scope.product.discountForProduct

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
