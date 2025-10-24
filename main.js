#! /usr/bin/env node

const { reversStr } = require("./utils/helper");
const { json } = require("stream/consumers");
const {
  sum,
  print,
  reversStr,
  calculateSum,
  write,
  read,
} = require("./utils/helper");
const { Command } = require("commander");
const program = new Command();
// 1) შექმენი utils/helper.js სადაც გექნება ფუქნციები read(უნდა პარსავდეს true-ს გადაწოდების შემდეგ) და write(ანალოგიურად stringify-უნდა გაუკეთოს).
// შექმენი ამ ფუქნციებით 2 ფაილი და ჩაწერე შიგნით ნებისმიერი რამ. ასევე ჰელფერებში დაამატე ჯამის დათვლა და სტრინგის შეტრიალების ფუქნცია.

// async function main() {
//   await write("message.txt", "giorgi");
// }
// main();

// sum(10, 30);
// print("Hello world!");
// print(reversStr("hello"));
// calculateSum([1, 2, 3, 4, 5, 6, 7, 8, 9]);

// 2)წამოიღე ინფორმაცია ამ ორი api-დან
// let api = https://jsonplaceholder.typicode.com/users
// let api2 = https://jsonplaceholder.typicode.com/posts
// 1)გამოიყენე axios და ერთდროულად გაუშვი 2 API.

// const axios = require("axios");

// const api1 = "https://jsonplaceholder.typicode.com/users";
// const api2 = "https://jsonplaceholder.typicode.com/posts";

// async function fetchBoth() {
//   try {
//     const [users, posts] = await Promise.all([
//       axios.get(api1),
//       axios.get(api2),
//     ]);

//     console.log("Users:", users.data);
//     console.log("Posts:", posts.data);
//   } catch (err) {
//     console.error("Error fetching data:", err.message);
//   }
// }

// fetchBoth();

// 2)გაუშვი ორივე ერთად და რომელიც პირველი მოვა ის დააკონსოლე.

// async function fetchFirst() {
//   try {
//     const result = await Promise.race([axios.get(api1), axios.get(api2)]);

//     console.log("First resolved API:", result.config.url);
//     console.log("Data:", result.data);
//   } catch (err) {
//     console.error("Error in race:", err.message);
//   }
// }

// fetchFirst();

// 3)გაუშვი ორივე ერთად და დააბრუნე ინფრომაცია რომელი დარესოლვდა დარეჯექთდა და ა.შ.

// async function fetchAllSettled() {
//   const results = await Promise.allSettled([axios.get(api1), axios.get(api2)]);

//   results.forEach((result, index) => {
//     if (result.status === "fulfilled") {
//       console.log(` API ${index + 1} resolved:`, result.value.config.url);
//     } else {
//       console.log(` API ${index + 1} rejected:`, result.reason.message);
//     }
//   });
// }

// fetchAllSettled();

// 3)commander-ით შექმენი phone-cli, რომელსაც ექნება დამატება,წაშლა,id-ის მიხედვით კონკრეტული ობიექტის ამოღება, და option-ის მიხედვით(--america)- ამ ოფშენს თუ გადავცემთ ნომერს წინ უნდა დაუამტოს 011 (ანუ phone-cli add giorgi 574221355 --america)- ასე თუ გადავცემთ უნდა დაამტოს 011574221355

// const { json } = require("stream/consumers");
// const {
//   sum,
//   print,
//   reversStr,
//   calculateSum,
//   write,
//   read,
// } = require("./utils/helper");
// const { Command } = require("commander");
// const program = new Command();

// program
//   .command("create")
//   .description("create description")
//   .argument("name")
//   .argument("number")
//   .action(async (name, number) => {
//     let readDataJson = await read("contact.json", true);
//     let lastId = readDataJson[readDataJson.length - 1]?.id || 0;
//     let newOBJ = {
//       id: lastId + 1,
//       name,
//       number,
//     };
//     readDataJson.push(newOBJ);
//     await write("contact.json", JSON.stringify(readDataJson));
//   });

// program
//   .command("add")
//   .description("create description")
//   .option("--america")
//   .argument("name")
//   .argument("number")
//   .action(async (name, number, option) => {
//     let readDataJson = await read("contact.json", true);
//     let lastId = readDataJson[readDataJson.length - 1]?.id || 0;
//     option ? (number = "011" + number) : number;
//     let newOBJ = {
//       id: lastId + 1,
//       name,
//       number,
//     };
//     readDataJson.push(newOBJ);
//     await write("contact.json", JSON.stringify(readDataJson));
//   });

// program
//   .command("show")
//   .option("--america")
//   .action(async () => {
//     let readDataJson = await read("contact.json", true);
//     console.log(readDataJson);
//   });

// program
//   .command("delete")
//   .description("delete description")
//   .argument("id")
//   .action(async (id) => {
//     let readDataJson = await read("contact.json", true);
//     readDataJson = readDataJson.filter((el) => el.id !== +id);
//     await write("contact.json", JSON.stringify(readDataJson));
//   });

// program
//   .command("transform")
//   .argument("str")
//   .option("--america")
//   .action((str, option) => {
//     console.log(option ? (str = "011" + str) : str);
//   });

// program.parse();
// const fs = require("fs/promises");
// const http = require("http");

// const server = http.createServer((req, res) => {
//   res.write("hello");
//   res.end();
// });
// server.listen(8080, () => {
//   console.log("server running on http://localhost:8080");
// });
// async function main() {
//   let readDirectory = await fs.readdir(__dirname);
//   for (const item of readDirectory) {
//     let info = await fs.lstat(item);
//     if (info.isDirectory) {
//       await fs.rmdir(item, { recursive: true });
//     }
//   }
// }
// main();

// const axios = require("axios");
// const {
//   sum,
//   print,
//   reversStr,
//   calculateSum,
//   write,
//   read,
// } = require("./utils/helper");

// async function fetchByAxsios(API) {
//   let res = await axios.get(API);
//   console.log(res.data);
// }

// fetchByAxsios("https://jsonplaceholder.typicode.com/users");
// async function main() {
//   await read("data.json", true);
// }
// main();
