const mongoose = require('mongoose');

const {Schema} = mongoose;

const Organitzation = new Schema({
  name: { type: String,
            allowNull: false,
  },
  accessToken: { type: String,
            allowNull: false,
  },
});

const model = mongoose.model('Organitzation', Organitzation);
module.exports = model;