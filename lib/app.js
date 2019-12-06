const express = require('express');
const app = express();

const Route = require('./models/Route');

// expects to recieve JSON when running post routes
app.use(express.json());

app.get('/', (req, res) => {
  res.send({ text: 'hello' });
});

app.post('/new', (req, res) => {
  const { name, crag, grade } = req.body;
  Route.create({
    name,
    crag,
    grade
  })
    .then(newRoute => res.send(newRoute));

});


module.exports = app;
