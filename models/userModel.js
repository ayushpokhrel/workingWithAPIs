const mongoose=require('mongoose')
const userSchema=new mongoose.Schema({
    userName:{
        type:String,
        required:true
    },
    roll:{
        type:Number,
        required:true
    },
    email:{
        type:String,
        required:true
    }
})
 const usermodel= mongoose.model('usermodel',userSchema)
 
 module.exports=usermodel