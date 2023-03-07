var newsRouter = require("./news");
function router(app) {
  app.use("/", newsRouter);
}
module.exports =  router;
