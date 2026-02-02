const products = require("../../Data/productsData.js");
const BaseService = require("../../ServiceLocator/baseService.js");

const productService = new BaseService(products, "Product", [
  "name",
  "category",
  "price",
  "isExpire",
]);
module.exports = productService;
