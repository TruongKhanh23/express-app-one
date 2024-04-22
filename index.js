var express = require("express");
var multer  = require('multer')

app = express();

var storage = multer.diskStorage({
  destination: function(request, file, callBack){
    callBack(null, "./uploads")
  },
  filename: function(request, file, callBack){
    callBack(null, file.originalname)
  }
})

var upload = multer({storage: storage}).single("myFile")

app.post("/", function (request, response) {
  upload(request, response, function(error) {
    if (error) {
      response.send("File Upload Failed")
    } else {
      response.send("File Upload Sucessed")
    }
  })
});

app.listen(8000, function () {
  console.log("Server Run Success");
});
