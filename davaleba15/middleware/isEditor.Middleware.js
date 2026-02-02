module.exports = (req, res, next) => {
  const isEditor = req.headers.editor;
  const isAdminRole = req.headers.admin;
  if (
    (!isEditor && !isAdminRole) ||
    (isEditor !== "testEditor1234" && isAdminRole !== "testAdmin1234")
  ) {
    return res.status(403).json({
      massage: "Unauth",
      data: "Sen gaqvs shezguduli uflebebi, radgan ar xar admini!",
    });
  }
  next();
};
