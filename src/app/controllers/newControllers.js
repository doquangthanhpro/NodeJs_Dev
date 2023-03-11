const Course = require("../models/Course.js");
const { extraObject } = require("../../utils/mongoose.js");
class ManagerController {
  //[GET]  /news
  index(req, res, next) {
    Course.find({})
      .then((DBitems) => {
        res.render("home", {
          Course: extraObject(DBitems),
        });
      })
      .catch(next);
  }
  //[GET] //show
 }
module.exports = new ManagerController();
