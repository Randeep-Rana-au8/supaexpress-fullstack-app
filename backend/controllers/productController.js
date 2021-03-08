import Product from "../models/productModel.js";
import asyncHandler from "express-async-handler";

// @desc    Fetch All Products
// @access  Public
// @routes  /api/products
const getProducts = asyncHandler(async (req, res) => {
  const products = await Product.find({});
  res.json(products);
});

// @desc    Fetch single Product
// @access  Public
// @routes  /api/products/:id
const getProductById = asyncHandler(async (req, res) => {
  const product = await Product.findById(req.params.id);

  if (product) {
    res.json(product);
  } else {
    res.status(404).json({ message: "No Product is found" });
  }
});

export { getProducts, getProductById };
