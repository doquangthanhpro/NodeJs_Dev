const mongoose = require("mongoose");
const Scheme = mongoose.Schema;

const Course = new Scheme({
  id: { type: Number},
  name: { type: String, maxLength: 200},
  description: { type: String, maxLength: 300},
  image: { type: String, maxLength: 300},
  cratedAt: { type: Date, default: Date.now},
  updatedAt: { type: Date,  default: Date.now},
});
module.exports = mongoose.model("Course", Course);
