const express = require("express");
const app = express();
const PORT = 3012;
const login = require("./routes/login");
const bodyParser = require("body-parser");

app.use(express.json());

app.set("view engine", "ejs");
app.use(
  bodyParser.urlencoded({
    extended: true,
  })
);
app.use(bodyParser.json());
app.use(express.static(__dirname + "/public"));
app.use("/user", login);

app.listen(PORT, console.log(`listening on port: ${PORT}`));
