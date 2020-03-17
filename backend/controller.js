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
    const user = await Organization.Model.create({ name: req.body.name });
    res.json(user);
    res.status(201);
  } catch (error) {
    console.log(error)
    res.status(500).send();
  }
}

exports.postSteps = async (req, res) => {
  try {
    const step = await Steps.Model.create({
      title: req.body.title,
      emotion: req.body.emotion,
      score: req.body.score
    })
    res.json(step);
    res.status(201);
  } catch (error) {
    console.log(error)
    res.status(500).send();
  }
}

exports.postJourney = async (req, res) => {
  try {
    const journey = await Journey.Model.create({ name: req.body.name, steps: [Steps.Schema] })
    res.json(journey);
    res.status(201);
  } catch (error) {
    console.log(error)
    res.status(500).send();
  }
}

exports.getJourneys = async (req, res) => {
  try {
    const journeys = await Journey.Model.find()
    res.json(journeys);

  } catch (error) {
    console.log(error)
    res.status(500).send();
  }
}
