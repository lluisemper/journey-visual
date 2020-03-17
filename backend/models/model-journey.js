const mongoose = require('mongoose');
const Step = require('./model-steps');

const {Schema} = mongoose;

const Journey = new Schema({
  name: { type: String },
  steps: [Step.Schema]
})

module.exports = {Model: mongoose.model('Journey', Journey), Schema: Journey};