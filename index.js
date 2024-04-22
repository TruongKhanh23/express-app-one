var express = require("express");

app = express();

app.get("/", function(request, response){
  response.send("This is home page")
})

app.use("/about", function(request, response, next){
  console.log("I am from About validation");
  next()
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
