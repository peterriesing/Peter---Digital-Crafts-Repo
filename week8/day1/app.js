// require packages
const express =  require("express")
const app = express()
const PORT = 3000
// open ports range 3000 - 3099

// make routes
app.get("/",(req,res,)=>{
    res.send("howdy")
})
app.get("/dexter",(req,res,)=>{
    res.status(404).send("not found")
})
// CRUD - create read update destroy

const dogs = [
    {dog: "Black Lab", hair: "Short Hair"},
    {dog: "Poodle", hair: "Curly"}
]
// create
app.post("/dogs",(res,req)=>{
    req.send(dogs)
})
// read
app.get("/dogs",(res,req)=>{
    req.send(dogs)
})
// update
app.put("/dogs",(res,req)=>{
    req.send(dogs)
})
// destroy
app.delete("/dogs",(res,req)=>{
    req.send(dogs)
})
// listen for requests 
app.listen(PORT, console.log(`listening on port: ${PORT}`))