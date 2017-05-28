var express = require("express");
var projecten = express.Router();

projecten.get("/projecten", function(request, response) {
  response.send("Welkom bij de pagina 'Projecten'!");
  /*dit soort doc wordt aangemaakt om alles overzichteljiker te maken (een overzicht maken van je pagina's
  -> vb. projecten.get, vestigingen.get,...)*/
});

module.exports = projecten;
