(function (global, angular) {
    'use strict';
    angular
        .module("nz.com.stock.editstock", [])
        .controller("EditController", EditController);

    EditController.$inject = ['$scope', '$http', '$filter', '$stateParams'];

    function EditController($scope, $http, $filter, $stateParams){

        $http.get('http://localhost:9090/stock/' + $stateParams.id +'/getProduct').success(function (data) {
            $scope.product = data;
            $scope.product.discountEndDate = new Date($scope.product.discountEndDate);
            $scope.product.discountStartDate = new Date($scope.product.discountStartDate);
        }).error(function (data, status) {
            console.log('Error ' + data)
        });        
        
        

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
        $scope.product.discountStartDate = new Date();
        $scope.product.discountEndDate = new Date();
     //   console.log($scope.product.discountStartDate);
     //   console.log($scope.product.discountEndDate);
//

        console.log(new Date());
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

          //discountStartDate : $scope.product.discountStartDate.toJSON(),
          //discountEndDate : $scope.product.discountEndDate.toJSON(),
          discountStartDate : $scope.product.discountStartDate.toLocaleDateString('en-NZ'),
          discountEndDate : $scope.product.discountEndDate.toLocaleDateString('en-NZ'),
          discountExpires : $scope.product.discountExpires,

          discountType : $scope.product.discountType,
          discountAmount : $scope.product.discountAmount,
          discountPercentage : $scope.product.discountPercentage,

          discountAmountForOrdersOver : $scope.product.discountAmountForOrdersOver,
          discountForProduct : $scope.product.discountForProduct

		};




     var res = $http.post('http://localhost:9090/stock/updateProduct', dataObj);

        console.log($scope.product.discountStartDate);
        console.log($scope.product.discountEndDate);

		res.success(function(data, status, headers, config) {
            console.log(dataObj);

			$scope.message = data;
		});
		res.error(function(data, status, headers, config) {
			alert( "failure message: " + JSON.stringify({data: data}));
		});

		}

    }

})(this, angular);
