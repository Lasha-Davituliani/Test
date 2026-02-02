const { Router } = require("express");
const {
  findAllProducts,
  findProductById,
  createProduct,
  deleteProduct,
  updateProduct,
  paginatedProducts,
} = require("./product.service");
const productRouter = Router();

productRouter.get("/", findAllProducts);
productRouter.get("/pag", paginatedProducts);
productRouter.get("/:id", findProductById);
productRouter.post("/", createProduct);
productRouter.delete("/:id", deleteProduct);
productRouter.put("/:id", updateProduct);
module.exports = productRouter;
