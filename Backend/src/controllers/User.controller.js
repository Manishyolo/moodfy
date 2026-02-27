const userModel = require("../models/User.Model.js");
const  jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");


async function register(req,res){
       
    const {username,email,password} = req.body;
    

    try {
          const isUserAlreadyExist = await userModel.find({
        $or:[
            {username},{email}
        ]
    })
    } catch (err) {
         return res.status(409).json({message:"user already exist"})
    }
    
  
 
    
    const hashpassword = await bcrypt.hash(password,10);

    const user = await userModel.create({
        username,email,password:hashpassword
    })

    const token = jwt.sign({
        id:user._id,
        username:user.username
    },process.env.JWT_SECRET,{
        expiresIn:"1d"
    })

    res.cookie("token",token)
    
        return res.status(201).json({
        message: "User registered successfully",
        user: {
            id: user._id,
            username: user.username,
            email: user.email
        }
    })


}


async function login(req,res){
                
    const {email,password,username} = req.body
    let isUserExist ;
  

    try {
         isUserExist = await userModel.findOne({
    $or:[
        {username:username},{email:email}
    ]
   })
    } catch (error) {
           return res.status(404).json({message:"user not exist"});
    }
  
  
    
   const isPasswordValid = await bcrypt.compare(password,isUserExist.password);

   if(!isPasswordValid){
    return res.status(400).json({message:"Invalid Credentials"})
   }
   
      const token = jwt.sign({
        id:isUserExist._id,
        username:isUserExist.username
    },process.env.JWT_SECRET,{
        expiresIn:"1d"
    })


    res.cookie("token",token);

    return res.status(200).json({
        message: "User logged in successfully",
        user: {
            id: isUserExist._id,
            username: isUserExist.username,
            email: isUserExist.email
        }
    })
   


}


module.exports = {
    register,
    login
}