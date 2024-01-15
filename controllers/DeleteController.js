const usermodel = require("../models/userModel");

const DeleteController= async (req,res)=>{
    const {userName}=req.params;
   try{
    const deleteUser= await usermodel.findOneAndDelete({userName});
    if(deleteUser){
        res.send(`${userName} deleted successfully`)
    }
    else{
        res.send('error')
    }
   }
   catch(err){
    console.log(`${err} occured`)
   }
}

module.exports=DeleteController;