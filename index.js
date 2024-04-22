var express = require("express");

app = express();

app.post("/", function (request, response) {
  response.send("This is simple post request")
});

app.listen(8000, function () {
  console.log("Server Run Success");
});