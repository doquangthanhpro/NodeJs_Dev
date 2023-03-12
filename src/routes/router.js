var newsRouter = require("./news");
var CourseRouter = require("./Courses");
function router(app) {
  app.use("/", newsRouter);
  app.use("/course", CourseRouter);
}
module.exports = router;
