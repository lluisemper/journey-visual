const mongoose = require('mongoose');
const { Schema } = mongoose;

const Journey = new Schema({
  title: { type: String },
  steps: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Step' }]
})

const model = mongoose.model('Journey', Journey);
module.exports = model;