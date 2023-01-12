const express = require("express")
const app = express()
const PORT = 3003
const data = require("./data")

// MIDDLEWARE
app.use(express.static(__dirname + "/public"))
app.set("view engine", "ejs")
// MIDDLEWARE

const accountBalance = {
    amount: "$123,233,322,000.09",
}
const pending = {
amount: "$46,788.21",
}
const processedData = {
amount: "$657,441.22",
}

app.get("/dashboard", (req, res) => {
    res.render("pages/index",{
        data: data,
        accountBalance: accountBalance,
        pending: pending,
        processedData: processedData
    })
});



app.listen(PORT, console.log(`listening on port ${PORT}`))