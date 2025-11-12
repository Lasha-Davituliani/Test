// 1)გაიარეთ რეგისტრაცია mongoDB-ზე დააგენერირეთ connect link და დაქონექთდით ბაზასთან.(npm i mongoose,npm i express)

// 2)შექმენი პროგრამა, რომელიც ამატებს მომხმარებლის სახელს და ასაკს და აბრუნებს ტექსტს User Nika is 22 years old.

// 3)აღწერე პროდუქტები ინტერფეისით და გამოითვალე საერთო ფასი.
// თუ ფასი მეტია 100-ზე, დაბეჭდე "Discount available!"

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

// 4)შექმენი ორი ინტერფეისი  IHero და ISuperHero.

// IHero უნდა აღწერდეს ჩვეულებრივი გმირის მონაცემებს:
// name: string - გმირის სახელი
// age: number - გმირის ასაკი.

// ISuperHero უნდა დაექსთენდდეს IHero-ით და დაამატოს:
// power: string - გმირის ძალა
// level?: string - optional ველი, რომელიც განისაზღვრება მოგვიანებით

// შექმენი ფუნქცია levelUp(hero: ISuperHero): void, რომელიც:
// ამოწმებს გმირის ასაკს
// თუ ასაკი მეტია 30-ზე - level = "Pro"
// თუ ნაკლებია ან ტოლია 30-ის - level = "Newbie"
// დაბეჭდავს შედეგს კონსოლში:
// "Batman is now level: Pro"

// მინიშნება
// const hero1: ISuperHero = {
//   name: "Batman",
//   age: 35,
//   power: "Stealth",
// };

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

// 5)დაწერე generic ფუნქცია, რომელიც აბრუნებს მასივის პირველ ელემენტს.
function getFirstElement<T>(arr: T[]) {
  return arr[0];
}
console.log(getFirstElement(["Mariami", 3, "Giorgi", 4, 2]));
