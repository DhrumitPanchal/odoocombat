import express from "express";
import { registerController } from "../controllers/authController";

const router = express.Router();

router.get("/register", registerController);
export default router;
