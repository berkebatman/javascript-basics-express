/* eslint-disable no-undef */
const express = require('express');

const {
  sayHello,
  uppercase,
  lowercase,
  countCharacters,
  firstCharacter,
  firstCharacters,
} = require('./lib/strings');

const app = express();

// strings

app.get('/strings/hello/:id', (req, res) => {
  res.status(200).json({ result: sayHello(req.params.id) });
});

app.get('/strings/upper/:id', (req, res) => {
  res.status(200).json({ result: uppercase(req.params.id) });
});

app.get('/strings/lower/:id', (req, res) => {
  res.status(200).json({ result: lowercase(req.params.id) });
});

app.get('/strings/first-characters/:id?:a', (req, res) => {
  res.status(200).json({ result: req.params.id.substring(0, req.query.q) });
});

module.exports = app;
