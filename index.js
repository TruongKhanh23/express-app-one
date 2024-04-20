var express = require("express");

app = express();

app.get("/", function (request, response) {
  response.send("Home Page");
});

app.post("/about", function (request, response) {
  response.send("About Page");
});

app.delete("/contact", function (request, response) {
  response.send("Contact Page");
});

app.listen(8000, function () {
  console.log("Server Run Success");
});
``;
