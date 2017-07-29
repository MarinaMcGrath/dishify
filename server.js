const express = require('express');

const app = express();
const path = require('path');
const bodyParser = require('body-parser');
const handler = require('./request-handler.js');
const unirest = require('unirest');

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
require('dotenv').config();

// establish connection
app.set('port', (process.env.PORT || 3000));
app.use(express.static(path.join(__dirname, 'public/views')));
app.listen(app.get('port'), () => {
  console.log('Node app is running on port', app.get('port'));
});
// initial render
app.get('/login', handler.loginUser);
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'public/views/index.html'));
});

// signup
app.post('/signup', handler.signupUser);
app.get('/signup', (req, res) => {
  res.sendFile(path.join(__dirname, 'public/views/signup.html'));
});

app.get('/homepage', (req, res) => {
  res.sendFile(path.join(__dirname, 'public/views/homepage.html'));
});

app.get('/recipes', (req, result) => {
  unirest.get(`https://community-food2fork.p.mashape.com/search?key=${process.env.FOOD_API}&q=${req.query.q}`)
    .header('X-Mashape-Key', process.env.X_MASHAPE_KEY)
    .header('Accept', 'application/json')
    .end((res) => {
      result.end(res.body);
    });
});

app.post('/favorites', handler.addFavorite);
