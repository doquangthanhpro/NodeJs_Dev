const mongoose = require("mongoose");
const connect = async () => {
  try {
    await mongoose.connect("mongodb://localhost:27017/F8_Edu");
    console.log("connect success!");
  } catch (err) {
    console.log("connect failure!");
  }
};
module.exports = { connect };
