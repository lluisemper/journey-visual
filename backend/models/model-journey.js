const mongoose = require('mongoose');
const Step = require('./model-steps');

const {Schema} = mongoose;

const Journey = new Schema({
  title: { type: String },
  order: [],
  steps: [Step.Schema]
})

module.exports = {Model: mongoose.model('Journey', Journey), Schema: Journey};