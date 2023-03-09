const express=require('express')
const User_data=require('../models/user')
const add_to_cart=express.Router()

add_to_cart.post('/addToCart/:username', async(req,res)=>{

    const {Product}=req.body;
    const {username}=req.params;

    

   User_data.find({username:username}, async(err,data)=>{
    if(err)
    {
        console.log(err)
    }
    else{
        // console.log(data)
        let arr=[]
        data[0]?.user_cart?.map((ele)=>arr.push(ele));
        arr.push(Product);
        await User_data.updateOne({username:username},{user_cart:arr})
        arr=[];
    }
   })
})

module.exports=add_to_cart