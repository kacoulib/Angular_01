export class Product<T, U> {
  private _ref: T;
  private _option: U;

  constructor(ref: T, option: U) {
    this.ref = ref;
    this.option = option;
  }

  set ref(ref: T) {
    this._ref = ref;
  }

  get ref(): T {
    return this._ref;
  }

  set option(option: U) {
    this._option = option;
  }

  get option(): U {
    return this._option;
  }
}

let product = new Product("ref", 32);
product.ref = "ref2";
console.log(product.ref);

product.option = 43;
console.log(product.option);
