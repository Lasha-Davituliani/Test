const { Router } = require("express");
const productService = require("./products.service.js");
const productsRouter = Router();

productsRouter.get("/", productService.getAll);
productsRouter.get("/paginated", productService.getPaginated);
productsRouter.get("/:id", productService.getById);
productsRouter.post("/", productService.create);
productsRouter.put("/:id", productService.update);
productsRouter.delete("/:id", productService.delete);
module.exports = productsRouter;
