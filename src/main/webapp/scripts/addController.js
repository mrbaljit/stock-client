(function (global, angular) {
    'use strict';
    angular
        .module("nz.com.product.addProduct", [])
        .controller("AddController", AddController);

    AddController.$inject = ['$scope', '$http', '$filter', '$state', 'productService'];

    function AddController($scope, $http, $filter, $state, productService) {

        $scope.cancel = function () {
            $state.go('listProducts');
        }

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
    $scope.saveProduct = function () {
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


        productService.createUpdateProduct(dataObj);

		}

    }

})(this, angular);
