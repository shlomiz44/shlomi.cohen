const sql = require("./db.js");
const express = require ("express");
const bodyParser = require ("body-parser");
const app = express();


// parse requests of content- type: application/json
app.use (bodyParser.json());
//parse requests of content type: application/x www form urlencoded
app.use(bodyParser.urlencoded({ extended: true
}));
//simple route
app.get("/", (req, res) => {
res.json ({ message:"Welcome to web course example application." });
});

// Create a route for getting all users
app.get("/users",  function(req, res){
    sql.query("SELECT * FROM users", (err, mysqlres) => {
    if(err) {
    console.log("error: ",err);
    res.status(400).send({message:"error in getting all users: " + err})
    return;
    }
    console.log("got all users...");
    res.send(mysqlres);
    return;
    });
    });


// set port, listen for requests
app.listen (3000,() => {
console.log ("Server is running on port 3000");
});