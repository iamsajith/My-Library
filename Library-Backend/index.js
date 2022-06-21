const express = require("express");
const cors = require("cors");
const credentials = require("./credentials");
const bookData = require("./book");
const jwt = require("jsonwebtoken");

const app = new express();
app.use(cors());
app.use(express.json({ urlencoded: true }));

// Authentication&Authorization Part

app.get("/", (req, res) => {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Method:GET,POST,PUT,DELETE");
  credentials.find().then((user) => {});
  res.send(user);
});

app.post("/signup", (req, res) => {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Method:GET,POST,PUT,DELETE");
  var userCred = {
    username: req.body.username,
    email: req.body.email,
    regid: req.body.regid,
    password: req.body.password,
  };
  var userdb = new credentials(userCred);
  userdb.save();
  res.send();
});

app.post("/login", (req, res) => {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Method:GET,POST,PUT,DELETE");
  credentials
    .find({ username: req.body.username, password: req.body.password })
    .then((user) => {
      let payload = { subject: user.email + user.password };
      let token = jwt.sign(payload, "secretKey");
      res.status(200).send({ token });
    });
});

// Book Database CRUD Operations
app.get("/book", (req, res) => {
  bookData.find({}, { _id: 0 }).then((data) => {
    res.send(data);
  });
});
app.post("/add", (req, res) => {
  var bookInfo = {
    author: req.body.author,
    bookname: req.body.bookname,
    imgUrl: req.body.imgUrl,
    synopsis: req.body.synopsis,
  };
  console.log(bookInfo);
  var bookdb = new bookData(bookInfo);
  bookdb.save();

  res.send();
});

app.listen(5000, () => {
  console.log("Running on 5000");
});
