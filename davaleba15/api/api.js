const { Router } = require("express");
const productsRouter = require("./products/products.route.js"); // corrected path
const usersRouter = require("./Users/users.route.js");
const apiRouter = Router();

apiRouter.use("/products", productsRouter);
apiRouter.use("/users", usersRouter);

apiRouter.get("/", (req, res) => {
  res.send("this is '/api' router");
});

module.exports = apiRouter;
