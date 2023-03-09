const express=require('express')
const mongoose=require('mongoose')
const User_data=require('../models/user')
const get_user=express.Router()

get_user.get('/getUser/:Username_input/:Password_input',(req,res)=>{

    const {Username_input,Password_input}=req.params;

    User_data.find({username:Username_input,password:Password_input},(err,data)=>{
        if(err)
        console.log(err);
        else if(data.length!=0)
    {res.send({success:true});
// console.log(data)
    }
        else
        res.send({success:false})
    })

})
module.exports=get_user;