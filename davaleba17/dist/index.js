"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const products = [
  { name: "WebCam", price: 50 },
  { name: "Mouse", price: 30 },
  { name: "Keyboard", price: 40 },
];
const totalPrice = products.reduce((sum, product) => sum + product.price, 0);
console.log(`Total Price: ${totalPrice}`);
if (totalPrice > 100) {
  console.log("Discount available!");
}
function levelUp(hero) {
  if (hero.age > 30) {
    hero.level = "Pro";
  } else {
    hero.level = "Newbie";
  }
  console.log(`${hero.name} is now level: ${hero.level}`);
}
const hero1 = {
  name: "Batman",
  age: 25,
  power: "Stealth",
};
console.log(levelUp(hero1));

function getFirstElement(arr) {
  return arr[0];
}
console.log(getFirstElement(["Mariami", 3, "Giorgi", 4, 2]));
//# sourceMappingURL=index.js.map
