const jwt = require("jsonwebtoken");
require("dotenv").config();
function getToken(headers) {
  if (!headers["authorization"]) return null;
  const [type, token] = headers["authorization"].split(" ");
  return type === "Bearer" ? token : null;
}
async function isAuth(req, res, next) {
  const token = getToken(req.headers);
  if (!token)
    return res.status(401).json({ message: "permision denide!", data: null });
  try {
    const payLoad = jwt.verify(token, process.env.JWT_SECRET);
    req.userId = payLoad.userId;
    next();
  } catch (error) {
    console.log(error, "isAuth error");
    return res.status(401).json({ message: "Invalid token", data: null });
  }
}
module.exports = isAuth;
