const mongoose = require('mongoose');
const { Schema } = mongoose;

const userSchema = new Schema({
    fullName : {type : String, required : true},
    email : {type : String,unique : true, required : true},
    password : {type : String, required : true},
   orders : [
       {
           type : mongoose.Types.ObjectId,
           ref : "Order",
           default : []
       }
   ]
});

userSchema.static('findByTitle', function (title) {
    return this.find({ title });
});


const User = mongoose.model('User', userSchema);


module.exports = User;