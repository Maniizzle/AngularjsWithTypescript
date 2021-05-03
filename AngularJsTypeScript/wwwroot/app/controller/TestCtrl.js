//typescript module is like a namespace
var app;
(function (app) {
    var productDetail;
    (function (productDetail) {
        var TestCtrl = /** @class */ (function () {
            function TestCtrl() {
                this.title = "Tested OK LOMO!!";
            }
            return TestCtrl;
        }());
        angular
            .module("TestApp")
            .controller("TestCtrl", TestCtrl);
    })(productDetail = app.productDetail || (app.productDetail = {}));
})(app || (app = {}));
//# sourceMappingURL=TestCtrl.js.map