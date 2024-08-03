import { OrderModel } from "../models/orderModel.js";
import { User } from "../models/userModel.js";
import Stripe from 'stripe'

// placing order from frontend

export const placeOrder = async (req,res)=>{
  console.log(req.user)
  const {userId} = req.user
  res.json({userId})

}