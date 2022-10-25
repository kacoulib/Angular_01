"use strict";
exports.__esModule = true;
exports.Product = void 0;
var Product = /** @class */ (function () {
    function Product(ref, option) {
        this.ref = ref;
        this.option = option;
    }
    Object.defineProperty(Product.prototype, "ref", {
        get: function () {
            return this._ref;
        },
        set: function (ref) {
            this._ref = ref;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Product.prototype, "option", {
        get: function () {
            return this._option;
        },
        set: function (option) {
            this._option = option;
        },
        enumerable: false,
        configurable: true
    });
    return Product;
}());
exports.Product = Product;
