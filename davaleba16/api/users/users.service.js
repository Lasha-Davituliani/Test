const users = require("../../Data/usersData.js");
const BaseService = require("../../ServiceLocator/baseService.js");

const userService = new BaseService(users, "User", ["name", "age"]);
module.exports = userService;
