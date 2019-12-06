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
    min: 5.5,
    max: 5.16
  }
});

module.exports = mongoose.model('Route', schema);
