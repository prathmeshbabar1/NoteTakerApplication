const express = require('express');
const mongoose = require('mongoose');
const Note = require('../model/notesSchema');

const noteRouter = express.Router();

noteRouter.post('/add',async(req,res)=>{
    const {title,description} = req.body
    console.log(req.body);
try{
const note = await Note.create({title:title,description:description});

    res.status(200).send(note)
}catch(e){
    res.status(400).send("error while adding data")
}
}  
)
noteRouter.delete('/delete',async(req,res) =>{
    const id = req.body.id;
    try{
        const deletednote = await Note.deleteOne({_id:id});
    
        res.send(deletednote)
    }catch(e){
        console.log(e);
        res.send(e);
    }
})
noteRouter.put('/update',async(req,res) =>{
    const {id,title,description} = req.body
console.log(id);
    try{
        const updatednote = await Note.updateOne({_id:id},{title:title,description:description});
    console.log(updatednote);
        res.send(updatednote)
    }catch(e){
        console.log(e);
        res.send(e);
    }
})

module.exports = noteRouter