const OrderStatus = {
  PENDING: "pending",
  COMPLETED: "completed",
  SHIPPED: "shipped",
  CANCELLED: "cancelled",
};

const orders = [
  {
    id: 1,
    productName: "Phone",
    quantity: 3,
    totalPrice: 3000,
    status: OrderStatus.PENDING,
  },
  {
    id: 2,
    productName: "Tablet",
    quantity: 2,
    totalPrice: 560,
    status: OrderStatus.COMPLETED,
  },
  {
    id: 3,
    productName: "TV",
    quantity: 1,
    totalPrice: 1800,
    status: OrderStatus.SHIPPED,
  },
];
module.exports = { orders, OrderStatus };
