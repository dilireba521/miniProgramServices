const mongoose = require("mongoose");

const scoreMongoose = mongoose.Schema({
  id: String,
  name: String,
  math: String,
  chinese: String,
  english: String,
  createTime: String,
});

module.exports = mongoose.model("score", scoreMongoose);