"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Product = void 0;
class Product {
    _ref;
    _option;
    constructor(ref, option) {
        this.ref = ref;
        this.option = option;
    }
    set ref(ref) {
        this._ref = ref;
    }
    get ref() {
        return this._ref;
    }
    set option(option) {
        this._option = option;
    }
    get option() {
        return this._option;
    }
}
exports.Product = Product;
let product = new Product("ref", 32);
product.ref = "ref2";
console.log(product.ref);
product.option = 43;
console.log(product.option);
