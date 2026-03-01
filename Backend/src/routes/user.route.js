const {Router} = require("express");
const userController = require("../controllers/User.controller");
const authuser = require("../middleware/auth.middleware");
const userRouter = Router();

userRouter.post("/register",userController.register)

userRouter.post("/login",userController.login)

userRouter.get('/getme',authuser,userController.getme)

userRouter.get('/logout',authuser,userController.logout);



module.exports = userRouter

