import { OrderModel } from "../models/orderModel.js";
import { User } from "../models/userModel.js";
import Stripe from "stripe";


const stripe = new Stripe('sk_test_51Pk5PBJvsOcOSYeNUBzrnGVICyKHlDi0fGBHlx8bDMl0pZdCTixp7lVpvwiK40OEdtHXnw1nqzJtkJimzrqx7R0d00kKF21TU8');

// placing order from frontend

export const placeOrder = async (req, res) => {
  // console.log(req.user)

  const frontEndUrl = 'http://localhost:5173'
  const { userId } = req.user;
  // const {userId} = req.user
  const { items, address, amount } = req.body;

  try {
    const orderModel = await OrderModel.create({
      userId,
      items,
      amount,
      address,
    });
    await User.findByIdAndUpdate(userId, { cart: {} });

    const line_items = items.map((item) => ({
      price_data: {
        currency: "usd",
        product_data: {
          name: item.name,
        },
        unit_amount: item.price*100,
      },
      quantity: item.quantity,
    }));
    console.log("line item ", line_items)
    const session = await stripe.checkout.sessions.create({
      line_items:line_items,
      mode:"payment",
      success_url : `${frontEndUrl}/verify?success=true&orderId${orderModel._id}`,
      cancel_url : `${frontEndUrl}/verify?success=false&orderId${orderModel._id}`
    })
    res.status(200).json({success:true,success_url:session.url})
    // res.redirect(303,session.url)
  } catch (error) {
    res.status(400).json({ success: false, error: error.message });
   
  }
};
