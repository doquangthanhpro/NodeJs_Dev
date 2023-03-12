const Course = require("../models/Course");
class ManagerController {
  //[GET] //show
  show(req, res, next) {
    Course.findOne({ slug: req.params.slug })
      .then((db) => {
        res.render('course/show', {
          Course: (db)
        })
      })
      .catch(next);
  }
  //[GET] //create
  create(req, res) {
    res.render('course/create')
  }
  //[GET] // store
  store(req, res) {
    const item = new Course(req.body)
     item.save()
    res.send('course save!')
  }
}
module.exports = new ManagerController();
