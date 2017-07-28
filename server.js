const express = require('express');
const app = express();
const path = require('path');
require('dotenv').config();
app.set('port', (process.env.PORT || 3000));

app.use(express.static(__dirname + '/public'));

app.get('/', function(request, response) {
  response.render('/index.html');
});

app.listen(app.get('port'), () => {
    console.log('Node app is running on port', app.get('port'));
});

