const Organization = require('./models/model-organization');
const User = require('./models/model-user');
const Steps = require('./models/model-steps');
const Journey = require('./models/model-journey');

exports.loginOrg = async (req, res) => {
  try {
    console.log('req.body', req.body.loginOrg);
    console.log('Organization', Organization.Schema.obj.name);
    const org = await Organization.findOne({ name })
    res.json(org);
  } catch (error) {
    console.log(error)
    res.status(500).send();
  }
}

exports.registerOrg = async (req, res) => {
  try {    
    const user = await Organization.Model.create({name: req.body.name});
    res.status(201);
    res.json(user);
  } catch (error) {
    console.log(error)
    res.status(500).send();
  }
}

exports.postJourney = async (req, res) => {
  try {

  } catch (error) {
    console.log(error)
    res.status(500).send();
  }
}

exports.postSteps = async (req, res) => {
  try {

  } catch (error) {
    console.log(error)
    res.status(500).send();
  }
}