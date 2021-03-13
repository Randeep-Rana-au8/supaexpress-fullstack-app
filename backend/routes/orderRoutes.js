import express from "express";
const Router = express.Router();
import {
  addOrderItems,
  getOrderById,
  updateOrderToPaid,
  getMyOrders,
} from "../controllers/orderController.js";
import { protect } from "../middlewares/authMiddleware.js";

Router.get("/myorders", protect, getMyOrders);
Router.post("/", protect, addOrderItems);
Router.get("/:id", protect, getOrderById);
Router.put("/:id/pay", protect, updateOrderToPaid);

export default Router;
