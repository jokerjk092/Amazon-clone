const express=require('express')
const mongoose=require('mongoose')
const User_data=require('../models/user')
const CreateUserRouter=express.Router()

CreateUserRouter.post('/create_user', async (req,res)=>{
    console.log('user created')
    const {new_username,new_password,new_name,new_address}=req.body;

    let arr=[];
    console.log(new_username)
    User_data.create({
        username:new_username,
        password:new_password,
        name:new_name,
        address:new_address,
        chat:arr
    },function (err, allDetails) {
        if (err) {
            console.log(err);
        } else if(allDetails.length==0) {
         
            res.send( {success:false} )
        }
        else{
            
            res.send({success:true})
        }
    })


})
module.exports=CreateUserRouter;