const { Router } = require("express");
const productsRouter = Router();
const {
  allProducts,
  createProduct,
  deleteProduct,
  getByIdProduct,
  pagination,
  updateProduct,
} = require("./products.service");
const isAdminMiddleweare = require("../../middleware/isAdmin.Middleweare");
const isEditorMiddleware = require("../../middleware/isEditor.Middleware");

productsRouter.get("/", pagination);
productsRouter.get("/all", allProducts);
productsRouter.get("/:id", getByIdProduct);
productsRouter.post("/", createProduct);
productsRouter.delete("/:id", isAdminMiddleweare, deleteProduct);
productsRouter.put("/:id", isEditorMiddleware, updateProduct);

module.exports = productsRouter;
