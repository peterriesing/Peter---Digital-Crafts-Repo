const express = require("express");
const bcrypt = require("bcrypt");
const router = express.Router();
const { Users } = require("../models");

router.get("/login", (req, res) => {
  res.render("pages/login");
});

router.get("/create_user", (req, res) => {
  res.render("pages/create");
});

router.post("/login", async (req, res) => {
  const { userName, password } = req.body;
  const user = await Users.findOne({
    where: {
      userName: userName,
    },
  });
  bcrypt.compare(password, user.password, (err, result) => {
    if (result) {
      res.render("pages/account", { user: user });
      return;
    } else {
      res
        .status(403)
        .send(
          "That user is not a valid user.  Please check your password and username"
        );
    }
  });
  // get username and password\
  // compare with bcrypt
  // if it's valid, res.redirect or render to accountpage
});

router.post("/create_user", (req, res) => {
  const { firstName, lastName, userName, password } = req.body;
  bcrypt.hash(password, 10, async (err, hash) => {
    const user = await Users.create({
      firstName: firstName,
      lastName: lastName,
      userName: userName,
      password: hash,
      createdAT: new Date(),
      updatedAt: new Date(),
    });
    res.status(200).render("pages/login");
  });
});

module.exports = router;
