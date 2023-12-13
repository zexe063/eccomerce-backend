



const Product = require("../model/productmodel");
const Products = Product.Product



const getproduct = async(req,res)=>{
     const data = await  Products.find();
    res.json({data})
}
const sortproduct = async(req,res)=>{
 console.log(req.query)
        const data = await Products.find().sort(req.query);
        res.json(data)
}


module.exports = {getproduct,sortproduct};