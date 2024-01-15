const usermodel=require('../models/userModel')


const RegisterController=async (req,res)=>{
    const {userName,roll,email} = req.body;
    const user=await usermodel.findOne({roll})
    if(user){ console.log('user already exists')
res.send('user already exists')}
    else{
        console.log('user added');
        res.send('user added')
    
    usermodel.create({userName,roll,email})
    }
}
module.exports=RegisterController