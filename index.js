var express = require("express");

app = express();

app.get("/", function (request, response) {
  response.send("Hello Express JS");
});

app.listen(8000, function () {
  console.log("Server Run Success");
});
