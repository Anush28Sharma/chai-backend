
// require ('dotenv').config({path:'./env'})
import dotenv from "dotenv"
dotenv.config()
import { app } from "./app.js"
import connectDB from "./db/index.js"

// 
connectDB().then(() =>{
    app.listen(process.env.PORT || 8000 , () =>{
        console.log (`server is running at port : ${process.env.PORT}`);
    })
})
.catch((err)=>{
console.log("Mongo db connection fail !!!");
})
 



// // iffi code
// ( async() =>{
//     try {
//        await mongoose.connect(`${process.env.MONGODB_URI}/${DB_NAME}`)
//     } catch (error) {
//         console.error("ERROR ", error)
//     }

// })()