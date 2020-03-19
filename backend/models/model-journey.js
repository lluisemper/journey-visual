const mongoose = require('mongoose');
const { Schema } = mongoose;

const Journey = new Schema({
  title: { type: String },
  personas: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Persona' }]
})

const model = mongoose.model('Journey', Journey);
module.exports = model;