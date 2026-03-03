const express = require("express");
const cookieparser = require("cookie-parser");
const cors = require('cors')

const userRoute = require("../src/routes/user.route")

const app = express();

app.use(cors({
     origin: "http://localhost:5173",
    credentials: true
}))
app.use(cookieparser());
app.use(express.json());

app.use("/user",userRoute)






module.exports = app