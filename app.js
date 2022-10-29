const express = require ('express');
const app = express();
const mongoose = require("mongoose");


/*
//port check
app.get("/",(req,res) =>{
    res.send("port number is 5000")
}) */


//mongoose - connect
mongoose.connect("mongodb+srv://chottu:chottu@cluster0.5hrcdej.mongodb.net/?retryWrites=true&w=majority",{
useNewUrlParser: true, useUnifiedTopology: true},(err)=>{
    if(!err){
        console.log("Db connected successfully")
    }else{
        console.log(err)
    }
})


//server running on port
app.listen(5000, (req,res) => {
    console.log("server is running")
  })