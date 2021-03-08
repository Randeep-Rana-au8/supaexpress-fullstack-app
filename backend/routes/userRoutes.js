import express from "express";
const Router = express.Router();
import { authUser, getUserProfile, registerUser } from "../controllers/userController.js";
import { protect } from "../middlewares/authMiddleware.js";

Router.post("/", registerUser);
Router.post("/login", authUser);
Router.get("/profile", protect, getUserProfile);

export default Router;
