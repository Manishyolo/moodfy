const mongoose = require("mongoose");


 function connectTodatabase(){
     
    mongoose.connect(process.env.MONGO_URI).then((res)=>{
        console.log("connected to Database");
        
    }).catch((err)=>{
        console.log(err);
        
    })

}

module.exports = connectTodatabase;