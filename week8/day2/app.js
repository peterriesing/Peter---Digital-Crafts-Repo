const express =  require("express")
const cowsay = require("cowsay")
const app = express()
const PORT = 3001
app.use(express.json());
const savedUsers = []

app.get("/cowThink", (req, res) => {
    res.send(
        console.log(
            cowsay.think({
            text: "Mooro",
            e: "><",
            T: "U "
            })
        )
    )
})

app.get("/cowSay", (req, res) => {
    res.send(
        console.log(
            cowsay.say({
            text: "I love grass",
            e: "--",
            T: "U "
            })
        )
    )
})

app.post("/cowMessage", (req,res)=>{
    res.send(
        console.log(
            cowsay.think({
            text: `${req.body.message}`,
            e: "><",
            T: "U "
            })
        )
    )
})
// ============ DAY2 =============
app.get("/user/:id", (req,res) =>{
    const users = [
        {name: "Peter", id:1},
        {name: "Joe", id:2},
        {name: "Ethan", id:3},
        {name: "Corey", id:4},]
    const userFound = users.find(
        (user) => user.id === Number(req.params.id)
    )
    savedUsers.push(req.body)
    res.send(
        `User: ${userFound.name} ID: ${userFound.id}`
    )
})

app.post("/create_user", (req,res)=>{
    const newUser = req.body
    savedUsers.push(newUser)
    console.log(savedUsers)
    res.send(`new user: ${newUser.name} userID: ${newUser.id}`)
})

app.get("/read_user", (req,res)=>{
    res.send(savedUsers)
})

app.put("/update_user/:id", (req,res)=>{
    const indexofUserDelete = savedUsers.findIndex((user) => user.id === Number(req.params.id))
    savedUsers.splice(indexofUserDelete,1,req.body)
    res.send(savedUsers)
})

app.delete("/delete_user/:id", (req,res)=>{
    const indexofUserDelete = savedUsers.findIndex((user) => user.id === Number(req.params.id))
    savedUsers.splice(indexofUserDelete,1)
    res.send(savedUsers)
})

app.delete("/delete_all_users", (req,res)=>{
    savedUsers.length = 0
    res.send(savedUsers)
})


// write 5 routes
// create user - post
// read users - get
// update user/:id - put
// - users is updated
// delete user/:id - delete
// - users id delete
// delete users - delete
// - all users deleted

app.listen(PORT, console.log(`listening on port: ${PORT}`))
