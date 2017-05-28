var express = require("express");
var path = require("path");
var app = express();

app.use(require("./routes/project_router")); // dit is een .js file (in folder:routes)

app.use(require("./routes/medewerkers_router"));

app.listen(3000);
