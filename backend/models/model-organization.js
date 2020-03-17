const mongoose = require('mongoose');
const User = require('./model-user');

const {Schema} = mongoose;

const Organization = new Schema({
  name: { type: String,
            allowNull: false,
  },
  users: [User.Schema]
});



const model = mongoose.model('Organization', Organization);
module.exports = model;