import { Router } from "express";
import { addFood, deleteFood, ListFood } from "../controllers/foodControllers.js";
import multer from "multer";
import { validateToken } from "../middlewares/validateToken.js";
export const foodRouter = Router();

//image storage
const storage1 = multer.diskStorage({
  destination: "uploads",
  filename: (req, file, cb) => {
    return cb(null, `${Date.now()}${file.originalname}`);
  },
});
const upload = multer({ storage: storage1 });
//adding food details
foodRouter.post("/add", upload.single("image"), addFood);

//listing Food Items
foodRouter.get("/list",ListFood)

//delete food item
foodRouter.delete("/delete/:id",deleteFood)