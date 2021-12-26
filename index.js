const express = require("express");
var bodyParser = require("body-parser");

var port = ( process.env.PORT || 3002 );

var BASE_API_PATH = "/v1";

var app = express();
app.use(bodyParser.json());


app.listen(port, () => {

    console.log("Server (client) ready and running!");

});