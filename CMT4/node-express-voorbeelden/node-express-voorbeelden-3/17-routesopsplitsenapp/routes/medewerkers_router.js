var express = require("express");
var medewerkers = express.Router();

medewerkers.get("/medewerkers", function(request, response) {
  response.send("Welkom bij de pagina 'Medewerkers'!");
});

module.exports = medewerkers;
