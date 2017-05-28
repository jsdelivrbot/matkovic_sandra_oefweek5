// zoals steeds "requiren" wat je wil gebruiken
var express = require("express");
var path = require("path");

// Daarna een Express app maken
var app = express();

// Express vertellen dat je views zich in een folder views bevinden
app.set("views", path.resolve(__dirname, "views"));

// Express vertellen dat je de EJS templating gaat gebruiken
// We moeten ejs ook installeren. Je doet dit via npm install ejs --save
app.set("view engine", "ejs");



// ejs uitproberen kan je ook hier: https://evanhahn.github.io/try-EJS/
/*
Bekijk zelf het voorbeeld, experimenteer ermee en maak een onderscheid tussen
- JS die geëvalueerd, escaped en afgedrukt wordt.
- JS die geëvalueerd maar niet afgedrukt wordt.
- JS die geëvalueerd en afgedrukt wordt, maar niet geescaped voor HTML
*/
// weergeven van een bestand index wanneer je de homepage van je site bezoekt
app.get("/gebruiker/:gebruikersnaam", function(req, res) {
  if (req.params.gebruikersnaam === "kristof") {
    res.render("index", {
        naam: "Kristof Michiels",
        geboortejaar: 1973,
        loopbaan: "Lector",
        bio: "<strong>Lector</strong> aan de AP hogeschool"
    });
  } else {
    res.send("He jij ben kristof niet!");
  }

});

/*
// weergeven van een bestand index wanneer je de homepage van je site bezoekt
app.get("/", function(req, res) {
    res.render("index", {
        naam: "Kristof Michiels", geboortejaar: 1973, loopbaan: "lector", bio: "Kristof Michiels is lector IT aan de AP hogeschool"
    });
});*/

// https://expressjs.com/en/starter/static-files.html
// Om statische bestanden zoals afbeeldingen, css&js-bestanden te kunnen weergeven gebruiken we de ingebouwde middleware functie express.static
app.use(express.static('public'))

// de server starten op poort 3000
app.listen(3000);
