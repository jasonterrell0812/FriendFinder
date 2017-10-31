var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var PORT = 3000;
var htmlRoutes = require("./app/routing/htmlRoutes.js");
var apiRoutes = require("./app/routing/apiRoutes.js")

 
// app.get('/', function (req, res) {
//   res.send('Hello World')
// })
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

apiRoutes(app);


htmlRoutes(app);
 
app.listen(PORT, function() {
  console.log("App listening on PORT " + PORT);
});


