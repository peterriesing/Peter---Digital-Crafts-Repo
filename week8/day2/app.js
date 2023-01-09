const express =  require("express")
const cowsay = require("cowsay")
const app = express()
const PORT = 3001
app.use(express.json());

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


app.listen(PORT, console.log(`listening on port: ${PORT}`))
