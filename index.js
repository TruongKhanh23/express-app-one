var express = require("express");

app = express();

app.post("/", function (request, response) {

  let userName = request.header("userName");
  let password = request.header("password");

  response.send("User Name: " + userName + "/ Password: " + password);
});

app.listen(8000, function () {
  console.log("Server Run Success");
});