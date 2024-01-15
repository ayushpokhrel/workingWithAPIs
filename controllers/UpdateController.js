const usermodel = require("../models/userModel");

const UpdateController= async(req,res)=>{
    const{userName,roll,email}=req.body;
    const {upid}=req.params;
    try{
        const update=await usermodel.findOneAndUpdate(upid,{ userName,roll,email}) 
        if(update){
            console.log('user updated',userName);
            res.send(` ${userName} user successfully updated`)
        }
        else{
            console.log('error updating user')
        }
    }
    catch(err){
        console.log(err)
    }
  

}
module.exports=UpdateController