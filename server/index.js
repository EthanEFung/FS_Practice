

// require necessary imports

// have express instance listen in on a PORT
const express = require('express');
const parser = require('body-parser');

const app = express();
const PORT = 3000;
const db = require('./db/config');

app.use(parser.urlencoded({ extended: true }));


app.listen(PORT, err => {
  if(err) {
    console.log('error on the server');
  }
   else {
     console.log('Successfully connected to server port: ' + PORT);
   }
})