const express = require("express");
var bodyParser = require("body-parser");
var ProfesoresResource = require("./profesoresResource");

var port = ( process.env.PORT || 3002 );

var BASE_API_PATH = "/v1";

var app = express();
app.use(bodyParser.json());

app.get(BASE_API_PATH+"/teachers", (request, response) => {
    console.log("GET /teachers");

    ProfesoresResource.getAllProfesores()
    .then((body) => {
        response.send(body);
    })
    .catch((error) => {
        console.log("error: "+error);
        response.sendStatus(500);
    });
});

app.listen(port, () => {

    console.log("Server (client) ready and running!");

});