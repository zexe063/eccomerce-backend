



const {order} = require("../model/ordermodel");
const nodemailer= require("nodemailer");
const { deletecart } = require("./cart");
const ejs = require('ejs');
const path = require('path');
 const pathdata = path.resolve(__dirname, '../mailer/index.ejs')


const transporter = nodemailer.createTransport({
   service:"gmail",
   auth:{
    user:"hackx0315@gmail.com",
    pass:"ckzcgfheutsjjqos",
   }
    
})



const getorder = async(req,res)=>{
const data = await order.find();
res.json(data)
}

const createorder = async(req,res)=>{

 const savepromises = req.body.map(async(item) => {
 const data =await  new order(item);
data.save()
return data;
});
const savealldata =await  Promise.all(savepromises);
res.json(savealldata);

// here the ejs render for sendig order detials on gmail by nodemailer //;


req.body.forEach(async(item) => {

const info = await transporter.sendMail({
   from:"themsmsm@gmail.com",
   to:item.email,
   subject:"eccomerce order",
   html: await ejs.renderFile(pathdata,{product:item})

})

});


}

const deleteorder = async(req,res)=>{
const id = req.params.id;

   const datadelete =await  order.findByIdAndDelete(id);
   res.json(datadelete);
}



module.exports = {getorder,createorder,deleteorder};