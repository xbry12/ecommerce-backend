const mongoose = require("../db/connection.js");

let Product = new mongoose.Schema({
    //properties
    title:{
        type:String,
        trim: true
        //trim is for whitespace
    },
    url: {
        type:String,
        trim: true
    }
})

module.exports = mongoose.model("Products", Product)