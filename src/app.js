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

app.use(express.json());

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

app.get('/numbers/subtract/:a/from/:b', (req, res) => {
  // parameterised and assigned velaues as variables
  const a = parseInt(req.params.a);
  const b = parseInt(req.params.b);

  if (isNaN(a) === false && isNaN(b) === false) {
    res.status(200).json({ result: subtract(b, a) });
  } else {
    res.status(400).json({ error: 'Parameters must be valid numbers.' });
  }
});

app.post('/numbers/multiply', (req, res) => {
  if (typeof req.body.a === 'undefined' || typeof req.body.b === 'undefined') {
    res.status(400).json({ error: 'Parameters "a" and "b" are required.' });
  } else if (isNaN(req.body.a) === false && isNaN(req.body.b) === false) {
    res.status(200).json({ result: multiply(req.body.a, req.body.b) });
  } else {
    res.status(400).json({ error: 'Parameters "a" and "b" must be valid numbers.' });
  }
});

// (typeof variable !== 'undefined')

module.exports = app;
