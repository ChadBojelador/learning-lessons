const mongoose = require("mongoose")


async function connectDB (){
    try{
        await mongoose.connect(process.env.MONGODB_URI)
        console.log("Database connected")
    }catch(error){
        console.error("Failed to connect to mongodb", error)
    }
}


module.exports = { connectDB };