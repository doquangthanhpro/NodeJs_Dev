const mongoose = require("mongoose");
const connect = async () => {
  try {
    await mongoose.connect("mongodb://localhost:27017/F8_Edu", {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log("connect to success!");
  } catch (err) {
    console.log("connect  to failure!");
  }
};
module.exports = { connect };
