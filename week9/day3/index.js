const express = require("express")
const app = express()
const PORT = 3009
const petRoutes = require('./routes/petRoutes')
const clinicRoutes = require('./routes/clinicRoutes')
const authRoutes = require('./routes/authRoutes')

app.use(express.json())
app.use("/pets", petRoutes)
app.use("/clinics", clinicRoutes)
app.use("/auth", authRoutes)

app.listen(PORT, console.log(`listening on port: ${PORT}`))