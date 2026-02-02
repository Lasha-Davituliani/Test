#!/usr/bin/env node

// 5) შექმენი products-cli,რომელსაც ექნება დამატება,წაკითხვა,id-ის მიხედვით წაკითხვა, წაშლა და აფდეითი.
// fields(name,description,date,category) + მე თუ გავატან option ის მიხედვით --isexpire.
//  უნდა შეამოწმოს თარიღი და დაამატოს ვადა აქვს გასული თუ არა

const { Command } = require("commander");
const fs = require("fs");
const path = require("path");
const productsFilePath = path.join(__dirname, "products.json");
function loadProducts() {
    if (!fs.existsSync(productsFilePath)) return [];
    const dataBuffer = fs.readFileSync(productsFilePath);
    return JSON.parse(dataBuffer.toString());
}
function saveProducts(products) {
    fs.writeFileSync(productsFilePath, JSON.stringify(products, null, 2));
}
const program = new Command();
program
    .command("add")
    .description("Add a new product")
    .requiredOption("--name <name>")
    .requiredOption("--description <description>")
    .requiredOption("--date <date>")
    .requiredOption("--category <category>")
    .option("--isexpire")
    .action((options) => {
        const products = loadProducts();
        const { name, description, date, category, isexpire } = options;
        let isExpired = false;
        if (isexpire) {
            const currentDate = new Date();
            const expirationDate = new Date(date);
            isExpired = currentDate > expirationDate;
        }
        const newProduct = {
            id: products.length ? products[products.length - 1].id + 1 : 1,
            name,
            description,
            date,
            category,
            isExpired,
        };
        products.push(newProduct);
        saveProducts(products);
        console.log("Product added:", newProduct);
    });
program
    .command("list")
    .description("List all products")
    .action(() => {
        const products = loadProducts();
        console.log("Products:", products);
    });
program
    .command("get <id>")
    .description("Get a product by ID")
    .action((id) => {
        const products = loadProducts();
        const product = products.find((p) => p.id === parseInt(id));
        if (product) console.log("Product found:", product);
        else console.log("Product not found");
    });
program
    .command("delete <id>")
    .description("Delete a product by ID")
    .action((id) => {
        let products = loadProducts();
        const initialLength = products.length;
        products = products.filter((p) => p.id !== parseInt(id));
        saveProducts(products);
        if (products.length < initialLength) console.log("Product deleted");
        else console.log("Product not found");
    });
program
    .command("update <id>")
    .description("Update a product by ID")
    .option("--name <name>")
    .option("--description <description>")
    .option("--date <date>")
    .option("--category <category>")
    .action((id, options) => {
        const products = loadProducts();
        const product = products.find((p) => p.id === parseInt(id));
        if (!product) return console.log("Product not found");
        const { name, description, date, category } = options;
        if (name) product.name = name;
        if (description) product.description = description;
        if (date) product.date = date;
        if (category) product.category = category;
        saveProducts(products);
        console.log("Product updated:", product);
    });
program.parse(process.argv);

