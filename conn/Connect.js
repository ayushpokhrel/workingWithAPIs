const mongoose=require('mongoose')
const connection=()=>{
   try {
    mongoose.connect(process.env.URL)
    console.log('database connected')
    
   } catch (error) {
    console.log(`error occured ${error}`)
   }
}
module.exports=connection();