import express from "express";
const Router = express.Router();
import { getProductById, getProducts } from "../controllers/productController.js";

Router.get("/", getProducts);

Router.get("/:id", getProductById);

export default Router;
