const  mongoose  = require("mongoose");

const Scheme = mongoose.Schema;
const Course = new Scheme({
  _id: { type: Number },
  name: { type: String },
});
module.exports = mongoose.model("Course", Course);
