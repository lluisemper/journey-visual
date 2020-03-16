const mongoose = require('mongoose');

const {Schema} = mongoose;

const Steps = new Schema({
    title: { type: String,
              allowNull: false,
    },
    emotion: { type: String,
              allowNull: false,
    },
    score: { type: Number,
              allowNull: false,
    },
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

const Organitzation = new Schema({
  name: { type: String,
            allowNull: false,
  },
  users: [User]
});



const model = mongoose.model('Organitzation', Organitzation);
module.exports = model;