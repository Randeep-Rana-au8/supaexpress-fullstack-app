import express from "express";
const Router = express.Router();
import {
  deleteProduct,
  getProductById,
  getProducts,
  updateProduct,
  createProduct,
} from "../controllers/productController.js";
import { protect, admin } from "../middlewares/authMiddleware.js";

Router.route("/").get(getProducts).post(protect, admin, createProduct);

Router.route("/:id")
  .get(getProductById)
  .delete(protect, admin, deleteProduct)
  .put(protect, admin, updateProduct);

export default Router;
