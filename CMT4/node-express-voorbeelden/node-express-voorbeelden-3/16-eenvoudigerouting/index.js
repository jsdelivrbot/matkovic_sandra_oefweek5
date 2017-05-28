// We gaan vanaf nu nodemon gebruiken
// Je moet dan niet meer steeds je server stoppen en starten
// Website: https://nodemon.io/
// Installatie: npm install nodemon --global
// Vanaf nu: ipv node index.js => nodemon index.js


var express = require("express");
var app = express();

// Route voor GET requests naar /hallo-daar naar de request handler ---> kopieer om 'pages' aan te maken
app.get("/hallo-daar", function(request, response) {
  response.send("Welkom bij de pagina 'Hallo daar'!");
});

// Routing met parameters ---> een manier om verschillende pages te maken adhv één view
app.get("/gebruikers/:gebruikerid", function(request, response) {
  var gebruikerId = request.params.gebruikerid;
  //var gebruikerId = parseInt(request.params.gebruikerid, 10);
  response.send("Jij moet gebruiker " + gebruikerId + " zijn!");
});

// Routing met zogenaamde query strings
app.get("/zoeken", function(request, response) {
  var zoekTerm = request.query.q;
  response.send("Jij wil zoeken op zoekterm '" + zoekTerm + "' is het niet?");
});

// Indien je iets anders opvraagt, dan krijg je 'Pagina niet gevonden'
app.use(function(request, response) {
  response.status(404).send("Pagina niet gevonden!");
});

// Start de server op poort 3000
app.listen(3000);
