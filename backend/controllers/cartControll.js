//add items to cart

import { User } from "../models/userModel.js"

export const addToCart = async (req,res)=>{
     try {
        let userData = await User.findById(req.user.userId) // cheking the loged in user is exist 
        let decodedId = req.user.userId
        let cart =  userData.cart;
        let itemId = req.body.itemId
        if(!itemId){
         return res.status(400).json({success:false,message:"No item id found"})
        }
        if(!cart[req.body.itemId]){
          cart[req.body.itemId] = 1
        }else{
         cart[req.body.itemId] += 1
        }

        const updateCart =await User.findByIdAndUpdate(decodedId,{cart})
        
      // const updateCart=await userData.save()
      res.status(200).json({success:true ,message:"item added to cart",item:updateCart.cart})
        // let userData = await User.findOne({})
     } catch (error) {
        console.log(error)
        res.status(500).json({success:false,message:"internal server error"})
     }

}

//remove from user Cart

const removeFromCart =(req,res)=>{
 
}


//