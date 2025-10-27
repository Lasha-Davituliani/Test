#! /usr/bin/env node

const { Command } = require("commander");
const { toCapitalLetter, isPalindrome, findLongestWord } = require("./utils/helper");
const program = new Command();

program
    .command("capitalize <text>")
    .description("Convert string to capital letters")
    .action((text) => {
        console.log(toCapitalLetter(text));
    });

program
    .command("palindrome <text>")
    .description("Check if the text is palindrome")
    .action((text) => {
        const result = isPalindrome(text);
        console.log(result ? "✅ ეს არის პალინდრომი" : "❌ არ არის პალინდრომი");
    });

program
    .command("longest <sentence>")
    .description("Find the longest word in the given sentence")
    .action((sentence) => {
        console.log("ყველაზე გრძელი სიტყვა:", findLongestWord(sentence));
    });

program.parse(process.argv);
