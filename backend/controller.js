const Organization = require('./models/model-organization');
const User = require('./models/model-user');
const Steps = require('./models/model-steps');
const Journey = require('./models/model-journey');
const mongoose = require('mongoose')

exports.loginOrg = async (req, res) => {
  try {    //sort out object user schema
    const org = await Organization.Model.findOne({ name: req.body.organization, username: req.body.username, password: req.body.password })
    console.log('org', org);
    if (org === null) {
      res.status(404).send('Something broke!')
    } else {
      res.status(201);
      res.json(org);
    }
  } catch (error) {
    console.log(error)
    res.status(500).send();
  }
}

exports.registerOrg = async (req, res) => {
  try {
    console.log('req', req.body);
    const user = await Organization.Model.create({ name: req.body.organization });
    res.status(201);
    res.json(user);
  } catch (error) {
    console.log(error)
    res.status(500).send();
  }
}

exports.postStep = async (req, res) => {
  try {
    const journey = await Journey.Model.findById(req.params.id);
    console.log('body',req.body)
    journey.steps.push(
      {
        title: req.body.title,
        emotion: req.body.emotion,
        score: req.body.score
      });
    await journey.save();    
    res.json(journey);
     res.status(201);
  } catch (error) {
    console.log(error)
    res.status(500).send();
  }
}

exports.postJourney = async (req, res) => {
  try {
    const journey = await Journey.Model.create({ title: req.body.journey, steps: [] })
    res.status(201);
    res.json(journey);
  } catch (error) {
    console.log(error)
    res.status(500).send();
  }
}

exports.getJourneys = async (req, res) => {
  try {
    const journeys = await Journey.Model.find()
    res.status(201);
    res.json(journeys);
  } catch (error) {
    console.log(error)
    res.status(500).send();
  }
}

exports.getSteps = async (req, res) => {
  try {
    const journey = await Journey.Model.findById(req.params.id)
    res.status(201);
    res.json(journey.steps);
  
  } catch (error) {
    console.log(error)
    res.status(500).send();
  }
}

