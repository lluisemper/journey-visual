const mongoose = require('mongoose');
const { Schema } = mongoose;

const Step = new Schema({
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


const model = mongoose.model('Step', Step);
module.exports = model;