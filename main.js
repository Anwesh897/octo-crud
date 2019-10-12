const express = require("express");

const app = express();

app.get("/", (req, res) => {
  res.send("Do not go gentle into that good night");
});

app.get("/instructor/:first_name",(req,res)=>{
    res.send(`The name of the instructor is ${req.params.first_name}`);
});

app.listen(1996, () => console.log("server is running at 1996"));
