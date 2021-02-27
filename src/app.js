const express = require('express');

const app = express();

app.get('/strings/hello/:id', (req, res) => {
  res.status(200).send({ result: `Hello, ${req.params.id}!` });
});

app.get('/strings/upper/:id', (req, res) => {
  res.status(200).send({ result: req.params.id.toUpperCase() });
});

module.exports = app;
