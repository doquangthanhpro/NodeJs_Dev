const mongoose = require("mongoose");
const Scheme = mongoose.Schema;

const Course = new Scheme({
  id:{type: Number},
  name: { type: String },
  description: { type: String, maxLength: 300 },
  videoId: { type: String, maxLength: 300 },
  level: { type: String, maxLength: 300 },
  slug: { type: String, maxLength: 300 },
}, {
  timestamps: true
});
module.exports = mongoose.model("Course", Course);
