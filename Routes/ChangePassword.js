const express=require('express')
const User_data=require('../models/user')
const change_password=express.Router()

change_password.post('/changePassword/:username/:passkey', async(req,res)=>{

    
    const {username,passkey}=req.params;

    

   User_data.find({username:username}, async(err,data)=>{
    if(err)
    {
        console.log(err)
    }
    else{
       
      
        await User_data.updateOne({username:username},{password:passkey})
       
    }
   })
})

module.exports=change_password