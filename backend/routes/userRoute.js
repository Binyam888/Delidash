import { Router } from "express";
import { loginUser, registerUSer } from "../controllers/userController.js";

export const userRouter = Router()



//Resgister

userRouter.post("/register",registerUSer)
  
//Login
userRouter.post("/login",loginUser)