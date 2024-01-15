const express=require('express')
const RegisterController = require('../controllers/RegisterController')
const UpdateController = require('../controllers/UpdateController')
const DeleteController = require('../controllers/DeleteController')
const Router=express.Router()

Router.post('/register',RegisterController)
Router.put('/update/:roll',UpdateController)
Router.delete('/delete/:roll',DeleteController)

module.exports=Router