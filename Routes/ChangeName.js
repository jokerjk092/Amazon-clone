const express=require('express')
const User_data=require('../models/user')
const change_name=express.Router()

change_name.post('/changeName/:username/:name', async(req,res)=>{

    
    const {username,name}=req.params;

    

   User_data.find({username:username}, async(err,data)=>{
    if(err)
    {
        console.log(err)
    }
    else{
       
      
        await User_data.updateOne({username:username},{name:name})
       
    }
   })
})

module.exports=change_name