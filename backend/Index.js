import express from "express"






//Server
const port = process.env.PORT || 3002
const app = express()
app.listen(port,()=>{
    console.log(`server connected at port ${port}`)
})