var express = require("express");
var path = require("path");
var app = express();
var postsFile = require('./data/posts.json');
var pagesFile = require('./data/pages.json');
app.set("views", path.resolve(__dirname, "views"));
app.set("view engine", "ejs");


app.use(express.static('public'))

// Dit is de route naar de homepage.
// Let erop hoe ik hier de blogposts uit de datafile de ejs-view binnensmokkel
app.get('/', function(req, res) {
  res.render("index", {
    posts: postsFile.blogposts
  });
});

// Dit is de route naar de view om een individuele post te tonen
// Ik gebruik hiervoor een regular expression. Dit is een superkrachtig mechanisme om tekstpatronen op te sporen
// Jullie hoeven dit niet te gebruiken: je kan rustig met een ID werken zoals vrijdag getoond in de les
// Wil je toch meer weten over regular expressions (een aanrader!)
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Regular_Expressions
// https://www.lynda.com/Regular-Expressions-tutorials/Using-Regular-Expressions/85870-2.html
app.get(/^\/(\d\d\d\d\/\d\d\/\d\d\/.*)$/, function(req, res) {
  var slug = req.params[0];
  var teller = 0;
  var blogpost = "";
  while (teller < postsFile.blogposts.length ) {
    if (postsFile.blogposts[teller].slug === slug) {
      blogpost = postsFile.blogposts[teller];
    }
    teller++;
  }
  if (blogpost !== "") {
    res.render("post", {
      post: blogpost
    });
  } else {
    console.log(slug);
    res.render("404", {});
  }
});

// Dit is de route naar de view om een individuele pagina te tonen
// Zie vorige comment over het gebruik van regular expressions
// Jullie mogen hier gerust een ID gebruiken
app.get(/\/(.*)/, function(req, res) {
  var slug = req.params[0];
  var teller = 0;
  var page = "";
  while (teller < pagesFile.pages.length ) {
    if (pagesFile.pages[teller].slug === slug) {
      page = pagesFile.pages[teller];
    }
    teller++;
  }
  if (page !== "") {
    res.render("page", {
      page: page
    });
  } else {
    res.render("404", {});
  }
});

// de server starten op poort 3000
app.listen(3000);
