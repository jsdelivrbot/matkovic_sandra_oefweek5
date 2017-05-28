var express = require("express");

var project = express.Router();

project.get("/projecten", function(request, response) {
  response.send("Welkom bij de pagina 'Projecten'!");
});

module.exports = project;
