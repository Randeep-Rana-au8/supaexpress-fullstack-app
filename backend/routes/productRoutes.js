import express from "express";
import asyncHandler from "express-async-handler";
const Router = express.Router();
import Product from "../models/productModel.js";
// import Product from "./"

// @desc    Fetch All Products
// @access  Public
// @routes  /api/products

Router.get(
  "/",
  asyncHandler(async (req, res) => {
    const products = await Product.find({});
    res.json(products);
  })
);

// @desc    Fetch single Product
// @access  Public
// @routes  /api/products/:id

Router.get(
  "/:id",
  asyncHandler(async (req, res) => {
    const product = await Product.findById(req.params.id);

    if (product) {
      res.json(product);
    } else {
      res.status(404).json({ message: "No Product is found" });
    }
  })
);

export default Router;
