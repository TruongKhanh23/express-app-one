var express = require("express");

app = express();

app.post("/", function (request, response) {

  let firstName = request.query.firstName;
  let lastName = request.query.lastName;

  response.send(firstName + " " + lastName);
});

app.listen(8000, function () {
  console.log("Server Run Success");
});