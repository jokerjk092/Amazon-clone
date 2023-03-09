const express=require('express')
const mongoose=require('mongoose')
const User_data=require('../models/user')

const getUser=express.Router()

getUser.get("/unique_username/:value",async (req,res)=>{
    const {value}=req.params;
    User_data.find({username:value}, function (err, allDetails) {
        if (err) {
            console.log(err);
        } else if(allDetails.length==0) {
            // console.log("called true");
            res.send( {success:true} )
        }
        else{
            // console.log("called false");
            res.send({success:false})
        }
        
    })




})

module.exports=getUser