var express = require("express");
var multer  = require('multer')
var multer = multer()

app = express();
app.use(multer.array())
app.use(express.static("public"))

app.post("/", function (request, response) {
  let jsonData = request.body;
  response.send(JSON.stringify(jsonData))
});

app.listen(8000, function () {
  console.log("Server Run Success");
});
