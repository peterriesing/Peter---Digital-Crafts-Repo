const express = require('express')
const bcrypt = require('bcrypt')
const {Users} = require("../models")
const router = express.Router()


//=============    USERS    ============
// create user with hash password
router.post("/create_user", (req,res)=>{
    const {username,password} = req.body
    bcrypt.hash(password,10,async(err,hash)=>{
        console.log(err)
        console.log(hash)
        const user = await Users.create({
            username: username,
            password: hash,
            createdAT: new Date(),
            updatedAt: new Date()
        })
        res.send(user)
    })
})
// login by comparing password from db
router.post("/login_user", async (req,res)=>{
    const {username,password} = req.body
    const user = await Users.findOne({
        where:{
            username: username
        }
    })
    bcrypt.compare(password,user.password,(err,result)=>{
        console.log(err)
        console.log(result)
        if(err){
            res.send(err)
            return
        }if(!result){
            res.status(401).send("your password does not match")
            return
        }
        
    res.status(200).send("password match")
    })
})

module.exports = router