const express = require("express");
const cors = require("cors");
const credentials = require("./credentials");
const jwt = require("jsonwebtoken");

const app = new express();
app.use(cors());
app.use(express.json({ urlencoded: true }));

app.get("/", (req, res) => {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Method:GET,POST,PUT,DELETE");
  credentials.find().then((user) => {
    console.log(user);
  });
  res.send(user);
});

app.post("/signup", (req, res) => {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Method:GET,POST,PUT,DELETE");
  console.log(req.body.username);
  var userCred = {
    username: req.body.username,
    email: req.body.email,
    regid: req.body.regid,
    password: req.body.password,
  };
  var userdb = new credentials(userCred);
  userdb.save();
  console.log(userCred);
  res.send();
});

app.post("/login", (req, res) => {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Method:GET,POST,PUT,DELETE");
  console.log(req.body);
  credentials
    .find({ username: req.body.username, password: req.body.password })
    .then((user) => {
      console.log(user);
      let payload = { subject: user.email + user.password };
      let token = jwt.sign(payload, "secretKey");
      console.log(token);
      res.status(200).send({ token });
    });
});

app.listen(5000, () => {
  console.log("Running on 5000");
});
