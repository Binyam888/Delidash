import mongoose from "mongoose";

export const dbConfig= async()=>{
     data = await mongoose.connect(process.env.URI)
     console.log(`mongodb connected at ${data.conection.host}`)
}