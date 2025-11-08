module.exports = (req, res, next) => {
  const isEditor = req.headers.editor;
  if (!isEditor || isEditor !== "Editor123") {
    return res
      .status(403)
      .json({
        massage: "unauth",
        data: "ar xar editori amitom ver cvli orderis statuss",
      });
  }
  next();
};
