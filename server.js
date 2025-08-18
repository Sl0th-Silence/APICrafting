require('dotenv').config(); //Loads environment Variables
//Environment imports
const express = require("express"); //Express
const server = express(); //Server
const mongoose = require("mongoose");
const async = require("async");

//General Variables
const port = process.env.PORT || 3000;
const mongo_URI = process.env.MONGODB_URI;

//Paths
const routes = [
    {path: "/contact", view: "contact"}
];

// Middleware
server.use(express.static("public"));
server.set("view engine", "ejs");

//Server Paths
routes.forEach(route => {
    server.get(route.path, (request, response) => {
        response.render(route.view);
    });
});

//Debugging
server.listen(port, () => {
    console.log(`Server is listening on port ${port}`);
});