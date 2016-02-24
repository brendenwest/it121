// Start the server
var http = require('http'),
    bodyParser = require('body-parser'),
    express = require('express'),
    app = express();

  var students = [
      {name: "Thomas"},
      {name: "Steve"},
      {name: "Jonathan"},
      {name: "Amy"},
      {name: "Rick"},
      {name: "Aubrey"},
      ];

app.use(bodyParser.urlencoded({ extended: true })); // support encoded bodies

app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});

app.get('/', function(req, res){
    res.send('Hello Worldly');
});

app.get('/list', function(req, res) {
  res.send(students);
});

app.post('/form', function(req, res) {
    var firstname = req.body.firstname;
    res.send(students.indexOf(firstname) > -1);
});


app.listen(process.env.PORT);
console.log('Express server started on port %s', process.env.PORT);