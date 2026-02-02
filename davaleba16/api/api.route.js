const { Router } = require("express");

const productsRouter = require("./products/products.route.js");
const ordersRouter = require("./orders/orders.route.js");
const usersRouter = require("./users/users.route.js");

const apiRouter = Router(); // <- აქ არის მთავარი შეცვლა !!!

apiRouter.use("/products", productsRouter);
apiRouter.use("/orders", ordersRouter);
apiRouter.use("/users", usersRouter);

apiRouter.get("/", (req, res) => {
  res.send("this is '/api' router");
});

module.exports = apiRouter;
