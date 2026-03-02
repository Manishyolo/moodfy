const express = require("express");
const cookieparser = require("cookie-parser");

const userRoute = require("../src/routes/user.route")

const app = express();


app.use(cookieparser());
app.use(express.json());

app.use("/user",userRoute)






module.exports = app