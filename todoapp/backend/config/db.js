const mongoose = require("mongoose")

const MONGODB_URI = process.env.MONGODB_URI;

export const connectDB = async() =>{
    try{
        await mongoose.connect(MONGODB_URI)
        console.log("Database connected")
    }catch(err){
        console.err("Failed to connect to mongodb", err)
    }
}


