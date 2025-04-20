import express from "express";
import {
  getUserProfile,
  login,
  logout,
  signup,
} from "../controllers/auth.controller.js";
import { authenticate } from "../middleware/authanticate.js";

const router = express.Router();

router.post("/signup", signup);
router.post("/login", login);
router.post("/logout", logout);
router.get("/profile", authenticate, getUserProfile);

export default router;
