const express=require('express')
const User_data=require('../models/user')
const change_address=express.Router()

change_address.post('/changeAddress/:username/:address', async(req,res)=>{

    
    const {username,address}=req.params;

    

   User_data.find({username:username}, async(err,data)=>{
    if(err)
    {
        console.log(err)
    }
    else{
       
      
        await User_data.updateOne({username:username},{address:address})
       
    }
   })
})

module.exports=change_address