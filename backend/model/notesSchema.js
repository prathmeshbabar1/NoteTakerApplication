const mongoose = require('mongoose');

const noteSchema = new mongoose.Schema({
    title:{
        type:String,
        required:true,
        
    },
    description:{
        type:String,
        required:true,
    },
    
})

const noteModel = mongoose.model('notedata',noteSchema);

module.exports = noteModel;