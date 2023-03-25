const express = require('express');
const mongoose = require('mongoose');
const User = require('../model/userSchema');

const signupRouter = express.Router();

signupRouter.post('/signup',async(req,res)=>{
    const {email,password,confirmPassword} = req.body
    if(password == confirmPassword){
try{
const user = await User.create({email:email,password:password});
res.status(201).json({"massege":"successfully signind"})
}catch(e){
    console.log(e);
    res.status(400).send(e);
}
    } else{
        res.json({"error":"password & confirm password didnt match"}) 
}

}
)


module.exports = signupRouter;