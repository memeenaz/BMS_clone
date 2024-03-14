const router = require('express').Router()
const User = require('../models/userModel')

router.post('/register', async (req , res)=>{
    try {
    const user=req.body

    const userExist= await User.findOne({email: user.email})

    if(userExist){
        return res.send({
            success:false,
            message:'User already exist'
        })
    }
    const newUser = new User(user)
    newUser.save() 

    res.send({
        success:true,
        message:'User Successfully Registered'
    })
        
    } catch (error) {
        console.log(error)
        res.send({
            success:false,
            message:'Internal Server Error'
        })
    }
    

})
exports.router=router 