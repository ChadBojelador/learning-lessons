const express = require('express')
const app = express();
const cors = require ('cors')
const PORT = 3000;

app.use(cors());
app.use(express.json());

let messages = [];

app.get("/", (req,res)=>{
    res.json(messages)
} )

app.post("/", (req,res)=>{
    const {message} = req.body;
    if(message){
        messages.push(message)
        res.json({success: true})
    }
    else{
        res.json({success: false})
    }
})
app.listen(PORT, (req,res)=>{
    console.log(`Server Listening at ${PORT}`)
})