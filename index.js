var express = require("express");

app = express();

app.use(function(request, response, next){
  console.log("I am from Middleware validation");
  next()
})

app.get("/", function(request, response){
  response.send("This is home page")
})

app.get("/about", function(request, response){
  response.send("This is about page")
})

app.get("/contact", function(request, response){
  response.send("This is contact page")
})

app.listen(8000, function () {
  console.log("Server Run Success");
});
