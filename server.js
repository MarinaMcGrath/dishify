const express = require('express');

const app = express();
const path = require('path');
const bodyParser = require('body-parser');
const handler = require('./request-handler.js');

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

require('dotenv').config();

app.set('port', (process.env.PORT || 3000));
// app.set('view engine', 'html');

app.use(express.static(path.join(__dirname, 'public')));

app.get('/', (request, response) => {
  response.sendFile(path.join(__dirname, 'public/signup.html'));
});


app.post('/signup', handler.signupUser);


app.listen(app.get('port'), () => {
  console.log('Node app is running on port', app.get('port'));
});

