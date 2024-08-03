import { Router } from "express";
import { validateToken } from "../middlewares/validateToken.js";
import { placeOrder } from "../controllers/orderController.js";

export const orderRouter = Router()


orderRouter.post("/place",validateToken,placeOrder)