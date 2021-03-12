import express from "express";
const Router = express.Router();
import { addOrderItems, getOrderById, updateOrderToPaid } from "../controllers/orderController.js";
import { protect } from "../middlewares/authMiddleware.js";

Router.post("/", protect, addOrderItems);
Router.get("/:id", protect, getOrderById);
Router.put("/:id/pay", protect, updateOrderToPaid);

export default Router;
