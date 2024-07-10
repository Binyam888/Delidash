import { FoodModel } from "../models/foodModel.js";
import fs from "fs";

// add item

export const addFood = async (req, res) => {
  try {
    console.log("image details",req.file)
    let imageFileName = `${req.file.filename}`
    const { name, description, price,  category } = req.body;
    console.log("body", name, description, price, );
    
    console.log("image file name",imageFileName)

    const food = await FoodModel.create({
      name,
      description,
      price,
      image:imageFileName,
      category,
    });
    return res.status(200).json(food);
  } catch (error) {
    console.log(error);
    return res.status(400).json({ message: error });
  }
};
