const express = require('express');
const app = express();
const path =  require('path');
const bodyParser = require('body-parser');

app.use(bodyParser.urlencoded({extended: true}));

app.listen('3000', () => {
    console.log("Listening on 3000");
})

app.get('/', (req, res) => {
    res.sendFile(__dirname + '/index.html');
})
