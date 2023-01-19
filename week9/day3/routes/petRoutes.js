const express = require('express')
const {Pets,Owners} = require("../models")
const { Op } = require("sequelize")
const router = express.Router()


router.get("/get_pets", async (req,res)=>{
    const pets = await Pets.findAll()
    res.send(pets)
})

router.get("/get_owners", async (req,res)=>{
    const owners = await Owners.findAll()
    res.send(owners)
})

router.get("/get_penny", async (req,res)=>{
    const penny = await Pets.findOne({
        where:{
            name:"Penny"
        }
    })
    res.send(penny)
})

router.get("/get_petsID", async (req,res)=>{
    const petsID = await Pets.findAll({
        where:{
            id: {
                [Op.gte]: 2,
                [Op.lte]: 4
            }
        }
    })
    res.send(petsID)
})

module.exports = router