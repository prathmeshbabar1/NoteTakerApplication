const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const bodyParser = require('body-parser');
const signupRoute = require('./routes/signup');
const loginRoute = require('./routes/login');
const noteRoute = require('./routes/addNode');
const homeRoute = require('./routes/home');

const url = "mongodb+srv://prathmesh:prathmesh@cluster0.jdolkoc.mongodb.net/?retryWrites=true&w=majority";
const port = "8080"
async function conn(){
    await mongoose.connect(url)
console.log("connected to DB");
} 
conn();


const app = express();
app.use(bodyParser.urlencoded({extended:false}));
app.use(bodyParser.json());
app.use(cors()); 
app.use('/api',signupRoute);
app.use('/api',loginRoute);
app.use('/api',noteRoute);
app.use('/api',homeRoute);

app.get('/',(req,res)=>{
    res.send("ok")
})
app.listen(port,()=>{console.log(`app is running at ${port}`)})