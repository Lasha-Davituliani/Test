module.exports = (req, res, next) => {
  const isAdminRole = req.headers.admin;
  if (!isAdminRole || isAdminRole !== "Admin123") {
    return res.status(403).json({
      massage: "unauth",
      data: "Sen gaqvs shesgudulu uflebebi radgan ar xar admini!",
    });
  }
  next();
};
