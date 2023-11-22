



const mongoose = require('mongoose');

mongoose.connect("mongodb://localhost:27017/fullstack").then(()=>{
    console.log("user databse connected")
}).catch(()=>{
    console.log("error in user")
})


const userSchema = new mongoose.Schema({
    FirstName:String,
    LastName:String,
    password:String,
    email:String
})

exports.user= mongoose.model('user', userSchema)