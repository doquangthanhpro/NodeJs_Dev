const express = require("express");
const app = express();
const path = require('path')
const {engine} = require("express-handlebars");
// config public folder
 app.use(express.static(path.join(__dirname , 'public')))
// config dotenv
const dotenv = require("dotenv");
dotenv.config();
const port = process.env.PORT || 3000;
// http logger midlewear
const morgan = require("morgan");
app.use(morgan("combined"));
//template engine
app.engine('hbs', engine({extname: '.hbs'}));
app.set("view engine", "hbs");
app.set('views', '/views');
 console.log("dirname",__dirname)
 app.set('views',path.join(__dirname , 'resources/views'))
app.get("/", (req, res) => {
  res.render('home')

});

app.listen(port, () => {
  console.log(`sever to connect http://localhost:${port}`);
});
