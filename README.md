# CRUD

An exercise in building the backend for a basic CRUD application.  Testing completed using jest. 

## Model

Climbing Route

name: {
  type: String,
  required: true
},
crag:{
  type: String,
  required: true
},
grade:{
  type: Number,
  required: true,
  min: 5.0,
  max: 6.0
}

## Routes

* GET route by id /:id
* GET all routes /
* POST new route /new 
* UPDATE route by id /update/:id
* DELETE route by id /delete/:id

## Testing

jest used to test all routes