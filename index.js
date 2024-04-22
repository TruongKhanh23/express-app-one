var express = require("express");

app = express();

app.get("/", function (request, response) {

  let firstName = request.query.firstName;
  let lastName = request.query.lastName;

  response.end(firstName + " " + lastName);
});

app.listen(8000, function () {
  console.log("Server Run Success");
});