const { Router } = require("express");
const orderService = require("./orders.service.js");
const orderValidationMiddleware = require("../../middleware/orderValidation.middleware.js");
const isAdminMiddleware = require("../../middleware/isAdmin.middleware.js");
const isEditorMiddleware = require("../../middleware/isEditor.middleware.js");
const ordersRouter = Router();

ordersRouter.get("/", orderService.getAll);
ordersRouter.get("/paginated", orderService.getPaginated);
ordersRouter.get("/:id", orderService.getById);
ordersRouter.post("/", orderValidationMiddleware, orderService.create);
ordersRouter.put("/:id", isAdminMiddleware, orderService.update);
ordersRouter.delete("/:id", isAdminMiddleware, orderService.delete);
ordersRouter.patch(
  "/:id/status",
  isEditorMiddleware,
  orderService.updateStatus
);
module.exports = ordersRouter;
