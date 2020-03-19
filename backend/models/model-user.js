const mongoose = require('mongoose');

const { Schema } = mongoose;

const User = new Schema({
  name: {
    type: String,
    allowNull: false,
  },
  journeys: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Journey' }]
});

const model = mongoose.model('User', User);
module.exports = model;