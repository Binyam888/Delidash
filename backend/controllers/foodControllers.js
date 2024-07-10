import { FoodModel } from "../models/foodModel.js";
import fs from "fs";

// add item

export const addFood = async (req, res) => {
  return res.status(200).json(req.body);
};
