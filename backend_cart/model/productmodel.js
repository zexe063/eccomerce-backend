







const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost:27017/fullstack').then(()=>{
    console.log("database is connected")
}).catch(()=>{
    console.log("failed")
})




const ProductSchema = new mongoose.Schema({
    title:String,
    image:String,
    price:Number
})


 exports.Product = mongoose.model("products", ProductSchema);
 
