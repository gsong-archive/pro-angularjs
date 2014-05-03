angular.module("sportsStore")
.constant("productListActiveClass", "btn-primary")
.constant("productListPageCount", 3)
.controller("productListCtrl", function ($scope, productListActiveClass, productListPageCount) {
    var selectCategory = null;

    $scope.selectedPage = 1;
    $scope.pageSize = productListPageCount;

    $scope.selectCategory = function (newCategory) {
        selectCategory = newCategory;
        $scope.selectedPage = 1;
    };

    $scope.selectPage = function (newPage) {
        $scope.selectedPage = newPage;
    };

    $scope.categoryFilterFn = function (product) {
        return !selectCategory || product.category === selectCategory;
    };

    $scope.getCategoryClass = function (category) {
        return selectCategory === category ? productListActiveClass : "";
    };

    $scope.getPageClass = function (page) {
        return $scope.selectedPage == page ? productListActiveClass : "";
    };
});
