import express from "express"
import dotenv from "dotenv"
import cors from "cors"
import { foodRouter } from "./routes/foodRoute.js"
import { dbConfig } from "./config/dbConfig.js"


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
app.use("/images",express.static("uploads"))

