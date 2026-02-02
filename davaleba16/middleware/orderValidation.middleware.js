module.exports = (req, res, next) => {
  const { quantity, totalPrice } = req.body;
  if (quantity > 10) {
    return res
      .status(400)
      .json({ massage: "quentity can not be more than 10" });
  }
  if (totalPrice > 500) {
    return res
      .status(400)
      .json({ massage: "total price can not be more than 500!" });
  }
  next();
};
