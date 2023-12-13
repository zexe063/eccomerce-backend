



const mongoose = require('mongoose');

mongoose.connect("mongodb+srv://thekms001:tZ6NAXeQLsrV5ozM@cluster0.q4vvj3z.mongodb.net/fullstack").then(()=>{
    console.log("user databse connected")
}).catch(()=>{
    console.log("error in user")
})


const userSchema = new mongoose.Schema({
    FirstName:String,
    LastName:String,
    password:String,
    email:String,
   age:[String,require]
})

exports.user= mongoose.model('user', userSchema)