const { orders, OrderStatus } = require("../../Data/ordersData.js");
const BaseService = require("../../ServiceLocator/baseService.js");
const orderService = new BaseService(orders, "Order", [
  "productName",
  "quantity",
  "totalPrice",
  "status",
]);
orderService.updateStatus = (req, res) => {
  const { id } = req.params;
  const { status } = req.body;

  if (!status) {
    return res.status(400).json({
      message: "status is required",
      data: null,
    });
  }

  const validStatuses = Object.values(OrderStatus);
  if (!validStatuses.includes(status)) {
    return res.status(400).json({
      message: `Invalid status. Must be one of: ${validStatuses.join(", ")}`,
      data: null,
    });
  }

  const index = orderService.data.findIndex((x) => x.id === Number(id));

  if (index === -1) {
    return res.status(404).json({
      message: "Order not found (id is invalid)",
      data: null,
    });
  }

  orderService.data[index].status = status;

  res.json({
    message: "Order status updated successfully",
    data: orderService.data[index],
  });
};

module.exports = orderService;
