// 3)

interface IProduct {
  name: string;
  price: number;
}

const products: IProduct[] = [
  { name: "WebCam", price: 50 },
  { name: "Mouse", price: 30 },
  { name: "Keyboard", price: 40 },
];

const totalPrice = products.reduce((sum, product) => sum + product.price, 0);

console.log(`Total Price: ${totalPrice}`);
if (totalPrice > 100) {
  console.log("Discount available!");
}

// 4)

interface IHero {
  name: string;
  age: number;
}

interface ISuperHero extends IHero {
  power: string;
  level?: string;
}

function levelUp(hero: ISuperHero): void {
  if (hero.age > 30) {
    hero.level = "Pro";
  } else {
    hero.level = "Newbie";
  }
  console.log(`${hero.name} is now level: ${hero.level}`);
}

const hero1: ISuperHero = {
  name: "Batman",
  age: 25,
  power: "Stealth",
};

console.log(levelUp(hero1));

// 5)
function getFirstElement<T>(arr: T[]) {
  return arr[0];
}
console.log(getFirstElement(["Mariami", 3, "Giorgi", 4, 2]));
