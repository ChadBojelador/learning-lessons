const express = require("express");
const app = express();
const cors = require("cors");
const { connectDB } = require("./config/db.js");
const todoRoutes = require("./routes/todoroutes.js")
app.use(cors());
app.use(express.json());

app.use("/api",todoRoutes)

const PORT = 3000;

await connectDB();

app.listen(PORT, (req,res)=>{
    console.log(`Server listening at http://localhost:${PORT}`)
})