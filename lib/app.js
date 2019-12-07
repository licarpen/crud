const express = require('express');
const app = express();

const Route = require('./models/Route');

// expects to recieve JSON when running post routes
app.use(express.json());

app.get('/:id', (req, res) => {
  const id = req.params.id;
  Route.findById(id)
    .then(route => res.send(route));
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

app.put('/update/:id', (req, res) => {
  const id = req.params.id;
  Route.findByIdAndUpdate(id, req.body)
    .then(updated => res.send(updated));
});

module.exports = app;
