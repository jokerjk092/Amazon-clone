const express=require('express')
const mongoose=require('mongoose')
const User_data=require('../models/user')
const get_user_data=express.Router()

get_user_data.get('/Get_user_data/:id', (req,res)=>{

    const {id}=req.params;

    User_data.find({username:id}, (err,data)=>{

        if(err)
        console.log(err);
        else
        res.send(data)
    })

})

module.exports=get_user_data;