const mongoose = require('mongoose');

const schema = new mongoose.Schema({
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
});

module.exports = mongoose.model('Route', schema);
