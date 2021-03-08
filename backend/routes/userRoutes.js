import express from "express";
const Router = express.Router();
import {
  authUser,
  getUserProfile,
  registerUser,
  updateUserProfile,
} from "../controllers/userController.js";
import { protect } from "../middlewares/authMiddleware.js";

Router.post("/", registerUser);
Router.post("/login", authUser);
Router.route("/profile").get(protect, getUserProfile).put(protect, updateUserProfile);

export default Router;
