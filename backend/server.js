import express from "express";
import products from "./data/products.js";
// const dotenv = require("dotenv");
import connectDb from "./config/db.js";
import dotenv from "dotenv";
import colors from "colors";

dotenv.config();
connectDb();

const app = express();

app.get("/", (req, res) => {
  res.send("Health Ok");
});

app.get("/api/products", (req, res) => {
  res.json(products);
});

app.get("/api/products/:id", (req, res) => {
  const product = products.find((p) => p._id === req.params.id);
  res.json(product);
});
const port = process.env.PORT;

app.listen(port, (err) => {
  if (err) console.log(err);
  console.log(`App is running in ${process.env.NODE_ENV} mode on port ${port}`.yellow.bold);
});
