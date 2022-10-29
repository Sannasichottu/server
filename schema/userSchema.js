const mongoose = require("mongoose");


//schema- creation
const userSchema = new mongoose.Schema ({
    firstname:{
        type : String,
        required : true,
        trim : true,
    },
    lastname : {
        type:String,
        trim:true,
    },
    phone : {
        type: Number,
        required : true,
        unique : true,
    },
    email : {
        type:String,
        required : true,
        trim : true
    }
});

//model creation
module.exports = mongoose.model("contact-info",userSchema);