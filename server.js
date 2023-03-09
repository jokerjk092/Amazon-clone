const express=require('express');
const bodyparser = require('body-parser')
const mongoose=require('mongoose')
const axios=require('axios')
const cors=require('cors')
const path=require('path');
const user=require('./models/user')



const app=express()
app.use(cors());
app.use(express.static(path.join(__dirname+"/public")))

app.use(bodyparser.urlencoded({extended:true}));
const http=require('http').Server(app);
const port=process.env.PORT||5000;



const URI="mongodb+srv://admin-sumit:sumit123@cluster0.jgi5fgx.mongodb.net/Amazon_db?retryWrites=true&w=majority"
mongoose.set("strictQuery", false);
const mongoD=async()=>{

        await mongoose.connect(URI,{useNewUrlParser:true},async(err,result)=>{
            if(err) console.log(err)
            else
            console.log('success')
        })
}
mongoD();
app.use(express.json())
app.use("/api",require('./Routes/CreateUser'))
app.use("/api",require('./Routes/UniqueUsername'))
app.use("/api",require('./Routes/Getuser'))
app.use("/api",require('./Routes/GetUserData'))
app.use("/api",require('./Routes/AddToCart'))
app.use("/api",require('./Routes/RemoveFromCart'))
app.use("/api",require('./Routes/ChangePassword'))
app.use("/api",require('./Routes/ChangeName'))
app.use("/api",require('./Routes/ChangeAddress'))


app.get('/',(req,res)=>{
    res.send('hello');
})

http.listen(port,()=>console.log('success'))














