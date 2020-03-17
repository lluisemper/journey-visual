const Organitzation = require('./models/model-organitzation');
// const User = require('./models/model-user');
// const Steps = require('./models/model-steps');

// example
// exports.postPicture = async (req, res) => {}

exports.loginOrg = async (req, res) => {
  try {
    console.log('req.body',req.body);

    
  } catch (error) {
    console.log(error)
    res.status(500).send();
  }
}