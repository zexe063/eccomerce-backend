
const nodemailer = require("nodemailer")
const bcrypt = require('bcryptjs');
const jwt =  require("jsonwebtoken");

const transporter = nodemailer.createTransport({
    service:'gmail',
    auth:{
        user:"hackx0315@gmail.com",
        pass:"ckzcgfheutsjjqos",
       }
})


function randomotp(){
    const value = '1234567890'
let otp = "";
     for(i=0; i<6; i++){
        otp = otp+ Math.floor(Math.random()*10)
     }
return otp;
    }
    let otpvalue = '';
    

const createotp = async(req,res)=>{
 try{
    otpvalue = randomotp()
    const data = await  transporter.sendMail({

        from:'hack0315@gmail.com',
        to:req.body.email,
        subject:'Otp for sigunup',
        text:otpvalue
    })

    const otphash = jwt.sign({otp:otpvalue,email:req.body.email},'murari824124')

    
    res.status(200).json({id:data.messageId,otp:otphash})
 }
catch{
    res.json("error")
}
}

module.exports = {createotp,otpvalue};