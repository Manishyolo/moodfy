const jwt = require('jsonwebtoken');
const redis = require('../config/cache')


async function authuser(req,res,next){

    const token = req.cookies.token;


    if(!token){
        return res.status(400).json({message:"Token not provided"});
    }

    const istokenblacklisted = await redis.get(token);

     if(istokenblacklisted){

        return res.status(401).json({
            message:"unauthriozed access"
        })
     }
     
    try {

           const decoded =  jwt.verify(token,process.env.JWT_SECRET);
 

    req.user = decoded

    next()
        
    } catch (error) {
             
        return res.status(401).json({message:"invalid Token"});
    }


 



  

}



module.exports = authuser;