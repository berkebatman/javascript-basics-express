/* eslint-disable no-undef */
const express = require('express');

const { sayHello, uppercase, lowercase } = require('./lib/strings');

const {
  add,
  subtract,
  multiply,
  divide,
  power,
  round,
  roundUp,
  roundDown,
  absolute,
  quotient,
  remainder,
} = require('./lib/numbers');

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

// numbers

app.get('/numbers/add/:a/and/:b', (req, res) => {
  // parameterised and assigned velaues as variables
  const a = parseInt(req.params.a);
  const b = parseInt(req.params.b);

  if (isNaN(a) === false && isNaN(b) === false) {
    res.status(200).json({ result: add(a, b) });
  } else {
    res.status(400).json({ error: 'Parameters must be valid numbers.' });
  }
});

module.exports = app;
