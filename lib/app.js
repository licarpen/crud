const express = require('express');
const app = express();

const route = require('./models/Route');

app.use(express.json());

app.get('/', (req, res) => {
  res.send({ text: 'hello' });
});

app.post('/hello', (req, res) => {
  res.send(req.body);
});

module.exports = app;