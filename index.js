var express = require("express");

app = express();

app.get("/", function (request, response) {

  let firstName = request.header("firstName");
  let lastName = request.header("lastName");

  response.end(firstName + " " + lastName);
});

app.listen(8000, function () {
  console.log("Server Run Success");
});