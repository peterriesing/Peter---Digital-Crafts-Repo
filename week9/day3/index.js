const express = require("express")
const app = express()
const {Clinics,Employees,Patients} = require("./models")
const { Op } = require("sequelize")
const PORT = 3009

app.use(express.json())

app.get("/get_pets", async (req,res)=>{
    const pets = await Pets.findAll()
    res.send(pets)
})

app.get("/get_owners", async (req,res)=>{
    const owners = await Owners.findAll()
    res.send(owners)
})

app.get("/get_penny", async (req,res)=>{
    const penny = await Pets.findOne({
        where:{
            name:"Penny"
        }
    })
    res.send(penny)
})

app.get("/get_petsID", async (req,res)=>{
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
//==================CLINICS======================
app.post("/create_clinic", async (req,res)=>{
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

app.get("/get_clinics", async (req,res)=>{
    const clinics = await Clinics.findAll()
    res.send(clinics)
})

app.get("/get_clinic", async (req,res)=>{
    const clinic = await Clinics.findOne({
        where:{
            id: req.body.id
        }
    })
    res.send(clinic)
})

app.put("/update_clinic", async (req,res)=>{
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

app.delete("/delete_clinic_by_id", async (req,res)=>{
    const clinic = await Clinics.destroy({
        where:{
            id: req.body.id
        }
    })
    res.send(`DELETED CLINIC WITH ID:${req.body.id}`)
})

//==================EMPLOYEES======================
app.post("/create_employee", async (req,res)=>{
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

app.get("/get_employees", async (req,res)=>{
    const employees = await Employees.findAll()
    res.send(employees)
})

app.get("/get_employee", async (req,res)=>{
    const employee = await Employees.findOne({
        where:{
            id: req.body.id
        }
    })
    res.send(employee)
})

app.put("/update_employee", async (req,res)=>{
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

app.delete("/delete_employee_by_id", async (req,res)=>{
    const employee = await Employees.destroy({
        where:{
            id: req.body.id
        }
    })
    res.send(`DELETED EMPLOYEE WITH ID:${req.body.id}`)
})

//==================PATIENTS======================
app.post("/create_patient", async (req,res)=>{
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

app.get("/get_patients", async (req,res)=>{
    const patients = await Patients.findAll()
    res.send(patients)
})

app.get("/get_patient", async (req,res)=>{
    const patient = await Patients.findOne({
        where:{
            id: req.body.id
        }
    })
    res.send(patient)
})

app.put("/update_patient", async (req,res)=>{
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

app.delete("/delete_patient_by_id", async (req,res)=>{
    const patient = await Patients.destroy({
        where:{
            id: req.body.id
        }
    })
    res.send(`DELETED PATIENT WITH ID:${req.body.id}`)
})


app.listen(PORT, console.log(`listening on port: ${PORT}`))