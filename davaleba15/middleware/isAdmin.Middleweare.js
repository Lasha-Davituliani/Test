module.exports = (req, res, next) => {
  const isAdminRole = req.headers.admin;
  if (!isAdminRole || isAdminRole !== "testAdmin1234") {
    return res
      .status(403)
      .json({
        massage: "Unauth",
        data: "Sen gaqvs shezguduli uflebebi, radgan ar xar admini!",
      });
  }
  next();
};
