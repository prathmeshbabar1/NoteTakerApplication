const express = require('express');
const mongoose = require('mongoose');
const User = require('../model/userSchema');

const loginRouter = express.Router();

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
    res.status(200).send("successfully login")
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