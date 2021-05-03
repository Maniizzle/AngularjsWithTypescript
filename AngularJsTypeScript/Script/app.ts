module app {
	var main= angular.module('TestApp',
		['ngRoute', 'common.services', 'ui.router', 'productResourceMock']);

	main.config(routeConfig);

	//routeConfig.$inject = ["$urlRouterProvider","$stateProvider","$routeProvider","$locationProvider"]
	routeConfig.$inject = ["$urlRouterProvider","$stateProvider","$locationProvider"]
	function routeConfig($urlRouterProvider:ng.ui.IUrlRouterProvider,$stateProvider:ng.ui.IStateProvider, $locationProvider:ng.ILocationProvider):void {
		$locationProvider.hashPrefix("");

		$stateProvider.state("productList",
			{
				url:"/productList",
				templateUrl:"/Template/productListView.html",
				controller: "ProductListCtrl",
				controllerAs:"model"
			})
			.state("productDetail",
				{
					url: "/productDetail/:productId",
				templateUrl:"/Template/productDetailView.html",
					controller:"ProductDetailCtrl as model"
				})
		$urlRouterProvider.otherwise('/productList')

			//.otherwise({
			//		redirectTo: "/productList"
			//	})
    }

}