require('dotenv').config(); //Loads environment Variables
//Environment imports
const express = require("express"); //Express
const server = express(); //Server
const mongoose = require("mongoose");
const async = require("async");
const jwt = require("jsonwebtoken"); // Adding Json Web Token service. Adds tokens for clients to use for easier login/relogin

//SECURITY//
const secretKey = "This_Is_How_We_Do_It"; // Secret key for signing and verifying tokens

//sign a token
const token = jwt.sign({userID: "123", role: "admin"}, secretKey, {expiresIn: '1hr'});
console.log("Generated Token: ", token);

//Verify a Token
try {
    const decoded = jwt.verify(token, secretKey);//Attempts to decode using the secret key
    console.log("Decoded token: ", decoded);//Shows the decoded token
    console.log(decoded.userID);//Shows one param of the decoded token that we know it has
}catch(err){
    console.error("Token Verification Failed", err.message);
}

//END SECURITY//

//General Variables
const port = process.env.PORT || 3000;
const mongo_URI = process.env.MONGODB_URI;

//Paths
const routes = [
    {path: "/", view: "01_main"},
    {path: "/contact", view: "02_contact"},
    {path: "/main", view: "01_main"},
    {path: "/listings", view: "03_listings"}
];

// Middleware
server.use(express.static("views"));
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