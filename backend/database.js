const mongoose = require('mongoose');

console.log('process.env.MONGODB_URI', process.env.MONGODB_URI);

const url = process.env.MONGODB_URI || 'mongodb://localhost:27017/journey_visualizer';

mongoose.connect(url, {
  useNewUrlParser: true,
  useUnifiedTopology: true
})
  .then(db => console.log('DB is connected'))
  .catch(err => console.error(err));

