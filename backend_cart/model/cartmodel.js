





const mongoose = require('mongoose');
mongoose.connect('mongodb+srv://thekms001:tZ6NAXeQLsrV5ozM@cluster0.q4vvj3z.mongodb.net/fullstack').then(()=>{
    console.log("database is connected")
}).catch(()=>{
    console.log("failed")
})




const CartSchema = new mongoose.Schema({
    title:String,
    image:String,
    price:Number,
    description:String
})


 exports.cart = mongoose.model("carts", CartSchema);