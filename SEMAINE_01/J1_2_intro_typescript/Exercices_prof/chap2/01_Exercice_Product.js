// définition de la classe
var Product = /** @class */ (function () {
    function Product(name) {
        this._ref = 1000; // protégé dans la classe actuelle et classe fille
        this.name = name; // setter assigne une valeur à l'attribut _name
    }
    Object.defineProperty(Product.prototype, "name", {
        // getter afficher une valeur dans le code courant
        get: function () {
            return this._name;
        },
        // setter
        set: function (name) {
            this._name = name;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Product.prototype, "ref", {
        get: function () {
            return this._ref;
        },
        set: function (value) {
            this._ref = value;
        },
        enumerable: false,
        configurable: true
    });
    return Product;
}());
// instance de la classe
var bike = new Product('Super Bike');
console.log(bike.name); // affichera Super Bike
bike.ref = 1001;
bike.name = 'Wonderful Bike';
console.log("Name: ".concat(bike.name, " ref: ").concat(bike.ref));
