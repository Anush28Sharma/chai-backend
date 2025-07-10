
// require ('dotenv').config({path:'./env'})
import dotenv from "dotenv"
dotenv.config()

import connectDB from "./db/index.js"


connectDB();




// // iffi code
// ( async() =>{
//     try {
//        await mongoose.connect(`${process.env.MONGODB_URI}/${DB_NAME}`)
//     } catch (error) {
//         console.error("ERROR ", error)
//     }

// })()