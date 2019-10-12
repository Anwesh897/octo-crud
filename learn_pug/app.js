const express = require("express");
const app = express();

app.set("view engine", "pug");

app.use(express.static(__dirname + "/public"));

app.get("/", (req, res) => {
  // res.render("index");
  res.send("Zappier..!");
});

// app.post("/", (req, res) => {
// //   res.render("index");
// console.log("I got post request..!");
// });

app.listen(1997, () => console.log("server is running at 1997"));
