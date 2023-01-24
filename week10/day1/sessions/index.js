const express = require("express");
const app = express();
const PORT = 3009;
const session = require("express-session");
const cookieParser = require("cookie-parser");
const bodyParser = require("body-parser");
const { Customers } = require("./sequelize/models");
const models = require("./sequelize/models");

// Middleware
app.use(express.json());
// configure the app to use bodyParser()
app.use(
  bodyParser.urlencoded({
    extended: true,
  })
);

app.use(bodyParser.json());
app.use(cookieParser());
const sequelizeStore = require("connect-session-sequelize")(session.Store);
const store = new sequelizeStore({ db: models.sequelize });
app.use(
  session({
    secret: "secret",
    resave: false,
    saveUninitialized: true,
    store: store,
  })
);
store.sync();
app.set("view engine", "ejs");
//session authenitication function
const authenticate = (req, res, next) => {
  if (req.session.user) {
    next();
  } else if (req.path === "/login") {
    next();
  } else {
    res.redirect("/login");
  }
};
// Middleware

app.get("/login", (req, res) => {
  console.log(req.session);
  res.render("pages/login");
});

app.get("/account", authenticate, (req, res) => {
  console.log(req.session);
  res.render("pages/account", {
    user: { username: req.session.user.username },
  });
});

app.post("/logout", (req, res) => {
  if (req.session) {
    req.session.destroy();
    res.send("logged out");
  }
});

app.post("/login", async (req, res) => {
  const { username, password } = req.body;
  const user = await Customers.findOne({
    where: {
      username: username,
    },
  });
  console.log(user);
  if (!user) {
    res.send(400).send("no user witht that name exists");
    return;
  }
  if (user.password === req.body.password) {
    // this is where we will start a session
    req.session.user = user.datavalues;
    res.redirect("/account");
    return;
  } else {
    res.status(400).send("Incorrect password.");
  }
});

app.listen(PORT, console.log(`Listening on port ${PORT}`));
