const express = require('express');
const app = express();

const Route = require('./models/Route');

// expects to recieve JSON when running post routes
app.use(express.json());

app.get('/:id', (req, res) => {
  Route.findById(req.params.id)
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
  Route.findByIdAndUpdate(req.params.id, req.body)
    .then(updated => res.send(updated));
});

app.delete('/delete/:id', (req, res) => {
  Route.findByIdAndDelete(req.params.id)
    .then(deleted => res.send(deleted));
});

module.exports = app;
