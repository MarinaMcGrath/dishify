const express = require('express');
const app = express();
const path = require('path');
var bodyParser = require('body-parser');

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

require('dotenv').config();
app.set('port', (process.env.PORT || 3000));

app.use(express.static(__dirname + '/public'));

app.get('/', function(request, response) {
  response.render('/index.html');
});


app.post('/server', function(req, res) {
  console.log(req.body);
  res.end();
});


app.listen(app.get('port'), () => {
    console.log('Node app is running on port', app.get('port'));
});

