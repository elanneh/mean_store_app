var express = require("express");

var path = require("path");

var app = express();

var bodyParser = require("body-parser");
app.use(bodyParser.json());

app.use(express.static(path.join(__dirname, "./client/static")));

app.listen(3333, function() {
 console.log("listening on port 3333");
});

require("./server/config/mongoose.js");
require("./server/config/routes.js")(app);