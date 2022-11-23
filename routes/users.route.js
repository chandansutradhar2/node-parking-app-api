var express = require("express");
var router = express.Router();
const userCtrl = require("../controller/users.controller");

router.get("/all", userCtrl.fetchAllUser);

router.post("/add", userCtrl.addUser);

router.delete("/delete", userCtrl.deleteUser);

router.post("/byId", userCtrl.fetchUserById);

module.exports = router;
