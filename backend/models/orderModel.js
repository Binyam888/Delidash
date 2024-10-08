import mongoose from "mongoose";

const order = mongoose.Schema({
    
    userId:{type:String,required:true},
    items:{type:Array,required:true},
    amount:{type:Number,required:true},
    address:{type:Object,required:true},
    status:{type:String,default:"food processing"},
    date:{type:Date,default:Date.now()},
    payment:{type:Boolean,default:false}
})
export const OrderModel = mongoose.model("order",order)