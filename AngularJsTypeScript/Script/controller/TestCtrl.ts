module app.productDetail {
	interface IProductDetailModel {
		title: string;
	}

	

	class TestCtrl implements IProductDetailModel {
		title: string;

		constructor() {
			this.title = "Tested OK LOMO!!";
        }
	}
	angular
		.module("TestApp")
		.controller("TestCtrl",
			TestCtrl);

}