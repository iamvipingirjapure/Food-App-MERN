import express from "express";
import { authMiddleware } from "../middlewares/authMiddleware.js";
import {
  createCategoryController,
  getAllCategoryController,
  getCategoryByIdController,
  deleteCategoryController,
} from "../controllers/categoryController.js";
const router = express.Router();

router.post("/createCategory", authMiddleware, createCategoryController);

router.get("/getAllCategory", getAllCategoryController);

router.get("/getCategoryById/:id", getCategoryByIdController);

router.delete("/deleteCategory/:id", authMiddleware, deleteCategoryController);

export default router;
