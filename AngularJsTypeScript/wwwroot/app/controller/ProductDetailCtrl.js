var app;
(function (app) {
    var productDetail;
    (function (productDetail) {
        var ProductDetailCtrl = /** @class */ (function () {
            function ProductDetailCtrl($stateParams, $routeParams, dataAccessService) {
                var _this = this;
                this.$stateParams = $stateParams;
                this.$routeParams = $routeParams;
                this.dataAccessService = dataAccessService;
                this.title = "Product Detail";
                var id = this.$stateParams.productId;
                console.log(id);
                console.log($stateParams);
                var productResource = dataAccessService.getProductResource();
                productResource.get({ productId: id }, function (data) {
                    _this.product = data;
                });
            }
            ProductDetailCtrl.$inject = ["$stateParams", "$routeParams", "dataAccessService"];
            return ProductDetailCtrl;
        }());
        angular.module("TestApp").controller("ProductDetailCtrl", ProductDetailCtrl);
    })(productDetail = app.productDetail || (app.productDetail = {}));
})(app || (app = {}));
//# sourceMappingURL=ProductDetailCtrl.js.map