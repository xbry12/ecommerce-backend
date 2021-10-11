const express = require("express");
//starting api server
const Product = require("./models/Products.js");

let app = express();

app.get("/", (req,res)=>{
   //accessing data
   Product.find({}).then(data=>{
       console.log(data);
       res.json(data);
   })
})

app.listen(9001, ()=>{
    console.log("listening to port over 9000")
})