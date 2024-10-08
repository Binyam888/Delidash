//add items to cart

import { User } from "../models/userModel.js";

export const addToCart = async (req, res) => {
  try {
    let userData = await User.findById(req.user.userId); // cheking the loged in user is exist
    let decodedId = req.user.userId;
    let cart = userData.cart;
    let itemId = req.body.itemId;
    if (!itemId) {
      return res
        .status(400)
        .json({ success: false, message: "No item id found" });
    }
    if (!cart[itemId]) {
      cart[itemId] = 1;
    } else {
      cart[itemId] += 1;
    }

    const updateCart = await User.findByIdAndUpdate(decodedId, { cart });

    // const updateCart=await userData.save()
    res
      .status(200)
      .json({
        success: true,
        message: "item added to cart",
        cart: updateCart.cart,
      });
    // let userData = await User.findOne({})
  } catch (error) {
    console.log(error);
    res.status(500).json({ success: false, message: "internal server error" });
  }
};

//remove from user Cart

export const removeFromCart = async (req, res) => {
  const userId = req.user.userId; // decoded userId
  const itemId = req.body.itemId;

  console.log(itemId);
  console.log(userId);
  try {
    let userData = await User.findById(userId);
    if (!userData) {
      return res
        .status(404)
        .json({ success: false, message: "user not found" });
    }
    let cart = userData.cart;
    console.log("cart before", cart);
    if (cart[itemId] > 0) {
      cart[itemId] -= 1;
    }
    await User.findByIdAndUpdate(userId, { cart });
    console.log("cart after", cart);
    res.status(200).json({ success: true, message: "removed" });
  } catch (error) {
    console.log(error);
  }
};

// get cart data for user 
export const getCart = async (req, res) => {
  const decodedId = req.user.userId;
  try {
    let userData = await User.findById(decodedId);
    console.log(userData);
    if (!userData) {
      return res
        .status(404)
        .json({ success: false, message: "user not found" });
    }
    let cart = userData.cart; // asaning the cart data from the user to cart variable

    return res
      .status(200)
      .json({ success: true, message: `cart data feched succesfully `, cart });
  } catch (error) {
    console.log(error);
    res.status(400).json({ success: false, message: "No items in the cart" });
  }
};
