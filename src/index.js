const express = require('express')
const app = express();
 const port = 3000
 
 // template engine
app.get("/", (req, res) => {
  res.send("hello world");
});
 app.listen(port, () => {
    console.log(`sever to connect http://localhost:${port}`); 
 }) 
