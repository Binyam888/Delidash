import express from "express"
import dotenv from "dotenv"
import cors from "cors"


//env cofiguration
dotenv.config()


//Server
const port = process.env.PORT || 3002
const app = express()
app.listen(port,()=>{
    console.log(`server connected at port ${port}`)
})

//midlewares
app.use(express.json())
app.use(cors())

