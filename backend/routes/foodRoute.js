import { Router } from "express";
import { addFood } from "../controllers/foodControllers.js";
import multer from "multer";
export const foodRouter = Router();

//image storage
const storage1 = multer.diskStorage({
  destination: "uploads",
  filename: (req, file, cb) => {
    return cb(null, `${Date.now()}${file.originalname}`);
  },
});
const upload = multer({ storage: storage1 });
console.log("uploads", upload);
foodRouter.post("/add", upload.single("image"), addFood);
