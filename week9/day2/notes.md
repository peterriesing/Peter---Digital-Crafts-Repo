# .env
stores hidden information like api keys and passcodes

`npm i dotenv`
.env file creation and modification requires that you fully stop and restart the server

top line of index.js
`require('dotenv').config()`

run(console.log()) `process.env` to see .env documentation

access the variables in the .env files by `process.env.VARIABLE_NAME`

==========================================================

# Credentials

make a file called creds.js (filename not important)
`const Pool = require("pg").Pool` - connection pool
```
const creds = new Pool({
    host: "localhost",
    port: 5432,
    database: "todolist",
    user: "postgres",
    password: process.env.PASSWORD
})
```
This fills out the fields on the Beekeeper database connection

`module.exports = creds` - allow access to the creds variable

in the index.js file:
`const creds = require("./creds")`

==========================================================

# Routes

```
app.post("/create_todo", (req, res) => {
    creds.connect((err, client, release) => {
      // check for the error
        if (err) {
        return console.error(err.stack);
        }
        client.query(
        "INSERT INTO grocerylist (task) VALUES ('pick up some bread');",
        (err, result) => {
            release();
            if (err) {
            res.status(400).send(err.stack);
            } else {
            res.status(200).send(result);
            }
        }
        );
    });
});
```
### CRUD

# Create
POST localhost:###/#### 
Body > Raw > Key
```
`INSERT INTO grocerylist (task) VALUES ($1)`,[req.body.task],
```
# Read

```
res.status(200).send(result.rows)
```

# Update

```
`UPDATE grocerylist SET task = $1 WHERE id = $2`,[req.body.task, req.body.id],
```

# Delete

```
`DELETE FROM grocerylist WHERE id = $1`,[req.body.id],
```