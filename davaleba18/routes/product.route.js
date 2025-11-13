const { Router } = require("express");
const {
  findAllProducts,
  findProductById,
  createProduct,
  deleteProduct,
  updateProduct,
} = require("./product.service");
const productRouter = Router();

productRouter.get("/", findAllProducts);
productRouter.get("/:id", findProductById);
productRouter.post("/", createProduct);
productRouter.delete("/:id", deleteProduct);
productRouter.put("/:id", updateProduct);
module.exports = productRouter;
