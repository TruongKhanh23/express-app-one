var express = require("express");

app = express();

app.get("/one", function (request, response) {
  response.end("This is simple end twi string response");
});

app.post("/two", function (request, response) {
  response.send("This is post simple string response");
});

app.get("/three", function (request, response) {
  response.status(401).end("You don't have any permission");
});

app.get("/three1", function (request, response) {
  response.status(201).end();
});

app.get("/four", function (request, response) {
  let myJSONArray = [
    {
      name: "Khánh",
      city: "Ho Chi Minh City",
    },
    {
      name: "Vy",
      city: "Ninh Thuan City",
    },
    {
      name: "Khánh Vy",
      city: "Da Lat City",
    },
  ];

  response.json(myJSONArray);
});

app.get("/five", function (request, response) {
  response.download("./uploads/nha-tho-duc-ba.jpg");
});

app.listen(8000, function () {
  console.log("Server Run Success");
});
``;
