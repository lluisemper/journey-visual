const mongoose = require('mongoose');
const Step = require('./model-steps');

const { Schema } = mongoose;

const Journey = new Schema({
  title: { type: String },
  order: [],
  steps: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Step' }]
})

const model = mongoose.model('Journey', Journey);
module.exports = model;