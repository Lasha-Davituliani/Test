module.exports = (req, res, next) => {
  const secretKey = req.header("secret");
  if (!secretKey || secretKey !== "1234") {
    return res
      .status(403)
      .json({ massage: "unauth", data: "ver gagatan am infos" });
  }
  next();
};
