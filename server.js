//Environment imports
const express = require("express"); //Express
const server = express(); //Server

//General Variables
let port = 3000;

//Paths
var pages = {
    home: "home",
    stock: "stock"
};

// Middleware

//Server Paths
server.get( '/', (request, response) => {
    response.send("Testing");
});

//Debugging
server.listen(port, () => {
    console.log(`Server is listening on port ${port}`);
});