import mongoose from "mongoose";

export const dbConfig= async()=>{
    try{

        const  data = await mongoose.connect(process.env.URI)
     console.log(`mongodb connected at ${data.connection.host}`)


    }catch(error){
        console.error(`Error :${error}`)
    }
   
}