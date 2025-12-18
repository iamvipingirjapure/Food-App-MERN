import express from "express";
import {
  deleteUserController,
  getUserController,
  updatePasswordController,
  updateUserController,
} from "../controllers/userController.js";
import { authMiddleware } from "../middlewares/authMiddleware.js";
const router = express.Router();

router.get("/getUser", authMiddleware, getUserController);

router.put("/updateUser", authMiddleware, updateUserController);
router.put("/updatePassword", authMiddleware, updatePasswordController);
router.delete("/deleteUser/:id", authMiddleware, deleteUserController);

export default router;
