





const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost:27017/fullstack').then(()=>{
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