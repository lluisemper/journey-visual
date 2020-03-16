const mongoose = require('mongoose');

const {Schema} = mongoose;

const User = new Schema({
  name: { type: String,
            allowNull: false,
  },
  password: { type: String,
            allowNull: false,
  },
  journeys: { type: String,
            allowNull: false,
  },
});

const model = mongoose.model('User', User);
module.exports = model;