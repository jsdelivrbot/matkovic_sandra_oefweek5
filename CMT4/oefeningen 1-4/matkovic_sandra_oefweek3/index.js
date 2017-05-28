var express = require("express");
var path = require("path");
var app = express();
var postsFile = require('./data/posts.json');
var pagesFile = require('./data/pages.json');
app.set("views", path.resolve(__dirname, "views"));
app.set("view engine", "ejs");


app.use(express.static('public'))



app.get('/', function(req, res) {
  res.render("index", {
    posts: postsFile.blogposts
  });
});


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

// start server
app.listen(3000);
