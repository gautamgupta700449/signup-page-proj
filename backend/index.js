const express = require("express");
const app = express();
const mysql = require("mysql");
const cors = require("cors");

app.use(express.json());
app.use(cors());

app.listen(3002, () => {
  console.log("server is running on port 3002");
});

// create our dataBase

const db = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "",
  database: "admin",
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
  const sentUserName = req.body.Username;
  const sentEmail = req.body.Email;
  const sentPassword = req.body.Password;

  //create SQL Statement to insert the user to the DataBase Table user
  const SQL = "INSERT INTO Users (username, email, password) VALUES (?,?,?)";

  // We are goint to enter these values through a variable
  const Values = [sentUserName, sentEmail, sentPassword];

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
// app.post("/login", (req, res) => {
//   const sendLoginUserName = req.body.LoginUserName;
//   const sendLoginPassword = req.body.LoginPassword;

//   //create SQL Statement to insert the user to the DataBase Table user
//   const SQL = "SELECT * FROM Users WHERE username = ? && password = ?";

//   // We are goint to enter these values through a variable
//   const Values = [sendLoginUserName, sendLoginPassword];
//   if (err) {
//     res.send({ error: err });
//   }
//   if (results.length > 0) {
//     res.send(results);
//   } else {
//     res.send({ message: "Credentials Don't match!" });
//     //This should be good, lets try to
//   }
// });


//lets create another router
app.post("/login", (req, res) => {
  const sentLoginUserName = req.body.LoginUserName;
  const sentLoginPassword = req.body.LoginPassword;

  //create SQL Statement to retrieve the user from the DataBase Table user
  const SQL = "SELECT * FROM Users WHERE username = ? AND password = ?";

  // We are going to enter these values through a variable
  const Values = [sentLoginUserName, sentLoginPassword];

  // Query to execute the SQL statement
  db.query(SQL, Values, (err, results) => {
    if (err) {
      res.send({ error: err }); // Sending error response if query encounters an error
    } else {
      if (results.length > 0) {
        res.send(results); // Sending user data if user is found
      } else {
        res.send({ message: "Credentials Don't match!" }); // Sending error message if no user found
      }
    }
  });
});
