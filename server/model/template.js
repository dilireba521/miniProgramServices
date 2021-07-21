const mongoose = require("mongoose");

const templatemongoose = mongoose.Schema({
  name:String,
  template:String,
  data:String
})

module.exports = mongoose.model("template",templatemongoose);