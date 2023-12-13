
const express = require('express');
const server = express();
const cors = require('cors')
const stripe = require('stripe')('sk_test_51O8RRfSDzajLVKipdy0mdRarp835QgjdUeeEPiXr0RS1ZA1fmdUGxacVQ1osnKHfQa4vfgQWHpcbhWuVjHEI2ia500aoNgxgoO');

const productRouter = require("./routes/productroutes");
const cartRouter = require('./routes/cartroutes');
const orderroutes = require('./routes/orderorutes');
const authrouter = require('./routes/authroutes');
const useroutes = require('./routes/userrouets');

server.use(cors());
server.use(express.json());
server.use(express.json())
 
server.get("/", (req,res)=>{
  res.send("heloo mern project")

})
 server.use("/products", productRouter )
 server.use("/cart", cartRouter)
 server.use('/orders', orderroutes);
 server.use('/otp' ,authrouter)
 server.use("/auth", useroutes)

 server.post("/payment", async(req,res)=>{
const price = Math.round(req.body.price)*100
function rnadomkey(){
  let key = 'abcdefghijklmnopqrstuvwxyz1234567890'
}
    
    let session = await stripe.checkout.sessions.create({
        payment_method_types:["card"],
          line_items:[ 
            {
              price_data:{
                 currency:"inr",
                 product_data:{
                  name:"T-shirt"
                 },
                 unit_amount:price

              },
              quantity:1
            }
          ],
        
          mode: 'payment',
          success_url: `http://localhost:3000/Checkout/success`,
          cancel_url: "http://localhost:3000/cancel",
        });

        res.json({id:session.id});
 })

 
server.listen("9000",()=>[
    console.log("server is started")
])