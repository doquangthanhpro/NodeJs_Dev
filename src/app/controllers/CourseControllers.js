const Course = require("../models/Course.js");
const { extraObject } = require("../../utils/mongoose.js");
class ManagerController {
  //[GET] //show
  show(req, res, next) {
    Course.findOne({ slug: req.params.slug })
      .then((db) => {
        res.render("course/course",{
          Course: extraObject(db)
        });
      })
      .catch(next);
  }
}
module.exports = new ManagerController();
