import { FoodModel } from "../models/foodModel.js";
import fs from "fs";

// @desc add food item
// POST /api/food/add

export const addFood = async (req, res) => {
  try {
    console.log("image details", req.file);
    let imageFileName = `${req.file.filename}`;
    const { name, description, price, category } = req.body;
    if (!(name && description && price && category && req.file)) {
      return res.status(400).json({ message: "All felids are mandatory" });
    }
    console.log("body", name, description, price);
    const food = await FoodModel.create({
      name,
      description,
      price,
      image: imageFileName,
      category,
    });
    return res.status(200).json({ message: "food added", details: food });
  } catch (error) {
    console.log(error);
    return res.status(400).json({ message: error });
  }
};

// @desc List food items
// GET /api/food/list

export const ListFood = async (req, res) => {
  try {
    const fooList = await FoodModel.find({});
    return res.status(200).json({ count: fooList.length, data: fooList });
  } catch (error) {
    console.error(`Error :${error}`);
    return res
      .status(400)
      .json({ message: "unable to fech the data", error: error });
  }
};

// @desc Delete food item
// Delete /api/food/delete/id

export const deleteFood = async (req, res) => {
  try {
    const id = req.params.id;
    console.log("params", req.params);
    const itemExist = await FoodModel.findById(id);
    if (!itemExist) {
      return res.status(400).json({ message: "Error no item found" });
    }

    const deleteItem = await FoodModel.findByIdAndDelete(id)
    console.log("delted item",deleteItem)
    fs.unlink(`uploads/${deleteItem.image}`,(err)=>{
        if(err){
            console.log(`error deleting file :${err}`)
            return;
        }
        console.log('file deleted sucessfuly from the local storage')
    })
   
   return res.status(200).json(deleteItem);
  } catch (error) {
    console.error(error);
  }
};
