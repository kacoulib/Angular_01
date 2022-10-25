// Importez les bons fichiers et définition et une fois que vous avez récupérez tous les products mappez ce dernier
// pour extraire uniquement les produits dont l'option delivery est "special"
import { Product, TestVar } from "./Product";
import {
  Details,
  Delivery,
  MockDetails,
  MockDelivery,
} from "./data/MockProducts";

let products: Array<Product<Details, Delivery>> = []; // Product<Details, Delivery>[]

MockDetails.forEach((detail) => {
  let id = detail.id;
  let _delivery = MockDelivery.find((delivery) => delivery.id === id);

  console.log(_delivery.delivery);

  products.push(new Product(detail, _delivery.delivery));
});

let specialProducts = products.filter(
  (product) => product.option === Delivery.Special
);

console.log(specialProducts);
