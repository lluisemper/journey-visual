const mongoose = require('mongoose');

const {Schema} = mongoose;

const Organitzation = new Schema({
  name: { type: String,
            allowNull: false,
  },
  accessToken: { type: String,
            allowNull: false,
  },
  users: [User]
});

const User = new Schema({
  name: { type: String,
            allowNull: false,
  },
  password: { type: String,
            allowNull: false,
  },
  journeys: [Steps]
});

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

const model = mongoose.model('Organitzation', Organitzation);
module.exports = model;