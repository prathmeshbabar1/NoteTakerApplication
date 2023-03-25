const express = require('express');
const mongoose = require('mongoose');
const User = require('../model/userSchema');
const jwt = require("jsonwebtoken")

const loginRouter = express.Router();
const secret = "prathmesh"
loginRouter.post('/login',async(req,res)=>{
    const {email,password} = req.body
    console.log(req.body);
try{
const user = await User.findOne({email:email});
if(!user){
    res.status(200).json({"error":"user not found"})
}
// console.log(user.password);
else if(user.password == password){

    const token = jwt.sign({
        exp: Math.floor(Date.now() / 1000) + (60 * 60 * 60 * 60),
        user:user.__id
      },secret)
    res.status(200).send({'token':token})
}else{
    res.status(200).json({"error":"password not match"})
}

}catch(e){
    console.log(e);
    res.status(400).send(e);
}
    } 
)


module.exports = loginRouter;