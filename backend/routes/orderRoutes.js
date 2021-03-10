import express from "express";
const Router = express.Router();
import { addOrderItems } from "../controllers/orderController.js";
import { protect } from "../middlewares/authMiddleware.js";

Router.post("/", protect, addOrderItems);

export default Router;
