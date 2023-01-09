# How to set up a node server
---
1. `npm init` (npm init -y) skips the setup step
- this initializes your server to accept packages, creates a package.json file
- tracks every package you install
---
2. `npm install express` (npm i express) short for install
- creates package-lock.jason file & node_modules folder
- or install whatever package
- install multiple by putting a space between them
3.  `const express =  require("express")`
    `const app = express()`
    `const PORT = 3000`

    `app.listen(PORT, console.log(`listening on port: ${PORT}`))`
- defines packages as variables
4. ```app.get("/",(req,res)=>{
    res.send("howdy")
    })
    ```
- CRUD - create read update destroy
- `app.post()` create, `app.get()` read, `app.put()` update, `app.delete()` delete
- makes routes using these HTTP methods
