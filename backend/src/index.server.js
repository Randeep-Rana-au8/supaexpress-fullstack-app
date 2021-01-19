const express = require("express");
const app = express();
const port = process.env.PORT || 2021;
const env = require("dotenv");

//environment variable
env.config();

app.get("/", (req, res) => {
  res.json({
    message: "Health Check Ok",
  });
});

app.post("/data", (req, res) => {
  res.json({
    message: "Hello From server",
  });
});

app.listen(port, (err) => {
  if (err) throw err;
  console.log("server is running on port", port);
});
