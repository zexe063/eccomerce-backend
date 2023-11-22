



const cart = require("../model/cartmodel");
const carts = cart.cart;



const getcart = async(req,res)=>{
    const data = await carts.find()
res.json(data)
}

const createcart = async (req,res)=>{
    
    const data = await new carts(req.body);
    data.save();
    res.json(data)

}

const deletecart = async (req,res)=>{
  
    const id = (req.params.id);
   
    const data = await carts.findByIdAndDelete(id)
    res.json(data);
}
module.exports = {getcart, createcart,deletecart};