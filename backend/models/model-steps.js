const mongoose = require('mongoose');

const { Schema } = mongoose;

const Steps = new Schema({
  title: {
    type: String,
    allowNull: false,
  },
  emotion: {
    type: String,
    allowNull: false,
  },
  score: {
    type: Number,
    allowNull: false,
  }
});



module.exports = { Model: mongoose.model('Steps', Steps), Schema: Steps };