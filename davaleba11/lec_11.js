// 1)შექმენი 2 ფოლდერი 3 ფაილი, წაშალე მარტო ფოლდერები. შეამომწე lstat-ის მეშვეობით

// const fs = require("fs/promises");
// const path = require("path");
// async function main() {
//     const dirPath1 = path.join(__dirname, "folder1");
//     const dirPath2 = path.join(__dirname, "folder2");
//     const filePath1 = path.join(__dirname, "file1.txt");
//     const filePath2 = path.join(__dirname, "file2.txt");
//     const filePath3 = path.join(__dirname, "file3.txt");



//     await fs.mkdir(dirPath1, { recursive: true });
//     await fs.mkdir(dirPath2, { recursive: true });

//     await fs.writeFile(filePath1, "This is file 1");
//     await fs.writeFile(filePath2, "This is file 2");
//     await fs.writeFile(filePath3, "This is file 3");
//     console.log("folders and files created.");

//     const items = await fs.readdir(__dirname);
//     for (const item of items) {
//         const itemPath = path.join(__dirname, item);
//         const stats = await fs.lstat(itemPath);
//         if (stats.isDirectory()) {
//             await fs.rmdir(itemPath, { recursive: true });
//             console.log(`Deleted directory: ${item}`);
//         }
//     }
// }
// main().catch(console.error);


// 2)შექმენი  მთავარი ფოლდერი, ფოლდერში აიღე ერთი main.js ამ main.js ით შექმენი (mkdir) ფოლდერი და ამ ფოლდერში ჩაწერე index.js შემდეგ ამ index.js-ით ჩაწერე 
// მთავარფოლდერში message.txt, ამ message.txt-ში რაც გექნება შეატრიალე ეგ სტრინგი და ისევ იგივეში ჩაწერე.

// const fs = require("fs/promises");
// const path = require("path");
// async function main() {
//     const mainDir = path.join(__dirname, "mainFolder");
//     const mainJsPath = path.join(mainDir, "main.js");
//     const subDir = path.join(mainDir, "subFolder");
//     const indexJsPath = path.join(subDir, "index.js");
//     const messageTxtPath = path.join(mainDir, "message.txt");
//     await fs.mkdir(mainDir, { recursive: true });
//     await fs.writeFile(mainJsPath, `
//         const fs = require("fs/promises");
//         const path = require("path");
//         async function createSubFolderAndIndex() {
//             const subDir = path.join(__dirname, "subFolder");
//             const indexJsPath = path.join(subDir, "index.js");
//             await fs.mkdir(subDir, { recursive: true });
//             await fs.writeFile(indexJsPath, \`
//                 const fs = require("fs/promises");
//                 const path = require("path");
//                 async function writeMessage() {
//                     const messageTxtPath = path.join(__dirname, "..", "message.txt");
//                     const message = "Hello, World!";
//                     const reversedMessage = message.split("").reverse().join("");
//                     await fs.writeFile(messageTxtPath, reversedMessage);
//                 }
//                 writeMessage().catch(console.error);
//             \`);
//         }
//         createSubFolderAndIndex().catch(console.error);
//     `);
//     console.log("main.js created. Run it to create subFolder and index.js");
// }
// main().catch(console.error);

// 3) შექმენი ფოლდერი ამ ფოლდერში გქონდეს 6 ფაილი. 3 ფაილის გაფართოვება უნდა იყოს .txt. 3 ფაილის გაფართოვება უნდა იყოს .js. შენ უნდა იპოვო ,
// ისეთი ფაილები, რომლის გაფართოვებაცაა .txt და ისინი ჩწერო საერთო all.txt-ში
// const fs = require("fs/promises");
// const path = require("path");
// async function main() {
//     const dirPath = path.join(__dirname, "myFolder");
//     await fs.mkdir(dirPath, { recursive: true });
//     const fileNames = ["file1.txt", "file2.txt", "file3.txt", "script1.js", "script2.js", "script3.js"];
//     for (const fileName of fileNames) {
//         const filePath = path.join(dirPath, fileName);
//         await fs.writeFile(filePath, `Content of ${fileName}`);
//     }
//     const items = await fs.readdir(dirPath);
//     let allTxtContent = "";
//     for (const item of items) {
//         const itemPath = path.join(dirPath, item);
//         const stats = await fs.lstat(itemPath);
//         if (stats.isFile() && path.extname(item) === ".txt") {
//             const content = await fs.readFile(itemPath, "utf-8");
//             allTxtContent += content + "\n";
//         }
//     }
//     const allTxtPath = path.join(dirPath, "all.txt");
//     await fs.writeFile(allTxtPath, allTxtContent.trim());
//     console.log("all.txt created with contents of .txt files.");
// }
// main().catch(console.error);

// 4) დაწერე http სერვერი და გამოდგი 3 ენდფოინითი (/animals,/cars,/motorcycle)

const http = require("http");
const port = 3001;
const server = http.createServer((req, res) => {
    if (req.url === "/animals") {
        res.writeHead(200, { 'Content-Type': 'application/json' });
        res.end(JSON.stringify(["Dog", "Cat", "Elephant"]));
    } else if (req.url === "/cars") {
        res.writeHead(200, { 'Content-Type': 'application/json' });
        res.end(JSON.stringify(["Toyota", "Honda", "Ford"]));
    } else if (req.url === "/motorcycle") {
        res.writeHead(200, { 'Content-Type': 'application/json' });
        res.end(JSON.stringify(["Harley-Davidson", "Ducati", "Yamaha"]));
    } else {
        res.writeHead(404, { 'Content-Type': 'text/plain' });
        res.end("Not Found");
    }
});

server.listen(port, () => {
    console.log(`Server running at http://localhost:${port}/`);
});


