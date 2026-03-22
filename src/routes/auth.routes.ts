import { Router } from "express";
import { authMiddleware } from "../middleware/auth.middleware";
import { register, verifyOTP, login, getMe } from "../controllers/auth.controller";
import { refreshAccessToken, logout, forgotPassword, resetPassword } from "../controllers/auth.controller";

const router = Router();

router.post("/register", register);
router.post("/verify-otp", verifyOTP);
router.post("/login", login);
router.get("/me", authMiddleware, getMe);
router.post("/refresh-token", refreshAccessToken);
router.post("/logout", logout);
router.post("/forgot-password", forgotPassword);
router.post("/reset-password", resetPassword);

export default router;