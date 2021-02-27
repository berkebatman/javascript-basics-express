const express = require('express');
const sayHello = require('./lib/strings');

const app = express();

app.get('/strings/hello/:id', (req, res) => {
  res.status(200).send({ result: `Hello, ${req.params.id}!` });
});

module.exports = app;
