const mongoose = require('mongoose');
const Journey = require('./model-journey');

const {Schema} = mongoose;

const User = new Schema({
  name: { type: String,
            allowNull: false,
  },
  journeys: [Journey.Schema]
});




const model = mongoose.model('User', User);
module.exports = {Model: mongoose.model('User', User), Schema: User};