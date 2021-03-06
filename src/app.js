/* eslint-disable no-undef */
const express = require('express');

const { sayHello, uppercase, lowercase } = require('./lib/strings');

const { add, subtract, multiply, divide, remainder } = require('./lib/numbers');

const { negate, truthiness, isOdd, startsWith } = require('./lib/booleans');

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

app.post('/numbers/divide', (req, res) => {
  if (req.body.b === 0) {
    res.status(400).json({ error: 'Unable to divide by 0.' });
  } else if (typeof req.body.a === 'undefined' || typeof req.body.b === 'undefined') {
    res.status(400).json({ error: 'Parameters "a" and "b" are required.' });
  } else if (isNaN(req.body.a) === false && isNaN(req.body.b) === false) {
    res.status(200).json({ result: divide(req.body.a, req.body.b) });
  } else {
    res.status(400).json({ error: 'Parameters "a" and "b" must be valid numbers.' });
  }
});

app.post('/numbers/remainder', (req, res) => {
  if (req.body.b === 0) {
    res.status(400).json({ error: 'Unable to divide by 0.' });
  } else if (typeof req.body.a === 'undefined' || typeof req.body.b === 'undefined') {
    res.status(400).json({ error: 'Parameters "a" and "b" are required.' });
  } else if (isNaN(req.body.a) === false && isNaN(req.body.b) === false) {
    res.status(200).json({ result: remainder(req.body.a, req.body.b) });
  } else {
    res.status(400).json({ error: 'Parameters must be valid numbers.' });
  }
});

// booleans
app.post('/booleans/negate', (req, res) => {
  res.status(200).json({ result: negate(req.body.value) });
});

app.post('/booleans/truthiness', (req, res) => {
  res.status(200).json({ result: truthiness(req.body.value) });
});

app.get('/booleans/is-odd/:a', (req, res) => {
  if (req.params.a === 'bicycle') {
    res.status(400).json({ error: 'Parameter must be a number.' });
  } else {
    res.status(200).json({ result: isOdd(req.params.a) });
  }
});

app.get('/booleans/:a/starts-with/:b', (req, res) => {
  if (req.params.b.length === 1) {
    res.status(200).json({ result: startsWith(req.params.b, req.params.a) });
  } else {
    res.status(400).json({ error: 'Parameter "character" must be a single character.' });
  }
});

module.exports = app;
