import mongoose from "mongoose";
import bcrypt from "bcryptjs"

const userShema = mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  password: {
    type: String,
    required: true,
  },
  cart: {
    type: Object,
    default: {},
  },
},{timestamps:true,minimize:false}); 

   userShema.pre("save", async function(next){
    if(!this.isModified("password")){
        return next()
    }
   const salt = await bcrypt.genSalt(10)
   this.password = await bcrypt.hash(this.password,salt)
   })
  export const User = mongoose.model("user",userShema)