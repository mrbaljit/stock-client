(function (global, angular) {
    'use strict';
    angular
        .module("nz.com.product.editProduct", [])
        .controller("EditController", EditController);

    EditController.$inject = ['$scope', '$http', '$filter', '$stateParams', '$state', 'productService'];

    function EditController($scope, $http, $filter, $stateParams, $state, productService){

        $http.get('http://localhost:9090/product/' + $stateParams.id +'/getProduct').success(function (data) {
            $scope.product = data;
            $scope.product.discountEndDate = new Date($scope.product.discountEndDate);
            $scope.product.discountStartDate = new Date($scope.product.discountStartDate);
        }).error(function (data, status) {
            console.log('Error ' + data)
        });

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

        $scope.product.discountStartDate = new Date();
        $scope.product.discountEndDate = new Date();

    $scope.saveProduct = function () {
    console.log($scope.product.productCode);
    console.log($scope.product.productName);
    console.log($scope.product.retailPrice);

      var dataObj = {
          productId: $scope.product.productId,
          productCategory: $scope.product.productCategory,
          productCode : $scope.product.productCode,
          productName : $scope.product.productName,
          costPrice : $scope.product.costPrice,
          retailPrice : $scope.product.retailPrice,
          productDescription : $scope.product.productDescription,
          productInvoiceDescription : $scope.product.productInvoiceDescription,
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
        $state.go('listProducts');

		}
    }

})(this, angular);
