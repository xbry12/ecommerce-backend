const Product = require("../models/Products.js");
const data = require("./products.json");

Product.deleteMany({})
    .then(()=> {
        Product.create(data)
        .then((res)=>{
            console.log(res);
            process.exit();
            // tells node to kill script when node finishes processing data
        })
    })