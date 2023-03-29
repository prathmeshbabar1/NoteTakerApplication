const express = require('express');
const mongoose = require('mongoose');
const Note = require('../model/notesSchema');

const home = express.Router();

home.get('/note',async(req,res)=>{
    console.log(note)
    // console.log(req.body);
try{
const note = await Note.find({});

    res.status(200).send(note)
}catch(e){
    res.status(400).send({"error" : "error while adding data"})
}
}  
)
home.get('/notee/:key', async (req, res) => {
    let result = await Note.find(
        {
            "$or": [
                {title: {$regex:req.params.key } },      
            ]
            }
    )
    res.send(result)
   
})
module.exports= home;
