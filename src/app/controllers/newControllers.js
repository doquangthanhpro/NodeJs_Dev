const Course = require('./../models/Course')
class ManagerController {
  //[GET]  /news
  index(req, res) {
    Course.find({} , (err , course) => {
        if(!err) {
             res.json(course)
        } 
        else {
             res.status().json()
        }
    })
    // res.render("home");
  }

  show(req,res) {
     
  }
}
module.exports = new ManagerController;
