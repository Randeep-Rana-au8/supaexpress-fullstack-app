import express from "express";
const Router = express.Router();
import {
  authUser,
  getUserProfile,
  registerUser,
  updateUserProfile,
  getUsers,
} from "../controllers/userController.js";
import { protect, admin } from "../middlewares/authMiddleware.js";

Router.route("/").post(registerUser).get(protect, admin, getUsers);
Router.post("/login", authUser);
Router.route("/profile").get(protect, getUserProfile).put(protect, updateUserProfile);

export default Router;
