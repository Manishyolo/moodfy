const app = require("./src/app.js");
const connectTodatabase = require("./src/config/db.js")


connectTodatabase()

app.listen(3000,()=>{
    console.log("server running on port 3000");
    
})