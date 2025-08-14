//Environment imports
const express = require("express"); //Express
const server = express(); //Server

//General Variables
let port = 3000;

//Paths

// Middleware

//Server Paths
server.get( '/', (request, response) => {
    response.send("Welcome holmes!");
});

//Debugging
server.listen(port, () => {
    console.log(`Server is listening on port ${port}`);
});