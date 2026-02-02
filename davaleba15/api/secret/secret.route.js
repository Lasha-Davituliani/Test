const { Router } = require("express");
const isValidAPIKeyMiddleweare = require("../../middleware/isValidAPIKey.middleweare");
const secretRouter = Router();

secretRouter.get("/", isValidAPIKeyMiddleweare, (req, res) => {
  res.json("secret info");
});
module.exports = secretRouter;
