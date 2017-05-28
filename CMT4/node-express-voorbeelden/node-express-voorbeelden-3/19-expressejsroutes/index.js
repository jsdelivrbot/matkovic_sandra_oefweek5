// Hier zien we:
// toevoegen van json bestanden
// taalonafhankelijk, licht, tekstgebaseerd => gemakkelijk te lezen en te schrijven, ook voor mensen

// => bekijk eens rustig het voorbeeld. Het data.json bestand bevindt zich in de data folder
// => bekijk heel goed de vorm van een json bestand en hoe het hier wordt binnengetrokken
// hier vindt je ook een heel eenvoudige korte introductie tot json:
// http://beginnersbook.com/2015/04/json-tutorial/
/*
Eenvoudigst:

var mijnFiche = {
   "voorNaam" : "Kristof",
   "familieNaam" : "Michiels",
   "leeftijd" :  "44"
};

var mijnVoorNaam = mijnFiche.voorNaam;

Hier vindt je echter json objecten in een array, zoals in onderstaand voorbeeld:

var students = [{
   "name" : "Steve",
   "age" :  "29",
   "gender" : "male"

},
{
   "name" : "Peter",
   "age" : "32",
   "gender" : "male"

},
{
   "name" : "Sophie",
   "age" : "27",
   "gender" : "female"
}];

=> ernaar verwijzen doe je zo:

students[0].age
students[2].gender


*/


// werken met de laatste features van javascript
// => Template literals = Strings die meerdere lijnen lang kunnen zijn en expressies in zich kunnen dragen (${item.title}). Nieuw in de ES2015 specificatie van JavaScript
// => de streepjes die je hiervoor gebruikt heten backticks




// zoals steeds "requiren" wat je wil gebruiken
var express = require("express");
var path = require("path");

// Daarna een Express app maken
var app = express();

// een datafile requiren
var dataFile = require('./data/data.json');

// Express vertellen dat je views zich in een folder views bevinden
app.set("views", path.resolve(__dirname, "views"));

// Express vertellen dat je de EJS templating gaat gebruiken
// We moeten ejs ook installeren. Je doet dit via npm install ejs --save
app.set("view engine", "ejs");



app.get('/blog', function(req, res) {
  var info = '';
  dataFile.blogposts.forEach(function(item) {
    info += `
    <li>
      <h2>${item.title}</h2>
      <p>${item.body}</p>
    </li>
    `;
  });
  res.send(`
      <h1>Roux Academy Meetups</h1>
      <ul>
      ${info}
      </ul>
  `);
  console.log(dataFile.blogposts[1].title);
  console.log(dataFile.blogposts[2].body);
});

app.get('/blog/:postid', function(req, res) {

  var blogpost = dataFile.blogposts[req.params.postid];
  res.send(`
      <h1>${blogpost.title}</h1>
      <p>${blogpost.body}</p>
  `);
});

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
