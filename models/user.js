const mongoose=require('mongoose');

const User_data=new mongoose.Schema({
username:String,
password:String,
name:String,
address:String,
user_cart:Array,
});

module.exports=mongoose.model('User_data',User_data)








