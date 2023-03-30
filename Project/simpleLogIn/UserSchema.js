const mongoose = require('mongoose'); // Erase if already required

// Declare the Schema of the Mongo model
var little = new mongoose.Schema({
    username:{
        type:String,
        required:true,
    
        
    },
    password:{
        type:String,
        required:true,
    }, 
});

const User = mongoose.model("users", little);

//Export the model
module.exports = User 