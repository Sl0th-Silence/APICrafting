//Environment imports
const express = require("express"); //Express
const server = express(); //Server

//General Variables
let port = 3000;

//Paths
var paths = {
    home: "home",
    info: "info",
    contact: "contact"
};
//Array of people objects
var people = [
    {id: 1, name: "Phil"},
    {id: 2, name: "Joe"},
    {id: 3, name: "Sally"}
];

// Middleware


//Server Paths
server.get( '/', (request, response) => {
    response.send("Welcome holmes!");
});

server.get('/people', (request, response) => {
    response.json(people);
});


//Debugging
server.listen(port, () => {
    console.log(`Server is listening on port ${port}`);
});