const express = require("express");
const app = express();
const router = require("./routes/router");
const path = require("path");
const { engine } = require("express-handlebars");
//db
const db = require("./configs/db");
//config public folder
app.use(express.static(path.join(__dirname, "public")));
//config dotenv
const dotenv = require("dotenv");
dotenv.config();
const port = process.env.PORT || 3000;
//http logger middle
const morgan = require("morgan");
app.use(morgan("combined"));
//template engine
app.engine("hbs", engine({ extname: ".hbs" }));
app.set("view engine", "hbs");
app.set("views", "/views");
app.set("views", path.join(__dirname, "resources/views"));
//router
router(app);
//connect db
db.connect();
// run server 
app.listen(port, () => {
  console.log(`sever to connect http://localhost:${port}`);
});
