module app.productDetail {

    interface IProductDetailModel {
        title: string;

    }

    interface IProductParams extends ng.route.IRouteParamsService {
        productId: number;
    }

    interface IProductStateParams extends ng.ui.IStateParamsService {
        productId: number;
    }

    class ProductDetailCtrl implements IProductDetailModel {
        title: string;
        product: app.domain.IProduct

        static $inject = ["$stateParams","$routeParams","dataAccessService"];
        constructor(private $stateParams: IProductStateParams ,private $routeParams: IProductParams, private dataAccessService: app.common.DataAccessService) {
            this.title = "Product Detail";

            var id = this.$stateParams.productId;
            console.log(id);
            console.log($stateParams);
            var productResource = dataAccessService.getProductResource();
            productResource.get({productId:id},(data: app.domain.IProduct) => {
                this.product = data;
            })
        }

    }
    angular.module("TestApp").controller("ProductDetailCtrl", ProductDetailCtrl);
}

