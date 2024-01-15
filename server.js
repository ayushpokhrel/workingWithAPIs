const express=require('express')
const env=require('dotenv');
env.config()
const app=express()
const port=2000
app.use(express.json())
require('./conn/Connect')
const userRoute=require('./routes/userRoute')



app.get('/',(req,res)=>{
    res.send("hello")
})
app.use('/api/v1/user',userRoute)


app.listen(process.env.PORT || port,()=>{
    console.log(`App listening on port ${process.env.PORT || port}`);
})