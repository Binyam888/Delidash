import jwt from "jsonwebtoken";
import validator from "validator";
import { User } from "../models/userModel.js";
import bcryprt from "bcryptjs";

// @desc resgiset User
// POST /api/user/register

export const registerUSer = async (req, res) => {
  const { name, email, password } = req.body;
  try {
    const userExist = await User.findOne({ email });
    // checking all feilds are filled
    if (!(name && email && password)) {
      return res.status(400).json({ message: "All feilds are mandatory" });
    }
    // checking user is alredy exist
    if (userExist) {
      return res
        .status(400)
        .json({ success:false, message: "user alredy exist try creating new one" });
    }
    // validating emali it is correct format
    if (!validator.isEmail(email)) {
      return res.status(400).json({ success:false,message: "please enter a valid email" });
    }

    // creating new user
    const user = await User.create({
      name,
      email,
      password,
    });

    

    res
      .status(200)
      .json({ success:true,message: "user created succesfully ", details: user });
  } catch (error) {
    console.log(error);
  }
};

//@desc login user
// Post /api/user/login

export const loginUser = async (req, res) => {
  const { email, password } = req.body;
  try {
    const user = await User.findOne({ email });
    if (!user) {
      return res.status(400).json({success:false, message:"user not found "});
    }
    const chekPassword = await bcryprt.compare(password, user.password);
    if (!chekPassword) {
      return res.status(400).json({ message: "Password missmach try again" });
    }
    const payload = { // payload for jwt
      userId: user.id,
      userName:user.name
    };
    const token = jwt.sign(payload, process.env.SECRET_KEY, ); // creating jwt token
    res.status(200).json({ success:true , message: "User logged In successfully", token,payload });
  } catch (error) {
    console.log(error);
  }
};
