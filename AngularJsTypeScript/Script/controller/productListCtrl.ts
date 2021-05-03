module app.productList {
	interface IProductListModel {
		title: string;
		showImage: boolean;
		products: app.domain.IProduct[];
		toggleImage(): void;
	}

	export class ProductListCtrl implements IProductListModel {
		title: string;
		showImage: boolean;
		products: app.domain.IProduct[];

		static $inject = ['dataAccessService'];
		constructor(private dataAccessService: app.common.DataAccessService) {
			this.title = "Product List";
			this.showImage = false;
		 	this.products = [];

			var productResource = this.dataAccessService.getProductResource();
			productResource.query((data: app.domain.IProduct[]) => {
				console.log(data);
				this.products = data;
			});
		}

		toggleImage(): void {
			this.showImage = !this.showImage;
		}
	}
	angular
		.module('TestApp')
		.controller('ProductListCtrl', ProductListCtrl);
}