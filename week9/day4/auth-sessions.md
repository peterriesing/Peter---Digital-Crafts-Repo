# Authentication

### Methods to store passwords securely

- Dont store passwords in plain text
- encrypted text
- as a hash

Hashing converts input into something else. You cannot de-hash something. The only way to authenticate is if the same(correct) password is entered.

`npm i bcrypt`

- bcrypt uses callbacks and not promises

`const bcrypt = require('bcrypt')`

# Router

## MVC model

model > view > controller
db table/route.js > html css > index.js

---

index.js

- require express
- app = express()
- port = ###
- route = require("route path")
- app.use(express.json())
- app.use("/route", route)
- app.listen(port)

route.js

- require express
- const {model} = require("model path")
- const router = express.Router()
- other required modules({Op},bycrypt)
-
- router.get/post/put/delete
-
- module.exports = router

# Sessions
