require('dotenv').config()
const express = require("express")
const creds = require("./creds")
const app = express()
const PORT = 3000
// const document = {"/todo.ejs"}
// console.log(document)
// const check = document.querySelector(".check")

app.use(express.json())
app.set("view engine", "ejs")

app.get("/todo_list", (req,res)=>{
    creds.connect((err, client, release) => {
        // check for the error
        if (err) {
        return console.error(err.stack)
        }
        client.query(
        `SELECT * FROM grocerylist`,
        (err, result) => {
            release()
            if (err) {
            res.status(400).send(err.stack)
            } else {
            res.render("todo",
            {result: result})
            }
        }
        )
    })
})

app.post("/create_todo", (req, res) => {
    creds.connect((err, client, release) => {
      // check for the error
        if (err) {
        return console.error(err.stack)
        }
        client.query(
        `INSERT INTO grocerylist (task) VALUES ($1)`,[req.body.task],
        (err, result) => {
            release()
            if (err) {
            res.status(400).send(err.stack)
            } else {
            res.status(200).send(result)
            }
        }
        )
    })
})

app.put("/modify_todo", (req,res)=>{
    creds.connect((err, client, release) => {
        // check for the error
        if (err) {
        return console.error(err.stack)
        }
        client.query(
        `UPDATE grocerylist SET task = $1 WHERE id = $2`,[req.body.task, req.body.id],
        (err, result) => {
            release()
            if (err) {
            res.status(400).send(err.stack)
            } else {
            res.status(200).send(result)
            }
        }
        )
    })
})

app.delete("/del_todo", (req,res)=>{
    creds.connect((err, client, release) => {
        // check for the error
        if (err) {
        return console.error(err.stack)
        }
        client.query(
        `DELETE FROM grocerylist WHERE id = $1`,[req.body.id],
        (err, result) => {
            release()
            if (err) {
            res.status(400).send(err.stack)
            } else {
            res.status(200).send(result)
            }
        }
        )
    })
})

app.post("/create_todos", (req, res) => {
    creds.connect((err, client, release) => {
      // check for the error
    if (err) {
        return console.error(err.stack);
    }
    req.body.forEach((task) => {
    client.query(
        `INSERT INTO grocerylist (task,notes,isCompleted) VALUES ($1,$2,$3);`,
        [task.task,task.notes,task.isCompleted],
        (err, result) => {
        if (err) {
            console.log(err);
        } else {
            console.log(`inserted ${result.rowCount} row.`)
        }
        }
    );
    });
    });
});

const checkTask = () =>{
    console.log("task completed")
}

//Create a view that lets you work with the tasks through a web page
// Adjust the is_completed patch endpoint to toggle the value instead of explicitly calling the new value in the body (you'll have to get the task's current value first)
// Change this to UPDATE column true/false

// Add optional notes column to a task (you'll have to update the tasks table schema)
// Don't allow duplicate tasks (give meaningful feedback to the user if they try to add a task that already exists)

// check.addEventListener("click", checkTask())

app.listen(PORT, console.log(`listening on port ${PORT}`))
