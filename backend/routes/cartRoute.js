import { Router } from "express";
import { addToCart, removeFromCart } from "../controllers/cartControll.js";
import { validateToken } from "../middlewares/validateToken.js";

export const cartRouter = Router()

cartRouter.use(validateToken)
cartRouter.post("/add", addToCart)
cartRouter.post('/remove',removeFromCart)