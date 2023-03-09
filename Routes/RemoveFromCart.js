const express=require('express')
const User_data=require('../models/user')
const remove_from_cart=express.Router()

remove_from_cart.post('/removeFromCart/:username', async(req,res)=>{

    const {asin}=req.body;
    const {username}=req.params;

    

   User_data.find({username:username}, async(err,data)=>{
    if(err)
    {
        console.log(err)
    }
    else{
        // console.log(data)
        let arr=[]
        arr=data[0]?.user_cart?.filter(item => item.asin !== asin)
        await User_data.updateOne({username:username},{user_cart:arr})
        arr=[];
    }
   })
})

module.exports=remove_from_cart