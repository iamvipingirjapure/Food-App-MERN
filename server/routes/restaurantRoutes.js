import express from "express";
import { authMiddleware } from "../middlewares/authMiddleware.js";
import {
  createRestaurantController,
  getAllRestaurantController,
  getRestaurantByIdController,
} from "../controllers/restaurantController.js";
const router = express.Router();

router.post("/create", authMiddleware, createRestaurantController);

router.get("/getAll", getAllRestaurantController);

router.get("/getRestaurantById/:id", getRestaurantByIdController);

//delete restaurant by vendor

export default router;
