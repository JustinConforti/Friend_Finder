var express = require("express");
var path = require("path")
var PORT = process.env.PORT || 8080
var app = express();

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.get("/", function(req, res) {
    res.sendFile(path.join(__dirname, "/App/public/home.html"));
  });
   
  app.get("/survey", function(req, res) {
    res.sendFile(path.join(__dirname, "/App/public/survey.html"));
  });


  app.listen(PORT, function() {
    console.log("App listening on PORT " + PORT);
  });
  
