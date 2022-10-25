"use strict";
exports.__esModule = true;
var Product_1 = require("./Product");
var MockProducts_1 = require("./data/MockProducts");
var products = [];
MockProducts_1.MockDetails.forEach(function (detail) {
    var id = detail.id;
    var delivery = MockProducts_1.MockDelivery.find(function (delivery) { return delivery.id == id; });
    console.log(delivery.delivery);
    products.push(new Product_1.Product(detail, delivery.delivery));
});
// Affichez que les produits dont l'option est "spécial"
var specialProducts = products.filter(function (product) { return product.option === MockProducts_1.Delivery.Special; });
console.log(specialProducts);
// console.log(products);
