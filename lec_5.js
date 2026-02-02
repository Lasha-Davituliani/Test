// 1. დაწერე ფუნქცია , რომელიც არგუმენტად იღებს sec-ს და ითვლის უკუსვლით იქმადე სანამ 0-მდე არ მივა

// function timer(sec) {
//   let initialValue = 10;
//   let interval = setInterval(() => {
//     console.log(initialValue);
//     initialValue--;
//     if (initialValue < 6) {
//       clearInterval(interval);
//     }
//   }, 1000);
//   console.log(sec);
// }
// timer(5);

// 2. დაწერე ფუქნცია ფუქნციას გადააწოდე რიცხვი  და ასევე ლოგე რენდომული რიცხვი იქამდე სანამ ეს გადაცემული და რენდომ რიცხვი არ. დაემთხვევა ერთმამენთს

// function randomComparer(n) {
//   let interval = setInterval(() => {
//     let random = Math.floor(Math.random() * 15);
//     console.log(random);
//     if (n === random) {
//       clearInterval(interval);
//       console.log("gacherda");
//     }
//   });
// }
// randomComparer(5);

// 3.და წერე ფუქნცია რომელიც მიიღებს n და callback-ს როცა n > 27-ზე გაუშვი ეს callback-ი რომელიც დააკონსოლებს რომ ეს ნამდვილად მეტია 27-ზე სხვა შემთხვევაში დააკონსოლე რომ n ნაკლებია

// function test(n, callback) {
//   if (n > 27) {
//     callback();
//   } else {
//     console.log("ar aris meti");
//   }
// }
// function callbackFnc() {
//   console.log("metia 27-ze");
// }
// test(30, callbackFnc);

// 4.დაწერე ფუქნცია რომელიც პარამეტრად მიიღებს API და დააბრუნებს ამ API-ში მყოფ  4 - users. https://jsonplaceholder.typicode.com/users დაწერე ორივენაირად than/catch & async/await

// async function fetcjAPI(API) {
//   let res = await fetch(API);
//   let data = await res.json();
//   let slicedData = data.slice(0, -6);
//   console.log(slicedData);
// }
// fetcjAPI("https://jsonplaceholder.typicode.com/users");

// 5) დააწყვილე reduce-თი ცალკე ვისი ასაკიც მეტია 10 ზე და ვისი ასაკიც ნაკლებია 20
// let people = [
//   { name: "Giorgi", age: 25 },
//   { name: "Nika", age: 15 },
//   { name: "Mariam", age: 30 },
//   { name: "Luka", age: 18 },
// ];

// let grouped = people.reduce(
//   (tot, curr) => {
//     let age = curr.age;
//     if (age > 10) tot.moreThanTen++;
//     if (age < 20) tot.lessThanTwenty++;
//     return tot;
//   },
//   { moreThanTen: 0, lessThanTwenty: 0 }
// );
// console.log(grouped);

// 6. დაწერე ფუნქცია რომელიც მიიღებს ორ რიცხვს და callback-ს. თუ პირველი მეტია მეორეზე გაუშვი callback და დაუბეჭდე "მეტია", სხვა შემთხვევაში "ნაკლები ან ტოლია".

// function compareNumbers(a, b, callback) {
//     if (a > b) {
//         callback();
//     } else {
//         callback();
//     }
// }

// compareNumbers(10, 5, () => {
//     console.log("მეტია");
// });


// compareNumbers(3, 8, () => {
//     console.log("ნაკლებია ან ტოლია");
// });

// 7.დაწერე reduce, რომელიც დააჯგუფებს - ცალკე 20-ზე მეტ ფასიან რიცხვებს და
// ცალკე 20-ზე ნაკლები ან ტოლი ფასიანი ნივთები

// let products = [
//     { name: "Mouse", price: 15 },
//     { name: "Keyboard", price: 45 },
//     { name: "USB Cable", price: 7 },
//     { name: "Headphones", price: 29.9 },
//     { name: "Webcam", price: 52 },
// ];
// let answer = products.reduce(
//     (acc, curr) => {
//         if (curr.price > 20) {
//             acc.moreThan20.push(curr);
//         } else {
//             acc.lessOrEqual20.push(curr);
//         }
//         return acc;
//     },
//     { moreThan20: [], lessOrEqual20: [] }
// );

// console.log("20-ზე მეტი:", answer.moreThan20);
// console.log("20-ზე ნაკლები ან ტოლი:", answer.lessOrEqual20);