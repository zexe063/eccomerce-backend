


const mongoose = require('mongoose');
 mongoose.connect("mongodb+srv://thekms001:tZ6NAXeQLsrV5ozM@cluster0.q4vvj3z.mongodb.net/fullstack").then(()=>
 console.log("order collection conncetd")
 ).catch(()=>{
    console.log("eroor")
 })

 const orderSchema = new mongoose.Schema({
    title:String,
    image:String,
    description:String,
    price:Number,
    email:String
 })


  exports.order = mongoose.model("order", orderSchema);
