const mongoose = require('mongoose');
const User = require('./model-user');

const {Schema} = mongoose;

const Organitzation = new Schema({
  name: { type: String,
            allowNull: false,
  },
  users: [User.Schema]
});



const model = mongoose.model('Organitzation', Organitzation);
module.exports = model;