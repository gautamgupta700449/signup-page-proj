const express = require("express");
const app = express();
const mysql = require("mysql");
const cors = require("cors");

app.use(express.json());
app.use(cors());

app.listen(3002, () => {
  console.log("server is running on port 3307");
});

// create our dataBase

const db = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "",
  database: "signup",
  port:3307
});
db.connect((err) => {
  if (err) {
    console.log(err);
    return;
  }
  console.log("successfully connected");
});

//Create a router to the server that will register a user

app.post("/register", (req, res) => {
  const sentName = req.body.Name;
  const sentEmail = req.body.Email;
  const sentPassword = req.body.Password;

  //create SQL Statement to insert the user to the DataBase Table user
  const SQL = "INSERT INTO user (name, email, password) VALUES (?,?,?)";

  // We are goint to enter these values through a variable
  const Values = [sentName, sentEmail, sentPassword];

  //Query to execute the sq statement above
  db.query(SQL, Values, (err, results) => {
    if (err) {
      res.send(err);
    } else {
      console.log("User insert successfully");
      res.send({ message: "User added!" });
    }
  });
});

//lets create another router
app.post("/login", (req, res) => {
  const sendLoginUserName = req.body.LoginUserName;
  const sendLoginPassword = req.body.LoginPassword;

  //create SQL Statement to insert the user to the DataBase Table user
  const SQL = "SELECT * FROM user WHERE username = ? && password = ?";

  // We are goint to enter these values through a variable
  const Values = [sendLoginUserName, sendLoginPassword];
  if (err) {
    res.send({ error: err });
  }
  if (results.length > 0) {
    res.send(results);
  } else {
    res.send({ message: "Credentials Don't match!" });
    //This should be good, lets try to
  }
});
