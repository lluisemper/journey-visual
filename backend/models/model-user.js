const mongoose = require('mongoose');
const Step = require('./model-steps');

const {Schema} = mongoose;

const User = new Schema({
  name: { type: String,
            allowNull: false,
  },
  password: { type: String,
            allowNull: false,
  },
  journeys: [Step.Schema]
});




const model = mongoose.model('User', User);
module.exports = {Model: mongoose.model('User', User), Schema: User};