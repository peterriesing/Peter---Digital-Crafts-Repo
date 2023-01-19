const express = require('express')
const {Clinics,Employees,Patients} = require("../models")
const router = express.Router()

//==================CLINICS======================
router.post("/create_clinic", async (req,res)=>{
    const {clinicName,location,size} = req.body
    const clinic = await Clinics.create({
        clinicName,
        location,
        size,
        createdAt: new Date(),
        updatedAt: new Date()
        }
    )
    res.send(clinic)
})

router.get("/get_clinics", async (req,res)=>{
    const clinics = await Clinics.findAll()
    res.send(clinics)
})

router.get("/get_clinic", async (req,res)=>{
    const clinic = await Clinics.findOne({
        where:{
            id: req.body.id
        }
    })
    res.send(clinic)
})

router.put("/update_clinic", async (req,res)=>{
    const {clinicName,location,size} = req.body
    const clinic = await Clinics.update({
        clinicName,
        location,
        size,
        updatedAt: new Date()
        },{
            where:{
                id: req.body.id
            }
        })
    res.send(clinic)
})

router.delete("/delete_clinic_by_id", async (req,res)=>{
    const clinic = await Clinics.destroy({
        where:{
            id: req.body.id
        }
    })
    res.send(`DELETED CLINIC WITH ID:${req.body.id}`)
})

//==================EMPLOYEES======================
router.post("/create_employee", async (req,res)=>{
    const {firstName,lastName,clinicID} = req.body
    const employee = await Employees.create({
        firstName,
        lastName,
        clinicID,
        createdAt: new Date(),
        updatedAt: new Date()
        }
    )
    res.send(employee)
})

router.get("/get_employees", async (req,res)=>{
    const employees = await Employees.findAll()
    res.send(employees)
})

router.get("/get_employee", async (req,res)=>{
    const employee = await Employees.findOne({
        where:{
            id: req.body.id
        }
    })
    res.send(employee)
})

router.put("/update_employee", async (req,res)=>{
    const {firstName,lastName,clinicID} = req.body
    const employee = await Employees.update({
        firstName,
        lastName,
        clinicID,
        updatedAt: new Date()
        },{
            where:{
                id: req.body.id
            }
        })
    res.send(employee)
})

router.delete("/delete_employee_by_id", async (req,res)=>{
    const employee = await Employees.destroy({
        where:{
            id: req.body.id
        }
    })
    res.send(`DELETED EMPLOYEE WITH ID:${req.body.id}`)
})

//==================PATIENTS======================
router.post("/create_patient", async (req,res)=>{
    const {firstName,lastName,employeeAssignedID} = req.body
    const patient = await Patients.create({
        firstName,
        lastName,
        employeeAssignedID,
        createdAt: new Date(),
        updatedAt: new Date()
        }
    )
    res.send(patient)
})

router.get("/get_patients", async (req,res)=>{
    const patients = await Patients.findAll()
    res.send(patients)
})

router.get("/get_patient", async (req,res)=>{
    const patient = await Patients.findOne({
        where:{
            id: req.body.id
        }
    })
    res.send(patient)
})

router.put("/update_patient", async (req,res)=>{
    const {firstName,lastName,employeeAssignedID} = req.body
    const patient = await Patients.update({
        firstName,
        lastName,
        employeeAssignedID,
        updatedAt: new Date()
        },{
            where:{
                id: req.body.id
            }
        })
    res.send(patient)
})

router.delete("/delete_patient_by_id", async (req,res)=>{
    const patient = await Patients.destroy({
        where:{
            id: req.body.id
        }
    })
    res.send(`DELETED PATIENT WITH ID:${req.body.id}`)
})

module.exports = router