import express from "express"
import dotenv from "dotenv"

import cors from "cors"
import { foodRouter } from "./routes/foodRoute.js"
import { dbConfig } from "./config/dbConfig.js"
import { userRouter } from "./routes/userRoute.js"
import { cartRouter } from "./routes/cartRoute.js"
import { orderRouter } from "./routes/orderRoute.js"


//env cofiguration
dotenv.config()
//database
dbConfig()

//Server
const port = process.env.PORT || 3002
const app = express()
app.listen(port,()=>{
    console.log(`server connected at port ${port}`)
})

//midlewares
app.use(express.json())
app.use(cors())
app.use("/api/food",foodRouter)
app.use("/api/user",userRouter)
app.use("/images",express.static("uploads"))
app.use("/api/cart",cartRouter)
app.use("/api/order",orderRouter)

