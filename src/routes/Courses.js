const express = require("express");
const router = express.Router();
const newController = require("../app/controllers/CourseControllers");
router.get("/create", newController.create);
router.post("/store", newController.store);
router.get("/:slug", newController.show);
module.exports = router;
