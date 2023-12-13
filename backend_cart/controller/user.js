const {user} = require("../model/usermodel")
const bcrypt = require("bcryptjs")
const jwt = require("jsonwebtoken")


const loginuser = async(req,res)=>{
const userdata = await user.findOne({email:req.body.email});



if(userdata==null){
    res.status(267).json({message:"user not found"})
    
}
else{
    const hash = await bcrypt.compareSync(req.body.password, userdata.password)
    if(hash){
  res.json(userdata)
}

      else{
        res.status(203).json(false)
    }
}
    
 
}


const createuser = async(req,res)=>{
 


    try{
        const jwtvalidation = jwt.verify(req.body.hashotp,"murari824124");

        if(jwtvalidation.otp === req.body.otp && jwtvalidation.email=== req.body.email){
            const checkemail = await user.findOne({email:req.body.email});
            if(checkemail== null){
                const hashpassword = bcrypt.hashSync(req.body.password, 10);
                const data = await new user(req.body);
                data.password = hashpassword;
                data.save()
                if(data){

                   res.json("resgister")
                }
                else{
                    res.json("error")
                }

            }
            else{
                res.json("email registered")
            }
            
        }
        else{
            res.json("wrong otp")
        }
     
     
    }
    catch(err){
        console.log(err)
        res.json("invalid token");
    }
   

}

const forgetpassword = async(req,res)=>{
   
    try{
 const jwtpassvalidate =  jwt.verify(req.body.hashedvalue, "murari824124");
 
if(jwtpassvalidate.email === req.body.email && jwtpassvalidate.otp === req.body.otp){
    const hashpassword = bcrypt.hashSync(req.body.password, 10)
   const data = await user.updateOne({email:req.body.email},{$set:{password:hashpassword}});


   if(data.matchedCount==1){
   res.json("forget")
   }
   else{
    res.json("user not register");
   }
}
else{
    res.json("wrong otp")
}
    } 
    catch{
res.json("invalid token")
    }
   
}

module.exports = {loginuser,createuser,forgetpassword};