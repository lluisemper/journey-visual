const mongoose = require('mongoose');

const {Schema} = mongoose;

const Steps = new Schema({
  title: { type: String,
            allowNull: false,
  },
  emotion: { type: String,
            allowNull: false,
  },
  score: { type: number,
            allowNull: false,
  },
});

const model = mongoose.model('Steps', Steps);
module.exports = model;