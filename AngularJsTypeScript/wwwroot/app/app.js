var app;
(function (app) {
    var main = angular.module('TestApp', ['ngRoute', 'common.services', 'ui.router', 'productResourceMock']);
    main.config(routeConfig);
    //routeConfig.$inject = ["$urlRouterProvider","$stateProvider","$routeProvider","$locationProvider"]
    routeConfig.$inject = ["$urlRouterProvider", "$stateProvider", "$locationProvider"];
    function routeConfig($urlRouterProvider, $stateProvider, $locationProvider) {
        $locationProvider.hashPrefix("");
        $stateProvider.state("productList", {
            url: "/productList",
            templateUrl: "/Template/productListView.html",
            controller: "ProductListCtrl",
            controllerAs: "model"
        })
            .state("productDetail", {
            url: "/productDetail/:productId",
            templateUrl: "/Template/productDetailView.html",
            controller: "ProductDetailCtrl as model"
        });
        $urlRouterProvider.otherwise('/productList');
        //.otherwise({
        //		redirectTo: "/productList"
        //	})
    }
})(app || (app = {}));
//# sourceMappingURL=app.js.map