var express = require("express");
var app = express();
var path = require("path");
var HTTP_PORT = process.env.PORT || 8080;

app.use(express.static('public'));
function onHttpStart() {
  console.log("Express http server listening on: " + HTTP_PORT);
}
app.get("/", function(req, res){
    res.sendFile(path.join("C:/Users/ckris/Desktop/test2/home.html"));
});
app.get("/CPA", function (req, res){
    res.sendFile(path.join("C:/Users/ckris/Desktop/test2/CPA.json"));
});
app.get("/highGPA", function(req, res){
    res.sendFile(path.join("C:/Users/ckris/Desktop/test2/highGPA.html"));
});

app.use((req, res) => {
    res.status(404).send("Page Not Found");
});


app.listen(HTTP_PORT, onHttpStart);