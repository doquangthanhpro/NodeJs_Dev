var express = require("express");
var router = express.Router();
const ManagerController = require("../app/controllers/newControllers");
router.get("/", ManagerController.index)
module.exports = router;
