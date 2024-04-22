var express = require("express");
var bodyParser = require("body-parser");

app = express();
app.use(bodyParser.json())

app.post("/", function (request, response) {
  let jsonData = request.body;
  let jsonString = JSON.stringify(jsonData);
  response.send(jsonString)
});

app.listen(8000, function () {
  console.log("Server Run Success");
});
