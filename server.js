const express = require('express');

const app = express();
const path = require('path');
const bodyParser = require('body-parser');
const handler = require('./request-handler.js');
const unirest = require('unirest');

// const Request = unirest.get('http://mockbin.com/request');

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

require('dotenv').config();

app.set('port', (process.env.PORT || 3000));
// app.set('view engine', 'html');

app.use(express.static(path.join(__dirname, 'public/views')));

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'public/views/index.html'));
});

app.get('/signup', (req, res) => {
  res.sendFile(path.join(__dirname, 'public/views/signup.html'));
});

app.get('/homepage', (req, res) => {
  res.sendFile(path.join(__dirname, 'public/views/homepage.html'));
});

app.post('/signup', handler.signupUser);

app.post('/login', handler.loginUser);

app.get('/recipes', (req, result) => {
  unirest.get(`https://community-food2fork.p.mashape.com/get?key=${process.env.FOOD_API}&rId=37859`)
    .header('X-Mashape-Key', process.env.X_MASHAPE_KEY)
    .header('Accept', 'application/json')
    .end((res) => {
      console.log(res.status, res.headers, res.body);
      result.end(res.body);
    });
});

app.listen(app.get('port'), () => {
  console.log('Node app is running on port', app.get('port'));
});

