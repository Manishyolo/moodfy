const express = require("express");
const cookieparser = require("cookie-parser");
const dotenv = require("dotenv");
const userRoute = require("../src/routes/user.route")

const app = express();

dotenv.config();
app.use(cookieparser());
app.use(express.json());

app.use("/user",userRoute)






module.exports = app