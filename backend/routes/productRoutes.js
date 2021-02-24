import express from "express";
const Router = express.Router();
import Product from "../models/productModel.js";

// @desc    Fetch All Products
// @access  Public
// @routes  /api/products

Router.get("/", async (req, res) => {
  const products = await Product.find({});
  res.json(products);
});

// @desc    Fetch single Product
// @access  Public
// @routes  /api/products/:id

Router.get("/:id", async (req, res) => {
  try {
    const product = await Product.findById(req.params.id);

    res.json(product);
  } catch (err) {
    console.log(err);
  }
});

export default Router;
