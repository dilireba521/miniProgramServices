const express = require("express");
const mongoose = require("mongoose");
const app = express()
const routerTemplate = require("./routes/template")
const routerScore = require("./routes/score")
const api = require("./middleware/api")
const bodyParser = require("body-parser");

mongoose.connect("mongodb://127.0.0.1:27017/template", {
  useNewUrlParser: true,
  useUnifiedTopology: true
});

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({
  extended: false
}))
app.use(api)

app.use("/xhr/v1", routerTemplate)
app.use("/xhr/v1", routerScore)

// app.use("/", (req, res, next) => {
//   res.send("hello Express")
// })
app.listen(8080, () => {
  console.log("server is running");
})