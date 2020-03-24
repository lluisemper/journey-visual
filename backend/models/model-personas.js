const mongoose = require('mongoose');
const { Schema } = mongoose;

const Persona = new Schema({
  title: { type: String },
  imagePath: {type: String},
  steps: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Step' }]
})

const model = mongoose.model('Persona', Persona);
module.exports = model;