


const mongoose = require('mongoose');
 mongoose.connect("mongodb://localhost:27017/fullstack").then(()=>
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
