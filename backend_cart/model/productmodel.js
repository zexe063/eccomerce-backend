







const mongoose = require('mongoose');
mongoose.connect('mongodb+srv://thekms001:tZ6NAXeQLsrV5ozM@cluster0.q4vvj3z.mongodb.net/fullstack').then(()=>{
    console.log("product database is connected")
}).catch(()=>{
    console.log("failed")
})




const ProductSchema = new mongoose.Schema({
    title:String,
    image:String,
    price:Number
})


 exports.Product = mongoose.model("products", ProductSchema);
 
