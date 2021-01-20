const express = require("express");
const app = express();
const port = process.env.PORT || 2021;
const env = require("dotenv");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");

//Importing Routes
const userRoutes = require("./routes/user");

//environment variable
env.config();

//middlewares
app.use("/user", userRoutes);
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

//Connection to Mongodb
mongoose
  .connect(
    `mongodb+srv://${process.env.MONGO_DB_USER}:${process.env.MONGO_DB_PASSWORD}@cluster0.egpsr.mongodb.net/${process.env.MONGO_DB_DATABASE}?retryWrites=true&w=majority`,
    { useNewUrlParser: true, useUnifiedTopology: true }
  )
  .then((res) => console.log("Connect to database"))
  .catch((err) => console.error(err));

//Routes
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

//Listening the server
app.listen(port, (err) => {
  if (err) throw err;
  console.log("server is running on port", port);
});
