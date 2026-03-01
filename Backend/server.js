const app = require("./src/app.js");
const dotenv = require("dotenv")
const connectTodatabase = require("./src/config/db.js")

dotenv.config();
connectTodatabase()

app.listen(3000,()=>{
    console.log("server running on port 3000");
    
})