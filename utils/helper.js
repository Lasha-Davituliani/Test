const fs = require("fs/promises");
const path = require("path");
function sum(a, b) {
  console.log(a + b);
}
function print(str) {
  console.log(str);
}

function reversStr(str) {
  return str.split("").reverse().join("");
}

function calculateSum(numbersArr) {
  let sum = numbersArr.reduce((tot, curr) => tot + curr, 0);
  console.log(sum);
}

async function write(filePath, data) {
  await fs.writeFile(filePath, data);
}

async function read(filePath, parse) {
  let readParse = await fs.readFile(filePath, "utf-8");
  return parse ? JSON.parse(readParse) : readParse;
}

module.exports = {
  sum,
  print,
  reversStr,
  calculateSum,
  write,
  read,
};
