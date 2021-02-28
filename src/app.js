const express = require('express');

const app = express();

app.get('/strings/hello/:id', (req, res) => {
  res.status(200).json({ result: `Hello, ${req.params.id}!` });
});

app.get('/strings/upper/:id', (req, res) => {
  res.status(200).json({ result: req.params.id.toUpperCase() });
});

app.get('/strings/lower/:id', (req, res) => {
  res.status(200).json({ result: req.params.id.toLowerCase() });
});

app.get(`/strings/first-characters/:id?q`, (req, res) => {
  res.status(200).json({ result: req.params.id.substring(0, req.query.q) });
});

module.exports = app;
